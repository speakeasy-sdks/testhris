/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { LinkedAccountSelectiveSyncConfigurationRequest } from "./linkedaccountselectivesyncconfigurationrequest";
import { Expose, Type } from "class-transformer";

export class LinkedAccountSelectiveSyncConfigurationListRequest extends SpeakeasyBase {
    /**
     * The selective syncs associated with a linked account.
     */
    @SpeakeasyMetadata({ elemType: LinkedAccountSelectiveSyncConfigurationRequest })
    @Expose({ name: "sync_configurations" })
    @Type(() => LinkedAccountSelectiveSyncConfigurationRequest)
    syncConfigurations: LinkedAccountSelectiveSyncConfigurationRequest[];
}
