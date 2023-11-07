# WebhookReceivers
(*.webhookReceivers*)

### Available Operations

* [webhookReceiversCreate](#webhookreceiverscreate) - Creates a `WebhookReceiver` object with the given values.
* [webhookReceiversList](#webhookreceiverslist) - Returns a list of `WebhookReceiver` objects.

## webhookReceiversCreate

Creates a `WebhookReceiver` object with the given values.

### Example Usage

```typescript
import { Hris } from "HRIS";

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.webhookReceivers.webhookReceiversCreate({
    webhookReceiverRequest: {
      event: "string",
      isActive: false,
    },
    xAccountToken: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.WebhookReceiversCreateRequest](../../models/operations/webhookreceiverscreaterequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.WebhookReceiversCreateResponse](../../models/operations/webhookreceiverscreateresponse.md)>**


## webhookReceiversList

Returns a list of `WebhookReceiver` objects.

### Example Usage

```typescript
import { Hris } from "HRIS";

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.webhookReceivers.webhookReceiversList({
    xAccountToken: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.WebhookReceiversListRequest](../../models/operations/webhookreceiverslistrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.WebhookReceiversListResponse](../../models/operations/webhookreceiverslistresponse.md)>**

