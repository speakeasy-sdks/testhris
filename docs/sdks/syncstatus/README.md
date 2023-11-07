# SyncStatus
(*.syncStatus*)

### Available Operations

* [syncStatusList](#syncstatuslist) - Get syncing status. Possible values: `DISABLED`, `DONE`, `FAILED`, `PARTIALLY_SYNCED`, `PAUSED`, `SYNCING`

## syncStatusList

Get syncing status. Possible values: `DISABLED`, `DONE`, `FAILED`, `PARTIALLY_SYNCED`, `PAUSED`, `SYNCING`

### Example Usage

```typescript
import { Hris } from "HRIS";

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.syncStatus.syncStatusList({
    xAccountToken: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.SyncStatusListRequest](../../models/operations/syncstatuslistrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.SyncStatusListResponse](../../models/operations/syncstatuslistresponse.md)>**

