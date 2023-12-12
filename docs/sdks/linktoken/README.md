# LinkToken
(*linkToken*)

### Available Operations

* [linkTokenCreate](#linktokencreate) - Creates a link token to be used when linking a new end user.

## linkTokenCreate

Creates a link token to be used when linking a new end user.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { CategoriesEnum, EnabledActionsEnum } from "HRIS/dist/sdk/models/shared";

async function run() {
  const sdk = new Hris({
    security: {
      tokenAuth: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.linkToken.linkTokenCreate({
    categories: [
      CategoriesEnum.Mktg,
    ],
    commonModels: [
      {
        disabledFields: [
          "first_name",
        ],
        enabledActions: [
          EnabledActionsEnum.Read,
          EnabledActionsEnum.Write,
        ],
        modelId: "hris.Employee",
      },
    ],
    endUserEmailAddress: "string",
    endUserOrganizationName: "string",
    endUserOriginId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [shared.EndUserDetailsRequest](../../sdk/models/shared/enduserdetailsrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.LinkTokenCreateResponse](../../sdk/models/operations/linktokencreateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
