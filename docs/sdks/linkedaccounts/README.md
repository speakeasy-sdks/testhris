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
  category: LinkedAccountsListCategory.Ats,
  cursor: "female",
  endUserEmailAddress: "wireless Card",
  endUserOrganizationName: "Jordanian hug ea",
  endUserOriginId: "Northwest API",
  endUserOriginIds: "Computer executive",
  id: "0e3ff994-ca52-47d3-b04f-f21dcccc885b",
  ids: "network Wellington Bicycle",
  includeDuplicates: false,
  integrationName: "deposit",
  isTestAccount: "Horizontal",
  pageSize: 48529,
  status: "Florissant",
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

