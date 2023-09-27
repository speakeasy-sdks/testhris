# TimeOff
(*timeOff*)

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
import { TimeOffCreateResponse } from "HRIS/dist/sdk/models/operations";
import { TimeOffRequestRequestType, TimeOffRequestStatus, TimeOffRequestUnits } from "HRIS/dist/sdk/models/shared";

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.timeOff.timeOffCreate({
  timeOffEndpointRequest: {
    model: {
      amount: 3,
      approver: "9efbc633-3387-4306-aa55-e2c635e6bb4f",
      employee: "d2f972d0-2526-434b-9409-4c3b468e08f0",
      employeeNote: "Moving into the new apartment Kendall Roy gave me!",
      endTime: new Date("2020-11-17T00:00:00Z"),
      integrationParams: {
        "cum": "consectetur",
      },
      linkedAccountParams: {
        "in": "exercitationem",
      },
      requestType: TimeOffRequestRequestType.Vacation,
      startTime: new Date("2020-11-10T00:00:00Z"),
      status: TimeOffRequestStatus.Approved,
      units: TimeOffRequestUnits.Days,
    },
  },
  xAccountToken: "earum",
  isDebugMode: false,
  runAsync: false,
}).then((res: TimeOffCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.TimeOffCreateRequest](../../models/operations/timeoffcreaterequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


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
  TimeOffListShowEnumOrigins,
  TimeOffListStatus,
} from "HRIS/dist/sdk/models/operations";

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.timeOff.timeOffList({
  xAccountToken: "facere",
  approverId: "numquam",
  createdAfter: new Date("2021-11-08T23:21:08.200Z"),
  createdBefore: new Date("2020-11-28T15:07:06.228Z"),
  cursor: "saepe",
  employeeId: "necessitatibus",
  expand: TimeOffListExpand.Approver,
  includeDeletedData: false,
  includeRemoteData: false,
  modifiedAfter: new Date("2022-01-03T21:58:53.395Z"),
  modifiedBefore: new Date("2022-10-01T23:04:48.771Z"),
  pageSize: 228263,
  remoteFields: TimeOffListRemoteFields.RequestType,
  remoteId: "dignissimos",
  requestType: TimeOffListRequestType.Volunteer,
  showEnumOrigins: TimeOffListShowEnumOrigins.Units,
  status: TimeOffListStatus.Cancelled,
}).then((res: TimeOffListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.TimeOffListRequest](../../models/operations/timeofflistrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.TimeOffListResponse](../../models/operations/timeofflistresponse.md)>**


## timeOffMetaPostRetrieve

Returns metadata for `TimeOff` POSTs.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { TimeOffMetaPostRetrieveResponse } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.timeOff.timeOffMetaPostRetrieve({
  xAccountToken: "corporis",
}).then((res: TimeOffMetaPostRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.TimeOffMetaPostRetrieveRequest](../../models/operations/timeoffmetapostretrieverequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


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
  TimeOffRetrieveShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.timeOff.timeOffRetrieve({
  xAccountToken: "harum",
  expand: TimeOffRetrieveExpand.Employee,
  id: "0eb1ea42-6555-4ba3-8287-44ed53b88f3a",
  includeRemoteData: false,
  remoteFields: TimeOffRetrieveRemoteFields.RequestTypeUnits,
  showEnumOrigins: TimeOffRetrieveShowEnumOrigins.Units,
}).then((res: TimeOffRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.TimeOffRetrieveRequest](../../models/operations/timeoffretrieverequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.TimeOffRetrieveResponse](../../models/operations/timeoffretrieveresponse.md)>**

