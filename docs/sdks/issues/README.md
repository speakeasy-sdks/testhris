# Issues
(*issues*)

### Available Operations

* [issuesList](#issueslist) - Gets issues.
* [issuesRetrieve](#issuesretrieve) - Get a specific issue.

## issuesList

Gets issues.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { IssuesListResponse, IssuesListStatus } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.issues.issuesList({
  accountToken: "Loan methodologies",
  cursor: "Research vel EXE",
  endDate: "indexing",
  endUserOrganizationName: "female frame Ford",
  firstIncidentTimeAfter: new Date("2022-04-12T05:28:41.124Z"),
  firstIncidentTimeBefore: new Date("2021-03-22T10:33:10.478Z"),
  includeMuted: "Legacy sit Northwest",
  integrationName: "person",
  lastIncidentTimeAfter: new Date("2022-03-11T08:31:26.748Z"),
  lastIncidentTimeBefore: new Date("2023-05-19T12:16:04.512Z"),
  pageSize: 823561,
  startDate: "Oregon seriously Saudi",
  status: IssuesListStatus.Ongoing,
}).then((res: IssuesListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.IssuesListRequest](../../models/operations/issueslistrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.IssuesListResponse](../../models/operations/issueslistresponse.md)>**


## issuesRetrieve

Get a specific issue.

### Example Usage

```typescript
import { Hris } from "HRIS";
import { IssuesRetrieveResponse } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.issues.issuesRetrieve({
  id: "afe72258-f46d-4572-b194-a000d9ba8a35",
}).then((res: IssuesRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.IssuesRetrieveRequest](../../models/operations/issuesretrieverequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.IssuesRetrieveResponse](../../models/operations/issuesretrieveresponse.md)>**

