# payGroups

### Available Operations

* [payGroupsList](#paygroupslist) - Returns a list of `PayGroup` objects.
* [payGroupsRetrieve](#paygroupsretrieve) - Returns a `PayGroup` object with the given `id`.

## payGroupsList

Returns a list of `PayGroup` objects.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { PayGroupsListResponse, PayGroupsListSecurity } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();
const operationSecurity: PayGroupsListSecurity = {
  tokenAuth: "",
};

sdk.payGroups.payGroupsList({
  xAccountToken: "error",
  createdAfter: new Date("2021-04-10T23:50:37.359Z"),
  createdBefore: new Date("2022-07-12T09:25:25.257Z"),
  cursor: "eveniet",
  includeDeletedData: false,
  includeRemoteData: false,
  modifiedAfter: new Date("2020-07-22T00:02:01.812Z"),
  modifiedBefore: new Date("2022-11-03T19:31:44.626Z"),
  pageSize: 94458,
  remoteId: "similique",
}, operationSecurity).then((res: PayGroupsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.PayGroupsListRequest](../../models/operations/paygroupslistrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.PayGroupsListSecurity](../../models/operations/paygroupslistsecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.PayGroupsListResponse](../../models/operations/paygroupslistresponse.md)>**


## payGroupsRetrieve

Returns a `PayGroup` object with the given `id`.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { PayGroupsRetrieveResponse, PayGroupsRetrieveSecurity } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();
const operationSecurity: PayGroupsRetrieveSecurity = {
  tokenAuth: "",
};

sdk.payGroups.payGroupsRetrieve({
  xAccountToken: "culpa",
  id: "6f1e674b-db04-4f15-b560-82d68ea19f1d",
  includeRemoteData: false,
}, operationSecurity).then((res: PayGroupsRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.PayGroupsRetrieveRequest](../../models/operations/paygroupsretrieverequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.PayGroupsRetrieveSecurity](../../models/operations/paygroupsretrievesecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.PayGroupsRetrieveResponse](../../models/operations/paygroupsretrieveresponse.md)>**

