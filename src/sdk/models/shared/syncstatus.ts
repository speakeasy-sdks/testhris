/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SelectiveSyncConfigurationsUsageEnum } from "./selectivesyncconfigurationsusageenum";
import { Expose, Transform } from "class-transformer";

/**
 * * `SYNCING` - SYNCING
 *
 * @remarks
 * * `DONE` - DONE
 * * `FAILED` - FAILED
 * * `DISABLED` - DISABLED
 * * `PAUSED` - PAUSED
 * * `PARTIALLY_SYNCED` - PARTIALLY_SYNCED
 */
export enum SyncStatusStatus {
    Syncing = "SYNCING",
    Done = "DONE",
    Failed = "FAILED",
    Disabled = "DISABLED",
    Paused = "PAUSED",
    PartiallySynced = "PARTIALLY_SYNCED",
}

/**
 * # The SyncStatus Object
 *
 * @remarks
 * ### Description
 * The `SyncStatus` object is used to represent the syncing state of an account
 *
 * ### Usage Example
 * View the `SyncStatus` for an account to see how recently its models were synced.
 */
export class SyncStatus extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "is_initial_sync" })
    isInitialSync: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "last_sync_start" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    lastSyncStart?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "model_id" })
    modelId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "model_name" })
    modelName: string;

    @SpeakeasyMetadata()
    @Expose({ name: "next_sync_start" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    nextSyncStart?: Date;

    /**
     * * `IN_NEXT_SYNC` - IN_NEXT_SYNC
     *
     * @remarks
     * * `IN_LAST_SYNC` - IN_LAST_SYNC
     */
    @SpeakeasyMetadata()
    @Expose({ name: "selective_sync_configurations_usage" })
    selectiveSyncConfigurationsUsage?: SelectiveSyncConfigurationsUsageEnum;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: SyncStatusStatus;
}