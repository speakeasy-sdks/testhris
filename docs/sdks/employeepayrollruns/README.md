# EmployeePayrollRuns
(*.employeePayrollRuns*)

### Available Operations

* [employeePayrollRunsList](#employeepayrollrunslist) - Returns a list of `EmployeePayrollRun` objects.
* [employeePayrollRunsRetrieve](#employeepayrollrunsretrieve) - Returns an `EmployeePayrollRun` object with the given `id`.

## employeePayrollRunsList

Returns a list of `EmployeePayrollRun` objects.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { EmployeePayrollRunsListQueryParamExpand } from "HRIS/dist/sdk/models/operations";

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.employeePayrollRuns.employeePayrollRunsList({
    xAccountToken: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { EmployeePayrollRunsRetrieveQueryParamExpand } from "HRIS/dist/sdk/models/operations";

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.employeePayrollRuns.employeePayrollRunsRetrieve({
    xAccountToken: "string",
    id: "99668815-b464-40c6-9206-8627a1703c31",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.EmployeePayrollRunsRetrieveRequest](../../models/operations/employeepayrollrunsretrieverequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.EmployeePayrollRunsRetrieveResponse](../../models/operations/employeepayrollrunsretrieveresponse.md)>**

