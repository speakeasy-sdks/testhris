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

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.payGroups.payGroupsList({
    xAccountToken: "Customer cribbage",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.payGroups.payGroupsRetrieve({
    xAccountToken: "North newton",
    id: "5d67c803-d66d-4576-b84b-db69e62e0d80",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.PayGroupsRetrieveRequest](../../models/operations/paygroupsretrieverequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.PayGroupsRetrieveResponse](../../models/operations/paygroupsretrieveresponse.md)>**

