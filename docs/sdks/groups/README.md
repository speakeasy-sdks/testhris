# Groups
(*.groups*)

### Available Operations

* [groupsList](#groupslist) - Returns a list of `Group` objects.
* [groupsRetrieve](#groupsretrieve) - Returns a `Group` object with the given `id`.

## groupsList

Returns a list of `Group` objects.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { GroupsListQueryParamRemoteFields, GroupsListQueryParamShowEnumOrigins } from "HRIS/dist/sdk/models/operations";

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.groups.groupsList({
    xAccountToken: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { GroupsRetrieveQueryParamRemoteFields, GroupsRetrieveQueryParamShowEnumOrigins } from "HRIS/dist/sdk/models/operations";

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.groups.groupsRetrieve({
    xAccountToken: "string",
    id: "f30195ec-1b25-45da-adb0-7836763cd896",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GroupsRetrieveRequest](../../models/operations/groupsretrieverequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GroupsRetrieveResponse](../../models/operations/groupsretrieveresponse.md)>**

