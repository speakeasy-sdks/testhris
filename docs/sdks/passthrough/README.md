# Passthrough
(*passthrough*)

### Available Operations

* [passthroughCreate](#passthroughcreate) - Pull data from an endpoint not currently supported by Merge.

## passthroughCreate

Pull data from an endpoint not currently supported by Merge.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { Encoding, Method, RequestFormat } from "HRIS/dist/sdk/models/shared";

async function run() {
  const sdk = new Hris({
    security: {
      tokenAuth: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.passthrough.passthroughCreate({
    dataPassthroughRequest: {
      data: "{\"company\": \"Lime\", \"model\": \"Gen 2.5\"}",
      headers: {
        "EXTRA-HEADER": "value",
      },
      method: Method.Post,
      multipartFormData: [
        {
          contentType: "application/pdf",
          data: "SW50ZWdyYXRlIGZhc3QKSW50ZWdyYXRlIG9uY2U=",
          encoding: Encoding.Base64,
          fileName: "resume.pdf",
          name: "resume",
        },
      ],
      path: "/scooters",
      requestFormat: RequestFormat.Json,
    },
    xAccountToken: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.PassthroughCreateRequest](../../sdk/models/operations/passthroughcreaterequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.PassthroughCreateResponse](../../sdk/models/operations/passthroughcreateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
