/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "./models/errors";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class SelectiveSync {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Get a linked account's selective syncs.
     */
    async selectiveSyncConfigurationsList(
        req: operations.SelectiveSyncConfigurationsListRequest,
        security: operations.SelectiveSyncConfigurationsListSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.SelectiveSyncConfigurationsListResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SelectiveSyncConfigurationsListRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/selective-sync/configurations";

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.SelectiveSyncConfigurationsListSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...utils.getHeadersFromRequest(req), ...config?.headers };
        headers["Accept"] = "application/json";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.SelectiveSyncConfigurationsListResponse =
            new operations.SelectiveSyncConfigurationsListResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.linkedAccountSelectiveSyncConfigurations = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.linkedAccountSelectiveSyncConfigurations = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.LinkedAccountSelectiveSyncConfiguration,
                        resFieldDepth
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Replace a linked account's selective syncs.
     */
    async selectiveSyncConfigurationsUpdate(
        req: operations.SelectiveSyncConfigurationsUpdateRequest,
        security: operations.SelectiveSyncConfigurationsUpdateSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.SelectiveSyncConfigurationsUpdateResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SelectiveSyncConfigurationsUpdateRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/selective-sync/configurations";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "linkedAccountSelectiveSyncConfigurationListRequest",
                "json"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.SelectiveSyncConfigurationsUpdateSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = {
            ...utils.getHeadersFromRequest(req),
            ...reqBodyHeaders,
            ...config?.headers,
        };
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "application/json";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "put",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.SelectiveSyncConfigurationsUpdateResponse =
            new operations.SelectiveSyncConfigurationsUpdateResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.linkedAccountSelectiveSyncConfigurations = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.linkedAccountSelectiveSyncConfigurations = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.LinkedAccountSelectiveSyncConfiguration,
                        resFieldDepth
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get metadata for the conditions available to a linked account.
     */
    async selectiveSyncMetaList(
        req: operations.SelectiveSyncMetaListRequest,
        security: operations.SelectiveSyncMetaListSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.SelectiveSyncMetaListResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SelectiveSyncMetaListRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/selective-sync/meta";

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.SelectiveSyncMetaListSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...utils.getHeadersFromRequest(req), ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.SelectiveSyncMetaListResponse =
            new operations.SelectiveSyncMetaListResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.paginatedConditionSchemaList = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.PaginatedConditionSchemaList
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }
}
