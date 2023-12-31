/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

/**
 * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
 */
export enum EmployeePayrollRunsListQueryParamExpand {
    Employee = "employee",
    EmployeePayrollRun = "employee,payroll_run",
    PayrollRun = "payroll_run",
}

export class EmployeePayrollRunsListRequest extends SpeakeasyBase {
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
     * If provided, will only return employee payroll runs for this employee.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=employee_id" })
    employeeId?: string;

    /**
     * If provided, will only return employee payroll runs ended after this datetime.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ended_after" })
    endedAfter?: Date;

    /**
     * If provided, will only return employee payroll runs ended before this datetime.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ended_before" })
    endedBefore?: Date;

    /**
     * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" })
    expand?: EmployeePayrollRunsListQueryParamExpand;

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
     * If provided, will only return employee payroll runs for this employee.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payroll_run_id" })
    payrollRunId?: string;

    /**
     * The API provider's ID for the given object.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=remote_id" })
    remoteId?: string;

    /**
     * If provided, will only return employee payroll runs started after this datetime.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=started_after" })
    startedAfter?: Date;

    /**
     * If provided, will only return employee payroll runs started before this datetime.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=started_before" })
    startedBefore?: Date;
}

export class EmployeePayrollRunsListResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    paginatedEmployeePayrollRunList?: shared.PaginatedEmployeePayrollRunList;

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
}
