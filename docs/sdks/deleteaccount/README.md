# deleteAccount

### Available Operations

* [deleteAccountCreate](#deleteaccountcreate) - Delete a linked account.

## deleteAccountCreate

Delete a linked account.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { DeleteAccountCreateResponse } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();

sdk.deleteAccount.deleteAccountCreate({
  xAccountToken: "vero",
}, {
  tokenAuth: "",
}).then((res: DeleteAccountCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.DeleteAccountCreateRequest](../../models/operations/deleteaccountcreaterequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.DeleteAccountCreateSecurity](../../models/operations/deleteaccountcreatesecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.DeleteAccountCreateResponse](../../models/operations/deleteaccountcreateresponse.md)>**
