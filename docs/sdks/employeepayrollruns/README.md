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
import { EmployeePayrollRunsListQueryParamExpand } from "HRIS/dist/sdk/models/operations";

async function run() {
  const sdk = new Hris({
    security: {
      tokenAuth: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.employeePayrollRuns.employeePayrollRunsList({
    xAccountToken: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.EmployeePayrollRunsListRequest](../../sdk/models/operations/employeepayrollrunslistrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.EmployeePayrollRunsListResponse](../../sdk/models/operations/employeepayrollrunslistresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## employeePayrollRunsRetrieve

Returns an `EmployeePayrollRun` object with the given `id`.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { EmployeePayrollRunsRetrieveQueryParamExpand } from "HRIS/dist/sdk/models/operations";

async function run() {
  const sdk = new Hris({
    security: {
      tokenAuth: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.employeePayrollRuns.employeePayrollRunsRetrieve({
    xAccountToken: "string",
    id: "99668815-b464-40c6-9206-8627a1703c31",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.EmployeePayrollRunsRetrieveRequest](../../sdk/models/operations/employeepayrollrunsretrieverequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.EmployeePayrollRunsRetrieveResponse](../../sdk/models/operations/employeepayrollrunsretrieveresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
