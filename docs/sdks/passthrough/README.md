# passthrough

### Available Operations

* [passthroughCreateForm](#passthroughcreateform) - Pull data from an endpoint not currently supported by Merge.
* [passthroughCreateJson](#passthroughcreatejson) - Pull data from an endpoint not currently supported by Merge.
* [passthroughCreateMultipart](#passthroughcreatemultipart) - Pull data from an endpoint not currently supported by Merge.

## passthroughCreateForm

Pull data from an endpoint not currently supported by Merge.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { PassthroughCreateFormResponse } from "HRIS/dist/sdk/models/operations";
import { MultipartFormFieldRequestEncoding } from "HRIS/dist/sdk/models/shared";

const sdk = new Hris();

sdk.passthrough.passthroughCreateForm({
  dataPassthroughRequest3: {
    baseUrlOverride: "vel",
    data: "{"company": "Lime", "model": "Gen 2.5"}",
    headers: {
      "molestiae": "rerum",
      "occaecati": "minima",
      "distinctio": "eligendi",
    },
    method: "sit",
    multipartFormData: [
      {
        contentType: "application/pdf",
        data: "SW50ZWdyYXRlIGZhc3QKSW50ZWdyYXRlIG9uY2U=",
        encoding: MultipartFormFieldRequestEncoding.Base64,
        fileName: "resume.pdf",
        name: "resume",
      },
      {
        contentType: "application/pdf",
        data: "SW50ZWdyYXRlIGZhc3QKSW50ZWdyYXRlIG9uY2U=",
        encoding: MultipartFormFieldRequestEncoding.Base64,
        fileName: "resume.pdf",
        name: "resume",
      },
      {
        contentType: "application/pdf",
        data: "SW50ZWdyYXRlIGZhc3QKSW50ZWdyYXRlIG9uY2U=",
        encoding: MultipartFormFieldRequestEncoding.Base64,
        fileName: "resume.pdf",
        name: "resume",
      },
    ],
    normalizeResponse: false,
    path: "/scooters",
    requestFormat: "tempore",
  },
  xAccountToken: "adipisci",
}, {
  tokenAuth: "",
}).then((res: PassthroughCreateFormResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.PassthroughCreateFormRequest](../../models/operations/passthroughcreateformrequest.md)   | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `security`                                                                                           | [operations.PassthroughCreateFormSecurity](../../models/operations/passthroughcreateformsecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.PassthroughCreateFormResponse](../../models/operations/passthroughcreateformresponse.md)>**


## passthroughCreateJson

Pull data from an endpoint not currently supported by Merge.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { PassthroughCreateJsonResponse } from "HRIS/dist/sdk/models/operations";
import {
  DataPassthroughRequestMethod,
  DataPassthroughRequestRequestFormat,
  MultipartFormFieldRequestEncoding,
} from "HRIS/dist/sdk/models/shared";

const sdk = new Hris();

sdk.passthrough.passthroughCreateJson({
  dataPassthroughRequest: {
    baseUrlOverride: "cumque",
    data: "{"company": "Lime", "model": "Gen 2.5"}",
    headers: {
      "consequatur": "minus",
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
      {
        contentType: "application/pdf",
        data: "SW50ZWdyYXRlIGZhc3QKSW50ZWdyYXRlIG9uY2U=",
        encoding: MultipartFormFieldRequestEncoding.Base64,
        fileName: "resume.pdf",
        name: "resume",
      },
    ],
    normalizeResponse: false,
    path: "/scooters",
    requestFormat: DataPassthroughRequestRequestFormat.Json,
  },
  xAccountToken: "sapiente",
}, {
  tokenAuth: "",
}).then((res: PassthroughCreateJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.PassthroughCreateJsonRequest](../../models/operations/passthroughcreatejsonrequest.md)   | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `security`                                                                                           | [operations.PassthroughCreateJsonSecurity](../../models/operations/passthroughcreatejsonsecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.PassthroughCreateJsonResponse](../../models/operations/passthroughcreatejsonresponse.md)>**


## passthroughCreateMultipart

Pull data from an endpoint not currently supported by Merge.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { PassthroughCreateMultipartResponse } from "HRIS/dist/sdk/models/operations";
import { MultipartFormFieldRequestEncoding } from "HRIS/dist/sdk/models/shared";

const sdk = new Hris();

sdk.passthrough.passthroughCreateMultipart({
  dataPassthroughRequest3: {
    baseUrlOverride: "consectetur",
    data: "{"company": "Lime", "model": "Gen 2.5"}",
    headers: {
      "blanditiis": "provident",
      "a": "nulla",
    },
    method: "quas",
    multipartFormData: [
      {
        contentType: "application/pdf",
        data: "SW50ZWdyYXRlIGZhc3QKSW50ZWdyYXRlIG9uY2U=",
        encoding: MultipartFormFieldRequestEncoding.Base64,
        fileName: "resume.pdf",
        name: "resume",
      },
      {
        contentType: "application/pdf",
        data: "SW50ZWdyYXRlIGZhc3QKSW50ZWdyYXRlIG9uY2U=",
        encoding: MultipartFormFieldRequestEncoding.Base64,
        fileName: "resume.pdf",
        name: "resume",
      },
    ],
    normalizeResponse: false,
    path: "/scooters",
    requestFormat: "quasi",
  },
  xAccountToken: "a",
}, {
  tokenAuth: "",
}).then((res: PassthroughCreateMultipartResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.PassthroughCreateMultipartRequest](../../models/operations/passthroughcreatemultipartrequest.md)   | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `security`                                                                                                     | [operations.PassthroughCreateMultipartSecurity](../../models/operations/passthroughcreatemultipartsecurity.md) | :heavy_check_mark:                                                                                             | The security requirements to use for the request.                                                              |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.PassthroughCreateMultipartResponse](../../models/operations/passthroughcreatemultipartresponse.md)>**
