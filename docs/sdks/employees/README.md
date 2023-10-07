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
import {
  EmployeeRequestEmploymentStatus,
  EmployeeRequestEthnicity,
  EmployeeRequestGender,
  EmployeeRequestMaritalStatus,
} from "HRIS/dist/sdk/models/shared";

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.employees.employeesCreate({
    employeeEndpointRequest: {
      model: {
        avatar: "http://alturl.com/h2h8m",
        company: "8d9fd929-436c-4fd4-a48b-0c61f68d6178",
        dateOfBirth: new Date("1990-11-10T00:00:00Z"),
        displayFullName: "Cousin Greg Hirsch",
        employeeNumber: "2",
        employmentStatus: EmployeeRequestEmploymentStatus.Inactive,
        employments: [
          "17a54124-287f-494d-965e-3c5b330c9a68",
        ],
        ethnicity: EmployeeRequestEthnicity.White,
        firstName: "Greg",
        gender: EmployeeRequestGender.Male,
        groups: [
          "21a54124-397f-494d-985e-3c5b330b8a68",
        ],
        hireDate: new Date("2020-10-10T00:00:00Z"),
        homeLocation: "d2f972d0-2526-434b-9409-4c3b468e08f0",
        integrationParams: {
          "unique_integration_field": "payment",
        },
        lastName: "Hirsch",
        linkedAccountParams: {
          "unique_linked_account_field": "Folsom",
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
    xAccountToken: "height",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.employees.employeesIgnoreCreateForm({
    ignoreCommonModelRequest1: {
      message: "deletion request by user id 51903790-7dfe-4053-8d63-5a10cc4ffd39",
      reason: "GENERAL_CUSTOMER_REQUEST",
    },
    xAccountToken: "EXE",
    modelId: "e3265677-184b-415d-a09e-01c9116e04a7",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { IgnoreCommonModelRequestReason } from "HRIS/dist/sdk/models/shared";

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.employees.employeesIgnoreCreateJson({
    ignoreCommonModelRequest: {
      message: "deletion request by user id 51903790-7dfe-4053-8d63-5a10cc4ffd39",
      reason: IgnoreCommonModelRequestReason.GeneralCustomerRequest,
    },
    xAccountToken: "XML Assurance",
    modelId: "5300c2b8-daeb-45f9-8721-d56763138ba6",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.employees.employeesIgnoreCreateMultipart({
    ignoreCommonModelRequest1: {
      message: "deletion request by user id 51903790-7dfe-4053-8d63-5a10cc4ffd39",
      reason: "GENERAL_CUSTOMER_REQUEST",
    },
    xAccountToken: "Arizona Pop circuit",
    modelId: "63773358-aa2e-48d8-bbf7-9dc18e834450",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
  EmployeesListShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.employees.employeesList({
    xAccountToken: "Madagascar North Hyundai",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.employees.employeesMetaPostRetrieve({
    xAccountToken: "maroon Handmade",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
  EmployeesRetrieveShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.employees.employeesRetrieve({
    xAccountToken: "Convertible",
    id: "06e21c40-35d2-42c4-b7e4-4b63a37d856a",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.EmployeesRetrieveRequest](../../models/operations/employeesretrieverequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.EmployeesRetrieveResponse](../../models/operations/employeesretrieveresponse.md)>**

