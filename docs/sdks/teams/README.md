# Teams

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
  xAccountToken: "asperiores",
  createdAfter: new Date("2022-08-04T16:41:09.494Z"),
  createdBefore: new Date("2022-11-02T12:31:08.461Z"),
  cursor: "repellendus",
  expand: TeamsListExpand.ParentTeam,
  includeDeletedData: false,
  includeRemoteData: false,
  modifiedAfter: new Date("2021-05-21T20:57:35.388Z"),
  modifiedBefore: new Date("2022-05-12T09:23:17.883Z"),
  pageSize: 989410,
  parentTeamId: "nemo",
  remoteId: "quae",
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
  xAccountToken: "quaerat",
  expand: TeamsRetrieveExpand.ParentTeam,
  id: "cc413aa6-3aae-48d6-b864-dbb675fd5e60",
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

