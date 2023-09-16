# Benefits

### Available Operations

* [benefitsList](#benefitslist) - Returns a list of `Benefit` objects.
* [benefitsRetrieve](#benefitsretrieve) - Returns a `Benefit` object with the given `id`.

## benefitsList

Returns a list of `Benefit` objects.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { BenefitsListExpand, BenefitsListResponse, BenefitsListSecurity } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();
const operationSecurity: BenefitsListSecurity = {
  tokenAuth: "",
};

sdk.benefits.benefitsList({
  xAccountToken: "fugit",
  createdAfter: new Date("2021-02-10T09:24:01.909Z"),
  createdBefore: new Date("2021-06-08T13:49:32.889Z"),
  cursor: "beatae",
  employeeId: "commodi",
  expand: BenefitsListExpand.Employee,
  includeDeletedData: false,
  includeRemoteData: false,
  modifiedAfter: new Date("2022-09-26T10:29:33.503Z"),
  modifiedBefore: new Date("2022-03-24T09:42:46.236Z"),
  pageSize: 736918,
  remoteId: "esse",
}, operationSecurity).then((res: BenefitsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.BenefitsListRequest](../../models/operations/benefitslistrequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.BenefitsListSecurity](../../models/operations/benefitslistsecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.BenefitsListResponse](../../models/operations/benefitslistresponse.md)>**


## benefitsRetrieve

Returns a `Benefit` object with the given `id`.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { BenefitsRetrieveExpand, BenefitsRetrieveResponse, BenefitsRetrieveSecurity } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();
const operationSecurity: BenefitsRetrieveSecurity = {
  tokenAuth: "",
};

sdk.benefits.benefitsRetrieve({
  xAccountToken: "ipsum",
  expand: BenefitsRetrieveExpand.Employee,
  id: "92059293-96fe-4a75-96eb-10faaa2352c5",
  includeRemoteData: false,
}, operationSecurity).then((res: BenefitsRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.BenefitsRetrieveRequest](../../models/operations/benefitsretrieverequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.BenefitsRetrieveSecurity](../../models/operations/benefitsretrievesecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.BenefitsRetrieveResponse](../../models/operations/benefitsretrieveresponse.md)>**

