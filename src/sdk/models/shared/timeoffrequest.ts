/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

/**
 * * `VACATION` - VACATION
 *
 * @remarks
 * * `SICK` - SICK
 * * `PERSONAL` - PERSONAL
 * * `JURY_DUTY` - JURY_DUTY
 * * `VOLUNTEER` - VOLUNTEER
 * * `BEREAVEMENT` - BEREAVEMENT
 */
export enum TimeOffRequestRequestType {
    Vacation = "VACATION",
    Sick = "SICK",
    Personal = "PERSONAL",
    JuryDuty = "JURY_DUTY",
    Volunteer = "VOLUNTEER",
    Bereavement = "BEREAVEMENT",
}

/**
 * * `REQUESTED` - REQUESTED
 *
 * @remarks
 * * `APPROVED` - APPROVED
 * * `DECLINED` - DECLINED
 * * `CANCELLED` - CANCELLED
 * * `DELETED` - DELETED
 */
export enum TimeOffRequestStatus {
    Requested = "REQUESTED",
    Approved = "APPROVED",
    Declined = "DECLINED",
    Cancelled = "CANCELLED",
    Deleted = "DELETED",
}

/**
 * * `HOURS` - HOURS
 *
 * @remarks
 * * `DAYS` - DAYS
 */
export enum TimeOffRequestUnits {
    Hours = "HOURS",
    Days = "DAYS",
}

/**
 * # The TimeOff Object
 *
 * @remarks
 * ### Description
 * The `TimeOff` object is used to represent all employees' Time Off entries.
 *
 * ### Usage Example
 * Fetch from the `LIST TimeOffs` endpoint and filter by `ID` to show all time off requests.
 */
export class TimeOffRequest extends SpeakeasyBase {
    /**
     * The time off quantity measured by the prescribed “units”.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount?: number;

    /**
     * The Merge ID of the employee with the ability to approve the time off request.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "approver" })
    approver?: string;

    /**
     * The employee requesting time off.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "employee" })
    employee?: string;

    /**
     * The employee note for this time off request.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "employee_note" })
    employeeNote?: string;

    /**
     * The day and time of the end of the time requested off.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "end_time" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    endTime?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "integration_params" })
    integrationParams?: Record<string, any>;

    @SpeakeasyMetadata()
    @Expose({ name: "linked_account_params" })
    linkedAccountParams?: Record<string, any>;

    /**
     * The type of time off request.
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
    @SpeakeasyMetadata()
    @Expose({ name: "request_type" })
    requestType?: TimeOffRequestRequestType;

    /**
     * The day and time of the start of the time requested off.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "start_time" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    startTime?: Date;

    /**
     * The status of this time off request.
     *
     * @remarks
     *
     * * `REQUESTED` - REQUESTED
     * * `APPROVED` - APPROVED
     * * `DECLINED` - DECLINED
     * * `CANCELLED` - CANCELLED
     * * `DELETED` - DELETED
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: TimeOffRequestStatus;

    /**
     * The measurement that the third-party integration uses to count time requested.
     *
     * @remarks
     *
     * * `HOURS` - HOURS
     * * `DAYS` - DAYS
     */
    @SpeakeasyMetadata()
    @Expose({ name: "units" })
    units?: TimeOffRequestUnits;
}
