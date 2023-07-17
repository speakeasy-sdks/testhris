# generateKey

### Available Operations

* [generateKeyCreate](#generatekeycreate) - Create a remote key.

## generateKeyCreate

Create a remote key.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { GenerateKeyCreateResponse } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();

sdk.generateKey.generateKeyCreate({
  name: "Remote Deployment Key 1",
}, {
  tokenAuth: "",
}).then((res: GenerateKeyCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [shared.GenerateRemoteKeyRequest](../../models/shared/generateremotekeyrequest.md)           | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.GenerateKeyCreateSecurity](../../models/operations/generatekeycreatesecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GenerateKeyCreateResponse](../../models/operations/generatekeycreateresponse.md)>**
