/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class BankInfoListSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({
        data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization",
    })
    tokenAuth: string;
}

/**
 * If provided, will only return BankInfo's with this account type. Options: ('SAVINGS', 'CHECKING')
 *
 * @remarks
 *
 * * `SAVINGS` - SAVINGS
 * * `CHECKING` - CHECKING
 */
export enum BankInfoListAccountType {
    Checking = "CHECKING",
    Savings = "SAVINGS",
}

/**
 * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
 */
export enum BankInfoListExpand {
    Employee = "employee",
}

/**
 * Overrides the default ordering for this endpoint.
 */
export enum BankInfoListOrderBy {
    MinusRemoteCreatedAt = "-remote_created_at",
    RemoteCreatedAt = "remote_created_at",
}

/**
 * Deprecated. Use show_enum_origins.
 */
export enum BankInfoListRemoteFields {
    AccountType = "account_type",
}

/**
 * Which fields should be returned in non-normalized form.
 */
export enum BankInfoListShowEnumOrigins {
    AccountType = "account_type",
}

export class BankInfoListRequest extends SpeakeasyBase {
    /**
     * Token identifying the end user.
     */
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Account-Token" })
    xAccountToken: string;

    /**
     * If provided, will only return BankInfo's with this account type. Options: ('SAVINGS', 'CHECKING')
     *
     * @remarks
     *
     * * `SAVINGS` - SAVINGS
     * * `CHECKING` - CHECKING
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=account_type" })
    accountType?: BankInfoListAccountType;

    /**
     * If provided, will only return BankInfo's with this bank name.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bank_name" })
    bankName?: string;

    /**
     * If provided, will only return objects created after this datetime.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created_after" })
    createdAfter?: Date;

    /**
     * If provided, will only return objects created before this datetime.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created_before" })
    createdBefore?: Date;

    /**
     * The pagination cursor value.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
    cursor?: string;

    /**
     * If provided, will only return bank accounts for this employee.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=employee_id" })
    employeeId?: string;

    /**
     * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" })
    expand?: BankInfoListExpand;

    /**
     * Whether to include data that was marked as deleted by third party webhooks.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_deleted_data" })
    includeDeletedData?: boolean;

    /**
     * Whether to include the original data Merge fetched from the third-party to produce these models.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_remote_data" })
    includeRemoteData?: boolean;

    /**
     * If provided, only objects synced by Merge after this date time will be returned.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modified_after" })
    modifiedAfter?: Date;

    /**
     * If provided, only objects synced by Merge before this date time will be returned.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modified_before" })
    modifiedBefore?: Date;

    /**
     * Overrides the default ordering for this endpoint.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order_by" })
    orderBy?: BankInfoListOrderBy;

    /**
     * Number of results to return per page.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
    pageSize?: number;

    /**
     * Deprecated. Use show_enum_origins.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=remote_fields" })
    remoteFields?: BankInfoListRemoteFields;

    /**
     * The API provider's ID for the given object.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=remote_id" })
    remoteId?: string;

    /**
     * Which fields should be returned in non-normalized form.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=show_enum_origins" })
    showEnumOrigins?: BankInfoListShowEnumOrigins;
}

export class BankInfoListResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    paginatedBankInfoList?: shared.PaginatedBankInfoList;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}