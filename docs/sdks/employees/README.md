# Employees
(*employees*)

### Available Operations

* [employeesCreate](#employeescreate) - Creates an `Employee` object with the given values.
* [employeesIgnoreCreate](#employeesignorecreate) - Ignores a specific row based on the `model_id` in the url. These records will have their properties set to null, and will not be updated in future syncs. The "reason" and "message" fields in the request body will be stored for audit purposes.
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

async function run() {
  const sdk = new Hris({
    security: {
      tokenAuth: "<YOUR_API_KEY_HERE>",
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
          "unique_integration_field": "unique_integration_field_value",
        },
        lastName: "Hirsch",
        linkedAccountParams: {
          "unique_linked_account_field": "unique_linked_account_field_value",
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
    xAccountToken: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.EmployeesCreateRequest](../../sdk/models/operations/employeescreaterequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.EmployeesCreateResponse](../../sdk/models/operations/employeescreateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## employeesIgnoreCreate

Ignores a specific row based on the `model_id` in the url. These records will have their properties set to null, and will not be updated in future syncs. The "reason" and "message" fields in the request body will be stored for audit purposes.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { Reason } from "HRIS/dist/sdk/models/shared";

async function run() {
  const sdk = new Hris({
    security: {
      tokenAuth: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.employees.employeesIgnoreCreate({
    ignoreCommonModelRequest: {
      message: "deletion request by user id 51903790-7dfe-4053-8d63-5a10cc4ffd39",
      reason: Reason.GeneralCustomerRequest,
    },
    xAccountToken: "string",
    modelId: "2a18e15d-530c-4d29-b14b-b6aaa7629957",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.EmployeesIgnoreCreateRequest](../../sdk/models/operations/employeesignorecreaterequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.EmployeesIgnoreCreateResponse](../../sdk/models/operations/employeesignorecreateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## employeesList

Returns a list of `Employee` objects.

### Example Usage

```typescript
import { Hris } from "HRIS";
import {
  EmployeesListQueryParamExpand,
  EmployeesListQueryParamRemoteFields,
  EmployeesListQueryParamShowEnumOrigins,
  EmploymentStatus,
} from "HRIS/dist/sdk/models/operations";

async function run() {
  const sdk = new Hris({
    security: {
      tokenAuth: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.employees.employeesList({
    xAccountToken: "string",
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
| `request`                                                                              | [operations.EmployeesListRequest](../../sdk/models/operations/employeeslistrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.EmployeesListResponse](../../sdk/models/operations/employeeslistresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## employeesMetaPostRetrieve

Returns metadata for `Employee` POSTs.

### Example Usage

```typescript
import { Hris } from "HRIS";

async function run() {
  const sdk = new Hris({
    security: {
      tokenAuth: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.employees.employeesMetaPostRetrieve({
    xAccountToken: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.EmployeesMetaPostRetrieveRequest](../../sdk/models/operations/employeesmetapostretrieverequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.EmployeesMetaPostRetrieveResponse](../../sdk/models/operations/employeesmetapostretrieveresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## employeesRetrieve

Returns an `Employee` object with the given `id`.

### Example Usage

```typescript
import { Hris } from "HRIS";
import {
  EmployeesRetrieveQueryParamExpand,
  EmployeesRetrieveQueryParamRemoteFields,
  EmployeesRetrieveQueryParamShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

async function run() {
  const sdk = new Hris({
    security: {
      tokenAuth: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.employees.employeesRetrieve({
    xAccountToken: "string",
    id: "1d206e21-c403-45d2-ac47-7e44b63a37d8",
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
| `request`                                                                                      | [operations.EmployeesRetrieveRequest](../../sdk/models/operations/employeesretrieverequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.EmployeesRetrieveResponse](../../sdk/models/operations/employeesretrieveresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
