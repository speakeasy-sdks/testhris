# accountToken

### Available Operations

* [accountTokenRetrieve](#accounttokenretrieve) - Returns the account token for the end user with the provided public token.

## accountTokenRetrieve

Returns the account token for the end user with the provided public token.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { AccountTokenRetrieveResponse } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();

sdk.accountToken.accountTokenRetrieve({
  publicToken: "distinctio",
}, {
  tokenAuth: "",
}).then((res: AccountTokenRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.AccountTokenRetrieveRequest](../../models/operations/accounttokenretrieverequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.AccountTokenRetrieveSecurity](../../models/operations/accounttokenretrievesecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.AccountTokenRetrieveResponse](../../models/operations/accounttokenretrieveresponse.md)>**
