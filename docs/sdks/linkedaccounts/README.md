# linkedAccounts

### Available Operations

* [linkedAccountsList](#linkedaccountslist) - List linked accounts for your organization.

## linkedAccountsList

List linked accounts for your organization.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { LinkedAccountsListCategory, LinkedAccountsListResponse } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();

sdk.linkedAccounts.linkedAccountsList({
  category: LinkedAccountsListCategory.Filestorage,
  cursor: "fuga",
  endUserEmailAddress: "reprehenderit",
  endUserOrganizationName: "quidem",
  endUserOriginId: "fugiat",
  endUserOriginIds: "ut",
  id: "66d28c10-ab3c-4dca-8251-904e523c7e0b",
  ids: "quod",
  includeDuplicates: false,
  integrationName: "dignissimos",
  isTestAccount: "inventore",
  pageSize: 469498,
  status: "totam",
}, {
  tokenAuth: "",
}).then((res: LinkedAccountsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.LinkedAccountsListRequest](../../models/operations/linkedaccountslistrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.LinkedAccountsListSecurity](../../models/operations/linkedaccountslistsecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.LinkedAccountsListResponse](../../models/operations/linkedaccountslistresponse.md)>**

