/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The encoding of the value of `data`. Defaults to `RAW` if not defined.
 *
 * @remarks
 *
 * * `RAW` - RAW
 * * `BASE64` - BASE64
 * * `GZIP_BASE64` - GZIP_BASE64
 */
export enum Encoding {
    Raw = "RAW",
    Base64 = "BASE64",
    GzipBase64 = "GZIP_BASE64",
}

/**
 * # The MultipartFormField Object
 *
 * @remarks
 * ### Description
 * The `MultipartFormField` object is used to represent fields in an HTTP request using `multipart/form-data`.
 *
 * ### Usage Example
 * Create a `MultipartFormField` to define a multipart form entry.
 */
export class MultipartFormFieldRequest extends SpeakeasyBase {
    /**
     * The MIME type of the file, if the field is for a file.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "content_type" })
    contentType?: string;

    /**
     * The data for the form field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    data: string;

    /**
     * The encoding of the value of `data`. Defaults to `RAW` if not defined.
     *
     * @remarks
     *
     * * `RAW` - RAW
     * * `BASE64` - BASE64
     * * `GZIP_BASE64` - GZIP_BASE64
     */
    @SpeakeasyMetadata()
    @Expose({ name: "encoding" })
    encoding?: Encoding;

    /**
     * The file name of the form field, if the field is for a file.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "file_name" })
    fileName?: string;

    /**
     * The name of the form field
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}
