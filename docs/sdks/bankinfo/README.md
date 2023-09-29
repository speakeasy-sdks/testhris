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
  BankInfoListResponse,
  BankInfoListShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.bankInfo.bankInfoList({
  xAccountToken: "Folding Global",
  accountType: BankInfoListAccountType.Checking,
  bankName: "creation throughout Customer",
  createdAfter: new Date("2023-07-31T04:40:27.701Z"),
  createdBefore: new Date("2023-06-26T20:20:13.786Z"),
  cursor: "disposer Northwest Velda",
  employeeId: "RAM Garden",
  expand: BankInfoListExpand.Employee,
  includeDeletedData: false,
  includeRemoteData: false,
  modifiedAfter: new Date("2021-02-03T09:23:09.266Z"),
  modifiedBefore: new Date("2023-10-10T15:11:55.201Z"),
  orderBy: BankInfoListOrderBy.RemoteCreatedAt,
  pageSize: 183846,
  remoteFields: BankInfoListRemoteFields.AccountType,
  remoteId: "Central",
  showEnumOrigins: BankInfoListShowEnumOrigins.AccountType,
}).then((res: BankInfoListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
  BankInfoRetrieveResponse,
  BankInfoRetrieveShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.bankInfo.bankInfoRetrieve({
  xAccountToken: "haptic Soap cluttered",
  expand: BankInfoRetrieveExpand.Employee,
  id: "73932cf4-9920-4096-a347-1089d9a5fd7a",
  includeRemoteData: false,
  remoteFields: BankInfoRetrieveRemoteFields.AccountType,
  showEnumOrigins: BankInfoRetrieveShowEnumOrigins.AccountType,
}).then((res: BankInfoRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.BankInfoRetrieveRequest](../../models/operations/bankinforetrieverequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.BankInfoRetrieveResponse](../../models/operations/bankinforetrieveresponse.md)>**

