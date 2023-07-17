/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RemoteData } from "./remotedata";
import { Expose, Transform, Type } from "class-transformer";

/**
 * # The PayGroup Object
 *
 * @remarks
 * ### Description
 * The `PayGroup` object is used to represent a subset of employees that are put together for payroll processing purposes.
 *
 * ### Usage Example
 * Fetch from the `LIST PayGroup` endpoint and filter by `ID` to show all pay group information.
 */
export class PayGroup extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "field_mappings" })
    fieldMappings?: Record<string, any>;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * This is the datetime that this object was last updated by Merge
     */
    @SpeakeasyMetadata()
    @Expose({ name: "modified_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    modifiedAt?: Date;

    /**
     * The pay group name.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "pay_group_name" })
    payGroupName?: string;

    @SpeakeasyMetadata({ elemType: RemoteData })
    @Expose({ name: "remote_data" })
    @Type(() => RemoteData)
    remoteData?: RemoteData[];

    /**
     * The third-party API ID of the matching object.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "remote_id" })
    remoteId?: string;

    /**
     * Indicates whether or not this object has been deleted by third party webhooks.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "remote_was_deleted" })
    remoteWasDeleted?: boolean;
}