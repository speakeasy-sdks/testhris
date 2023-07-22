# payrollRuns

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

const sdk = new Hris();

sdk.payrollRuns.payrollRunsList({
  xAccountToken: "et",
  createdAfter: new Date("2022-12-11T13:44:20.631Z"),
  createdBefore: new Date("2022-11-30T09:58:30.487Z"),
  cursor: "consectetur",
  endedAfter: new Date("2022-05-21T17:17:20.623Z"),
  endedBefore: new Date("2022-11-25T18:47:58.319Z"),
  includeDeletedData: false,
  includeRemoteData: false,
  modifiedAfter: new Date("2022-12-20T14:34:53.149Z"),
  modifiedBefore: new Date("2022-02-21T23:29:55.837Z"),
  pageSize: 649832,
  remoteFields: PayrollRunsListRemoteFields.RunState,
  remoteId: "corrupti",
  runType: PayrollRunsListRunType.OffCycle,
  showEnumOrigins: PayrollRunsListShowEnumOrigins.RunState,
  startedAfter: new Date("2022-06-03T05:52:14.954Z"),
  startedBefore: new Date("2022-03-25T13:15:35.424Z"),
}, {
  tokenAuth: "",
}).then((res: PayrollRunsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.PayrollRunsListRequest](../../models/operations/payrollrunslistrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.PayrollRunsListSecurity](../../models/operations/payrollrunslistsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


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

const sdk = new Hris();

sdk.payrollRuns.payrollRunsRetrieve({
  xAccountToken: "explicabo",
  id: "6071f93f-5f06-442d-ac7a-f515cc413aa6",
  includeRemoteData: false,
  remoteFields: PayrollRunsRetrieveRemoteFields.RunState,
  showEnumOrigins: PayrollRunsRetrieveShowEnumOrigins.RunStateRunType,
}, {
  tokenAuth: "",
}).then((res: PayrollRunsRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.PayrollRunsRetrieveRequest](../../models/operations/payrollrunsretrieverequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.PayrollRunsRetrieveSecurity](../../models/operations/payrollrunsretrievesecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.PayrollRunsRetrieveResponse](../../models/operations/payrollrunsretrieveresponse.md)>**

