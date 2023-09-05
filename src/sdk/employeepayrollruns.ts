/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "./models/errors";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class EmployeePayrollRuns {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Returns a list of `EmployeePayrollRun` objects.
     */
    async employeePayrollRunsList(
        req: operations.EmployeePayrollRunsListRequest,
        security: operations.EmployeePayrollRunsListSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.EmployeePayrollRunsListResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EmployeePayrollRunsListRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/employee-payroll-runs";
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.EmployeePayrollRunsListSecurity(security);
        }
        const properties = utils.parseSecurityProperties(security);
        const headers = {
            ...utils.getHeadersFromRequest(req),
            ...config?.headers,
            ...properties.headers,
        };
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

        const res: operations.EmployeePayrollRunsListResponse =
            new operations.EmployeePayrollRunsListResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.paginatedEmployeePayrollRunList = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.PaginatedEmployeePayrollRunList
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
     * Returns an `EmployeePayrollRun` object with the given `id`.
     */
    async employeePayrollRunsRetrieve(
        req: operations.EmployeePayrollRunsRetrieveRequest,
        security: operations.EmployeePayrollRunsRetrieveSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.EmployeePayrollRunsRetrieveResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EmployeePayrollRunsRetrieveRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/employee-payroll-runs/{id}", req);
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.EmployeePayrollRunsRetrieveSecurity(security);
        }
        const properties = utils.parseSecurityProperties(security);
        const headers = {
            ...utils.getHeadersFromRequest(req),
            ...config?.headers,
            ...properties.headers,
        };
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

        const res: operations.EmployeePayrollRunsRetrieveResponse =
            new operations.EmployeePayrollRunsRetrieveResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.employeePayrollRun = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.EmployeePayrollRun
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
