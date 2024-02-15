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
import { GroupsListQueryParamRemoteFields, GroupsListQueryParamShowEnumOrigins } from "HRIS/dist/sdk/models/operations";

async function run() {
  const sdk = new Hris({
    security: {
      tokenAuth: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.groups.groupsList({
    xAccountToken: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GroupsListRequest](../../sdk/models/operations/groupslistrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GroupsListResponse](../../sdk/models/operations/groupslistresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## groupsRetrieve

Returns a `Group` object with the given `id`.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { GroupsRetrieveQueryParamRemoteFields, GroupsRetrieveQueryParamShowEnumOrigins } from "HRIS/dist/sdk/models/operations";

async function run() {
  const sdk = new Hris({
    security: {
      tokenAuth: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.groups.groupsRetrieve({
    xAccountToken: "<value>",
    id: "f30195ec-1b25-45da-adb0-7836763cd896",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GroupsRetrieveRequest](../../sdk/models/operations/groupsretrieverequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GroupsRetrieveResponse](../../sdk/models/operations/groupsretrieveresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
