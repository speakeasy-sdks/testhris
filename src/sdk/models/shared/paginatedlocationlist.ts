/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Location } from "./location";
import { Expose, Type } from "class-transformer";

export class PaginatedLocationList extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "next" })
    next?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "previous" })
    previous?: string;

    @SpeakeasyMetadata({ elemType: Location })
    @Expose({ name: "results" })
    @Type(() => Location)
    results?: Location[];
}
