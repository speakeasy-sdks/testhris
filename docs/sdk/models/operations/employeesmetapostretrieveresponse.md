# EmployeesMetaPostRetrieveResponse


## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `contentType`                                                     | *string*                                                          | :heavy_check_mark:                                                | HTTP response content type for this operation                     |
| `metaResponse`                                                    | [shared.MetaResponse](../../../sdk/models/shared/metaresponse.md) | :heavy_minus_sign:                                                | N/A                                                               |
| `statusCode`                                                      | *number*                                                          | :heavy_check_mark:                                                | HTTP response status code for this operation                      |
| `rawResponse`                                                     | [AxiosResponse](https://axios-http.com/docs/res_schema)           | :heavy_check_mark:                                                | Raw HTTP response; suitable for custom response parsing           |