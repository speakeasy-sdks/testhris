# AccountToken
(*accountToken*)

### Available Operations

* [accountTokenRetrieve](#accounttokenretrieve) - Returns the account token for the end user with the provided public token.

## accountTokenRetrieve

Returns the account token for the end user with the provided public token.

### Example Usage

```typescript
import { Hris } from "HRIS";

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.accountToken.accountTokenRetrieve({
    publicToken: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.AccountTokenRetrieveRequest](../../models/operations/accounttokenretrieverequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.AccountTokenRetrieveResponse](../../models/operations/accounttokenretrieveresponse.md)>**

