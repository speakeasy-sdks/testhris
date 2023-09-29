# Benefits
(*benefits*)

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
  xAccountToken: "Handmade Coordinator bright",
  createdAfter: new Date("2021-02-08T13:13:35.095Z"),
  createdBefore: new Date("2021-07-26T10:16:55.229Z"),
  cursor: "digital",
  employeeId: "superior upon",
  expand: BenefitsListExpand.Employee,
  includeDeletedData: false,
  includeRemoteData: false,
  modifiedAfter: new Date("2022-10-04T21:08:28.837Z"),
  modifiedBefore: new Date("2021-07-28T10:59:37.746Z"),
  pageSize: 951207,
  remoteId: "flex concerned Generic",
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
  xAccountToken: "extranet",
  expand: BenefitsRetrieveExpand.Employee,
  id: "7de81b28-fe68-4ca5-bdee-1e8a699d0dc0",
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

