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
import { EmployeesCreateResponse, EmployeesCreateSecurity } from "HRIS/dist/sdk/models/operations";
import {
  EmployeeRequestEmploymentStatus,
  EmployeeRequestEthnicity,
  EmployeeRequestGender,
  EmployeeRequestMaritalStatus,
} from "HRIS/dist/sdk/models/shared";

const sdk = new Hris();
const operationSecurity: EmployeesCreateSecurity = {
  tokenAuth: "",
};

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
        "02a94bb4-f63c-4969-a9a3-efa77dfb14cd",
      ],
      ethnicity: EmployeeRequestEthnicity.White,
      firstName: "Greg",
      gender: EmployeeRequestGender.Male,
      groups: [
        "66ae395e-fb9b-4a88-b3a6-6997074ba446",
      ],
      hireDate: new Date("2020-10-10T00:00:00Z"),
      homeLocation: "d2f972d0-2526-434b-9409-4c3b468e08f0",
      integrationParams: {
        "natus": "nobis",
      },
      lastName: "Hirsch",
      linkedAccountParams: {
        "eum": "vero",
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
  xAccountToken: "aspernatur",
  isDebugMode: false,
  runAsync: false,
}, operationSecurity).then((res: EmployeesCreateResponse) => {
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
import { EmployeesIgnoreCreateFormResponse, EmployeesIgnoreCreateFormSecurity } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();
const operationSecurity: EmployeesIgnoreCreateFormSecurity = {
  tokenAuth: "",
};

sdk.employees.employeesIgnoreCreateForm({
  ignoreCommonModelRequest2: {
    message: "deletion request by user id 51903790-7dfe-4053-8d63-5a10cc4ffd39",
    reason: "architecto",
  },
  xAccountToken: "magnam",
  modelId: "1959890a-fa56-43e2-916f-e4c8b711e5b7",
}, operationSecurity).then((res: EmployeesIgnoreCreateFormResponse) => {
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
import { EmployeesIgnoreCreateJsonResponse, EmployeesIgnoreCreateJsonSecurity } from "HRIS/dist/sdk/models/operations";
import { IgnoreCommonModelRequestReason } from "HRIS/dist/sdk/models/shared";

const sdk = new Hris();
const operationSecurity: EmployeesIgnoreCreateJsonSecurity = {
  tokenAuth: "",
};

sdk.employees.employeesIgnoreCreateJson({
  ignoreCommonModelRequest: {
    message: "deletion request by user id 51903790-7dfe-4053-8d63-5a10cc4ffd39",
    reason: IgnoreCommonModelRequestReason.GeneralCustomerRequest,
  },
  xAccountToken: "repellat",
  modelId: "d2ed0289-21cd-4dc6-9260-1fb576b0d5f0",
}, operationSecurity).then((res: EmployeesIgnoreCreateJsonResponse) => {
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
import { EmployeesIgnoreCreateMultipartResponse, EmployeesIgnoreCreateMultipartSecurity } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();
const operationSecurity: EmployeesIgnoreCreateMultipartSecurity = {
  tokenAuth: "",
};

sdk.employees.employeesIgnoreCreateMultipart({
  ignoreCommonModelRequest2: {
    message: "deletion request by user id 51903790-7dfe-4053-8d63-5a10cc4ffd39",
    reason: "fugiat",
  },
  xAccountToken: "amet",
  modelId: "0c5fbb25-8705-4320-ac73-d5fe9b90c289",
}, operationSecurity).then((res: EmployeesIgnoreCreateMultipartResponse) => {
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
  EmployeesListSecurity,
  EmployeesListShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();
const operationSecurity: EmployeesListSecurity = {
  tokenAuth: "",
};

sdk.employees.employeesList({
  xAccountToken: "eaque",
  companyId: "occaecati",
  createdAfter: new Date("2022-07-11T08:07:03.616Z"),
  createdBefore: new Date("2020-03-14T00:51:21.656Z"),
  cursor: "modi",
  displayFullName: "iste",
  employmentStatus: EmployeesListEmploymentStatus.Pending,
  expand: EmployeesListExpand.GroupsHomeLocationManager,
  firstName: "Sam",
  groups: "provident",
  includeDeletedData: false,
  includeRemoteData: false,
  includeSensitiveFields: false,
  lastName: "Rolfson",
  managerId: "libero",
  modifiedAfter: new Date("2022-01-24T10:05:07.174Z"),
  modifiedBefore: new Date("2022-03-16T07:10:00.236Z"),
  pageSize: 212390,
  payGroupId: "dolorem",
  personalEmail: "Christy_Erdman73@gmail.com",
  remoteFields: EmployeesListRemoteFields.EmploymentStatusGenderMaritalStatus,
  remoteId: "dignissimos",
  showEnumOrigins: EmployeesListShowEnumOrigins.MaritalStatus,
  startedAfter: new Date("2022-04-27T14:25:42.204Z"),
  startedBefore: new Date("2022-11-30T20:48:38.083Z"),
  teamId: "ipsa",
  terminatedAfter: new Date("2022-07-26T10:30:36.625Z"),
  terminatedBefore: new Date("2022-09-09T04:40:04.540Z"),
  workEmail: "Maurine_Wolf@hotmail.com",
  workLocationId: "eos",
}, operationSecurity).then((res: EmployeesListResponse) => {
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
import { EmployeesMetaPostRetrieveResponse, EmployeesMetaPostRetrieveSecurity } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();
const operationSecurity: EmployeesMetaPostRetrieveSecurity = {
  tokenAuth: "",
};

sdk.employees.employeesMetaPostRetrieve({
  xAccountToken: "atque",
}, operationSecurity).then((res: EmployeesMetaPostRetrieveResponse) => {
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
  EmployeesRetrieveSecurity,
  EmployeesRetrieveShowEnumOrigins,
} from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();
const operationSecurity: EmployeesRetrieveSecurity = {
  tokenAuth: "",
};

sdk.employees.employeesRetrieve({
  xAccountToken: "sit",
  expand: EmployeesRetrieveExpand.HomeLocationWorkLocationManagerTeam,
  id: "1ba77a89-ebf7-437a-a420-3ce5e6a95d8a",
  includeRemoteData: false,
  includeSensitiveFields: false,
  remoteFields: EmployeesRetrieveRemoteFields.EmploymentStatus,
  showEnumOrigins: EmployeesRetrieveShowEnumOrigins.GenderMaritalStatus,
}, operationSecurity).then((res: EmployeesRetrieveResponse) => {
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

