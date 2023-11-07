/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

/**
 * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
 */
export enum TimeOffBalancesListQueryParamExpand {
    Employee = "employee",
}

/**
 * If provided, will only return TimeOffBalance with this policy type. Options: ('VACATION', 'SICK', 'PERSONAL', 'JURY_DUTY', 'VOLUNTEER', 'BEREAVEMENT')
 *
 * @remarks
 *
 * * `VACATION` - VACATION
 * * `SICK` - SICK
 * * `PERSONAL` - PERSONAL
 * * `JURY_DUTY` - JURY_DUTY
 * * `VOLUNTEER` - VOLUNTEER
 * * `BEREAVEMENT` - BEREAVEMENT
 */
export enum PolicyType {
    Bereavement = "BEREAVEMENT",
    JuryDuty = "JURY_DUTY",
    Personal = "PERSONAL",
    Sick = "SICK",
    Vacation = "VACATION",
    Volunteer = "VOLUNTEER",
}

/**
 * Deprecated. Use show_enum_origins.
 */
export enum TimeOffBalancesListQueryParamRemoteFields {
    PolicyType = "policy_type",
}

/**
 * Which fields should be returned in non-normalized form.
 */
export enum TimeOffBalancesListQueryParamShowEnumOrigins {
    PolicyType = "policy_type",
}

export class TimeOffBalancesListRequest extends SpeakeasyBase {
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
     * If provided, will only return time off balances for this employee.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=employee_id" })
    employeeId?: string;

    /**
     * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" })
    expand?: TimeOffBalancesListQueryParamExpand;

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
     * If provided, will only return TimeOffBalance with this policy type. Options: ('VACATION', 'SICK', 'PERSONAL', 'JURY_DUTY', 'VOLUNTEER', 'BEREAVEMENT')
     *
     * @remarks
     *
     * * `VACATION` - VACATION
     * * `SICK` - SICK
     * * `PERSONAL` - PERSONAL
     * * `JURY_DUTY` - JURY_DUTY
     * * `VOLUNTEER` - VOLUNTEER
     * * `BEREAVEMENT` - BEREAVEMENT
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=policy_type" })
    policyType?: PolicyType;

    /**
     * Deprecated. Use show_enum_origins.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=remote_fields" })
    remoteFields?: TimeOffBalancesListQueryParamRemoteFields;

    /**
     * The API provider's ID for the given object.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=remote_id" })
    remoteId?: string;

    /**
     * Which fields should be returned in non-normalized form.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=show_enum_origins" })
    showEnumOrigins?: TimeOffBalancesListQueryParamShowEnumOrigins;
}

export class TimeOffBalancesListResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    paginatedTimeOffBalanceList?: shared.PaginatedTimeOffBalanceList;

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
}
