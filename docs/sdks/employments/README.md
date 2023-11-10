# Employments
(*employments*)

### Available Operations

* [employmentsList](#employmentslist) - Returns a list of `Employment` objects.
* [employmentsRetrieve](#employmentsretrieve) - Returns an `Employment` object with the given `id`.

## employmentsList

Returns a list of `Employment` objects.

### Example Usage

```typescript
import { Hris } from "HRIS";
import {
  EmploymentsListQueryParamExpand,
  EmploymentsListQueryParamRemoteFields,
  EmploymentsListQueryParamShowEnumOrigins,
  QueryParamOrderBy,
} from "HRIS/dist/sdk/models/operations";

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.employments.employmentsList({
    xAccountToken: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.EmploymentsListRequest](../../sdk/models/operations/employmentslistrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.EmploymentsListResponse](../../sdk/models/operations/employmentslistresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## employmentsRetrieve

Returns an `Employment` object with the given `id`.

### Example Usage

```typescript
import { Hris } from "HRIS";
import {
  EmploymentsRetrieveQueryParamExpand,
  EmploymentsRetrieveQueryParamRemoteFields,
  EmploymentsRetrieveQueryParamShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.employments.employmentsRetrieve({
    xAccountToken: "string",
    id: "02842cdf-a36b-41cb-9926-eb59f7a98c39",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.EmploymentsRetrieveRequest](../../sdk/models/operations/employmentsretrieverequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.EmploymentsRetrieveResponse](../../sdk/models/operations/employmentsretrieveresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
