# AvailableActions
(*availableActions*)

### Available Operations

* [availableActionsRetrieve](#availableactionsretrieve) - Returns a list of models and actions available for an account.

## availableActionsRetrieve

Returns a list of models and actions available for an account.

### Example Usage

```typescript
import { Hris } from "HRIS";

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.availableActions.availableActionsRetrieve({
    xAccountToken: "Marshall Account",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.AvailableActionsRetrieveRequest](../../models/operations/availableactionsretrieverequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.AvailableActionsRetrieveResponse](../../models/operations/availableactionsretrieveresponse.md)>**

