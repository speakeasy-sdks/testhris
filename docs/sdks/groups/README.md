# groups

### Available Operations

* [groupsList](#groupslist) - Returns a list of `Group` objects.
* [groupsRetrieve](#groupsretrieve) - Returns a `Group` object with the given `id`.

## groupsList

Returns a list of `Group` objects.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { GroupsListRemoteFields, GroupsListResponse, GroupsListShowEnumOrigins } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();

sdk.groups.groupsList({
  xAccountToken: "qui",
  createdAfter: new Date("2022-06-27T23:25:59.184Z"),
  createdBefore: new Date("2022-06-03T03:16:58.870Z"),
  cursor: "voluptatibus",
  includeDeletedData: false,
  includeRemoteData: false,
  modifiedAfter: new Date("2020-05-16T05:26:31.901Z"),
  modifiedBefore: new Date("2022-04-29T03:27:17.664Z"),
  pageSize: 218403,
  remoteFields: GroupsListRemoteFields.Type,
  remoteId: "delectus",
  showEnumOrigins: GroupsListShowEnumOrigins.Type,
  types: "voluptate",
}, {
  tokenAuth: "",
}).then((res: GroupsListResponse) => {
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
  GroupsRetrieveShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();

sdk.groups.groupsRetrieve({
  xAccountToken: "consectetur",
  id: "ef7fbc7a-bd74-4dd3-9c0f-5d2cff7c70a4",
  includeRemoteData: false,
  remoteFields: GroupsRetrieveRemoteFields.Type,
  showEnumOrigins: GroupsRetrieveShowEnumOrigins.Type,
}, {
  tokenAuth: "",
}).then((res: GroupsRetrieveResponse) => {
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

