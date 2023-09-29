# Groups
(*groups*)

### Available Operations

* [groupsList](#groupslist) - Returns a list of `Group` objects.
* [groupsRetrieve](#groupsretrieve) - Returns a `Group` object with the given `id`.

## groupsList

Returns a list of `Group` objects.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { GroupsListRemoteFields, GroupsListResponse, GroupsListShowEnumOrigins } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.groups.groupsList({
  xAccountToken: "Representative Assistant",
  createdAfter: new Date("2022-01-10T12:34:33.975Z"),
  createdBefore: new Date("2021-11-13T07:32:12.685Z"),
  cursor: "Oriental salmon VGA",
  includeDeletedData: false,
  includeRemoteData: false,
  modifiedAfter: new Date("2022-12-01T12:36:52.247Z"),
  modifiedBefore: new Date("2023-10-16T13:58:43.476Z"),
  pageSize: 23296,
  remoteFields: GroupsListRemoteFields.Type,
  remoteId: "systematic technologies Metal",
  showEnumOrigins: GroupsListShowEnumOrigins.Type,
  types: "West",
}).then((res: GroupsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GroupsListRequest](../../models/operations/groupslistrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GroupsListResponse](../../models/operations/groupslistresponse.md)>**


## groupsRetrieve

Returns a `Group` object with the given `id`.

### Example Usage

```typescript
import { Hris } from "HRIS";
import {
  GroupsRetrieveRemoteFields,
  GroupsRetrieveResponse,
  GroupsRetrieveShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.groups.groupsRetrieve({
  xAccountToken: "Chair Northeast Diesel",
  id: "b255daad-b078-4367-a3cd-8961d91b4b8b",
  includeRemoteData: false,
  remoteFields: GroupsRetrieveRemoteFields.Type,
  showEnumOrigins: GroupsRetrieveShowEnumOrigins.Type,
}).then((res: GroupsRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GroupsRetrieveRequest](../../models/operations/groupsretrieverequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GroupsRetrieveResponse](../../models/operations/groupsretrieveresponse.md)>**

