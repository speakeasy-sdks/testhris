# HRIS

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/testhris
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/testhris
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { Hris } from "HRIS";
import { AccountDetailsRetrieveResponse } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris({
  security: {
    tokenAuth: "",
  },
});

sdk.accountDetails.accountDetailsRetrieve({
  xAccountToken: "Officer Books Liaison",
}).then((res: AccountDetailsRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accountDetails](docs/sdks/accountdetails/README.md)

* [accountDetailsRetrieve](docs/sdks/accountdetails/README.md#accountdetailsretrieve) - Get details for a linked account.

### [accountToken](docs/sdks/accounttoken/README.md)

* [accountTokenRetrieve](docs/sdks/accounttoken/README.md#accounttokenretrieve) - Returns the account token for the end user with the provided public token.

### [availableActions](docs/sdks/availableactions/README.md)

* [availableActionsRetrieve](docs/sdks/availableactions/README.md#availableactionsretrieve) - Returns a list of models and actions available for an account.

### [bankInfo](docs/sdks/bankinfo/README.md)

* [bankInfoList](docs/sdks/bankinfo/README.md#bankinfolist) - Returns a list of `BankInfo` objects.
* [bankInfoRetrieve](docs/sdks/bankinfo/README.md#bankinforetrieve) - Returns a `BankInfo` object with the given `id`.

### [benefits](docs/sdks/benefits/README.md)

* [benefitsList](docs/sdks/benefits/README.md#benefitslist) - Returns a list of `Benefit` objects.
* [benefitsRetrieve](docs/sdks/benefits/README.md#benefitsretrieve) - Returns a `Benefit` object with the given `id`.

### [companies](docs/sdks/companies/README.md)

* [companiesList](docs/sdks/companies/README.md#companieslist) - Returns a list of `Company` objects.
* [companiesRetrieve](docs/sdks/companies/README.md#companiesretrieve) - Returns a `Company` object with the given `id`.

### [deleteAccount](docs/sdks/deleteaccount/README.md)

* [deleteAccountCreate](docs/sdks/deleteaccount/README.md#deleteaccountcreate) - Delete a linked account.

### [employeePayrollRuns](docs/sdks/employeepayrollruns/README.md)

* [employeePayrollRunsList](docs/sdks/employeepayrollruns/README.md#employeepayrollrunslist) - Returns a list of `EmployeePayrollRun` objects.
* [employeePayrollRunsRetrieve](docs/sdks/employeepayrollruns/README.md#employeepayrollrunsretrieve) - Returns an `EmployeePayrollRun` object with the given `id`.

### [employees](docs/sdks/employees/README.md)

* [employeesCreate](docs/sdks/employees/README.md#employeescreate) - Creates an `Employee` object with the given values.
* [employeesIgnoreCreateForm](docs/sdks/employees/README.md#employeesignorecreateform) - Ignores a specific row based on the `model_id` in the url. These records will have their properties set to null, and will not be updated in future syncs. The "reason" and "message" fields in the request body will be stored for audit purposes.
* [employeesIgnoreCreateJson](docs/sdks/employees/README.md#employeesignorecreatejson) - Ignores a specific row based on the `model_id` in the url. These records will have their properties set to null, and will not be updated in future syncs. The "reason" and "message" fields in the request body will be stored for audit purposes.
* [employeesIgnoreCreateMultipart](docs/sdks/employees/README.md#employeesignorecreatemultipart) - Ignores a specific row based on the `model_id` in the url. These records will have their properties set to null, and will not be updated in future syncs. The "reason" and "message" fields in the request body will be stored for audit purposes.
* [employeesList](docs/sdks/employees/README.md#employeeslist) - Returns a list of `Employee` objects.
* [employeesMetaPostRetrieve](docs/sdks/employees/README.md#employeesmetapostretrieve) - Returns metadata for `Employee` POSTs.
* [employeesRetrieve](docs/sdks/employees/README.md#employeesretrieve) - Returns an `Employee` object with the given `id`.

### [employments](docs/sdks/employments/README.md)

* [employmentsList](docs/sdks/employments/README.md#employmentslist) - Returns a list of `Employment` objects.
* [employmentsRetrieve](docs/sdks/employments/README.md#employmentsretrieve) - Returns an `Employment` object with the given `id`.

### [forceResync](docs/sdks/forceresync/README.md)

* [syncStatusResyncCreate](docs/sdks/forceresync/README.md#syncstatusresynccreate) - Force re-sync of all models. This is available for all organizations via the dashboard. Force re-sync is also available programmatically via API for monthly, quarterly, and highest sync frequency customers on the Core, Professional, or Enterprise plans. Doing so will consume a sync credit for the relevant linked account.

### [generateKey](docs/sdks/generatekey/README.md)

* [generateKeyCreate](docs/sdks/generatekey/README.md#generatekeycreate) - Create a remote key.

### [groups](docs/sdks/groups/README.md)

* [groupsList](docs/sdks/groups/README.md#groupslist) - Returns a list of `Group` objects.
* [groupsRetrieve](docs/sdks/groups/README.md#groupsretrieve) - Returns a `Group` object with the given `id`.

### [issues](docs/sdks/issues/README.md)

* [issuesList](docs/sdks/issues/README.md#issueslist) - Gets issues.
* [issuesRetrieve](docs/sdks/issues/README.md#issuesretrieve) - Get a specific issue.

### [linkToken](docs/sdks/linktoken/README.md)

* [linkTokenCreate](docs/sdks/linktoken/README.md#linktokencreate) - Creates a link token to be used when linking a new end user.

### [linkedAccounts](docs/sdks/linkedaccounts/README.md)

* [linkedAccountsList](docs/sdks/linkedaccounts/README.md#linkedaccountslist) - List linked accounts for your organization.

### [locations](docs/sdks/locations/README.md)

* [locationsList](docs/sdks/locations/README.md#locationslist) - Returns a list of `Location` objects.
* [locationsRetrieve](docs/sdks/locations/README.md#locationsretrieve) - Returns a `Location` object with the given `id`.

### [passthrough](docs/sdks/passthrough/README.md)

* [passthroughCreateForm](docs/sdks/passthrough/README.md#passthroughcreateform) - Pull data from an endpoint not currently supported by Merge.
* [passthroughCreateJson](docs/sdks/passthrough/README.md#passthroughcreatejson) - Pull data from an endpoint not currently supported by Merge.
* [passthroughCreateMultipart](docs/sdks/passthrough/README.md#passthroughcreatemultipart) - Pull data from an endpoint not currently supported by Merge.

### [payGroups](docs/sdks/paygroups/README.md)

* [payGroupsList](docs/sdks/paygroups/README.md#paygroupslist) - Returns a list of `PayGroup` objects.
* [payGroupsRetrieve](docs/sdks/paygroups/README.md#paygroupsretrieve) - Returns a `PayGroup` object with the given `id`.

### [payrollRuns](docs/sdks/payrollruns/README.md)

* [payrollRunsList](docs/sdks/payrollruns/README.md#payrollrunslist) - Returns a list of `PayrollRun` objects.
* [payrollRunsRetrieve](docs/sdks/payrollruns/README.md#payrollrunsretrieve) - Returns a `PayrollRun` object with the given `id`.

### [regenerateKey](docs/sdks/regeneratekey/README.md)

* [regenerateKeyCreate](docs/sdks/regeneratekey/README.md#regeneratekeycreate) - Exchange remote keys.

### [selectiveSync](docs/sdks/selectivesync/README.md)

* [selectiveSyncConfigurationsList](docs/sdks/selectivesync/README.md#selectivesyncconfigurationslist) - Get a linked account's selective syncs.
* [selectiveSyncConfigurationsUpdate](docs/sdks/selectivesync/README.md#selectivesyncconfigurationsupdate) - Replace a linked account's selective syncs.
* [selectiveSyncMetaList](docs/sdks/selectivesync/README.md#selectivesyncmetalist) - Get metadata for the conditions available to a linked account.

### [syncStatus](docs/sdks/syncstatus/README.md)

* [syncStatusList](docs/sdks/syncstatus/README.md#syncstatuslist) - Get syncing status. Possible values: `DISABLED`, `DONE`, `FAILED`, `PARTIALLY_SYNCED`, `PAUSED`, `SYNCING`

### [teams](docs/sdks/teams/README.md)

* [teamsList](docs/sdks/teams/README.md#teamslist) - Returns a list of `Team` objects.
* [teamsRetrieve](docs/sdks/teams/README.md#teamsretrieve) - Returns a `Team` object with the given `id`.

### [timeOff](docs/sdks/timeoff/README.md)

* [timeOffCreate](docs/sdks/timeoff/README.md#timeoffcreate) - Creates a `TimeOff` object with the given values.
* [timeOffList](docs/sdks/timeoff/README.md#timeofflist) - Returns a list of `TimeOff` objects.
* [timeOffMetaPostRetrieve](docs/sdks/timeoff/README.md#timeoffmetapostretrieve) - Returns metadata for `TimeOff` POSTs.
* [timeOffRetrieve](docs/sdks/timeoff/README.md#timeoffretrieve) - Returns a `TimeOff` object with the given `id`.

### [timeOffBalances](docs/sdks/timeoffbalances/README.md)

* [timeOffBalancesList](docs/sdks/timeoffbalances/README.md#timeoffbalanceslist) - Returns a list of `TimeOffBalance` objects.
* [timeOffBalancesRetrieve](docs/sdks/timeoffbalances/README.md#timeoffbalancesretrieve) - Returns a `TimeOffBalance` object with the given `id`.

### [webhookReceivers](docs/sdks/webhookreceivers/README.md)

* [webhookReceiversCreate](docs/sdks/webhookreceivers/README.md#webhookreceiverscreate) - Creates a `WebhookReceiver` object with the given values.
* [webhookReceiversList](docs/sdks/webhookreceivers/README.md#webhookreceiverslist) - Returns a list of `WebhookReceiver` objects.
<!-- End SDK Available Operations -->



<!-- Start Dev Containers -->

<!-- End Dev Containers -->



<!-- Start Pagination -->
# Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you make your SDK calls as usual, but the
returned response object will have a `next` method that can be called to pull down the next group of results. If the
return value of `next` is `null`, then there are no more pages to be fetched.

Here's an example of one such pagination call:
<!-- End Pagination -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
