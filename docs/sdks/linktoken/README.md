# linkToken

### Available Operations

* [linkTokenCreate](#linktokencreate) - Creates a link token to be used when linking a new end user.

## linkTokenCreate

Creates a link token to be used when linking a new end user.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { LinkTokenCreateResponse } from "HRIS/dist/sdk/models/operations";
import { CategoriesEnum, EnabledActionsEnum } from "HRIS/dist/sdk/models/shared";

const sdk = new Hris();

sdk.linkToken.linkTokenCreate({
  categories: [
    CategoriesEnum.Mktg,
    CategoriesEnum.Ats,
    CategoriesEnum.Ticketing,
  ],
  commonModels: [
    {
      disabledFields: [
        "quas",
        "assumenda",
        "nulla",
        "voluptas",
      ],
      enabledActions: [
        EnabledActionsEnum.Read,
        EnabledActionsEnum.Read,
        EnabledActionsEnum.Read,
      ],
      modelId: "hris.Employee",
    },
    {
      disabledFields: [
        "provident",
      ],
      enabledActions: [
        EnabledActionsEnum.Read,
      ],
      modelId: "hris.Employee",
    },
  ],
  endUserEmailAddress: "magnam",
  endUserOrganizationName: "odio",
  endUserOriginId: "eius",
  integration: "esse",
  linkExpiryMins: 456141,
  shouldCreateMagicLinkUrl: false,
}, {
  tokenAuth: "",
}).then((res: LinkTokenCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [shared.EndUserDetailsRequest](../../models/shared/enduserdetailsrequest.md)             | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.LinkTokenCreateSecurity](../../models/operations/linktokencreatesecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.LinkTokenCreateResponse](../../models/operations/linktokencreateresponse.md)>**

