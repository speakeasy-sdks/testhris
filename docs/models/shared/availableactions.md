# AvailableActions

# The AvailableActions Object
### Description
The `Activity` object is used to see all available model/operation combinations for an integration.

### Usage Example
Fetch all the actions available for the `Zenefits` integration.


## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `availableModelOperations`                                             | [shared.ModelOperation](../../models/shared/modeloperation.md)[]       | :heavy_minus_sign:                                                     | N/A                                                                    | [object Object]                                                        |
| `integration`                                                          | [shared.AccountIntegration](../../models/shared/accountintegration.md) | :heavy_check_mark:                                                     | N/A                                                                    |                                                                        |
| `passthroughAvailable`                                                 | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    | true                                                                   |