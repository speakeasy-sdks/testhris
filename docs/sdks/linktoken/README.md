# LinkToken
(*linkToken*)

### Available Operations

* [linkTokenCreate](#linktokencreate) - Creates a link token to be used when linking a new end user.

## linkTokenCreate

Creates a link token to be used when linking a new end user.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { LinkTokenCreateResponse } from "HRIS/dist/sdk/models/operations";
import { CategoriesEnum, EnabledActionsEnum } from "HRIS/dist/sdk/models/shared";

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.linkToken.linkTokenCreate({
  categories: [
    CategoriesEnum.Hris,
  ],
  commonModels: [
    {
      disabledFields: [
        "dolor",
      ],
      enabledActions: [
        EnabledActionsEnum.Write,
      ],
      modelId: "hris.Employee",
    },
  ],
  endUserEmailAddress: "quasi",
  endUserOrganizationName: "ex",
  endUserOriginId: "nulla",
  integration: "excepturi",
  linkExpiryMins: 972920,
  shouldCreateMagicLinkUrl: false,
}).then((res: LinkTokenCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [shared.EndUserDetailsRequest](../../models/shared/enduserdetailsrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.LinkTokenCreateResponse](../../models/operations/linktokencreateresponse.md)>**

