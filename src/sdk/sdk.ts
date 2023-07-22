/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AccountDetails } from "./accountdetails";
import { AccountToken } from "./accounttoken";
import { AvailableActions } from "./availableactions";
import { BankInfo } from "./bankinfo";
import { Benefits } from "./benefits";
import { Companies } from "./companies";
import { DeleteAccount } from "./deleteaccount";
import { EmployeePayrollRuns } from "./employeepayrollruns";
import { Employees } from "./employees";
import { Employments } from "./employments";
import { ForceResync } from "./forceresync";
import { GenerateKey } from "./generatekey";
import { Groups } from "./groups";
import { Issues } from "./issues";
import { LinkedAccounts } from "./linkedaccounts";
import { LinkToken } from "./linktoken";
import { Locations } from "./locations";
import { Passthrough } from "./passthrough";
import { PayGroups } from "./paygroups";
import { PayrollRuns } from "./payrollruns";
import { RegenerateKey } from "./regeneratekey";
import { SelectiveSync } from "./selectivesync";
import { SyncStatus } from "./syncstatus";
import { Teams } from "./teams";
import { TimeOff } from "./timeoff";
import { TimeOffBalances } from "./timeoffbalances";
import { WebhookReceivers } from "./webhookreceivers";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * Production
     */
    "https://api.merge.dev/api/hris/v1",
    /**
     * Sandbox
     */
    "https://api-sandbox.merge.dev/api/hris/v1",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    securityClient: AxiosInstance;
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "1.0";
    sdkVersion = "1.2.0";
    genVersion = "2.71.0";

    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Merge HRIS API: The unified API for building rich integrations with multiple HR Information System platforms.
 */
export class Hris {
    public accountDetails: AccountDetails;
    public accountToken: AccountToken;
    public availableActions: AvailableActions;
    public bankInfo: BankInfo;
    public benefits: Benefits;
    public companies: Companies;
    public deleteAccount: DeleteAccount;
    public employeePayrollRuns: EmployeePayrollRuns;
    public employees: Employees;
    public employments: Employments;
    public forceResync: ForceResync;
    public generateKey: GenerateKey;
    public groups: Groups;
    public issues: Issues;
    public linkToken: LinkToken;
    public linkedAccounts: LinkedAccounts;
    public locations: Locations;
    public passthrough: Passthrough;
    public payGroups: PayGroups;
    public payrollRuns: PayrollRuns;
    public regenerateKey: RegenerateKey;
    public selectiveSync: SelectiveSync;
    public syncStatus: SyncStatus;
    public teams: Teams;
    public timeOff: TimeOff;
    public timeOffBalances: TimeOffBalances;
    public webhookReceivers: WebhookReceivers;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        const securityClient = defaultClient;

        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            securityClient: securityClient,
            serverURL: serverURL,
        });

        this.accountDetails = new AccountDetails(this.sdkConfiguration);
        this.accountToken = new AccountToken(this.sdkConfiguration);
        this.availableActions = new AvailableActions(this.sdkConfiguration);
        this.bankInfo = new BankInfo(this.sdkConfiguration);
        this.benefits = new Benefits(this.sdkConfiguration);
        this.companies = new Companies(this.sdkConfiguration);
        this.deleteAccount = new DeleteAccount(this.sdkConfiguration);
        this.employeePayrollRuns = new EmployeePayrollRuns(this.sdkConfiguration);
        this.employees = new Employees(this.sdkConfiguration);
        this.employments = new Employments(this.sdkConfiguration);
        this.forceResync = new ForceResync(this.sdkConfiguration);
        this.generateKey = new GenerateKey(this.sdkConfiguration);
        this.groups = new Groups(this.sdkConfiguration);
        this.issues = new Issues(this.sdkConfiguration);
        this.linkToken = new LinkToken(this.sdkConfiguration);
        this.linkedAccounts = new LinkedAccounts(this.sdkConfiguration);
        this.locations = new Locations(this.sdkConfiguration);
        this.passthrough = new Passthrough(this.sdkConfiguration);
        this.payGroups = new PayGroups(this.sdkConfiguration);
        this.payrollRuns = new PayrollRuns(this.sdkConfiguration);
        this.regenerateKey = new RegenerateKey(this.sdkConfiguration);
        this.selectiveSync = new SelectiveSync(this.sdkConfiguration);
        this.syncStatus = new SyncStatus(this.sdkConfiguration);
        this.teams = new Teams(this.sdkConfiguration);
        this.timeOff = new TimeOff(this.sdkConfiguration);
        this.timeOffBalances = new TimeOffBalances(this.sdkConfiguration);
        this.webhookReceivers = new WebhookReceivers(this.sdkConfiguration);
    }
}
