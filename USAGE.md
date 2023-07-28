<!-- Start SDK Example Usage -->


```typescript
import { Hris } from "HRIS";
import { AccountDetailsRetrieveResponse, AccountDetailsRetrieveSecurity } from "HRIS/dist/sdk/models/operations";

const sdk = new Hris();
const operationSecurity: AccountDetailsRetrieveSecurity = {
  tokenAuth: "",
};

sdk.accountDetails.accountDetailsRetrieve({
  xAccountToken: "corrupti",
}, operationSecurity).then((res: AccountDetailsRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->