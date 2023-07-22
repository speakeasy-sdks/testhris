# timeOffBalances

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

const sdk = new Hris();

sdk.timeOffBalances.timeOffBalancesList({
  xAccountToken: "suscipit",
  createdAfter: new Date("2022-11-08T01:11:44.885Z"),
  createdBefore: new Date("2020-12-11T23:55:22.223Z"),
  cursor: "ratione",
  employeeId: "animi",
  expand: TimeOffBalancesListExpand.Employee,
  includeDeletedData: false,
  includeRemoteData: false,
  modifiedAfter: new Date("2020-06-01T00:59:41.712Z"),
  modifiedBefore: new Date("2022-11-26T12:01:10.841Z"),
  pageSize: 90233,
  policyType: TimeOffBalancesListPolicyType.Personal,
  remoteFields: TimeOffBalancesListRemoteFields.PolicyType,
  remoteId: "natus",
  showEnumOrigins: TimeOffBalancesListShowEnumOrigins.PolicyType,
}, {
  tokenAuth: "",
}).then((res: TimeOffBalancesListResponse) => {
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
  TimeOffBalancesRetrieveShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();

sdk.timeOffBalances.timeOffBalancesRetrieve({
  xAccountToken: "occaecati",
  expand: TimeOffBalancesRetrieveExpand.Employee,
  id: "6312fde0-4771-4778-bf61-d017476360a1",
  includeRemoteData: false,
  remoteFields: TimeOffBalancesRetrieveRemoteFields.PolicyType,
  showEnumOrigins: TimeOffBalancesRetrieveShowEnumOrigins.PolicyType,
}, {
  tokenAuth: "",
}).then((res: TimeOffBalancesRetrieveResponse) => {
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

