# employments

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
  xAccountToken: "dicta",
  createdAfter: new Date("2021-12-19T07:31:04.219Z"),
  createdBefore: new Date("2022-11-13T19:04:59.225Z"),
  cursor: "dolores",
  employeeId: "distinctio",
  expand: EmploymentsListExpand.PayGroup,
  includeDeletedData: false,
  includeRemoteData: false,
  modifiedAfter: new Date("2022-07-15T22:48:14.867Z"),
  modifiedBefore: new Date("2021-04-27T11:41:31.258Z"),
  orderBy: EmploymentsListOrderBy.MinusEffectiveDate,
  pageSize: 204865,
  remoteFields: EmploymentsListRemoteFields.EmploymentTypeFlsaStatusPayFrequency,
  remoteId: "magni",
  showEnumOrigins: EmploymentsListShowEnumOrigins.EmploymentTypePayPeriod,
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
  xAccountToken: "sunt",
  expand: EmploymentsRetrieveExpand.EmployeePayGroup,
  id: "bf0cbb1e-31b8-4b90-b344-3a1108e0adcf",
  includeRemoteData: false,
  remoteFields: EmploymentsRetrieveRemoteFields.EmploymentTypeFlsaStatusPayPeriod,
  showEnumOrigins: EmploymentsRetrieveShowEnumOrigins.FlsaStatusPayFrequencyPayPeriod,
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

