# ForceResync
(*.forceResync*)

### Available Operations

* [syncStatusResyncCreate](#syncstatusresynccreate) - Force re-sync of all models. This is available for all organizations via the dashboard. Force re-sync is also available programmatically via API for monthly, quarterly, and highest sync frequency customers on the Core, Professional, or Enterprise plans. Doing so will consume a sync credit for the relevant linked account.

## syncStatusResyncCreate

Force re-sync of all models. This is available for all organizations via the dashboard. Force re-sync is also available programmatically via API for monthly, quarterly, and highest sync frequency customers on the Core, Professional, or Enterprise plans. Doing so will consume a sync credit for the relevant linked account.

### Example Usage

```typescript
import { Hris } from "HRIS";

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.forceResync.syncStatusResyncCreate({
    xAccountToken: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.SyncStatusResyncCreateRequest](../../models/operations/syncstatusresynccreaterequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.SyncStatusResyncCreateResponse](../../models/operations/syncstatusresynccreateresponse.md)>**

