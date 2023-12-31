/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TimeOffBalance } from "./timeoffbalance";
import { Expose, Type } from "class-transformer";

export class PaginatedTimeOffBalanceList extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "next" })
    next?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "previous" })
    previous?: string;

    @SpeakeasyMetadata({ elemType: TimeOffBalance })
    @Expose({ name: "results" })
    @Type(() => TimeOffBalance)
    results?: TimeOffBalance[];
}
