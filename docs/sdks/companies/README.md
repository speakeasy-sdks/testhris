# companies

### Available Operations

* [companiesList](#companieslist) - Returns a list of `Company` objects.
* [companiesRetrieve](#companiesretrieve) - Returns a `Company` object with the given `id`.

## companiesList

Returns a list of `Company` objects.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { CompaniesListResponse } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();

sdk.companies.companiesList({
  xAccountToken: "omnis",
  createdAfter: new Date("2022-09-04T08:35:09.957Z"),
  createdBefore: new Date("2022-12-03T22:47:10.600Z"),
  cursor: "iure",
  includeDeletedData: false,
  includeRemoteData: false,
  modifiedAfter: new Date("2021-01-09T11:41:25.666Z"),
  modifiedBefore: new Date("2022-09-11T06:15:44.019Z"),
  pageSize: 652790,
  remoteId: "dolorem",
}, {
  tokenAuth: "",
}).then((res: CompaniesListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.CompaniesListRequest](../../models/operations/companieslistrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.CompaniesListSecurity](../../models/operations/companieslistsecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CompaniesListResponse](../../models/operations/companieslistresponse.md)>**


## companiesRetrieve

Returns a `Company` object with the given `id`.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { CompaniesRetrieveResponse } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();

sdk.companies.companiesRetrieve({
  xAccountToken: "culpa",
  id: "2fa94677-3925-41aa-92c3-f5ad019da1ff",
  includeRemoteData: false,
}, {
  tokenAuth: "",
}).then((res: CompaniesRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.CompaniesRetrieveRequest](../../models/operations/companiesretrieverequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.CompaniesRetrieveSecurity](../../models/operations/companiesretrievesecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.CompaniesRetrieveResponse](../../models/operations/companiesretrieveresponse.md)>**

