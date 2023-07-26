/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class EmployeesIgnoreCreateMultipartSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({
        data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization",
    })
    tokenAuth: string;
}

export class EmployeesIgnoreCreateMultipartRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
    ignoreCommonModelRequest2: shared.IgnoreCommonModelRequest2;

    /**
     * Token identifying the end user.
     */
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Account-Token" })
    xAccountToken: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=model_id" })
    modelId: string;
}

export class EmployeesIgnoreCreateMultipartResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
