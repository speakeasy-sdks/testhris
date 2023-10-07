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
  EmploymentsListExpand,
  EmploymentsListOrderBy,
  EmploymentsListRemoteFields,
  EmploymentsListShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.employments.employmentsList({
    xAccountToken: "opium",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.EmploymentsListRequest](../../models/operations/employmentslistrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.EmploymentsListResponse](../../models/operations/employmentslistresponse.md)>**


## employmentsRetrieve

Returns an `Employment` object with the given `id`.

### Example Usage

```typescript
import { Hris } from "HRIS";
import {
  EmploymentsRetrieveExpand,
  EmploymentsRetrieveRemoteFields,
  EmploymentsRetrieveShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.employments.employmentsRetrieve({
    xAccountToken: "Crest",
    id: "dfa36b1c-bd92-46eb-99f7-a98c39fd2517",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.EmploymentsRetrieveRequest](../../models/operations/employmentsretrieverequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.EmploymentsRetrieveResponse](../../models/operations/employmentsretrieveresponse.md)>**

