# Benefits

### Available Operations

* [benefitsList](#benefitslist) - Returns a list of `Benefit` objects.
* [benefitsRetrieve](#benefitsretrieve) - Returns a `Benefit` object with the given `id`.

## benefitsList

Returns a list of `Benefit` objects.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { BenefitsListExpand, BenefitsListResponse } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.benefits.benefitsList({
  xAccountToken: "deleniti",
  createdAfter: new Date("2020-09-22T07:34:53.140Z"),
  createdBefore: new Date("2022-10-15T16:29:54.554Z"),
  cursor: "commodi",
  employeeId: "molestiae",
  expand: BenefitsListExpand.Employee,
  includeDeletedData: false,
  includeRemoteData: false,
  modifiedAfter: new Date("2022-10-24T23:43:42.369Z"),
  modifiedBefore: new Date("2020-10-16T01:47:24.760Z"),
  pageSize: 456150,
  remoteId: "ipsum",
}).then((res: BenefitsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.BenefitsListRequest](../../models/operations/benefitslistrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.BenefitsListResponse](../../models/operations/benefitslistresponse.md)>**


## benefitsRetrieve

Returns a `Benefit` object with the given `id`.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { BenefitsRetrieveExpand, BenefitsRetrieveResponse } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.benefits.benefitsRetrieve({
  xAccountToken: "excepturi",
  expand: BenefitsRetrieveExpand.Employee,
  id: "20592939-6fea-4759-aeb1-0faaa2352c59",
  includeRemoteData: false,
}).then((res: BenefitsRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.BenefitsRetrieveRequest](../../models/operations/benefitsretrieverequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.BenefitsRetrieveResponse](../../models/operations/benefitsretrieveresponse.md)>**

