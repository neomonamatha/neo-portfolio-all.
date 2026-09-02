# SYNARI User Stories

**Status:** Proposal / pre-implementation

## Asset manager

### Register an asset
As an asset manager, I want to register an asset with its identity, category, location and condition, so that the organisation can track it from the beginning.

**Acceptance criteria:** Required fields are validated; duplicate serial numbers are rejected within the organisation; the creator and timestamp are recorded; the new asset appears in search.

### Transfer an asset
As an asset manager, I want to transfer an asset between locations, departments or staff members, so that its current ownership and location remain accurate.

**Acceptance criteria:** The current assignment is closed; a movement event is created; both changes succeed or fail together; the history shows actor, reason and time.

### Find an asset
As an asset manager, I want to search, filter and paginate assets, so that I can act on a specific record without scanning the whole inventory.

**Acceptance criteria:** Search covers identifier, name and serial number; filters can be combined; page size is bounded; empty results explain what happened.

## Staff member

### Report damage
As a staff member, I want to report damage to an assigned asset, so that the issue can be triaged and tracked.

**Acceptance criteria:** A staff member can report only an asset assigned to them; the request records description and status; the staff member cannot alter administrative fields.

## Technician

### Update maintenance
As a technician, I want to update a maintenance request and record the work completed, so that asset condition and maintenance history remain useful.

**Acceptance criteria:** Status transitions follow defined rules; completion requires a resolution note; each update records the technician and timestamp.

## Administrator

### Manage access
As an administrator, I want to assign roles to users, so that access follows responsibility.

**Acceptance criteria:** Only administrators can change roles; a user cannot remove their own final administrator access; authorization is enforced by the API, not only the UI.
