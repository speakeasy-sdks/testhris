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
  EmploymentsListResponse,
  EmploymentsListShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.employments.employmentsList({
  xAccountToken: "opium",
  createdAfter: new Date("2022-08-13T02:01:49.138Z"),
  createdBefore: new Date("2022-08-10T08:20:34.102Z"),
  cursor: "Granite global",
  employeeId: "SDR",
  expand: EmploymentsListExpand.EmployeePayGroup,
  includeDeletedData: false,
  includeRemoteData: false,
  modifiedAfter: new Date("2022-11-07T23:00:32.727Z"),
  modifiedBefore: new Date("2022-04-03T10:25:20.319Z"),
  orderBy: EmploymentsListOrderBy.MinusEffectiveDate,
  pageSize: 588146,
  remoteFields: EmploymentsListRemoteFields.EmploymentTypePayPeriod,
  remoteId: "Agent Product South",
  showEnumOrigins: EmploymentsListShowEnumOrigins.EmploymentTypeFlsaStatusPayPeriod,
}).then((res: EmploymentsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
  EmploymentsRetrieveResponse,
  EmploymentsRetrieveShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.employments.employmentsRetrieve({
  xAccountToken: "Crest",
  expand: EmploymentsRetrieveExpand.PayGroup,
  id: "fa36b1cb-d926-4eb5-9f7a-98c39fd25176",
  includeRemoteData: false,
  remoteFields: EmploymentsRetrieveRemoteFields.FlsaStatusPayFrequency,
  showEnumOrigins: EmploymentsRetrieveShowEnumOrigins.EmploymentTypeFlsaStatus,
}).then((res: EmploymentsRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.EmploymentsRetrieveRequest](../../models/operations/employmentsretrieverequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.EmploymentsRetrieveResponse](../../models/operations/employmentsretrieveresponse.md)>**

