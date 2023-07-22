/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TimeOffRequest } from "./timeoffrequest";
import { Expose, Type } from "class-transformer";

export class TimeOffEndpointRequest extends SpeakeasyBase {
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
    @SpeakeasyMetadata({ data: "form, name=model;json=true, multipart_form, name=model;json=true" })
    @Expose({ name: "model" })
    @Type(() => TimeOffRequest)
    model: TimeOffRequest;
}
