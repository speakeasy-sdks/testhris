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
  PayrollRunsListQueryParamRemoteFields,
  PayrollRunsListQueryParamShowEnumOrigins,
  RunType,
} from "HRIS/dist/sdk/models/operations";

async function run() {
  const sdk = new Hris({
    security: {
      tokenAuth: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.payrollRuns.payrollRunsList({
    xAccountToken: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.PayrollRunsListRequest](../../sdk/models/operations/payrollrunslistrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.PayrollRunsListResponse](../../sdk/models/operations/payrollrunslistresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## payrollRunsRetrieve

Returns a `PayrollRun` object with the given `id`.

### Example Usage

```typescript
import { Hris } from "HRIS";
import {
  PayrollRunsRetrieveQueryParamRemoteFields,
  PayrollRunsRetrieveQueryParamShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

async function run() {
  const sdk = new Hris({
    security: {
      tokenAuth: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.payrollRuns.payrollRunsRetrieve({
    xAccountToken: "<value>",
    id: "d0f9705a-17ce-4ded-b6a3-5adfc07d0ae9",
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
| `request`                                                                                          | [operations.PayrollRunsRetrieveRequest](../../sdk/models/operations/payrollrunsretrieverequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.PayrollRunsRetrieveResponse](../../sdk/models/operations/payrollrunsretrieveresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
