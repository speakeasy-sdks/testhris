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
import { TeamsListExpand } from "HRIS/dist/sdk/models/operations";

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.teams.teamsList({
    xAccountToken: "reinforce Tyler Intelligent",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.TeamsListRequest](../../models/operations/teamslistrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.TeamsListResponse](../../models/operations/teamslistresponse.md)>**


## teamsRetrieve

Returns a `Team` object with the given `id`.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { TeamsRetrieveExpand } from "HRIS/dist/sdk/models/operations";

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.teams.teamsRetrieve({
    xAccountToken: "SMTP holistic",
    id: "dde6730f-60e0-41d6-a3ae-3bbe560bf04d",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.TeamsRetrieveRequest](../../models/operations/teamsretrieverequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.TeamsRetrieveResponse](../../models/operations/teamsretrieveresponse.md)>**

