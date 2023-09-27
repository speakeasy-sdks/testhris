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
  xAccountToken: "praesentium",
  createdAfter: new Date("2022-10-31T23:49:03.388Z"),
  createdBefore: new Date("2022-02-05T15:41:25.512Z"),
  cursor: "cum",
  employeeId: "perferendis",
  endedAfter: new Date("2022-07-23T18:36:43.822Z"),
  endedBefore: new Date("2022-01-08T10:49:12.847Z"),
  expand: EmployeePayrollRunsListExpand.Employee,
  includeDeletedData: false,
  includeRemoteData: false,
  modifiedAfter: new Date("2022-09-14T21:48:41.971Z"),
  modifiedBefore: new Date("2022-11-18T15:56:41.921Z"),
  pageSize: 688661,
  payrollRunId: "enim",
  remoteId: "accusamus",
  startedAfter: new Date("2022-01-30T20:15:26.045Z"),
  startedBefore: new Date("2022-10-13T20:38:16.426Z"),
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
  xAccountToken: "quidem",
  expand: EmployeePayrollRunsRetrieveExpand.EmployeePayrollRun,
  id: "9d488e1e-91e4-450a-92ab-d44269802d50",
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

