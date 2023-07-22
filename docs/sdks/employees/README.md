# employees

### Available Operations

* [employeesCreate](#employeescreate) - Creates an `Employee` object with the given values.
* [employeesIgnoreCreateForm](#employeesignorecreateform) - Ignores a specific row based on the `model_id` in the url. These records will have their properties set to null, and will not be updated in future syncs. The "reason" and "message" fields in the request body will be stored for audit purposes.
* [employeesIgnoreCreateJson](#employeesignorecreatejson) - Ignores a specific row based on the `model_id` in the url. These records will have their properties set to null, and will not be updated in future syncs. The "reason" and "message" fields in the request body will be stored for audit purposes.
* [employeesIgnoreCreateMultipart](#employeesignorecreatemultipart) - Ignores a specific row based on the `model_id` in the url. These records will have their properties set to null, and will not be updated in future syncs. The "reason" and "message" fields in the request body will be stored for audit purposes.
* [employeesList](#employeeslist) - Returns a list of `Employee` objects.
* [employeesMetaPostRetrieve](#employeesmetapostretrieve) - Returns metadata for `Employee` POSTs.
* [employeesRetrieve](#employeesretrieve) - Returns an `Employee` object with the given `id`.

## employeesCreate

Creates an `Employee` object with the given values.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { EmployeesCreateResponse } from "HRIS/dist/sdk/models/operations";
import {
  EmployeeRequestEmploymentStatus,
  EmployeeRequestEthnicity,
  EmployeeRequestGender,
  EmployeeRequestMaritalStatus,
} from "HRIS/dist/sdk/models/shared";

const sdk = new Hris();

sdk.employees.employeesCreate({
  employeeEndpointRequest: {
    model: {
      avatar: "http://alturl.com/h2h8m",
      company: "8d9fd929-436c-4fd4-a48b-0c61f68d6178",
      dateOfBirth: new Date("1990-11-10T00:00:00Z"),
      displayFullName: "Cousin Greg Hirsch",
      employeeNumber: "2",
      employmentStatus: EmployeeRequestEmploymentStatus.Inactive,
      employments: [
        "2a94bb4f-63c9-469e-9a3e-fa77dfb14cd6",
      ],
      ethnicity: EmployeeRequestEthnicity.White,
      firstName: "Greg",
      gender: EmployeeRequestGender.Male,
      groups: [
        "ae395efb-9ba8-48f3-a669-97074ba4469b",
        "6e214195-9890-4afa-963e-2516fe4c8b71",
      ],
      hireDate: new Date("2020-10-10T00:00:00Z"),
      homeLocation: "d2f972d0-2526-434b-9409-4c3b468e08f0",
      integrationParams: {
        "repudiandae": "ullam",
      },
      lastName: "Hirsch",
      linkedAccountParams: {
        "nihil": "repellat",
        "quibusdam": "sed",
        "saepe": "pariatur",
      },
      manager: "0048ea5b-911e-4dff-9364-92070dea62ff",
      maritalStatus: EmployeeRequestMaritalStatus.Single,
      mobilePhoneNumber: "+1234567890",
      payGroup: "ad1264e2-39be-4787-b749-f1aade9e3405",
      personalEmail: "greg@gmail.com",
      ssn: "1234567890",
      startDate: new Date("2020-10-11T00:00:00Z"),
      team: "249c9faa-3045-4a31-953b-8f22d3613301",
      terminationDate: new Date("2021-10-12T00:00:00Z"),
      username: "cousingreg",
      workEmail: "greg@merge.dev",
      workLocation: "9efbc633-3387-4306-aa55-e2c635e6bb4f",
    },
  },
  xAccountToken: "accusantium",
  isDebugMode: false,
  runAsync: false,
}, {
  tokenAuth: "",
}).then((res: EmployeesCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.EmployeesCreateRequest](../../models/operations/employeescreaterequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.EmployeesCreateSecurity](../../models/operations/employeescreatesecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.EmployeesCreateResponse](../../models/operations/employeescreateresponse.md)>**


## employeesIgnoreCreateForm

Ignores a specific row based on the `model_id` in the url. These records will have their properties set to null, and will not be updated in future syncs. The "reason" and "message" fields in the request body will be stored for audit purposes.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { EmployeesIgnoreCreateFormResponse } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();

sdk.employees.employeesIgnoreCreateForm({
  ignoreCommonModelRequest2: {
    message: "deletion request by user id 51903790-7dfe-4053-8d63-5a10cc4ffd39",
    reason: "consequuntur",
  },
  xAccountToken: "praesentium",
  modelId: "921cddc6-9260-41fb-976b-0d5f0d30c5fb",
}, {
  tokenAuth: "",
}).then((res: EmployeesIgnoreCreateFormResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.EmployeesIgnoreCreateFormRequest](../../models/operations/employeesignorecreateformrequest.md)   | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `security`                                                                                                   | [operations.EmployeesIgnoreCreateFormSecurity](../../models/operations/employeesignorecreateformsecurity.md) | :heavy_check_mark:                                                                                           | The security requirements to use for the request.                                                            |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.EmployeesIgnoreCreateFormResponse](../../models/operations/employeesignorecreateformresponse.md)>**


## employeesIgnoreCreateJson

Ignores a specific row based on the `model_id` in the url. These records will have their properties set to null, and will not be updated in future syncs. The "reason" and "message" fields in the request body will be stored for audit purposes.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { EmployeesIgnoreCreateJsonResponse } from "HRIS/dist/sdk/models/operations";
import { IgnoreCommonModelRequestReason } from "HRIS/dist/sdk/models/shared";

const sdk = new Hris();

sdk.employees.employeesIgnoreCreateJson({
  ignoreCommonModelRequest: {
    message: "deletion request by user id 51903790-7dfe-4053-8d63-5a10cc4ffd39",
    reason: IgnoreCommonModelRequestReason.GeneralCustomerRequest,
  },
  xAccountToken: "nobis",
  modelId: "25870532-02c7-43d5-be9b-90c28909b3fe",
}, {
  tokenAuth: "",
}).then((res: EmployeesIgnoreCreateJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.EmployeesIgnoreCreateJsonRequest](../../models/operations/employeesignorecreatejsonrequest.md)   | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `security`                                                                                                   | [operations.EmployeesIgnoreCreateJsonSecurity](../../models/operations/employeesignorecreatejsonsecurity.md) | :heavy_check_mark:                                                                                           | The security requirements to use for the request.                                                            |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.EmployeesIgnoreCreateJsonResponse](../../models/operations/employeesignorecreatejsonresponse.md)>**


## employeesIgnoreCreateMultipart

Ignores a specific row based on the `model_id` in the url. These records will have their properties set to null, and will not be updated in future syncs. The "reason" and "message" fields in the request body will be stored for audit purposes.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { EmployeesIgnoreCreateMultipartResponse } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();

sdk.employees.employeesIgnoreCreateMultipart({
  ignoreCommonModelRequest2: {
    message: "deletion request by user id 51903790-7dfe-4053-8d63-5a10cc4ffd39",
    reason: "modi",
  },
  xAccountToken: "iste",
  modelId: "a8d9cbf4-8633-4323-b9b7-7f3a4100674e",
}, {
  tokenAuth: "",
}).then((res: EmployeesIgnoreCreateMultipartResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.EmployeesIgnoreCreateMultipartRequest](../../models/operations/employeesignorecreatemultipartrequest.md)   | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `security`                                                                                                             | [operations.EmployeesIgnoreCreateMultipartSecurity](../../models/operations/employeesignorecreatemultipartsecurity.md) | :heavy_check_mark:                                                                                                     | The security requirements to use for the request.                                                                      |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.EmployeesIgnoreCreateMultipartResponse](../../models/operations/employeesignorecreatemultipartresponse.md)>**


## employeesList

Returns a list of `Employee` objects.

### Example Usage

```typescript
import { Hris } from "HRIS";
import {
  EmployeesListEmploymentStatus,
  EmployeesListExpand,
  EmployeesListRemoteFields,
  EmployeesListResponse,
  EmployeesListShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();

sdk.employees.employeesList({
  xAccountToken: "quidem",
  companyId: "voluptatibus",
  createdAfter: new Date("2022-05-20T13:18:59.478Z"),
  createdBefore: new Date("2022-06-16T23:42:38.113Z"),
  cursor: "sit",
  displayFullName: "fugiat",
  employmentStatus: EmployeesListEmploymentStatus.Active,
  expand: EmployeesListExpand.GroupsWorkLocationPayGroup,
  firstName: "Marietta",
  groups: "iusto",
  includeDeletedData: false,
  includeRemoteData: false,
  includeSensitiveFields: false,
  lastName: "Kling",
  managerId: "dolorum",
  modifiedAfter: new Date("2021-10-14T20:34:13.522Z"),
  modifiedBefore: new Date("2020-11-09T09:45:52.295Z"),
  pageSize: 990339,
  payGroupId: "nihil",
  personalEmail: "Jacky.Ondricka13@gmail.com",
  remoteFields: EmployeesListRemoteFields.EmploymentStatus,
  remoteId: "amet",
  showEnumOrigins: EmployeesListShowEnumOrigins.EthnicityMaritalStatus,
  startedAfter: new Date("2022-01-15T13:56:57.287Z"),
  startedBefore: new Date("2021-11-07T02:34:07.563Z"),
  teamId: "deserunt",
  terminatedAfter: new Date("2022-05-08T23:33:14.875Z"),
  terminatedBefore: new Date("2021-06-10T21:59:23.045Z"),
  workEmail: "Aaliyah27@yahoo.com",
  workLocationId: "vel",
}, {
  tokenAuth: "",
}).then((res: EmployeesListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.EmployeesListRequest](../../models/operations/employeeslistrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.EmployeesListSecurity](../../models/operations/employeeslistsecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.EmployeesListResponse](../../models/operations/employeeslistresponse.md)>**


## employeesMetaPostRetrieve

Returns metadata for `Employee` POSTs.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { EmployeesMetaPostRetrieveResponse } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();

sdk.employees.employeesMetaPostRetrieve({
  xAccountToken: "quod",
}, {
  tokenAuth: "",
}).then((res: EmployeesMetaPostRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.EmployeesMetaPostRetrieveRequest](../../models/operations/employeesmetapostretrieverequest.md)   | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `security`                                                                                                   | [operations.EmployeesMetaPostRetrieveSecurity](../../models/operations/employeesmetapostretrievesecurity.md) | :heavy_check_mark:                                                                                           | The security requirements to use for the request.                                                            |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.EmployeesMetaPostRetrieveResponse](../../models/operations/employeesmetapostretrieveresponse.md)>**


## employeesRetrieve

Returns an `Employee` object with the given `id`.

### Example Usage

```typescript
import { Hris } from "HRIS";
import {
  EmployeesRetrieveExpand,
  EmployeesRetrieveRemoteFields,
  EmployeesRetrieveResponse,
  EmployeesRetrieveShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();

sdk.employees.employeesRetrieve({
  xAccountToken: "officiis",
  expand: EmployeesRetrieveExpand.EmploymentsGroupsManagerTeamPayGroup,
  id: "af7a73cf-3be4-453f-870b-326b5a73429c",
  includeRemoteData: false,
  includeSensitiveFields: false,
  remoteFields: EmployeesRetrieveRemoteFields.Gender,
  showEnumOrigins: EmployeesRetrieveShowEnumOrigins.EthnicityMaritalStatus,
}, {
  tokenAuth: "",
}).then((res: EmployeesRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.EmployeesRetrieveRequest](../../models/operations/employeesretrieverequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.EmployeesRetrieveSecurity](../../models/operations/employeesretrievesecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.EmployeesRetrieveResponse](../../models/operations/employeesretrieveresponse.md)>**

