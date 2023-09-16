# TimeOffBalances

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
  TimeOffBalancesListSecurity,
  TimeOffBalancesListShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();
const operationSecurity: TimeOffBalancesListSecurity = {
  tokenAuth: "",
};

sdk.timeOffBalances.timeOffBalancesList({
  xAccountToken: "totam",
  createdAfter: new Date("2021-12-15T01:59:29.520Z"),
  createdBefore: new Date("2022-12-05T00:59:14.180Z"),
  cursor: "rerum",
  employeeId: "sed",
  expand: TimeOffBalancesListExpand.Employee,
  includeDeletedData: false,
  includeRemoteData: false,
  modifiedAfter: new Date("2022-08-09T14:55:41.766Z"),
  modifiedBefore: new Date("2020-11-16T19:55:44.497Z"),
  pageSize: 451822,
  policyType: TimeOffBalancesListPolicyType.Vacation,
  remoteFields: TimeOffBalancesListRemoteFields.PolicyType,
  remoteId: "ab",
  showEnumOrigins: TimeOffBalancesListShowEnumOrigins.PolicyType,
}, operationSecurity).then((res: TimeOffBalancesListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.TimeOffBalancesListRequest](../../models/operations/timeoffbalanceslistrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.TimeOffBalancesListSecurity](../../models/operations/timeoffbalanceslistsecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


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
  TimeOffBalancesRetrieveSecurity,
  TimeOffBalancesRetrieveShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();
const operationSecurity: TimeOffBalancesRetrieveSecurity = {
  tokenAuth: "",
};

sdk.timeOffBalances.timeOffBalancesRetrieve({
  xAccountToken: "iste",
  expand: TimeOffBalancesRetrieveExpand.Employee,
  id: "4a276b26-916f-4e1f-88f4-294e3698f447",
  includeRemoteData: false,
  remoteFields: TimeOffBalancesRetrieveRemoteFields.PolicyType,
  showEnumOrigins: TimeOffBalancesRetrieveShowEnumOrigins.PolicyType,
}, operationSecurity).then((res: TimeOffBalancesRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.TimeOffBalancesRetrieveRequest](../../models/operations/timeoffbalancesretrieverequest.md)   | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `security`                                                                                               | [operations.TimeOffBalancesRetrieveSecurity](../../models/operations/timeoffbalancesretrievesecurity.md) | :heavy_check_mark:                                                                                       | The security requirements to use for the request.                                                        |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.TimeOffBalancesRetrieveResponse](../../models/operations/timeoffbalancesretrieveresponse.md)>**

