# teams

### Available Operations

* [teamsList](#teamslist) - Returns a list of `Team` objects.
* [teamsRetrieve](#teamsretrieve) - Returns a `Team` object with the given `id`.

## teamsList

Returns a list of `Team` objects.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { TeamsListExpand, TeamsListResponse, TeamsListSecurity } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();
const operationSecurity: TeamsListSecurity = {
  tokenAuth: "",
};

sdk.teams.teamsList({
  xAccountToken: "molestiae",
  createdAfter: new Date("2022-06-13T02:57:02.580Z"),
  createdBefore: new Date("2022-02-17T14:59:36.472Z"),
  cursor: "necessitatibus",
  expand: TeamsListExpand.ParentTeam,
  includeDeletedData: false,
  includeRemoteData: false,
  modifiedAfter: new Date("2022-04-30T12:10:44.049Z"),
  modifiedBefore: new Date("2021-12-10T20:58:20.380Z"),
  pageSize: 523006,
  parentTeamId: "aliquam",
  remoteId: "ad",
}, operationSecurity).then((res: TeamsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.TeamsListRequest](../../models/operations/teamslistrequest.md)   | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `security`                                                                   | [operations.TeamsListSecurity](../../models/operations/teamslistsecurity.md) | :heavy_check_mark:                                                           | The security requirements to use for the request.                            |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.TeamsListResponse](../../models/operations/teamslistresponse.md)>**


## teamsRetrieve

Returns a `Team` object with the given `id`.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { TeamsRetrieveExpand, TeamsRetrieveResponse, TeamsRetrieveSecurity } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();
const operationSecurity: TeamsRetrieveSecurity = {
  tokenAuth: "",
};

sdk.teams.teamsRetrieve({
  xAccountToken: "repellat",
  expand: TeamsRetrieveExpand.ParentTeam,
  id: "0597a60f-f2a5-44a3-9e94-764a3e865e79",
  includeRemoteData: false,
}, operationSecurity).then((res: TeamsRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.TeamsRetrieveRequest](../../models/operations/teamsretrieverequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.TeamsRetrieveSecurity](../../models/operations/teamsretrievesecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.TeamsRetrieveResponse](../../models/operations/teamsretrieveresponse.md)>**

