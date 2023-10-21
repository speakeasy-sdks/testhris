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
import { TimeOffRequestRequestType, TimeOffRequestStatus, TimeOffRequestUnits } from "HRIS/dist/sdk/models/shared";

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.timeOff.timeOffCreate({
    timeOffEndpointRequest: {
      model: {
        amount: 3,
        approver: "9efbc633-3387-4306-aa55-e2c635e6bb4f",
        employee: "d2f972d0-2526-434b-9409-4c3b468e08f0",
        employeeNote: "Moving into the new apartment Kendall Roy gave me!",
        endTime: new Date("2020-11-17T00:00:00Z"),
        integrationParams: {
          "unique_integration_field": "string",
        },
        linkedAccountParams: {
          "unique_linked_account_field": "string",
        },
        requestType: TimeOffRequestRequestType.Vacation,
        startTime: new Date("2020-11-10T00:00:00Z"),
        status: TimeOffRequestStatus.Approved,
        units: TimeOffRequestUnits.Days,
      },
    },
    xAccountToken: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
  TimeOffListShowEnumOrigins,
  TimeOffListStatus,
} from "HRIS/dist/sdk/models/operations";

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.timeOff.timeOffList({
    xAccountToken: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.timeOff.timeOffMetaPostRetrieve({
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
  TimeOffRetrieveShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.timeOff.timeOffRetrieve({
    xAccountToken: "string",
    id: "a170075d-def5-4fcf-a2bb-ba7c32c29e53",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.TimeOffRetrieveRequest](../../models/operations/timeoffretrieverequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.TimeOffRetrieveResponse](../../models/operations/timeoffretrieveresponse.md)>**

