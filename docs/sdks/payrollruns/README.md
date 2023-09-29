# PayrollRuns
(*payrollRuns*)

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
  xAccountToken: "Virtual index",
  createdAfter: new Date("2022-05-07T09:57:09.474Z"),
  createdBefore: new Date("2023-04-16T16:36:33.026Z"),
  cursor: "Plastic possimus",
  endedAfter: new Date("2023-10-01T12:19:59.636Z"),
  endedBefore: new Date("2021-08-06T17:34:56.514Z"),
  includeDeletedData: false,
  includeRemoteData: false,
  modifiedAfter: new Date("2021-11-24T06:23:52.477Z"),
  modifiedBefore: new Date("2023-01-21T18:08:54.956Z"),
  pageSize: 201585,
  remoteFields: PayrollRunsListRemoteFields.RunState,
  remoteId: "Cargo generate Web",
  runType: PayrollRunsListRunType.SignOnBonus,
  showEnumOrigins: PayrollRunsListShowEnumOrigins.RunStateRunType,
  startedAfter: new Date("2021-02-10T20:34:06.963Z"),
  startedBefore: new Date("2022-08-29T14:06:30.491Z"),
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
  xAccountToken: "Yemen Hermaphrodite Gibraltar",
  id: "a17ceded-36a3-45ad-bc07-d0ae903fe612",
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

