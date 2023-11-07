# TimeOffBalances
(*.timeOffBalances*)

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

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.timeOffBalances.timeOffBalancesList({
    xAccountToken: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
  TimeOffBalancesRetrieveQueryParamExpand,
  TimeOffBalancesRetrieveQueryParamRemoteFields,
  TimeOffBalancesRetrieveQueryParamShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.timeOffBalances.timeOffBalancesRetrieve({
    xAccountToken: "string",
    id: "1d09d575-df78-4c43-8b81-268066ab9d39",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.TimeOffBalancesRetrieveRequest](../../models/operations/timeoffbalancesretrieverequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.TimeOffBalancesRetrieveResponse](../../models/operations/timeoffbalancesretrieveresponse.md)>**

