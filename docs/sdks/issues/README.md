# issues

### Available Operations

* [issuesList](#issueslist) - Gets issues.
* [issuesRetrieve](#issuesretrieve) - Get a specific issue.

## issuesList

Gets issues.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { IssuesListResponse, IssuesListStatus } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();

sdk.issues.issuesList({
  accountToken: "ipsam",
  cursor: "ea",
  endDate: "aspernatur",
  endUserOrganizationName: "vel",
  firstIncidentTimeAfter: new Date("2022-02-08T20:43:00.221Z"),
  firstIncidentTimeBefore: new Date("2022-08-07T14:04:49.880Z"),
  includeMuted: "laudantium",
  integrationName: "dicta",
  lastIncidentTimeAfter: new Date("2022-01-08T01:04:15.076Z"),
  lastIncidentTimeBefore: new Date("2022-08-05T18:23:03.713Z"),
  pageSize: 862192,
  startDate: "excepturi",
  status: IssuesListStatus.Resolved,
}, {
  tokenAuth: "",
}).then((res: IssuesListResponse) => {
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
import { IssuesRetrieveResponse } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();

sdk.issues.issuesRetrieve({
  id: "5fce6c55-6146-4c3e-a50f-b008c42e141a",
}, {
  tokenAuth: "",
}).then((res: IssuesRetrieveResponse) => {
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

