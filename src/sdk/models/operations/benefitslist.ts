/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class BenefitsListSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({
        data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization",
    })
    tokenAuth: string;
}

/**
 * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
 */
export enum BenefitsListExpand {
    Employee = "employee",
}

export class BenefitsListRequest extends SpeakeasyBase {
    /**
     * Token identifying the end user.
     */
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Account-Token" })
    xAccountToken: string;

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
     * If provided, will return the benefits associated with the employee.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=employee_id" })
    employeeId?: string;

    /**
     * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" })
    expand?: BenefitsListExpand;

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
     * Number of results to return per page.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
    pageSize?: number;

    /**
     * The API provider's ID for the given object.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=remote_id" })
    remoteId?: string;
}

export class BenefitsListResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    paginatedBenefitList?: shared.PaginatedBenefitList;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}