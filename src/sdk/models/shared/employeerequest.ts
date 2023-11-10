/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

/**
 * * `ACTIVE` - ACTIVE
 *
 * @remarks
 * * `PENDING` - PENDING
 * * `INACTIVE` - INACTIVE
 */
export enum EmployeeRequestEmploymentStatus {
    Active = "ACTIVE",
    Pending = "PENDING",
    Inactive = "INACTIVE",
}

/**
 * * `AMERICAN_INDIAN_OR_ALASKA_NATIVE` - AMERICAN_INDIAN_OR_ALASKA_NATIVE
 *
 * @remarks
 * * `ASIAN_OR_INDIAN_SUBCONTINENT` - ASIAN_OR_INDIAN_SUBCONTINENT
 * * `BLACK_OR_AFRICAN_AMERICAN` - BLACK_OR_AFRICAN_AMERICAN
 * * `HISPANIC_OR_LATINO` - HISPANIC_OR_LATINO
 * * `NATIVE_HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER` - NATIVE_HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER
 * * `TWO_OR_MORE_RACES` - TWO_OR_MORE_RACES
 * * `WHITE` - WHITE
 * * `PREFER_NOT_TO_DISCLOSE` - PREFER_NOT_TO_DISCLOSE
 */
export enum EmployeeRequestEthnicity {
    AmericanIndianOrAlaskaNative = "AMERICAN_INDIAN_OR_ALASKA_NATIVE",
    AsianOrIndianSubcontinent = "ASIAN_OR_INDIAN_SUBCONTINENT",
    BlackOrAfricanAmerican = "BLACK_OR_AFRICAN_AMERICAN",
    HispanicOrLatino = "HISPANIC_OR_LATINO",
    NativeHawaiianOrOtherPacificIslander = "NATIVE_HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER",
    TwoOrMoreRaces = "TWO_OR_MORE_RACES",
    White = "WHITE",
    PreferNotToDisclose = "PREFER_NOT_TO_DISCLOSE",
}

/**
 * * `MALE` - MALE
 *
 * @remarks
 * * `FEMALE` - FEMALE
 * * `NON-BINARY` - NON-BINARY
 * * `OTHER` - OTHER
 * * `PREFER_NOT_TO_DISCLOSE` - PREFER_NOT_TO_DISCLOSE
 */
export enum EmployeeRequestGender {
    Male = "MALE",
    Female = "FEMALE",
    NonBinary = "NON-BINARY",
    Other = "OTHER",
    PreferNotToDisclose = "PREFER_NOT_TO_DISCLOSE",
}

/**
 * * `SINGLE` - SINGLE
 *
 * @remarks
 * * `MARRIED_FILING_JOINTLY` - MARRIED_FILING_JOINTLY
 * * `MARRIED_FILING_SEPARATELY` - MARRIED_FILING_SEPARATELY
 * * `HEAD_OF_HOUSEHOLD` - HEAD_OF_HOUSEHOLD
 * * `QUALIFYING_WIDOW_OR_WIDOWER_WITH_DEPENDENT_CHILD` - QUALIFYING_WIDOW_OR_WIDOWER_WITH_DEPENDENT_CHILD
 */
export enum EmployeeRequestMaritalStatus {
    Single = "SINGLE",
    MarriedFilingJointly = "MARRIED_FILING_JOINTLY",
    MarriedFilingSeparately = "MARRIED_FILING_SEPARATELY",
    HeadOfHousehold = "HEAD_OF_HOUSEHOLD",
    QualifyingWidowOrWidowerWithDependentChild = "QUALIFYING_WIDOW_OR_WIDOWER_WITH_DEPENDENT_CHILD",
}

/**
 * # The Employee Object
 *
 * @remarks
 * ### Description
 * The `Employee` object is used to represent any person who has been employed by a company.
 *
 * ### Usage Example
 * Fetch from the `LIST Employee` endpoint and filter by `ID` to show all employees.
 */
export class EmployeeRequest extends SpeakeasyBase {
    /**
     * The URL of the employee's avatar image.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "avatar" })
    avatar?: string;

    /**
     * The ID of the employee's company.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "company" })
    company?: string;

    /**
     * The employee's date of birth.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "date_of_birth" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    dateOfBirth?: Date;

    /**
     * The employee's full name, to use for display purposes. If a preferred first name is available, the full name will include the preferred first name.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "display_full_name" })
    displayFullName?: string;

    /**
     * The employee's number that appears in the third-party integration's UI.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "employee_number" })
    employeeNumber?: string;

    /**
     * The employment status of the employee.
     *
     * @remarks
     *
     * * `ACTIVE` - ACTIVE
     * * `PENDING` - PENDING
     * * `INACTIVE` - INACTIVE
     */
    @SpeakeasyMetadata()
    @Expose({ name: "employment_status" })
    employmentStatus?: EmployeeRequestEmploymentStatus;

