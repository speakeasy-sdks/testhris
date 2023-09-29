# PayGroups
(*payGroups*)

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
  xAccountToken: "Customer cribbage",
  createdAfter: new Date("2023-09-08T23:42:16.685Z"),
  createdBefore: new Date("2023-01-01T06:47:42.981Z"),
  cursor: "Unbranded",
  includeDeletedData: false,
  includeRemoteData: false,
  modifiedAfter: new Date("2023-01-03T13:58:47.747Z"),
  modifiedBefore: new Date("2021-09-03T11:03:40.869Z"),
  pageSize: 313867,
  remoteId: "Bedfordshire parse",
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
  xAccountToken: "North newton",
  id: "5d67c803-d66d-4576-b84b-db69e62e0d80",
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

