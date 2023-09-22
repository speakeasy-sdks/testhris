# PayGroups

### Available Operations

* [payGroupsList](#paygroupslist) - Returns a list of `PayGroup` objects.
* [payGroupsRetrieve](#paygroupsretrieve) - Returns a `PayGroup` object with the given `id`.

## payGroupsList

Returns a list of `PayGroup` objects.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { PayGroupsListResponse } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.payGroups.payGroupsList({
  xAccountToken: "dolores",
  createdAfter: new Date("2022-01-19T00:55:43.636Z"),
  createdBefore: new Date("2022-03-20T23:14:37.473Z"),
  cursor: "eum",
  includeDeletedData: false,
  includeRemoteData: false,
  modifiedAfter: new Date("2021-12-24T16:30:16.544Z"),
  modifiedBefore: new Date("2022-06-19T07:05:05.913Z"),
  pageSize: 143829,
  remoteId: "fuga",
}).then((res: PayGroupsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.PayGroupsListRequest](../../models/operations/paygroupslistrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.PayGroupsListResponse](../../models/operations/paygroupslistresponse.md)>**


## payGroupsRetrieve

Returns a `PayGroup` object with the given `id`.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { PayGroupsRetrieveResponse } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.payGroups.payGroupsRetrieve({
  xAccountToken: "mollitia",
  id: "482562f2-22e9-4817-ae17-cbe61e6b7b95",
  includeRemoteData: false,
}).then((res: PayGroupsRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.PayGroupsRetrieveRequest](../../models/operations/paygroupsretrieverequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.PayGroupsRetrieveResponse](../../models/operations/paygroupsretrieveresponse.md)>**

