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
import { LocationsListRemoteFields, LocationsListShowEnumOrigins } from "HRIS/dist/sdk/models/operations";

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.locations.locationsList({
    xAccountToken: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.LocationsListRequest](../../models/operations/locationslistrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.LocationsListResponse](../../models/operations/locationslistresponse.md)>**


## locationsRetrieve

Returns a `Location` object with the given `id`.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { LocationsRetrieveRemoteFields, LocationsRetrieveShowEnumOrigins } from "HRIS/dist/sdk/models/operations";

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.locations.locationsRetrieve({
    xAccountToken: "string",
    id: "74ebd06c-c8d9-489b-8db9-cc574d8c8b72",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.LocationsRetrieveRequest](../../models/operations/locationsretrieverequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.LocationsRetrieveResponse](../../models/operations/locationsretrieveresponse.md)>**

