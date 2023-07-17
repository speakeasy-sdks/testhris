# locations

### Available Operations

* [locationsList](#locationslist) - Returns a list of `Location` objects.
* [locationsRetrieve](#locationsretrieve) - Returns a `Location` object with the given `id`.

## locationsList

Returns a list of `Location` objects.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { LocationsListRemoteFields, LocationsListResponse, LocationsListShowEnumOrigins } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();

sdk.locations.locationsList({
  xAccountToken: "accusamus",
  createdAfter: new Date("2022-07-06T17:31:39.783Z"),
  createdBefore: new Date("2022-03-04T08:46:39.442Z"),
  cursor: "sapiente",
  includeDeletedData: false,
  includeRemoteData: false,
  modifiedAfter: new Date("2022-05-10T08:48:16.521Z"),
  modifiedBefore: new Date("2022-12-19T02:13:29.248Z"),
  pageSize: 783648,
  remoteFields: LocationsListRemoteFields.LocationType,
  remoteId: "eum",
  showEnumOrigins: LocationsListShowEnumOrigins.LocationType,
}, {
  tokenAuth: "",
}).then((res: LocationsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.LocationsListRequest](../../models/operations/locationslistrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.LocationsListSecurity](../../models/operations/locationslistsecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


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

const sdk = new Hris();

sdk.locations.locationsRetrieve({
  xAccountToken: "quas",
  id: "8282aa48-2562-4f22-ae98-17ee17cbe61e",
  includeRemoteData: false,
  remoteFields: LocationsRetrieveRemoteFields.LocationType,
  showEnumOrigins: LocationsRetrieveShowEnumOrigins.LocationType,
}, {
  tokenAuth: "",
}).then((res: LocationsRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.LocationsRetrieveRequest](../../models/operations/locationsretrieverequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.LocationsRetrieveSecurity](../../models/operations/locationsretrievesecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.LocationsRetrieveResponse](../../models/operations/locationsretrieveresponse.md)>**

