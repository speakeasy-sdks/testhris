# LinkedAccounts
(*linkedAccounts*)

### Available Operations

* [linkedAccountsList](#linkedaccountslist) - List linked accounts for your organization.

## linkedAccountsList

List linked accounts for your organization.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { LinkedAccountsListCategory, LinkedAccountsListResponse } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.linkedAccounts.linkedAccountsList({
  category: LinkedAccountsListCategory.Crm,
  cursor: "sapiente",
  endUserEmailAddress: "quisquam",
  endUserOrganizationName: "saepe",
  endUserOriginId: "ea",
  endUserOriginIds: "impedit",
  id: "556146c3-e250-4fb0-88c4-2e141aac366c",
  ids: "quas",
  includeDuplicates: false,
  integrationName: "assumenda",
  isTestAccount: "nulla",
  pageSize: 379034,
  status: "libero",
}).then((res: LinkedAccountsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.LinkedAccountsListRequest](../../models/operations/linkedaccountslistrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.LinkedAccountsListResponse](../../models/operations/linkedaccountslistresponse.md)>**

