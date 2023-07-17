/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class SelectiveSyncConfigurationsUpdateSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({
        data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization",
    })
    tokenAuth: string;
}

export class SelectiveSyncConfigurationsUpdateRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    linkedAccountSelectiveSyncConfigurationListRequest: shared.LinkedAccountSelectiveSyncConfigurationListRequest;

    /**
     * Token identifying the end user.
     */
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Account-Token" })
    xAccountToken: string;
}

export class SelectiveSyncConfigurationsUpdateResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata({ elemType: shared.LinkedAccountSelectiveSyncConfiguration })
    linkedAccountSelectiveSyncConfigurations?: shared.LinkedAccountSelectiveSyncConfiguration[];

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}