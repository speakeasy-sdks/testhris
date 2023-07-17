/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RemoteData } from "./remotedata";
import { Expose, Transform, Type } from "class-transformer";

/**
 * * `SALARY` - SALARY
 *
 * @remarks
 * * `REIMBURSEMENT` - REIMBURSEMENT
 * * `OVERTIME` - OVERTIME
 * * `BONUS` - BONUS
 */
export enum EarningType {
    Salary = "SALARY",
    Reimbursement = "REIMBURSEMENT",
    Overtime = "OVERTIME",
    Bonus = "BONUS",
}

/**
 * # The Earning Object
 *
 * @remarks
 * ### Description
 * The `Earning` object is used to represent an array of different compensations that an employee receives within specific wage categories.
 *
 * ### Usage Example
 * Fetch from the `LIST Earnings` endpoint and filter by `ID` to show all earnings.
 */
export class Earning extends SpeakeasyBase {
    /**
     * The amount earned.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "employee_payroll_run" })
    employeePayrollRun?: string;

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
     * The type of earning.
     *
     * @remarks
     *
     * * `SALARY` - SALARY
     * * `REIMBURSEMENT` - REIMBURSEMENT
     * * `OVERTIME` - OVERTIME
     * * `BONUS` - BONUS
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: EarningType;
}
