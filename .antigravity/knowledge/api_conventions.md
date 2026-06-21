# API Conventions & Database Schema

All database records and API resources in the VYTAL House workspace must adhere to the **7-Field Governance Schema** to maintain data auditability and platform integrity.

## 1. Required Schema Fields
Every JSON payload or Firestore document must include these top-level fields:

- `id` (string, unique identifier)
- `entity` (string, always set to `"VYTAL House"`)
- `type` (string, the resource or model name, e.g., `"vendor"`, `"service"`, `"booking"`)
- `name` (string, friendly display name)
- `status` (string, lifecycle state, e.g., `"active"`, `"pending"`, `"quote-needed"`)
- `owner` (string, responsible group or role, e.g., `"operations"`, `"clinical"`, `"marketing"`)
- `updatedAt` (string, ISO-8601 date-time format)

All custom domain-specific data must be encapsulated inside a nested `metadata` object.

## 2. Example Record
```json
{
  "id": "service-hbot-sovereign",
  "entity": "VYTAL House",
  "type": "service",
  "name": "Concierge HBOT Session",
  "status": "active",
  "owner": "clinical",
  "updatedAt": "2026-06-19T12:00:00Z",
  "metadata": {
    "durationMinutes": 90,
    "targetATA": 2.0,
    "description": "Clinical-grade hyperbaric oxygen session at 2.0 ATA pressure."
  }
}
```
