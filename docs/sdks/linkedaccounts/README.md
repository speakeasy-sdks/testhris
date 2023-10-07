# LinkedAccounts
(*linkedAccounts*)

### Available Operations

* [linkedAccountsList](#linkedaccountslist) - List linked accounts for your organization.

## linkedAccountsList

List linked accounts for your organization.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { LinkedAccountsListCategory } from "HRIS/dist/sdk/models/operations";

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.linkedAccounts.linkedAccountsList({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.LinkedAccountsListRequest](../../models/operations/linkedaccountslistrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.LinkedAccountsListResponse](../../models/operations/linkedaccountslistresponse.md)>**

