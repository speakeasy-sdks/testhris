# locations

### Available Operations

* [locationsList](#locationslist) - Returns a list of `Location` objects.
* [locationsRetrieve](#locationsretrieve) - Returns a `Location` object with the given `id`.

## locationsList

Returns a list of `Location` objects.

### Example Usage

```typescript
import { Hris } from "HRIS";
import {
  LocationsListRemoteFields,
  LocationsListResponse,
  LocationsListSecurity,
  LocationsListShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();
const operationSecurity: LocationsListSecurity = {
  tokenAuth: "",
};

sdk.locations.locationsList({
  xAccountToken: "quasi",
  createdAfter: new Date("2022-09-29T12:13:01.368Z"),
  createdBefore: new Date("2022-05-29T22:38:52.265Z"),
  cursor: "ipsa",
  includeDeletedData: false,
  includeRemoteData: false,
  modifiedAfter: new Date("2022-09-12T21:59:44.784Z"),
  modifiedBefore: new Date("2022-09-27T07:50:41.350Z"),
  pageSize: 458515,
  remoteFields: LocationsListRemoteFields.LocationType,
  remoteId: "esse",
  showEnumOrigins: LocationsListShowEnumOrigins.LocationType,
}, operationSecurity).then((res: LocationsListResponse) => {
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
  LocationsRetrieveSecurity,
  LocationsRetrieveShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();
const operationSecurity: LocationsRetrieveSecurity = {
  tokenAuth: "",
};

sdk.locations.locationsRetrieve({
  xAccountToken: "rem",
  id: "a7bd466d-28c1-40ab-bcdc-a4251904e523",
  includeRemoteData: false,
  remoteFields: LocationsRetrieveRemoteFields.LocationType,
  showEnumOrigins: LocationsRetrieveShowEnumOrigins.LocationType,
}, operationSecurity).then((res: LocationsRetrieveResponse) => {
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

