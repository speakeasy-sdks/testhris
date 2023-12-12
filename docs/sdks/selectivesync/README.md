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

async function run() {
  const sdk = new Hris({
    security: {
      tokenAuth: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.selectiveSync.selectiveSyncConfigurationsList({
    xAccountToken: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.SelectiveSyncConfigurationsListRequest](../../sdk/models/operations/selectivesyncconfigurationslistrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.SelectiveSyncConfigurationsListResponse](../../sdk/models/operations/selectivesyncconfigurationslistresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## selectiveSyncConfigurationsUpdate

Replace a linked account's selective syncs.

### Example Usage

```typescript
import { Hris } from "HRIS";

async function run() {
  const sdk = new Hris({
    security: {
      tokenAuth: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.selectiveSync.selectiveSyncConfigurationsUpdate({
    linkedAccountSelectiveSyncConfigurationListRequest: {
      syncConfigurations: [
        {
          linkedAccountConditions: [
            {
              conditionSchemaId: "1d101b05-1b27-4bb3-8005-3fdfb3b8ef10",
              operator: "string",
              value: "string",
            },
          ],
        },
      ],
    },
    xAccountToken: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.SelectiveSyncConfigurationsUpdateRequest](../../sdk/models/operations/selectivesyncconfigurationsupdaterequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.SelectiveSyncConfigurationsUpdateResponse](../../sdk/models/operations/selectivesyncconfigurationsupdateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## selectiveSyncMetaList

Get metadata for the conditions available to a linked account.

### Example Usage

```typescript
import { Hris } from "HRIS";

async function run() {
  const sdk = new Hris({
    security: {
      tokenAuth: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.selectiveSync.selectiveSyncMetaList({
    xAccountToken: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.SelectiveSyncMetaListRequest](../../sdk/models/operations/selectivesyncmetalistrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.SelectiveSyncMetaListResponse](../../sdk/models/operations/selectivesyncmetalistresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