    /**
     * Array of `Employment` IDs for this Employee.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "employments" })
    employments?: string[];

    /**
     * The employee's ethnicity.
     *
     * @remarks
     *
     * * `AMERICAN_INDIAN_OR_ALASKA_NATIVE` - AMERICAN_INDIAN_OR_ALASKA_NATIVE
     * * `ASIAN_OR_INDIAN_SUBCONTINENT` - ASIAN_OR_INDIAN_SUBCONTINENT
     * * `BLACK_OR_AFRICAN_AMERICAN` - BLACK_OR_AFRICAN_AMERICAN
     * * `HISPANIC_OR_LATINO` - HISPANIC_OR_LATINO
     * * `NATIVE_HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER` - NATIVE_HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER
     * * `TWO_OR_MORE_RACES` - TWO_OR_MORE_RACES
     * * `WHITE` - WHITE
     * * `PREFER_NOT_TO_DISCLOSE` - PREFER_NOT_TO_DISCLOSE
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ethnicity" })
    ethnicity?: EmployeeRequestEthnicity;

    /**
     * The employee's first name.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "first_name" })
    firstName?: string;

    /**
     * The employee's gender.
     *
     * @remarks
     *
     * * `MALE` - MALE
     * * `FEMALE` - FEMALE
     * * `NON-BINARY` - NON-BINARY
     * * `OTHER` - OTHER
     * * `PREFER_NOT_TO_DISCLOSE` - PREFER_NOT_TO_DISCLOSE
     */
    @SpeakeasyMetadata()
    @Expose({ name: "gender" })
    gender?: EmployeeRequestGender;

    @SpeakeasyMetadata()
    @Expose({ name: "groups" })
    groups?: string[];

    /**
     * The date that the employee was hired, usually the day that an offer letter is signed. If an employee has multiple hire dates from previous employments, this represents the most recent hire date. Note: If you're looking for the employee's start date, refer to the start_date field.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hire_date" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    hireDate?: Date;

    /**
     * The employee's home address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "home_location" })
    homeLocation?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "integration_params" })
    integrationParams?: Record<string, any>;

    /**
     * The employee's last name.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "last_name" })
    lastName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "linked_account_params" })
    linkedAccountParams?: Record<string, any>;

    /**
     * The employee ID of the employee's manager.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "manager" })
    manager?: string;

    /**
     * The employee's filing status as related to marital status.
     *
     * @remarks
     *
     * * `SINGLE` - SINGLE
     * * `MARRIED_FILING_JOINTLY` - MARRIED_FILING_JOINTLY
     * * `MARRIED_FILING_SEPARATELY` - MARRIED_FILING_SEPARATELY
     * * `HEAD_OF_HOUSEHOLD` - HEAD_OF_HOUSEHOLD
     * * `QUALIFYING_WIDOW_OR_WIDOWER_WITH_DEPENDENT_CHILD` - QUALIFYING_WIDOW_OR_WIDOWER_WITH_DEPENDENT_CHILD
     */
    @SpeakeasyMetadata()
    @Expose({ name: "marital_status" })
    maritalStatus?: EmployeeRequestMaritalStatus;

    /**
     * The employee's mobile phone number.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "mobile_phone_number" })
    mobilePhoneNumber?: string;

    /**
     * The employee's pay group
     */
    @SpeakeasyMetadata()
    @Expose({ name: "pay_group" })
    payGroup?: string;

    /**
     * The employee's personal email.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "personal_email" })
    personalEmail?: string;

    /**
     * The employee's social security number.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ssn" })
    ssn?: string;

    /**
     * The date that the employee started working. If an employee was rehired, the most recent start date will be returned.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "start_date" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    startDate?: Date;

    /**
     * The employee's team.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "team" })
    team?: string;

    /**
     * The employee's termination date.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "termination_date" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    terminationDate?: Date;

    /**
     * The employee's username that appears in the remote UI.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "username" })
    username?: string;

    /**
     * The employee's work email.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "work_email" })
    workEmail?: string;

    /**
     * The employee's work address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "work_location" })
    workLocation?: string;
}
