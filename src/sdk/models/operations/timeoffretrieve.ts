/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

/**
 * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
 */
export enum TimeOffRetrieveExpand {
    Approver = "approver",
    Employee = "employee",
    EmployeeApprover = "employee,approver",
}

/**
 * Deprecated. Use show_enum_origins.
 */
export enum TimeOffRetrieveRemoteFields {
    RequestType = "request_type",
    RequestTypeStatus = "request_type,status",
    RequestTypeStatusUnits = "request_type,status,units",
    RequestTypeUnits = "request_type,units",
    Status = "status",
    StatusUnits = "status,units",
    Units = "units",
}

/**
 * Which fields should be returned in non-normalized form.
 */
export enum TimeOffRetrieveShowEnumOrigins {
    RequestType = "request_type",
    RequestTypeStatus = "request_type,status",
    RequestTypeStatusUnits = "request_type,status,units",
    RequestTypeUnits = "request_type,units",
    Status = "status",
    StatusUnits = "status,units",
    Units = "units",
}

export class TimeOffRetrieveRequest extends SpeakeasyBase {
    /**
     * Token identifying the end user.
     */
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Account-Token" })
    xAccountToken: string;

    /**
     * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" })
    expand?: TimeOffRetrieveExpand;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;

    /**
     * Whether to include the original data Merge fetched from the third-party to produce these models.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_remote_data" })
    includeRemoteData?: boolean;

    /**
     * Deprecated. Use show_enum_origins.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=remote_fields" })
    remoteFields?: TimeOffRetrieveRemoteFields;

    /**
     * Which fields should be returned in non-normalized form.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=show_enum_origins" })
    showEnumOrigins?: TimeOffRetrieveShowEnumOrigins;
}

export class TimeOffRetrieveResponse extends SpeakeasyBase {
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
    rawResponse?: AxiosResponse;

    @SpeakeasyMetadata()
    timeOff?: shared.TimeOff;
}
