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

async function run() {
  const sdk = new Hris({
    security: {
      tokenAuth: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.companies.companiesList({
    xAccountToken: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.CompaniesListRequest](../../sdk/models/operations/companieslistrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CompaniesListResponse](../../sdk/models/operations/companieslistresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## companiesRetrieve

Returns a `Company` object with the given `id`.

### Example Usage

```typescript
import { Hris } from "HRIS";

async function run() {
  const sdk = new Hris({
    security: {
      tokenAuth: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.companies.companiesRetrieve({
    xAccountToken: "<value>",
    id: "f6981dd8-929a-425e-9dab-94febeac92c9",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.CompaniesRetrieveRequest](../../sdk/models/operations/companiesretrieverequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.CompaniesRetrieveResponse](../../sdk/models/operations/companiesretrieveresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
