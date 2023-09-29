# TimeOffBalances
(*timeOffBalances*)

### Available Operations

* [timeOffBalancesList](#timeoffbalanceslist) - Returns a list of `TimeOffBalance` objects.
* [timeOffBalancesRetrieve](#timeoffbalancesretrieve) - Returns a `TimeOffBalance` object with the given `id`.

## timeOffBalancesList

Returns a list of `TimeOffBalance` objects.

### Example Usage

```typescript
import { Hris } from "HRIS";
import {
  TimeOffBalancesListExpand,
  TimeOffBalancesListPolicyType,
  TimeOffBalancesListRemoteFields,
  TimeOffBalancesListResponse,
  TimeOffBalancesListShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.timeOffBalances.timeOffBalancesList({
  xAccountToken: "Hawaii Bedfordshire",
  createdAfter: new Date("2023-12-13T11:53:18.710Z"),
  createdBefore: new Date("2023-07-23T13:40:14.865Z"),
  cursor: "Factors stunning",
  employeeId: "Extended",
  expand: TimeOffBalancesListExpand.Employee,
  includeDeletedData: false,
  includeRemoteData: false,
  modifiedAfter: new Date("2022-03-09T15:48:56.144Z"),
  modifiedBefore: new Date("2023-11-30T04:39:20.833Z"),
  pageSize: 804722,
  policyType: TimeOffBalancesListPolicyType.JuryDuty,
  remoteFields: TimeOffBalancesListRemoteFields.PolicyType,
  remoteId: "Northwest",
  showEnumOrigins: TimeOffBalancesListShowEnumOrigins.PolicyType,
}).then((res: TimeOffBalancesListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.TimeOffBalancesListRequest](../../models/operations/timeoffbalanceslistrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.TimeOffBalancesListResponse](../../models/operations/timeoffbalanceslistresponse.md)>**


## timeOffBalancesRetrieve

Returns a `TimeOffBalance` object with the given `id`.

### Example Usage

```typescript
import { Hris } from "HRIS";
import {
  TimeOffBalancesRetrieveExpand,
  TimeOffBalancesRetrieveRemoteFields,
  TimeOffBalancesRetrieveResponse,
  TimeOffBalancesRetrieveShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.timeOffBalances.timeOffBalancesRetrieve({
  xAccountToken: "Martin",
  expand: TimeOffBalancesRetrieveExpand.Employee,
  id: "d575df78-c430-4b81-a680-66ab9d39a5f2",
  includeRemoteData: false,
  remoteFields: TimeOffBalancesRetrieveRemoteFields.PolicyType,
  showEnumOrigins: TimeOffBalancesRetrieveShowEnumOrigins.PolicyType,
}).then((res: TimeOffBalancesRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.TimeOffBalancesRetrieveRequest](../../models/operations/timeoffbalancesretrieverequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.TimeOffBalancesRetrieveResponse](../../models/operations/timeoffbalancesretrieveresponse.md)>**

