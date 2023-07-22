/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * * `hris` - hris
 *
 * @remarks
 * * `ats` - ats
 * * `accounting` - accounting
 * * `ticketing` - ticketing
 * * `crm` - crm
 * * `mktg` - mktg
 * * `filestorage` - filestorage
 */
export enum AccountDetailsCategory {
    Hris = "hris",
    Ats = "ats",
    Accounting = "accounting",
    Ticketing = "ticketing",
    Crm = "crm",
    Mktg = "mktg",
    Filestorage = "filestorage",
}

export class AccountDetails extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "category" })
    category?: AccountDetailsCategory;

    @SpeakeasyMetadata()
    @Expose({ name: "end_user_email_address" })
    endUserEmailAddress?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "end_user_organization_name" })
    endUserOrganizationName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "end_user_origin_id" })
    endUserOriginId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "integration" })
    integration?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "integration_slug" })
    integrationSlug?: string;

    /**
     * Whether a Production Linked Account's credentials match another existing Production Linked Account. This field is `null` for Test Linked Accounts, incomplete Production Linked Accounts, and ignored duplicate Production Linked Account sets.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "is_duplicate" })
    isDuplicate?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "webhook_listener_url" })
    webhookListenerUrl?: string;
}
