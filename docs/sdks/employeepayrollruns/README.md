# EmployeePayrollRuns
(*employeePayrollRuns*)

### Available Operations

* [employeePayrollRunsList](#employeepayrollrunslist) - Returns a list of `EmployeePayrollRun` objects.
* [employeePayrollRunsRetrieve](#employeepayrollrunsretrieve) - Returns an `EmployeePayrollRun` object with the given `id`.

## employeePayrollRunsList

Returns a list of `EmployeePayrollRun` objects.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { EmployeePayrollRunsListExpand, EmployeePayrollRunsListResponse } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.employeePayrollRuns.employeePayrollRunsList({
  xAccountToken: "Granite SAS Music",
  createdAfter: new Date("2021-04-30T02:40:35.398Z"),
  createdBefore: new Date("2022-03-09T23:15:33.585Z"),
  cursor: "female tan grow",
  employeeId: "synthesizing",
  endedAfter: new Date("2022-07-20T10:27:21.146Z"),
  endedBefore: new Date("2022-06-28T12:48:20.693Z"),
  expand: EmployeePayrollRunsListExpand.EmployeePayrollRun,
  includeDeletedData: false,
  includeRemoteData: false,
  modifiedAfter: new Date("2022-09-13T12:31:00.057Z"),
  modifiedBefore: new Date("2023-04-10T02:47:15.345Z"),
  pageSize: 282179,
  payrollRunId: "Plastic",
  remoteId: "Guadeloupe Virginia Gender",
  startedAfter: new Date("2021-11-13T01:51:58.347Z"),
  startedBefore: new Date("2022-01-26T09:53:27.960Z"),
}).then((res: EmployeePayrollRunsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.EmployeePayrollRunsListRequest](../../models/operations/employeepayrollrunslistrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.EmployeePayrollRunsListResponse](../../models/operations/employeepayrollrunslistresponse.md)>**


## employeePayrollRunsRetrieve

Returns an `EmployeePayrollRun` object with the given `id`.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { EmployeePayrollRunsRetrieveExpand, EmployeePayrollRunsRetrieveResponse } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.employeePayrollRuns.employeePayrollRunsRetrieve({
  xAccountToken: "Gender generate",
  expand: EmployeePayrollRunsRetrieveExpand.Employee,
  id: "5b4640c6-9206-4862-ba17-03c31315faeb",
  includeRemoteData: false,
}).then((res: EmployeePayrollRunsRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.EmployeePayrollRunsRetrieveRequest](../../models/operations/employeepayrollrunsretrieverequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.EmployeePayrollRunsRetrieveResponse](../../models/operations/employeepayrollrunsretrieveresponse.md)>**

