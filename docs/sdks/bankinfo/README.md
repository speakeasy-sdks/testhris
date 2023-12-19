# BankInfo
(*bankInfo*)

### Available Operations

* [bankInfoList](#bankinfolist) - Returns a list of `BankInfo` objects.
* [bankInfoRetrieve](#bankinforetrieve) - Returns a `BankInfo` object with the given `id`.

## bankInfoList

Returns a list of `BankInfo` objects.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { AccountType, Expand, OrderBy, RemoteFields, ShowEnumOrigins } from "HRIS/dist/sdk/models/operations";

async function run() {
  const sdk = new Hris({
    security: {
      tokenAuth: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.bankInfo.bankInfoList({
    xAccountToken: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.BankInfoListRequest](../../sdk/models/operations/bankinfolistrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.BankInfoListResponse](../../sdk/models/operations/bankinfolistresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## bankInfoRetrieve

Returns a `BankInfo` object with the given `id`.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { QueryParamExpand, QueryParamRemoteFields, QueryParamShowEnumOrigins } from "HRIS/dist/sdk/models/operations";

async function run() {
  const sdk = new Hris({
    security: {
      tokenAuth: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.bankInfo.bankInfoRetrieve({
    xAccountToken: "string",
    id: "d7839d27-3932-4cf4-9920-09663471089d",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.BankInfoRetrieveRequest](../../sdk/models/operations/bankinforetrieverequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.BankInfoRetrieveResponse](../../sdk/models/operations/bankinforetrieveresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
