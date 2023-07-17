/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class BankInfoRetrieveSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({
        data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization",
    })
    tokenAuth: string;
}

/**
 * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
 */
export enum BankInfoRetrieveExpand {
    Employee = "employee",
}

/**
 * Deprecated. Use show_enum_origins.
 */
export enum BankInfoRetrieveRemoteFields {
    AccountType = "account_type",
}

/**
 * Which fields should be returned in non-normalized form.
 */
export enum BankInfoRetrieveShowEnumOrigins {
    AccountType = "account_type",
}

export class BankInfoRetrieveRequest extends SpeakeasyBase {
    /**
     * Token identifying the end user.
     */
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Account-Token" })
    xAccountToken: string;

    /**
     * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" })
    expand?: BankInfoRetrieveExpand;

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
    remoteFields?: BankInfoRetrieveRemoteFields;

    /**
     * Which fields should be returned in non-normalized form.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=show_enum_origins" })
    showEnumOrigins?: BankInfoRetrieveShowEnumOrigins;
}

export class BankInfoRetrieveResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    bankInfo?: shared.BankInfo;

    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}