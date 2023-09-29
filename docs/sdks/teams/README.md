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
import { TeamsListExpand, TeamsListResponse } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.teams.teamsList({
  xAccountToken: "reinforce Tyler Intelligent",
  createdAfter: new Date("2021-02-06T01:28:51.322Z"),
  createdBefore: new Date("2022-06-01T00:35:02.048Z"),
  cursor: "commodi Royce",
  expand: TeamsListExpand.ParentTeam,
  includeDeletedData: false,
  includeRemoteData: false,
  modifiedAfter: new Date("2022-07-28T11:35:43.959Z"),
  modifiedBefore: new Date("2023-12-16T22:54:16.247Z"),
  pageSize: 895120,
  parentTeamId: "microchip female",
  remoteId: "blue for",
}).then((res: TeamsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { TeamsRetrieveExpand, TeamsRetrieveResponse } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.teams.teamsRetrieve({
  xAccountToken: "SMTP holistic",
  expand: TeamsRetrieveExpand.ParentTeam,
  id: "dde6730f-60e0-41d6-a3ae-3bbe560bf04d",
  includeRemoteData: false,
}).then((res: TeamsRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.TeamsRetrieveRequest](../../models/operations/teamsretrieverequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.TeamsRetrieveResponse](../../models/operations/teamsretrieveresponse.md)>**

