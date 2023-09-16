# Groups

### Available Operations

* [groupsList](#groupslist) - Returns a list of `Group` objects.
* [groupsRetrieve](#groupsretrieve) - Returns a `Group` object with the given `id`.

## groupsList

Returns a list of `Group` objects.

### Example Usage

```typescript
import { Hris } from "HRIS";
import {
  GroupsListRemoteFields,
  GroupsListResponse,
  GroupsListSecurity,
  GroupsListShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();
const operationSecurity: GroupsListSecurity = {
  tokenAuth: "",
};

sdk.groups.groupsList({
  xAccountToken: "fugit",
  createdAfter: new Date("2022-07-06T20:37:36.497Z"),
  createdBefore: new Date("2022-08-24T04:49:56.144Z"),
  cursor: "nam",
  includeDeletedData: false,
  includeRemoteData: false,
  modifiedAfter: new Date("2022-11-28T15:41:44.846Z"),
  modifiedBefore: new Date("2020-10-05T00:59:28.911Z"),
  pageSize: 748664,
  remoteFields: GroupsListRemoteFields.Type,
  remoteId: "et",
  showEnumOrigins: GroupsListShowEnumOrigins.Type,
  types: "saepe",
}, operationSecurity).then((res: GroupsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GroupsListRequest](../../models/operations/groupslistrequest.md)   | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `security`                                                                     | [operations.GroupsListSecurity](../../models/operations/groupslistsecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


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
  GroupsRetrieveSecurity,
  GroupsRetrieveShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();
const operationSecurity: GroupsRetrieveSecurity = {
  tokenAuth: "",
};

sdk.groups.groupsRetrieve({
  xAccountToken: "ipsum",
  id: "1b8b90f3-443a-4110-8e0a-dcf4b921879f",
  includeRemoteData: false,
  remoteFields: GroupsRetrieveRemoteFields.Type,
  showEnumOrigins: GroupsRetrieveShowEnumOrigins.Type,
}, operationSecurity).then((res: GroupsRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GroupsRetrieveRequest](../../models/operations/groupsretrieverequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.GroupsRetrieveSecurity](../../models/operations/groupsretrievesecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GroupsRetrieveResponse](../../models/operations/groupsretrieveresponse.md)>**

