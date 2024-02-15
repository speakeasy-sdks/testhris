<!-- Start SDK Example Usage [usage] -->
```typescript
import { Hris } from "HRIS";

async function run() {
    const sdk = new Hris({
        security: {
            tokenAuth: "<YOUR_API_KEY_HERE>",
        },
    });

    const res = await sdk.accountDetails.accountDetailsRetrieve({
        xAccountToken: "<value>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->