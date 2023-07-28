# selectiveSync

### Available Operations

* [selectiveSyncConfigurationsList](#selectivesyncconfigurationslist) - Get a linked account's selective syncs.
* [selectiveSyncConfigurationsUpdate](#selectivesyncconfigurationsupdate) - Replace a linked account's selective syncs.
* [selectiveSyncMetaList](#selectivesyncmetalist) - Get metadata for the conditions available to a linked account.

## selectiveSyncConfigurationsList

Get a linked account's selective syncs.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { SelectiveSyncConfigurationsListResponse, SelectiveSyncConfigurationsListSecurity } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();
const operationSecurity: SelectiveSyncConfigurationsListSecurity = {
  tokenAuth: "",
};

sdk.selectiveSync.selectiveSyncConfigurationsList({
  xAccountToken: "est",
}, operationSecurity).then((res: SelectiveSyncConfigurationsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.SelectiveSyncConfigurationsListRequest](../../models/operations/selectivesyncconfigurationslistrequest.md)   | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `security`                                                                                                               | [operations.SelectiveSyncConfigurationsListSecurity](../../models/operations/selectivesyncconfigurationslistsecurity.md) | :heavy_check_mark:                                                                                                       | The security requirements to use for the request.                                                                        |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.SelectiveSyncConfigurationsListResponse](../../models/operations/selectivesyncconfigurationslistresponse.md)>**


## selectiveSyncConfigurationsUpdate

Replace a linked account's selective syncs.

### Example Usage

```typescript
import { Hris } from "HRIS";
import {
  SelectiveSyncConfigurationsUpdateResponse,
  SelectiveSyncConfigurationsUpdateSecurity,
} from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();
const operationSecurity: SelectiveSyncConfigurationsUpdateSecurity = {
  tokenAuth: "",
};

sdk.selectiveSync.selectiveSyncConfigurationsUpdate({
  linkedAccountSelectiveSyncConfigurationListRequest: {
    syncConfigurations: [
      {
        linkedAccountConditions: [
          {
            conditionSchemaId: "d67864db-b675-4fd5-a60b-375ed4f6fbee",
            operator: "dolore",
            value: "sunt",
          },
          {
            conditionSchemaId: "f33317fe-35b6-40eb-9ea4-26555ba3c287",
            operator: "dolore",
            value: "aliquam",
          },
          {
            conditionSchemaId: "ed53b88f-3a8d-48f5-80b2-f2fb7b194a27",
            operator: "commodi",
            value: "quidem",
          },
        ],
      },
      {
        linkedAccountConditions: [
          {
            conditionSchemaId: "6916fe1f-08f4-4294-a369-8f447f603e8b",
            operator: "quaerat",
            value: "incidunt",
          },
        ],
      },
      {
        linkedAccountConditions: [
          {
            conditionSchemaId: "e80ca55e-fd20-4e45-be18-58b6a89fbe3a",
            operator: "nostrum",
            value: "officia",
          },
          {
            conditionSchemaId: "a8e4824d-0ab4-4075-888e-51862065e904",
            operator: "reiciendis",
            value: "dolorem",
          },
        ],
      },
      {
        linkedAccountConditions: [
          {
            conditionSchemaId: "1194b8ab-f603-4a79-b9df-e0ab7da8a50c",
            operator: "repudiandae",
            value: "quasi",
          },
          {
            conditionSchemaId: "87f86bc1-73d6-489e-ae95-26f8d986e881",
            operator: "recusandae",
            value: "dolorum",
          },
          {
            conditionSchemaId: "d4f0e101-2563-4f94-a29e-973e922a57a1",
            operator: "corporis",
            value: "quidem",
          },
        ],
      },
    ],
  },
  xAccountToken: "eveniet",
}, operationSecurity).then((res: SelectiveSyncConfigurationsUpdateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.SelectiveSyncConfigurationsUpdateRequest](../../models/operations/selectivesyncconfigurationsupdaterequest.md)   | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `security`                                                                                                                   | [operations.SelectiveSyncConfigurationsUpdateSecurity](../../models/operations/selectivesyncconfigurationsupdatesecurity.md) | :heavy_check_mark:                                                                                                           | The security requirements to use for the request.                                                                            |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.SelectiveSyncConfigurationsUpdateResponse](../../models/operations/selectivesyncconfigurationsupdateresponse.md)>**


## selectiveSyncMetaList

Get metadata for the conditions available to a linked account.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { SelectiveSyncMetaListResponse, SelectiveSyncMetaListSecurity } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();
const operationSecurity: SelectiveSyncMetaListSecurity = {
  tokenAuth: "",
};

sdk.selectiveSync.selectiveSyncMetaList({
  xAccountToken: "non",
  commonModel: "vero",
  cursor: "doloremque",
  pageSize: 434156,
}, operationSecurity).then((res: SelectiveSyncMetaListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.SelectiveSyncMetaListRequest](../../models/operations/selectivesyncmetalistrequest.md)   | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `security`                                                                                           | [operations.SelectiveSyncMetaListSecurity](../../models/operations/selectivesyncmetalistsecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.SelectiveSyncMetaListResponse](../../models/operations/selectivesyncmetalistresponse.md)>**

