/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { MultipartFormFieldRequest } from "./multipartformfieldrequest";
import { Expose, Type } from "class-transformer";

/**
 * * `GET` - GET
 *
 * @remarks
 * * `OPTIONS` - OPTIONS
 * * `HEAD` - HEAD
 * * `POST` - POST
 * * `PUT` - PUT
 * * `PATCH` - PATCH
 * * `DELETE` - DELETE
 */
export enum Method {
    Get = "GET",
    Options = "OPTIONS",
    Head = "HEAD",
    Post = "POST",
    Put = "PUT",
    Patch = "PATCH",
    Delete = "DELETE",
}

/**
 * * `JSON` - JSON
 *
 * @remarks
 * * `XML` - XML
 * * `MULTIPART` - MULTIPART
 */
export enum RequestFormat {
    Json = "JSON",
    Xml = "XML",
    Multipart = "MULTIPART",
}

/**
 * # The DataPassthrough Object
 *
 * @remarks
 * ### Description
 * The `DataPassthrough` object is used to send information to an otherwise-unsupported third-party endpoint.
 *
 * ### Usage Example
 * Create a `DataPassthrough` to get team hierarchies from your Rippling integration.
 */
export class DataPassthroughRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({
        data: "form, name=base_url_override, multipart_form, name=base_url_override",
    })
    @Expose({ name: "base_url_override" })
    baseUrlOverride?: string;

    @SpeakeasyMetadata({ data: "form, name=data, multipart_form, name=data" })
    @Expose({ name: "data" })
    data?: string;

    /**
     * The headers to use for the request (Merge will handle the account's authorization headers). `Content-Type` header is required for passthrough. Choose content type corresponding to expected format of receiving server.
     */
    @SpeakeasyMetadata({
        data: "form, name=headers;json=true, multipart_form, name=headers;json=true",
    })
    @Expose({ name: "headers" })
    headers?: Record<string, any>;

    @SpeakeasyMetadata({ data: "form, name=method, multipart_form, name=method" })
    @Expose({ name: "method" })
    method: Method;

    /**
     * Pass an array of `MultipartFormField` objects in here instead of using the `data` param if `request_format` is set to `MULTIPART`.
     */
    @SpeakeasyMetadata({
        data: "form, name=multipart_form_data;json=true, multipart_form, name=multipart_form_data;json=true",
        elemType: MultipartFormFieldRequest,
    })
    @Expose({ name: "multipart_form_data" })
    @Type(() => MultipartFormFieldRequest)
    multipartFormData?: MultipartFormFieldRequest[];

    /**
     * Optional. If true, the response will always be an object of the form `{"type": T, "value": ...}` where `T` will be one of `string, boolean, number, null, array, object`.
     */
    @SpeakeasyMetadata({
        data: "form, name=normalize_response, multipart_form, name=normalize_response",
    })
    @Expose({ name: "normalize_response" })
    normalizeResponse?: boolean;

    @SpeakeasyMetadata({ data: "form, name=path, multipart_form, name=path" })
    @Expose({ name: "path" })
    path: string;

    @SpeakeasyMetadata({ data: "form, name=request_format, multipart_form, name=request_format" })
    @Expose({ name: "request_format" })
    requestFormat?: RequestFormat;
}
