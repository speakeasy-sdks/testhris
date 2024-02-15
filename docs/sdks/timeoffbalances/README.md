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
  PolicyType,
  TimeOffBalancesListQueryParamExpand,
  TimeOffBalancesListQueryParamRemoteFields,
  TimeOffBalancesListQueryParamShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

async function run() {
  const sdk = new Hris({
    security: {
      tokenAuth: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.timeOffBalances.timeOffBalancesList({
    xAccountToken: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.TimeOffBalancesListRequest](../../sdk/models/operations/timeoffbalanceslistrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.TimeOffBalancesListResponse](../../sdk/models/operations/timeoffbalanceslistresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## timeOffBalancesRetrieve

Returns a `TimeOffBalance` object with the given `id`.

### Example Usage

```typescript
import { Hris } from "HRIS";
import {
  TimeOffBalancesRetrieveQueryParamExpand,
  TimeOffBalancesRetrieveQueryParamRemoteFields,
  TimeOffBalancesRetrieveQueryParamShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

async function run() {
  const sdk = new Hris({
    security: {
      tokenAuth: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.timeOffBalances.timeOffBalancesRetrieve({
    xAccountToken: "<value>",
    id: "1d09d575-df78-4c43-8b81-268066ab9d39",
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
| `request`                                                                                                  | [operations.TimeOffBalancesRetrieveRequest](../../sdk/models/operations/timeoffbalancesretrieverequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.TimeOffBalancesRetrieveResponse](../../sdk/models/operations/timeoffbalancesretrieveresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
