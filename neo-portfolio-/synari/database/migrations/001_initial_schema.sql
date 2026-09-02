-- SYNARI foundation migration
-- Proposal only: review and run through a migration tool in the dedicated app repository.

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE CHECK (name IN ('administrator', 'asset_manager', 'staff_member', 'technician'))
);

CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  display_name text NOT NULL CHECK (length(trim(display_name)) >= 2),
  password_hash text NOT NULL,
  active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE user_roles (
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  role_id uuid NOT NULL REFERENCES roles(id) ON DELETE RESTRICT,
  assigned_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, role_id)
);

CREATE TABLE asset_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  description text,
  active boolean NOT NULL DEFAULT true
);

CREATE TABLE departments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  code text NOT NULL UNIQUE,
  active boolean NOT NULL DEFAULT true
);

CREATE TABLE locations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  building text,
  room text,
  active boolean NOT NULL DEFAULT true
);

CREATE TABLE assets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  asset_tag text NOT NULL UNIQUE,
  name text NOT NULL,
  serial_number text UNIQUE,
  category_id uuid NOT NULL REFERENCES asset_categories(id) ON DELETE RESTRICT,
  department_id uuid REFERENCES departments(id) ON DELETE RESTRICT,
  location_id uuid REFERENCES locations(id) ON DELETE RESTRICT,
  status text NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'under_maintenance', 'damaged', 'retired', 'lost')),
  condition text NOT NULL DEFAULT 'good' CHECK (condition IN ('new', 'good', 'fair', 'poor', 'unusable')),
  purchase_date date,
  warranty_until date,
  archived_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CHECK (warranty_until IS NULL OR purchase_date IS NULL OR warranty_until >= purchase_date)
);

CREATE TABLE assignments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  asset_id uuid NOT NULL REFERENCES assets(id) ON DELETE RESTRICT,
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
  assigned_at timestamptz NOT NULL DEFAULT now(),
  ended_at timestamptz,
  reason text,
  CHECK (ended_at IS NULL OR ended_at >= assigned_at)
);

CREATE UNIQUE INDEX assignments_one_active_per_asset
  ON assignments(asset_id) WHERE ended_at IS NULL;

CREATE TABLE asset_movements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  asset_id uuid NOT NULL REFERENCES assets(id) ON DELETE RESTRICT,
  from_location_id uuid REFERENCES locations(id) ON DELETE RESTRICT,
  to_location_id uuid REFERENCES locations(id) ON DELETE RESTRICT,
  from_department_id uuid REFERENCES departments(id) ON DELETE RESTRICT,
  to_department_id uuid REFERENCES departments(id) ON DELETE RESTRICT,
  actor_id uuid NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
  reason text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  CHECK (from_location_id IS DISTINCT FROM to_location_id OR from_department_id IS DISTINCT FROM to_department_id)
);

CREATE TABLE maintenance_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  asset_id uuid NOT NULL REFERENCES assets(id) ON DELETE RESTRICT,
  reporter_id uuid NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
  technician_id uuid REFERENCES users(id) ON DELETE RESTRICT,
  status text NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'triaged', 'in_progress', 'resolved', 'cancelled')),
  description text NOT NULL CHECK (length(trim(description)) >= 10),
  resolution text,
  opened_at timestamptz NOT NULL DEFAULT now(),
  closed_at timestamptz,
  updated_at timestamptz NOT NULL DEFAULT now(),
  CHECK ((status IN ('resolved', 'cancelled')) = (closed_at IS NOT NULL)),
  CHECK (status <> 'resolved' OR length(trim(coalesce(resolution, ''))) >= 10)
);

CREATE TABLE audit_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  actor_id uuid REFERENCES users(id) ON DELETE SET NULL,
  action text NOT NULL,
  entity_type text NOT NULL,
  entity_id uuid NOT NULL,
  metadata_json jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX assets_filter_index ON assets(status, department_id, location_id);
CREATE INDEX assets_name_search_index ON assets USING gin (to_tsvector('simple', name));
CREATE INDEX maintenance_asset_status_index ON maintenance_requests(asset_id, status);
CREATE INDEX audit_entity_index ON audit_logs(entity_type, entity_id, created_at DESC);
