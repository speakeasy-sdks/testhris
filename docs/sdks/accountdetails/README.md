# accountDetails

### Available Operations

* [accountDetailsRetrieve](#accountdetailsretrieve) - Get details for a linked account.

## accountDetailsRetrieve

Get details for a linked account.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { AccountDetailsRetrieveResponse } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();

sdk.accountDetails.accountDetailsRetrieve({
  xAccountToken: "provident",
}, {
  tokenAuth: "",
}).then((res: AccountDetailsRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.AccountDetailsRetrieveRequest](../../models/operations/accountdetailsretrieverequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.AccountDetailsRetrieveSecurity](../../models/operations/accountdetailsretrievesecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.AccountDetailsRetrieveResponse](../../models/operations/accountdetailsretrieveresponse.md)>**
