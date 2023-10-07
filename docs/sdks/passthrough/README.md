# Passthrough
(*passthrough*)

### Available Operations

* [passthroughCreateForm](#passthroughcreateform) - Pull data from an endpoint not currently supported by Merge.
* [passthroughCreateJson](#passthroughcreatejson) - Pull data from an endpoint not currently supported by Merge.
* [passthroughCreateMultipart](#passthroughcreatemultipart) - Pull data from an endpoint not currently supported by Merge.

## passthroughCreateForm

Pull data from an endpoint not currently supported by Merge.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { MultipartFormFieldRequestEncoding } from "HRIS/dist/sdk/models/shared";

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.passthrough.passthroughCreateForm({
    dataPassthroughRequest1: {
      data: "{\"company\": \"Lime\", \"model\": \"Gen 2.5\"}",
      headers: {
        "EXTRA-HEADER": "woot",
      },
      method: "POST",
      multipartFormData: [
        {
          contentType: "application/pdf",
          data: "SW50ZWdyYXRlIGZhc3QKSW50ZWdyYXRlIG9uY2U=",
          encoding: MultipartFormFieldRequestEncoding.Base64,
          fileName: "resume.pdf",
          name: "resume",
        },
      ],
      path: "/scooters",
      requestFormat: "JSON",
    },
    xAccountToken: "Highway East woman",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.PassthroughCreateFormRequest](../../models/operations/passthroughcreateformrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.PassthroughCreateFormResponse](../../models/operations/passthroughcreateformresponse.md)>**


## passthroughCreateJson

Pull data from an endpoint not currently supported by Merge.

### Example Usage

```typescript
import { Hris } from "HRIS";
import {
  DataPassthroughRequestMethod,
  DataPassthroughRequestRequestFormat,
  MultipartFormFieldRequestEncoding,
} from "HRIS/dist/sdk/models/shared";

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.passthrough.passthroughCreateJson({
    dataPassthroughRequest: {
      data: "{\"company\": \"Lime\", \"model\": \"Gen 2.5\"}",
      headers: {
        "EXTRA-HEADER": "deposit",
      },
      method: DataPassthroughRequestMethod.Post,
      multipartFormData: [
        {
          contentType: "application/pdf",
          data: "SW50ZWdyYXRlIGZhc3QKSW50ZWdyYXRlIG9uY2U=",
          encoding: MultipartFormFieldRequestEncoding.Base64,
          fileName: "resume.pdf",
          name: "resume",
        },
      ],
      path: "/scooters",
      requestFormat: DataPassthroughRequestRequestFormat.Json,
    },
    xAccountToken: "after Bespoke",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.PassthroughCreateJsonRequest](../../models/operations/passthroughcreatejsonrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.PassthroughCreateJsonResponse](../../models/operations/passthroughcreatejsonresponse.md)>**


## passthroughCreateMultipart

Pull data from an endpoint not currently supported by Merge.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { MultipartFormFieldRequestEncoding } from "HRIS/dist/sdk/models/shared";

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.passthrough.passthroughCreateMultipart({
    dataPassthroughRequest1: {
      data: "{\"company\": \"Lime\", \"model\": \"Gen 2.5\"}",
      headers: {
        "EXTRA-HEADER": "East",
      },
      method: "POST",
      multipartFormData: [
        {
          contentType: "application/pdf",
          data: "SW50ZWdyYXRlIGZhc3QKSW50ZWdyYXRlIG9uY2U=",
          encoding: MultipartFormFieldRequestEncoding.Base64,
          fileName: "resume.pdf",
          name: "resume",
        },
      ],
      path: "/scooters",
      requestFormat: "JSON",
    },
    xAccountToken: "Lead Hybrid",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.PassthroughCreateMultipartRequest](../../models/operations/passthroughcreatemultipartrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.PassthroughCreateMultipartResponse](../../models/operations/passthroughcreatemultipartresponse.md)>**

