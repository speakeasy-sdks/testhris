/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

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
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;

    @SpeakeasyMetadata({ elemType: shared.LinkedAccountSelectiveSyncConfiguration })
    classes?: shared.LinkedAccountSelectiveSyncConfiguration[];
}
