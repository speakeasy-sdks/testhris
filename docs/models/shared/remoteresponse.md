# RemoteResponse

# The RemoteResponse Object
### Description
The `RemoteResponse` object is used to represent information returned from a third-party endpoint.

### Usage Example
View the `RemoteResponse` returned from your `DataPassthrough`.


## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `headers`                                                                       | Record<string, *any*>                                                           | :heavy_minus_sign:                                                              | N/A                                                                             |                                                                                 |
| `method`                                                                        | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             | GET                                                                             |
| `path`                                                                          | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             | /scooters                                                                       |
| `response`                                                                      | *any*                                                                           | :heavy_check_mark:                                                              | N/A                                                                             |                                                                                 |
| `responseHeaders`                                                               | Record<string, *any*>                                                           | :heavy_minus_sign:                                                              | N/A                                                                             |                                                                                 |
| `responseType`                                                                  | [RemoteResponseResponseType](../../models/shared/remoteresponseresponsetype.md) | :heavy_minus_sign:                                                              | N/A                                                                             | JSON                                                                            |
| `status`                                                                        | *number*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             | 200                                                                             |