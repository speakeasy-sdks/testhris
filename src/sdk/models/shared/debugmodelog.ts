/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DebugModelLogSummary } from "./debugmodellogsummary";
import { Expose, Type } from "class-transformer";

export class DebugModeLog extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "dashboard_view" })
    dashboardView: string;

    @SpeakeasyMetadata()
    @Expose({ name: "log_id" })
    logId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "log_summary" })
    @Type(() => DebugModelLogSummary)
    logSummary: DebugModelLogSummary;
}
