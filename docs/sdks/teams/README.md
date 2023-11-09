# Teams
(*teams*)

### Available Operations

* [teamsList](#teamslist) - Returns a list of `Team` objects.
* [teamsRetrieve](#teamsretrieve) - Returns a `Team` object with the given `id`.

## teamsList

Returns a list of `Team` objects.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { TeamsListQueryParamExpand } from "HRIS/dist/sdk/models/operations";

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.teams.teamsList({
    xAccountToken: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.TeamsListRequest](../../sdk/models/operations/teamslistrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.TeamsListResponse](../../sdk/models/operations/teamslistresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## teamsRetrieve

Returns a `Team` object with the given `id`.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { TeamsRetrieveQueryParamExpand } from "HRIS/dist/sdk/models/operations";

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.teams.teamsRetrieve({
    xAccountToken: "string",
    id: "77b57dde-6730-4f60-a01d-623ae3bbe560",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.TeamsRetrieveRequest](../../sdk/models/operations/teamsretrieverequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.TeamsRetrieveResponse](../../sdk/models/operations/teamsretrieveresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
