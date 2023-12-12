# AvailableActions
(*availableActions*)

### Available Operations

* [availableActionsRetrieve](#availableactionsretrieve) - Returns a list of models and actions available for an account.

## availableActionsRetrieve

Returns a list of models and actions available for an account.

### Example Usage

```typescript
import { Hris } from "HRIS";

async function run() {
  const sdk = new Hris({
    security: {
      tokenAuth: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.availableActions.availableActionsRetrieve({
    xAccountToken: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.AvailableActionsRetrieveRequest](../../sdk/models/operations/availableactionsretrieverequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.AvailableActionsRetrieveResponse](../../sdk/models/operations/availableactionsretrieveresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
