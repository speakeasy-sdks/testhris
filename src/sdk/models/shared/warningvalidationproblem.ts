/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ValidationProblemSource } from "./validationproblemsource";
import { Expose, Type } from "class-transformer";

export class WarningValidationProblem extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "detail" })
    detail: string;

    @SpeakeasyMetadata()
    @Expose({ name: "problem_type" })
    problemType: string;

    @SpeakeasyMetadata()
    @Expose({ name: "source" })
    @Type(() => ValidationProblemSource)
    source?: ValidationProblemSource;

    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    title: string;
}
