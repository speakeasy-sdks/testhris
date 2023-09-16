# BankInfo

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
  BankInfoListSecurity,
  BankInfoListShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();
const operationSecurity: BankInfoListSecurity = {
  tokenAuth: "",
};

sdk.bankInfo.bankInfoList({
  xAccountToken: "unde",
  accountType: BankInfoListAccountType.Savings,
  bankName: "corrupti",
  createdAfter: new Date("2021-09-24T02:21:06.409Z"),
  createdBefore: new Date("2021-09-16T11:56:06.019Z"),
  cursor: "suscipit",
  employeeId: "iure",
  expand: BankInfoListExpand.Employee,
  includeDeletedData: false,
  includeRemoteData: false,
  modifiedAfter: new Date("2022-02-09T12:04:06.508Z"),
  modifiedBefore: new Date("2022-01-14T06:18:51.036Z"),
  orderBy: BankInfoListOrderBy.MinusRemoteCreatedAt,
  pageSize: 383441,
  remoteFields: BankInfoListRemoteFields.AccountType,
  remoteId: "molestiae",
  showEnumOrigins: BankInfoListShowEnumOrigins.AccountType,
}, operationSecurity).then((res: BankInfoListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.BankInfoListRequest](../../models/operations/bankinfolistrequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.BankInfoListSecurity](../../models/operations/bankinfolistsecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


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
  BankInfoRetrieveSecurity,
  BankInfoRetrieveShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();
const operationSecurity: BankInfoRetrieveSecurity = {
  tokenAuth: "",
};

sdk.bankInfo.bankInfoRetrieve({
  xAccountToken: "minus",
  expand: BankInfoRetrieveExpand.Employee,
  id: "c8796ed1-51a0-45df-82dd-f7cc78ca1ba9",
  includeRemoteData: false,
  remoteFields: BankInfoRetrieveRemoteFields.AccountType,
  showEnumOrigins: BankInfoRetrieveShowEnumOrigins.AccountType,
}, operationSecurity).then((res: BankInfoRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.BankInfoRetrieveRequest](../../models/operations/bankinforetrieverequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.BankInfoRetrieveSecurity](../../models/operations/bankinforetrievesecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.BankInfoRetrieveResponse](../../models/operations/bankinforetrieveresponse.md)>**

