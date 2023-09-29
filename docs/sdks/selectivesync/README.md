# SelectiveSync
(*selectiveSync*)

### Available Operations

* [selectiveSyncConfigurationsList](#selectivesyncconfigurationslist) - Get a linked account's selective syncs.
* [selectiveSyncConfigurationsUpdate](#selectivesyncconfigurationsupdate) - Replace a linked account's selective syncs.
* [selectiveSyncMetaList](#selectivesyncmetalist) - Get metadata for the conditions available to a linked account.

## selectiveSyncConfigurationsList

Get a linked account's selective syncs.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { SelectiveSyncConfigurationsListResponse } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.selectiveSync.selectiveSyncConfigurationsList({
  xAccountToken: "Incredible",
}).then((res: SelectiveSyncConfigurationsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.SelectiveSyncConfigurationsListRequest](../../models/operations/selectivesyncconfigurationslistrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.SelectiveSyncConfigurationsListResponse](../../models/operations/selectivesyncconfigurationslistresponse.md)>**


## selectiveSyncConfigurationsUpdate

Replace a linked account's selective syncs.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { SelectiveSyncConfigurationsUpdateResponse } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.selectiveSync.selectiveSyncConfigurationsUpdate({
  linkedAccountSelectiveSyncConfigurationListRequest: {
    syncConfigurations: [
      {
        linkedAccountConditions: [
          {
            conditionSchemaId: "1d101b05-1b27-4bb3-8005-3fdfb3b8ef10",
            operator: "Convertible Checking",
            value: "yahoo",
          },
        ],
      },
    ],
  },
  xAccountToken: "Division Rubber",
}).then((res: SelectiveSyncConfigurationsUpdateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.SelectiveSyncConfigurationsUpdateRequest](../../models/operations/selectivesyncconfigurationsupdaterequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.SelectiveSyncConfigurationsUpdateResponse](../../models/operations/selectivesyncconfigurationsupdateresponse.md)>**


## selectiveSyncMetaList

Get metadata for the conditions available to a linked account.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { SelectiveSyncMetaListResponse } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.selectiveSync.selectiveSyncMetaList({
  xAccountToken: "Funk",
  commonModel: "Pants",
  cursor: "deposit Gasoline lime",
  pageSize: 993266,
}).then((res: SelectiveSyncMetaListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.SelectiveSyncMetaListRequest](../../models/operations/selectivesyncmetalistrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.SelectiveSyncMetaListResponse](../../models/operations/selectivesyncmetalistresponse.md)>**

