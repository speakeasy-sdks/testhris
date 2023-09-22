/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

/**
 * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
 */
export enum EmploymentsRetrieveExpand {
    Employee = "employee",
    EmployeePayGroup = "employee,pay_group",
    PayGroup = "pay_group",
}

/**
 * Deprecated. Use show_enum_origins.
 */
export enum EmploymentsRetrieveRemoteFields {
    EmploymentType = "employment_type",
    EmploymentTypeFlsaStatus = "employment_type,flsa_status",
    EmploymentTypeFlsaStatusPayFrequency = "employment_type,flsa_status,pay_frequency",
    EmploymentTypeFlsaStatusPayFrequencyPayPeriod = "employment_type,flsa_status,pay_frequency,pay_period",
    EmploymentTypeFlsaStatusPayPeriod = "employment_type,flsa_status,pay_period",
    EmploymentTypePayFrequency = "employment_type,pay_frequency",
    EmploymentTypePayFrequencyPayPeriod = "employment_type,pay_frequency,pay_period",
    EmploymentTypePayPeriod = "employment_type,pay_period",
    FlsaStatus = "flsa_status",
    FlsaStatusPayFrequency = "flsa_status,pay_frequency",
    FlsaStatusPayFrequencyPayPeriod = "flsa_status,pay_frequency,pay_period",
    FlsaStatusPayPeriod = "flsa_status,pay_period",
    PayFrequency = "pay_frequency",
    PayFrequencyPayPeriod = "pay_frequency,pay_period",
    PayPeriod = "pay_period",
}

/**
 * Which fields should be returned in non-normalized form.
 */
export enum EmploymentsRetrieveShowEnumOrigins {
    EmploymentType = "employment_type",
    EmploymentTypeFlsaStatus = "employment_type,flsa_status",
    EmploymentTypeFlsaStatusPayFrequency = "employment_type,flsa_status,pay_frequency",
    EmploymentTypeFlsaStatusPayFrequencyPayPeriod = "employment_type,flsa_status,pay_frequency,pay_period",
    EmploymentTypeFlsaStatusPayPeriod = "employment_type,flsa_status,pay_period",
    EmploymentTypePayFrequency = "employment_type,pay_frequency",
    EmploymentTypePayFrequencyPayPeriod = "employment_type,pay_frequency,pay_period",
    EmploymentTypePayPeriod = "employment_type,pay_period",
    FlsaStatus = "flsa_status",
    FlsaStatusPayFrequency = "flsa_status,pay_frequency",
    FlsaStatusPayFrequencyPayPeriod = "flsa_status,pay_frequency,pay_period",
    FlsaStatusPayPeriod = "flsa_status,pay_period",
    PayFrequency = "pay_frequency",
    PayFrequencyPayPeriod = "pay_frequency,pay_period",
    PayPeriod = "pay_period",
}

export class EmploymentsRetrieveRequest extends SpeakeasyBase {
    /**
     * Token identifying the end user.
     */
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Account-Token" })
    xAccountToken: string;

    /**
     * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" })
    expand?: EmploymentsRetrieveExpand;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;

    /**
     * Whether to include the original data Merge fetched from the third-party to produce these models.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_remote_data" })
    includeRemoteData?: boolean;

    /**
     * Deprecated. Use show_enum_origins.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=remote_fields" })
    remoteFields?: EmploymentsRetrieveRemoteFields;

    /**
     * Which fields should be returned in non-normalized form.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=show_enum_origins" })
    showEnumOrigins?: EmploymentsRetrieveShowEnumOrigins;
}

export class EmploymentsRetrieveResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    employment?: shared.Employment;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
