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