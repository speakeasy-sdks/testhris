/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * # The ModelOperation Object
 *
 * @remarks
 * ### Description
 * The `ModelOperation` object is used to represent the operations that are currently supported for a given model.
 *
 * ### Usage Example
 * View what operations are supported for the `Candidate` endpoint.
 */
export class ModelOperation extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "available_operations" })
    availableOperations: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "model_name" })
    modelName: string;

    @SpeakeasyMetadata()
    @Expose({ name: "required_post_parameters" })
    requiredPostParameters: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "supported_fields" })
    supportedFields: string[];
}
