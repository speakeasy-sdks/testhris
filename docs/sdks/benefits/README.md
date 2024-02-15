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
import { BenefitsListQueryParamExpand } from "HRIS/dist/sdk/models/operations";

async function run() {
  const sdk = new Hris({
    security: {
      tokenAuth: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.benefits.benefitsList({
    xAccountToken: "<value>",
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
| `request`                                                                            | [operations.BenefitsListRequest](../../sdk/models/operations/benefitslistrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.BenefitsListResponse](../../sdk/models/operations/benefitslistresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## benefitsRetrieve

Returns a `Benefit` object with the given `id`.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { BenefitsRetrieveQueryParamExpand } from "HRIS/dist/sdk/models/operations";

async function run() {
  const sdk = new Hris({
    security: {
      tokenAuth: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.benefits.benefitsRetrieve({
    xAccountToken: "<value>",
    id: "0647de81-b28f-4e68-8a5f-dee1e8a699d0",
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
| `request`                                                                                    | [operations.BenefitsRetrieveRequest](../../sdk/models/operations/benefitsretrieverequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.BenefitsRetrieveResponse](../../sdk/models/operations/benefitsretrieveresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
