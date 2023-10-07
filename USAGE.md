<!-- Start SDK Example Usage -->


```typescript
import { Hris } from "HRIS";

(async() => {
  const sdk = new Hris({
    security: {
      tokenAuth: "",
    },
  });

  const res = await sdk.accountDetails.accountDetailsRetrieve({
    xAccountToken: "Officer Books Liaison",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```
<!-- End SDK Example Usage -->