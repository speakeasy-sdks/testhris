/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class WebhookReceiver extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "event" })
    event: string;

    @SpeakeasyMetadata()
    @Expose({ name: "is_active" })
    isActive: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "key" })
    key?: string;
}
