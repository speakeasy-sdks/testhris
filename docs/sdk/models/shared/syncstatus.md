# SyncStatus

# The SyncStatus Object
### Description
The `SyncStatus` object is used to represent the syncing state of an account

### Usage Example
View the `SyncStatus` for an account to see how recently its models were synced.


## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `isInitialSync`                                                                                                   | *boolean*                                                                                                         | :heavy_check_mark:                                                                                                | N/A                                                                                                               | true                                                                                                              |
| `lastSyncStart`                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                     | :heavy_minus_sign:                                                                                                | N/A                                                                                                               | 2021-03-30T19:44:18.695973Z                                                                                       |
| `modelId`                                                                                                         | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | hris.Employee                                                                                                     |
| `modelName`                                                                                                       | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | Employee                                                                                                          |
| `nextSyncStart`                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                     | :heavy_minus_sign:                                                                                                | N/A                                                                                                               | 2021-03-30T20:44:18.662942Z                                                                                       |
| `selectiveSyncConfigurationsUsage`                                                                                | [shared.SelectiveSyncConfigurationsUsageEnum](../../../sdk/models/shared/selectivesyncconfigurationsusageenum.md) | :heavy_minus_sign:                                                                                                | * `IN_NEXT_SYNC` - IN_NEXT_SYNC<br/>* `IN_LAST_SYNC` - IN_LAST_SYNC                                               |                                                                                                                   |
| `status`                                                                                                          | [shared.SyncStatusStatus](../../../sdk/models/shared/syncstatusstatus.md)                                         | :heavy_check_mark:                                                                                                | N/A                                                                                                               | SYNCING                                                                                                           |