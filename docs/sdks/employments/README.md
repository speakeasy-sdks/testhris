# Employments

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
  EmploymentsListSecurity,
  EmploymentsListShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();
const operationSecurity: EmploymentsListSecurity = {
  tokenAuth: "",
};

sdk.employments.employmentsList({
  xAccountToken: "quaerat",
  createdAfter: new Date("2022-07-29T17:02:39.743Z"),
  createdBefore: new Date("2020-05-06T13:19:34.143Z"),
  cursor: "qui",
  employeeId: "dolorum",
  expand: EmploymentsListExpand.PayGroup,
  includeDeletedData: false,
  includeRemoteData: false,
  modifiedAfter: new Date("2022-04-25T01:36:09.517Z"),
  modifiedBefore: new Date("2022-10-14T08:09:09.090Z"),
  orderBy: EmploymentsListOrderBy.EffectiveDate,
  pageSize: 947371,
  remoteFields: EmploymentsListRemoteFields.EmploymentTypeFlsaStatusPayFrequencyPayPeriod,
  remoteId: "tempore",
  showEnumOrigins: EmploymentsListShowEnumOrigins.PayFrequencyPayPeriod,
}, operationSecurity).then((res: EmploymentsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.EmploymentsListRequest](../../models/operations/employmentslistrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.EmploymentsListSecurity](../../models/operations/employmentslistsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


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
  EmploymentsRetrieveSecurity,
  EmploymentsRetrieveShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();
const operationSecurity: EmploymentsRetrieveSecurity = {
  tokenAuth: "",
};

sdk.employments.employmentsRetrieve({
  xAccountToken: "numquam",
  expand: EmploymentsRetrieveExpand.Employee,
  id: "3f870b32-6b5a-4734-a9cd-b1a8422bb679",
  includeRemoteData: false,
  remoteFields: EmploymentsRetrieveRemoteFields.PayFrequency,
  showEnumOrigins: EmploymentsRetrieveShowEnumOrigins.EmploymentTypeFlsaStatusPayFrequency,
}, operationSecurity).then((res: EmploymentsRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.EmploymentsRetrieveRequest](../../models/operations/employmentsretrieverequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.EmploymentsRetrieveSecurity](../../models/operations/employmentsretrievesecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.EmploymentsRetrieveResponse](../../models/operations/employmentsretrieveresponse.md)>**

