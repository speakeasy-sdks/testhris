# timeOff

### Available Operations

* [timeOffCreate](#timeoffcreate) - Creates a `TimeOff` object with the given values.
* [timeOffList](#timeofflist) - Returns a list of `TimeOff` objects.
* [timeOffMetaPostRetrieve](#timeoffmetapostretrieve) - Returns metadata for `TimeOff` POSTs.
* [timeOffRetrieve](#timeoffretrieve) - Returns a `TimeOff` object with the given `id`.

## timeOffCreate

Creates a `TimeOff` object with the given values.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { TimeOffCreateResponse, TimeOffCreateSecurity } from "HRIS/dist/sdk/models/operations";
import { TimeOffRequestRequestType, TimeOffRequestStatus, TimeOffRequestUnits } from "HRIS/dist/sdk/models/shared";

const sdk = new Hris();
const operationSecurity: TimeOffCreateSecurity = {
  tokenAuth: "",
};

sdk.timeOff.timeOffCreate({
  timeOffEndpointRequest: {
    model: {
      amount: 3,
      approver: "9efbc633-3387-4306-aa55-e2c635e6bb4f",
      employee: "d2f972d0-2526-434b-9409-4c3b468e08f0",
      employeeNote: "Moving into the new apartment Kendall Roy gave me!",
      endTime: new Date("2020-11-17T00:00:00Z"),
      integrationParams: {
        "eum": "reiciendis",
        "provident": "aspernatur",
      },
      linkedAccountParams: {
        "quasi": "animi",
        "nostrum": "mollitia",
      },
      requestType: TimeOffRequestRequestType.Vacation,
      startTime: new Date("2020-11-10T00:00:00Z"),
      status: TimeOffRequestStatus.Approved,
      units: TimeOffRequestUnits.Days,
    },
  },
  xAccountToken: "provident",
  isDebugMode: false,
  runAsync: false,
}, operationSecurity).then((res: TimeOffCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.TimeOffCreateRequest](../../models/operations/timeoffcreaterequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.TimeOffCreateSecurity](../../models/operations/timeoffcreatesecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.TimeOffCreateResponse](../../models/operations/timeoffcreateresponse.md)>**


## timeOffList

Returns a list of `TimeOff` objects.

### Example Usage

```typescript
import { Hris } from "HRIS";
import {
  TimeOffListExpand,
  TimeOffListRemoteFields,
  TimeOffListRequestType,
  TimeOffListResponse,
  TimeOffListSecurity,
  TimeOffListShowEnumOrigins,
  TimeOffListStatus,
} from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();
const operationSecurity: TimeOffListSecurity = {
  tokenAuth: "",
};

sdk.timeOff.timeOffList({
  xAccountToken: "possimus",
  approverId: "animi",
  createdAfter: new Date("2022-08-09T00:01:50.407Z"),
  createdBefore: new Date("2022-01-01T06:19:29.377Z"),
  cursor: "doloribus",
  employeeId: "ullam",
  expand: TimeOffListExpand.Employee,
  includeDeletedData: false,
  includeRemoteData: false,
  modifiedAfter: new Date("2021-02-15T12:37:51.202Z"),
  modifiedBefore: new Date("2021-08-28T09:50:26.086Z"),
  pageSize: 813054,
  remoteFields: TimeOffListRemoteFields.RequestTypeStatus,
  remoteId: "voluptatibus",
  requestType: TimeOffListRequestType.Sick,
  showEnumOrigins: TimeOffListShowEnumOrigins.Units,
  status: TimeOffListStatus.Requested,
}, operationSecurity).then((res: TimeOffListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.TimeOffListRequest](../../models/operations/timeofflistrequest.md)   | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.TimeOffListSecurity](../../models/operations/timeofflistsecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.TimeOffListResponse](../../models/operations/timeofflistresponse.md)>**


## timeOffMetaPostRetrieve

Returns metadata for `TimeOff` POSTs.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { TimeOffMetaPostRetrieveResponse, TimeOffMetaPostRetrieveSecurity } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();
const operationSecurity: TimeOffMetaPostRetrieveSecurity = {
  tokenAuth: "",
};

sdk.timeOff.timeOffMetaPostRetrieve({
  xAccountToken: "cumque",
}, operationSecurity).then((res: TimeOffMetaPostRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.TimeOffMetaPostRetrieveRequest](../../models/operations/timeoffmetapostretrieverequest.md)   | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `security`                                                                                               | [operations.TimeOffMetaPostRetrieveSecurity](../../models/operations/timeoffmetapostretrievesecurity.md) | :heavy_check_mark:                                                                                       | The security requirements to use for the request.                                                        |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.TimeOffMetaPostRetrieveResponse](../../models/operations/timeoffmetapostretrieveresponse.md)>**


## timeOffRetrieve

Returns a `TimeOff` object with the given `id`.

### Example Usage

```typescript
import { Hris } from "HRIS";
import {
  TimeOffRetrieveExpand,
  TimeOffRetrieveRemoteFields,
  TimeOffRetrieveResponse,
  TimeOffRetrieveSecurity,
  TimeOffRetrieveShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();
const operationSecurity: TimeOffRetrieveSecurity = {
  tokenAuth: "",
};

sdk.timeOff.timeOffRetrieve({
  xAccountToken: "vitae",
  expand: TimeOffRetrieveExpand.EmployeeApprover,
  id: "4512c103-2648-4dc2-b615-199ebfd0e9fe",
  includeRemoteData: false,
  remoteFields: TimeOffRetrieveRemoteFields.RequestTypeStatusUnits,
  showEnumOrigins: TimeOffRetrieveShowEnumOrigins.StatusUnits,
}, operationSecurity).then((res: TimeOffRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.TimeOffRetrieveRequest](../../models/operations/timeoffretrieverequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.TimeOffRetrieveSecurity](../../models/operations/timeoffretrievesecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.TimeOffRetrieveResponse](../../models/operations/timeoffretrieveresponse.md)>**

