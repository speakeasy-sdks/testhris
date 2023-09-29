# Employees
(*employees*)

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

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

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
        "78053f6f-9158-4442-a8d9-ec64d4239460",
      ],
      ethnicity: EmployeeRequestEthnicity.White,
      firstName: "Greg",
      gender: EmployeeRequestGender.Male,
      groups: [
        "9b3fdbda-3b7a-4b08-995d-c4d589e1d6a6",
      ],
      hireDate: new Date("2020-10-10T00:00:00Z"),
      homeLocation: "d2f972d0-2526-434b-9409-4c3b468e08f0",
      integrationParams: {
        "occaecati": "program",
      },
      lastName: "Hirsch",
      linkedAccountParams: {
        "eos": "San",
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
  xAccountToken: "quis group",
  isDebugMode: false,
  runAsync: false,
}).then((res: EmployeesCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.EmployeesCreateRequest](../../models/operations/employeescreaterequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.EmployeesCreateResponse](../../models/operations/employeescreateresponse.md)>**


## employeesIgnoreCreateForm

Ignores a specific row based on the `model_id` in the url. These records will have their properties set to null, and will not be updated in future syncs. The "reason" and "message" fields in the request body will be stored for audit purposes.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { EmployeesIgnoreCreateFormResponse } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.employees.employeesIgnoreCreateForm({
  ignoreCommonModelRequest1: {
    message: "deletion request by user id 51903790-7dfe-4053-8d63-5a10cc4ffd39",
    reason: "turquoise",
  },
  xAccountToken: "even",
  modelId: "26567718-4b15-4d60-9e01-c9116e04a788",
}).then((res: EmployeesIgnoreCreateFormResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.EmployeesIgnoreCreateFormRequest](../../models/operations/employeesignorecreateformrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.EmployeesIgnoreCreateFormResponse](../../models/operations/employeesignorecreateformresponse.md)>**


## employeesIgnoreCreateJson

Ignores a specific row based on the `model_id` in the url. These records will have their properties set to null, and will not be updated in future syncs. The "reason" and "message" fields in the request body will be stored for audit purposes.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { EmployeesIgnoreCreateJsonResponse } from "HRIS/dist/sdk/models/operations";
import { IgnoreCommonModelRequestReason } from "HRIS/dist/sdk/models/shared";

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.employees.employeesIgnoreCreateJson({
  ignoreCommonModelRequest: {
    message: "deletion request by user id 51903790-7dfe-4053-8d63-5a10cc4ffd39",
    reason: IgnoreCommonModelRequestReason.GeneralCustomerRequest,
  },
  xAccountToken: "XML Assurance",
  modelId: "5300c2b8-daeb-45f9-8721-d56763138ba6",
}).then((res: EmployeesIgnoreCreateJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.EmployeesIgnoreCreateJsonRequest](../../models/operations/employeesignorecreatejsonrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.EmployeesIgnoreCreateJsonResponse](../../models/operations/employeesignorecreatejsonresponse.md)>**


## employeesIgnoreCreateMultipart

Ignores a specific row based on the `model_id` in the url. These records will have their properties set to null, and will not be updated in future syncs. The "reason" and "message" fields in the request body will be stored for audit purposes.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { EmployeesIgnoreCreateMultipartResponse } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.employees.employeesIgnoreCreateMultipart({
  ignoreCommonModelRequest1: {
    message: "deletion request by user id 51903790-7dfe-4053-8d63-5a10cc4ffd39",
    reason: "BMW",
  },
  xAccountToken: "Pop",
  modelId: "62637733-58aa-42e8-983b-f79dc18e8344",
}).then((res: EmployeesIgnoreCreateMultipartResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.EmployeesIgnoreCreateMultipartRequest](../../models/operations/employeesignorecreatemultipartrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


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

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.employees.employeesList({
  xAccountToken: "Madagascar North Hyundai",
  companyId: "sky Tuna",
  createdAfter: new Date("2023-09-03T04:09:46.231Z"),
  createdBefore: new Date("2022-12-18T17:51:19.372Z"),
  cursor: "mad capacitor",
  displayFullName: "inasmuch Vietnam Pound",
  employmentStatus: EmployeesListEmploymentStatus.Pending,
  expand: EmployeesListExpand.EmploymentsGroupsHomeLocationWorkLocationManagerTeamCompanyPayGroup,
  firstName: "Deshaun",
  groups: "Credit",
  includeDeletedData: false,
  includeRemoteData: false,
  includeSensitiveFields: false,
  lastName: "Stehr",
  managerId: "Birr matrix",
  modifiedAfter: new Date("2021-07-12T11:31:25.582Z"),
  modifiedBefore: new Date("2023-09-26T04:03:56.632Z"),
  pageSize: 236970,
  payGroupId: "indigo Southwest methodical",
  personalEmail: "Carolanne32@gmail.com",
  remoteFields: EmployeesListRemoteFields.Gender,
  remoteId: "Northeast Innovative South",
  showEnumOrigins: EmployeesListShowEnumOrigins.MaritalStatus,
  startedAfter: new Date("2021-12-30T23:01:36.795Z"),
  startedBefore: new Date("2022-08-03T10:02:46.111Z"),
  teamId: "defiantly Towels",
  terminatedAfter: new Date("2022-07-10T12:00:29.418Z"),
  terminatedBefore: new Date("2023-12-20T22:31:52.600Z"),
  workEmail: "Ewald_Shanahan94@hotmail.com",
  workLocationId: "Analyst Auto",
}).then((res: EmployeesListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.EmployeesListRequest](../../models/operations/employeeslistrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.EmployeesListResponse](../../models/operations/employeeslistresponse.md)>**


## employeesMetaPostRetrieve

Returns metadata for `Employee` POSTs.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { EmployeesMetaPostRetrieveResponse } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.employees.employeesMetaPostRetrieve({
  xAccountToken: "maroon Handmade",
}).then((res: EmployeesMetaPostRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.EmployeesMetaPostRetrieveRequest](../../models/operations/employeesmetapostretrieverequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


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

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.employees.employeesRetrieve({
  xAccountToken: "Convertible",
  expand: EmployeesRetrieveExpand.EmploymentsGroupsHomeLocation,
  id: "6e21c403-5d22-4c47-be44-b63a37d856a1",
  includeRemoteData: false,
  includeSensitiveFields: false,
  remoteFields: EmployeesRetrieveRemoteFields.EthnicityMaritalStatus,
  showEnumOrigins: EmployeesRetrieveShowEnumOrigins.EmploymentStatusGender,
}).then((res: EmployeesRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.EmployeesRetrieveRequest](../../models/operations/employeesretrieverequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.EmployeesRetrieveResponse](../../models/operations/employeesretrieveresponse.md)>**

