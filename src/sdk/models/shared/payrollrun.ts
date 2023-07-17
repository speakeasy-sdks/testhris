/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RemoteData } from "./remotedata";
import { Expose, Transform, Type } from "class-transformer";

/**
 * * `PAID` - PAID
 *
 * @remarks
 * * `DRAFT` - DRAFT
 * * `APPROVED` - APPROVED
 * * `FAILED` - FAILED
 * * `CLOSED` - CLOSED
 */
export enum PayrollRunRunState {
    Paid = "PAID",
    Draft = "DRAFT",
    Approved = "APPROVED",
    Failed = "FAILED",
    Closed = "CLOSED",
}

/**
 * * `REGULAR` - REGULAR
 *
 * @remarks
 * * `OFF_CYCLE` - OFF_CYCLE
 * * `CORRECTION` - CORRECTION
 * * `TERMINATION` - TERMINATION
 * * `SIGN_ON_BONUS` - SIGN_ON_BONUS
 */
export enum PayrollRunRunType {
    Regular = "REGULAR",
    OffCycle = "OFF_CYCLE",
    Correction = "CORRECTION",
    Termination = "TERMINATION",
    SignOnBonus = "SIGN_ON_BONUS",
}

/**
 * # The PayrollRun Object
 *
 * @remarks
 * ### Description
 * The `PayrollRun` object is used to represent a group of pay statements for a specific pay schedule.
 *
 * ### Usage Example
 * Fetch from the `LIST PayrollRuns` endpoint and filter by `ID` to show all payroll runs.
 */
export class PayrollRun extends SpeakeasyBase {
    /**
     * The day and time the payroll run was checked.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "check_date" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    checkDate?: Date;

    /**
     * The day and time the payroll run ended.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "end_date" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    endDate?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "field_mappings" })
    fieldMappings?: Record<string, any>;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * This is the datetime that this object was last updated by Merge
     */
    @SpeakeasyMetadata()
    @Expose({ name: "modified_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    modifiedAt?: Date;

    @SpeakeasyMetadata({ elemType: RemoteData })
    @Expose({ name: "remote_data" })
    @Type(() => RemoteData)
    remoteData?: RemoteData[];

    /**
     * The third-party API ID of the matching object.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "remote_id" })
    remoteId?: string;

    /**
     * Indicates whether or not this object has been deleted by third party webhooks.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "remote_was_deleted" })
    remoteWasDeleted?: boolean;

    /**
     * The state of the payroll run
     *
     * @remarks
     *
     * * `PAID` - PAID
     * * `DRAFT` - DRAFT
     * * `APPROVED` - APPROVED
     * * `FAILED` - FAILED
     * * `CLOSED` - CLOSED
     */
    @SpeakeasyMetadata()
    @Expose({ name: "run_state" })
    runState?: PayrollRunRunState;

    /**
     * The type of the payroll run
     *
     * @remarks
     *
     * * `REGULAR` - REGULAR
     * * `OFF_CYCLE` - OFF_CYCLE
     * * `CORRECTION` - CORRECTION
     * * `TERMINATION` - TERMINATION
     * * `SIGN_ON_BONUS` - SIGN_ON_BONUS
     */
    @SpeakeasyMetadata()
    @Expose({ name: "run_type" })
    runType?: PayrollRunRunType;

    /**
     * The day and time the payroll run started.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "start_date" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    startDate?: Date;
}