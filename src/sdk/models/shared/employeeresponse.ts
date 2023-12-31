/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DebugModeLog } from "./debugmodelog";
import { Employee } from "./employee";
import { ErrorValidationProblem } from "./errorvalidationproblem";
import { WarningValidationProblem } from "./warningvalidationproblem";
import { Expose, Type } from "class-transformer";

export class EmployeeResponse extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: ErrorValidationProblem })
    @Expose({ name: "errors" })
    @Type(() => ErrorValidationProblem)
    errors: ErrorValidationProblem[];

    @SpeakeasyMetadata({ elemType: DebugModeLog })
    @Expose({ name: "logs" })
    @Type(() => DebugModeLog)
    logs?: DebugModeLog[];

    /**
     * # The Employee Object
     *
     * @remarks
     * ### Description
     * The `Employee` object is used to represent any person who has been employed by a company.
     *
     * ### Usage Example
     * Fetch from the `LIST Employee` endpoint and filter by `ID` to show all employees.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "model" })
    @Type(() => Employee)
    model: Employee;

    @SpeakeasyMetadata({ elemType: WarningValidationProblem })
    @Expose({ name: "warnings" })
    @Type(() => WarningValidationProblem)
    warnings: WarningValidationProblem[];
}
