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
import { BenefitsListExpand } from "HRIS/dist/sdk/models/operations";

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.benefits.benefitsList({
    xAccountToken: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { BenefitsRetrieveExpand } from "HRIS/dist/sdk/models/operations";

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.benefits.benefitsRetrieve({
    xAccountToken: "string",
    id: "0647de81-b28f-4e68-8a5f-dee1e8a699d0",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.BenefitsRetrieveRequest](../../models/operations/benefitsretrieverequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.BenefitsRetrieveResponse](../../models/operations/benefitsretrieveresponse.md)>**

