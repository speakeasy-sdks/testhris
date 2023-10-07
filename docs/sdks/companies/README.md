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

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.companies.companiesList({
    xAccountToken: "Northwest",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.companies.companiesRetrieve({
    xAccountToken: "Loan Southwest Gasoline",
    id: "929a25e5-dab9-44fe-beac-92c97845978e",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.CompaniesRetrieveRequest](../../models/operations/companiesretrieverequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CompaniesRetrieveResponse](../../models/operations/companiesretrieveresponse.md)>**

