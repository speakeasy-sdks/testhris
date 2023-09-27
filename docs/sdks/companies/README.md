# Companies
(*companies*)

### Available Operations

* [companiesList](#companieslist) - Returns a list of `Company` objects.
* [companiesRetrieve](#companiesretrieve) - Returns a `Company` object with the given `id`.

## companiesList

Returns a list of `Company` objects.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { CompaniesListResponse } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.companies.companiesList({
  xAccountToken: "nemo",
  createdAfter: new Date("2022-06-06T21:04:34.044Z"),
  createdBefore: new Date("2022-07-24T21:51:02.112Z"),
  cursor: "culpa",
  includeDeletedData: false,
  includeRemoteData: false,
  modifiedAfter: new Date("2020-02-15T22:48:47.492Z"),
  modifiedBefore: new Date("2022-05-07T17:33:24.154Z"),
  pageSize: 208876,
  remoteId: "culpa",
}).then((res: CompaniesListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.CompaniesListRequest](../../models/operations/companieslistrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.CompaniesListResponse](../../models/operations/companieslistresponse.md)>**


## companiesRetrieve

Returns a `Company` object with the given `id`.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { CompaniesRetrieveResponse } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.companies.companiesRetrieve({
  xAccountToken: "consequuntur",
  id: "fa946773-9251-4aa5-ac3f-5ad019da1ffe",
  includeRemoteData: false,
}).then((res: CompaniesRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.CompaniesRetrieveRequest](../../models/operations/companiesretrieverequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CompaniesRetrieveResponse](../../models/operations/companiesretrieveresponse.md)>**

