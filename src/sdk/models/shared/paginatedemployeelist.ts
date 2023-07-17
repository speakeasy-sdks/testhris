/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Employee } from "./employee";
import { Expose, Type } from "class-transformer";

export class PaginatedEmployeeList extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "next" })
    next?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "previous" })
    previous?: string;

    @SpeakeasyMetadata({ elemType: Employee })
    @Expose({ name: "results" })
    @Type(() => Employee)
    results?: Employee[];
}
