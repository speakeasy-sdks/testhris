# PayGroup

# The PayGroup Object
### Description
The `PayGroup` object is used to represent a subset of employees that are put together for payroll processing purposes.

### Usage Example
Fetch from the `LIST PayGroup` endpoint and filter by `ID` to show all pay group information.


## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   | Example                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `fieldMappings`                                                                                                               | Record<string, *any*>                                                                                                         | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           | {"organization_defined_targets":{"custom_key":"custom_value"},"linked_account_defined_targets":{"custom_key":"custom_value"}} |
| `id`                                                                                                                          | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           | fd1e0fb5-8f92-4ec9-9f32-179cf732867d                                                                                          |
| `modifiedAt`                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_minus_sign:                                                                                                            | This is the datetime that this object was last updated by Merge                                                               | 2021-10-16T00:00:00Z                                                                                                          |
| `payGroupName`                                                                                                                | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | The pay group name.                                                                                                           | contractor                                                                                                                    |
| `remoteData`                                                                                                                  | [shared.RemoteData](../../../sdk/models/shared/remotedata.md)[]                                                               | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           | [{"data":["Varies by platform"],"path":"/pay-group"}]                                                                         |
| `remoteId`                                                                                                                    | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | The third-party API ID of the matching object.                                                                                | 800293                                                                                                                        |
| `remoteWasDeleted`                                                                                                            | *boolean*                                                                                                                     | :heavy_minus_sign:                                                                                                            | Indicates whether or not this object has been deleted by third party webhooks.                                                |                                                                                                                               |