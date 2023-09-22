# PayrollRuns

### Available Operations

* [payrollRunsList](#payrollrunslist) - Returns a list of `PayrollRun` objects.
* [payrollRunsRetrieve](#payrollrunsretrieve) - Returns a `PayrollRun` object with the given `id`.

## payrollRunsList

Returns a list of `PayrollRun` objects.

### Example Usage

```typescript
import { Hris } from "HRIS";
import {
  PayrollRunsListRemoteFields,
  PayrollRunsListResponse,
  PayrollRunsListRunType,
  PayrollRunsListShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.payrollRuns.payrollRunsList({
  xAccountToken: "distinctio",
  createdAfter: new Date("2022-12-02T08:37:36.325Z"),
  createdBefore: new Date("2021-07-16T01:55:06.595Z"),
  cursor: "adipisci",
  endedAfter: new Date("2022-07-09T05:02:22.250Z"),
  endedBefore: new Date("2022-03-16T07:36:38.247Z"),
  includeDeletedData: false,
  includeRemoteData: false,
  modifiedAfter: new Date("2022-01-15T21:42:01.969Z"),
  modifiedBefore: new Date("2022-07-17T18:42:13.476Z"),
  pageSize: 503427,
  remoteFields: PayrollRunsListRemoteFields.RunStateRunType,
  remoteId: "a",
  runType: PayrollRunsListRunType.Termination,
  showEnumOrigins: PayrollRunsListShowEnumOrigins.RunStateRunType,
  startedAfter: new Date("2022-11-26T10:10:26.600Z"),
  startedBefore: new Date("2021-02-19T06:17:20.977Z"),
}).then((res: PayrollRunsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.PayrollRunsListRequest](../../models/operations/payrollrunslistrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.PayrollRunsListResponse](../../models/operations/payrollrunslistresponse.md)>**


## payrollRunsRetrieve

Returns a `PayrollRun` object with the given `id`.

### Example Usage

```typescript
import { Hris } from "HRIS";
import {
  PayrollRunsRetrieveRemoteFields,
  PayrollRunsRetrieveResponse,
  PayrollRunsRetrieveShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.payrollRuns.payrollRunsRetrieve({
  xAccountToken: "sint",
  id: "dd2efd12-1aa6-4f1e-a74b-db04f1575608",
  includeRemoteData: false,
  remoteFields: PayrollRunsRetrieveRemoteFields.RunState,
  showEnumOrigins: PayrollRunsRetrieveShowEnumOrigins.RunType,
}).then((res: PayrollRunsRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.PayrollRunsRetrieveRequest](../../models/operations/payrollrunsretrieverequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.PayrollRunsRetrieveResponse](../../models/operations/payrollrunsretrieveresponse.md)>**

