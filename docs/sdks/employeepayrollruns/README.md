# EmployeePayrollRuns

### Available Operations

* [employeePayrollRunsList](#employeepayrollrunslist) - Returns a list of `EmployeePayrollRun` objects.
* [employeePayrollRunsRetrieve](#employeepayrollrunsretrieve) - Returns an `EmployeePayrollRun` object with the given `id`.

## employeePayrollRunsList

Returns a list of `EmployeePayrollRun` objects.

### Example Usage

```typescript
import { Hris } from "HRIS";
import {
  EmployeePayrollRunsListExpand,
  EmployeePayrollRunsListResponse,
  EmployeePayrollRunsListSecurity,
} from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();
const operationSecurity: EmployeePayrollRunsListSecurity = {
  tokenAuth: "",
};

sdk.employeePayrollRuns.employeePayrollRunsList({
  xAccountToken: "nihil",
  createdAfter: new Date("2021-01-17T23:08:44.457Z"),
  createdBefore: new Date("2022-05-25T05:33:11.349Z"),
  cursor: "voluptate",
  employeeId: "cum",
  endedAfter: new Date("2022-12-17T16:42:52.927Z"),
  endedBefore: new Date("2022-09-19T18:36:39.009Z"),
  expand: EmployeePayrollRunsListExpand.PayrollRun,
  includeDeletedData: false,
  includeRemoteData: false,
  modifiedAfter: new Date("2022-08-22T19:15:58.586Z"),
  modifiedBefore: new Date("2022-07-09T11:22:20.922Z"),
  pageSize: 118727,
  payrollRunId: "harum",
  remoteId: "enim",
  startedAfter: new Date("2021-10-04T09:10:06.610Z"),
  startedBefore: new Date("2022-10-22T18:12:12.288Z"),
}, operationSecurity).then((res: EmployeePayrollRunsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.EmployeePayrollRunsListRequest](../../models/operations/employeepayrollrunslistrequest.md)   | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `security`                                                                                               | [operations.EmployeePayrollRunsListSecurity](../../models/operations/employeepayrollrunslistsecurity.md) | :heavy_check_mark:                                                                                       | The security requirements to use for the request.                                                        |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.EmployeePayrollRunsListResponse](../../models/operations/employeepayrollrunslistresponse.md)>**


## employeePayrollRunsRetrieve

Returns an `EmployeePayrollRun` object with the given `id`.

### Example Usage

```typescript
import { Hris } from "HRIS";
import {
  EmployeePayrollRunsRetrieveExpand,
  EmployeePayrollRunsRetrieveResponse,
  EmployeePayrollRunsRetrieveSecurity,
} from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();
const operationSecurity: EmployeePayrollRunsRetrieveSecurity = {
  tokenAuth: "",
};

sdk.employeePayrollRuns.employeePayrollRunsRetrieve({
  xAccountToken: "ipsum",
  expand: EmployeePayrollRunsRetrieveExpand.PayrollRun,
  id: "99d488e1-e91e-4450-ad2a-bd44269802d5",
  includeRemoteData: false,
}, operationSecurity).then((res: EmployeePayrollRunsRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.EmployeePayrollRunsRetrieveRequest](../../models/operations/employeepayrollrunsretrieverequest.md)   | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `security`                                                                                                       | [operations.EmployeePayrollRunsRetrieveSecurity](../../models/operations/employeepayrollrunsretrievesecurity.md) | :heavy_check_mark:                                                                                               | The security requirements to use for the request.                                                                |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.EmployeePayrollRunsRetrieveResponse](../../models/operations/employeepayrollrunsretrieveresponse.md)>**

