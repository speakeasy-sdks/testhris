/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * # The GenerateRemoteKey Object
 *
 * @remarks
 * ### Description
 * The `GenerateRemoteKey` object is used to represent a request for a new remote key.
 *
 * ### Usage Example
 * Post a `GenerateRemoteKey` to create a new remote key.
 */
export class GenerateRemoteKeyRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "form, name=name, multipart_form, name=name" })
    @Expose({ name: "name" })
    name: string;
}
