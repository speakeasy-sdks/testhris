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
import { LocationsListRemoteFields, LocationsListResponse, LocationsListShowEnumOrigins } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.locations.locationsList({
  xAccountToken: "Trans reinvent Minivan",
  createdAfter: new Date("2023-11-07T02:12:00.765Z"),
  createdBefore: new Date("2022-04-10T22:33:50.562Z"),
  cursor: "Borders fate",
  includeDeletedData: false,
  includeRemoteData: false,
  modifiedAfter: new Date("2021-12-03T14:07:35.788Z"),
  modifiedBefore: new Date("2021-01-28T15:08:15.874Z"),
  pageSize: 983641,
  remoteFields: LocationsListRemoteFields.LocationType,
  remoteId: "East neque",
  showEnumOrigins: LocationsListShowEnumOrigins.LocationType,
}).then((res: LocationsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import {
  LocationsRetrieveRemoteFields,
  LocationsRetrieveResponse,
  LocationsRetrieveShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.locations.locationsRetrieve({
  xAccountToken: "cultivate Assistant",
  id: "06cc8d98-9b4d-4b9c-8574-d8c8b728ec05",
  includeRemoteData: false,
  remoteFields: LocationsRetrieveRemoteFields.LocationType,
  showEnumOrigins: LocationsRetrieveShowEnumOrigins.LocationType,
}).then((res: LocationsRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.LocationsRetrieveRequest](../../models/operations/locationsretrieverequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.LocationsRetrieveResponse](../../models/operations/locationsretrieveresponse.md)>**

