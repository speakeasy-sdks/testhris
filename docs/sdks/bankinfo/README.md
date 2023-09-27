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
  xAccountToken: "nulla",
  accountType: BankInfoListAccountType.Savings,
  bankName: "illum",
  createdAfter: new Date("2022-05-18T09:34:54.894Z"),
  createdBefore: new Date("2022-03-26T09:37:56.283Z"),
  cursor: "iure",
  employeeId: "magnam",
  expand: BankInfoListExpand.Employee,
  includeDeletedData: false,
  includeRemoteData: false,
  modifiedAfter: new Date("2022-10-30T21:34:57.850Z"),
  modifiedBefore: new Date("2022-03-08T10:35:32.561Z"),
  orderBy: BankInfoListOrderBy.MinusRemoteCreatedAt,
  pageSize: 477665,
  remoteFields: BankInfoListRemoteFields.AccountType,
  remoteId: "minus",
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
  xAccountToken: "placeat",
  expand: BankInfoRetrieveExpand.Employee,
  id: "8796ed15-1a05-4dfc-addf-7cc78ca1ba92",
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

