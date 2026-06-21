# 06 - 7-Field Schema

Every structured record must include:

```json
{
  "id": "string",
  "entity": "VYTAL House",
  "type": "string",
  "name": "string",
  "status": "string",
  "owner": "owner|admin|clinical|operations|marketing|vendor|member",
  "updatedAt": "YYYY-MM-DD",
  "metadata": {}
}
```

## Collections
- `members`
- `bookings`
- `services`
- `vendors`
- `contentItems`
- `socialPosts`
- `leads`
- `documents`
- `auditEvents`
- `qualityScores`

## Rule
If a new object cannot satisfy the schema, it stays in draft notes until it can.
