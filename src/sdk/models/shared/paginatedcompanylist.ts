/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Company } from "./company";
import { Expose, Type } from "class-transformer";

export class PaginatedCompanyList extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "next" })
    next?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "previous" })
    previous?: string;

    @SpeakeasyMetadata({ elemType: Company })
    @Expose({ name: "results" })
    @Type(() => Company)
    results?: Company[];
}