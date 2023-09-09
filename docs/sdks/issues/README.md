# issues

### Available Operations

* [issuesList](#issueslist) - Gets issues.
* [issuesRetrieve](#issuesretrieve) - Get a specific issue.

## issuesList

Gets issues.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { IssuesListResponse, IssuesListSecurity, IssuesListStatus } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();
const operationSecurity: IssuesListSecurity = {
  tokenAuth: "",
};

sdk.issues.issuesList({
  accountToken: "quisquam",
  cursor: "vero",
  endDate: "omnis",
  endUserOrganizationName: "quis",
  firstIncidentTimeAfter: new Date("2022-01-15T00:38:43.469Z"),
  firstIncidentTimeBefore: new Date("2022-10-08T10:17:36.770Z"),
  includeMuted: "vero",
  integrationName: "tenetur",
  lastIncidentTimeAfter: new Date("2022-01-22T09:31:52.637Z"),
  lastIncidentTimeBefore: new Date("2021-05-27T13:58:14.379Z"),
  pageSize: 486160,
  startDate: "similique",
  status: IssuesListStatus.Resolved,
}, operationSecurity).then((res: IssuesListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.IssuesListRequest](../../models/operations/issueslistrequest.md)   | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `security`                                                                     | [operations.IssuesListSecurity](../../models/operations/issueslistsecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.IssuesListResponse](../../models/operations/issueslistresponse.md)>**


## issuesRetrieve

Get a specific issue.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { IssuesRetrieveResponse, IssuesRetrieveSecurity } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();
const operationSecurity: IssuesRetrieveSecurity = {
  tokenAuth: "",
};

sdk.issues.issuesRetrieve({
  id: "d74dd39c-0f5d-42cf-b7c7-0a45626d4368",
}, operationSecurity).then((res: IssuesRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.IssuesRetrieveRequest](../../models/operations/issuesretrieverequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.IssuesRetrieveSecurity](../../models/operations/issuesretrievesecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.IssuesRetrieveResponse](../../models/operations/issuesretrieveresponse.md)>**

