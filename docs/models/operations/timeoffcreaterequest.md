# TimeOffCreateRequest


## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `timeOffEndpointRequest`                                                       | [shared.TimeOffEndpointRequest](../../models/shared/timeoffendpointrequest.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `xAccountToken`                                                                | *string*                                                                       | :heavy_check_mark:                                                             | Token identifying the end user.                                                |
| `isDebugMode`                                                                  | *boolean*                                                                      | :heavy_minus_sign:                                                             | Whether to include debug fields (such as log file links) in the response.      |
| `runAsync`                                                                     | *boolean*                                                                      | :heavy_minus_sign:                                                             | Whether or not third-party updates should be run asynchronously.               |