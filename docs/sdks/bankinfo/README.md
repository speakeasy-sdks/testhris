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
import {
  BankInfoListAccountType,
  BankInfoListExpand,
  BankInfoListOrderBy,
  BankInfoListRemoteFields,
  BankInfoListShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.bankInfo.bankInfoList({
    xAccountToken: "Folding Global",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.BankInfoListRequest](../../models/operations/bankinfolistrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.BankInfoListResponse](../../models/operations/bankinfolistresponse.md)>**


## bankInfoRetrieve

Returns a `BankInfo` object with the given `id`.

### Example Usage

```typescript
import { Hris } from "HRIS";
import {
  BankInfoRetrieveExpand,
  BankInfoRetrieveRemoteFields,
  BankInfoRetrieveShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.bankInfo.bankInfoRetrieve({
    xAccountToken: "haptic Soap cluttered",
    id: "73932cf4-9920-4096-a347-1089d9a5fd7a",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.BankInfoRetrieveRequest](../../models/operations/bankinforetrieverequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.BankInfoRetrieveResponse](../../models/operations/bankinforetrieveresponse.md)>**

