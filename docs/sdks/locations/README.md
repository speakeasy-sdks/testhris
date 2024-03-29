# Locations
(*locations*)

### Available Operations

* [locationsList](#locationslist) - Returns a list of `Location` objects.
* [locationsRetrieve](#locationsretrieve) - Returns a `Location` object with the given `id`.

## locationsList

Returns a list of `Location` objects.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { LocationsListQueryParamRemoteFields, LocationsListQueryParamShowEnumOrigins } from "HRIS/dist/sdk/models/operations";

async function run() {
  const sdk = new Hris({
    security: {
      tokenAuth: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.locations.locationsList({
    xAccountToken: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.LocationsListRequest](../../sdk/models/operations/locationslistrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.LocationsListResponse](../../sdk/models/operations/locationslistresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## locationsRetrieve

Returns a `Location` object with the given `id`.

### Example Usage

```typescript
import { Hris } from "HRIS";
import {
  LocationsRetrieveQueryParamRemoteFields,
  LocationsRetrieveQueryParamShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

async function run() {
  const sdk = new Hris({
    security: {
      tokenAuth: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.locations.locationsRetrieve({
    xAccountToken: "<value>",
    id: "74ebd06c-c8d9-489b-8db9-cc574d8c8b72",
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
| `request`                                                                                      | [operations.LocationsRetrieveRequest](../../sdk/models/operations/locationsretrieverequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.LocationsRetrieveResponse](../../sdk/models/operations/locationsretrieveresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
