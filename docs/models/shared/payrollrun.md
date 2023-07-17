# PayrollRun

# The PayrollRun Object
### Description
The `PayrollRun` object is used to represent a group of pay statements for a specific pay schedule.

### Usage Example
Fetch from the `LIST PayrollRuns` endpoint and filter by `ID` to show all payroll runs.


## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              | Example                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `checkDate`                                                                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                            | :heavy_minus_sign:                                                                                                                                                       | The day and time the payroll run was checked.                                                                                                                            | 2020-11-15T00:00:00Z                                                                                                                                                     |
| `endDate`                                                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                            | :heavy_minus_sign:                                                                                                                                                       | The day and time the payroll run ended.                                                                                                                                  | 2020-11-15T00:00:00Z                                                                                                                                                     |
| `fieldMappings`                                                                                                                                                          | Record<string, *any*>                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `id`                                                                                                                                                                     | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | N/A                                                                                                                                                                      | 37336947-b3d4-4a4c-a310-ab6ab510e079                                                                                                                                     |
| `modifiedAt`                                                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                            | :heavy_minus_sign:                                                                                                                                                       | This is the datetime that this object was last updated by Merge                                                                                                          | 2021-10-16T00:00:00Z                                                                                                                                                     |
| `remoteData`                                                                                                                                                             | [RemoteData](../../models/shared/remotedata.md)[]                                                                                                                        | :heavy_minus_sign:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `remoteId`                                                                                                                                                               | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | The third-party API ID of the matching object.                                                                                                                           | 19202938                                                                                                                                                                 |
| `remoteWasDeleted`                                                                                                                                                       | *boolean*                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                       | Indicates whether or not this object has been deleted by third party webhooks.                                                                                           |                                                                                                                                                                          |
| `runState`                                                                                                                                                               | [PayrollRunRunState](../../models/shared/payrollrunrunstate.md)                                                                                                          | :heavy_minus_sign:                                                                                                                                                       | The state of the payroll run<br/><br/>* `PAID` - PAID<br/>* `DRAFT` - DRAFT<br/>* `APPROVED` - APPROVED<br/>* `FAILED` - FAILED<br/>* `CLOSED` - CLOSED                  | PAID                                                                                                                                                                     |
| `runType`                                                                                                                                                                | [PayrollRunRunType](../../models/shared/payrollrunruntype.md)                                                                                                            | :heavy_minus_sign:                                                                                                                                                       | The type of the payroll run<br/><br/>* `REGULAR` - REGULAR<br/>* `OFF_CYCLE` - OFF_CYCLE<br/>* `CORRECTION` - CORRECTION<br/>* `TERMINATION` - TERMINATION<br/>* `SIGN_ON_BONUS` - SIGN_ON_BONUS | REGULAR                                                                                                                                                                  |
| `startDate`                                                                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                            | :heavy_minus_sign:                                                                                                                                                       | The day and time the payroll run started.                                                                                                                                | 2020-11-08T00:00:00Z                                                                                                                                                     |