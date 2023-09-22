# RegenerateKey

### Available Operations

* [regenerateKeyCreate](#regeneratekeycreate) - Exchange remote keys.

## regenerateKeyCreate

Exchange remote keys.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { RegenerateKeyCreateResponse } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.regenerateKey.regenerateKeyCreate({
  name: "Remote Deployment Key 1",
}).then((res: RegenerateKeyCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [shared.RemoteKeyForRegenerationRequest](../../models/shared/remotekeyforregenerationrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.RegenerateKeyCreateResponse](../../models/operations/regeneratekeycreateresponse.md)>**

