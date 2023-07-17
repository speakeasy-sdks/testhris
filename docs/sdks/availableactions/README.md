# availableActions

### Available Operations

* [availableActionsRetrieve](#availableactionsretrieve) - Returns a list of models and actions available for an account.

## availableActionsRetrieve

Returns a list of models and actions available for an account.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { AvailableActionsRetrieveResponse } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();

sdk.availableActions.availableActionsRetrieve({
  xAccountToken: "quibusdam",
}, {
  tokenAuth: "",
}).then((res: AvailableActionsRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.AvailableActionsRetrieveRequest](../../models/operations/availableactionsretrieverequest.md)   | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `security`                                                                                                 | [operations.AvailableActionsRetrieveSecurity](../../models/operations/availableactionsretrievesecurity.md) | :heavy_check_mark:                                                                                         | The security requirements to use for the request.                                                          |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.AvailableActionsRetrieveResponse](../../models/operations/availableactionsretrieveresponse.md)>**
