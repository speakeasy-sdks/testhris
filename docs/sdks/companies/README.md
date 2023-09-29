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
  xAccountToken: "Northwest",
  createdAfter: new Date("2021-11-22T08:04:33.605Z"),
  createdBefore: new Date("2022-01-16T18:58:48.537Z"),
  cursor: "quash Planner",
  includeDeletedData: false,
  includeRemoteData: false,
  modifiedAfter: new Date("2021-01-19T23:47:11.330Z"),
  modifiedBefore: new Date("2022-05-13T14:25:52.378Z"),
  pageSize: 955379,
  remoteId: "Forward",
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
  xAccountToken: "Loan Southwest Gasoline",
  id: "929a25e5-dab9-44fe-beac-92c97845978e",
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

