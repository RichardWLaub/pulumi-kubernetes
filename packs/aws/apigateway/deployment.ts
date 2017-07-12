// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Deployment extends lumi.NamedResource implements DeploymentArgs {
    public readonly createdDate?: string;
    public readonly description?: string;
    public readonly executionArn?: string;
    public readonly invokeUrl?: string;
    public readonly restApiId: string;
    public readonly stageDescription?: string;
    public readonly stageName: string;
    public readonly variables?: {[key: string]: string};

    constructor(name: string, args: DeploymentArgs) {
        super(name);
        this.createdDate = args.createdDate;
        this.description = args.description;
        this.executionArn = args.executionArn;
        this.invokeUrl = args.invokeUrl;
        this.restApiId = args.restApiId;
        this.stageDescription = args.stageDescription;
        this.stageName = args.stageName;
        this.variables = args.variables;
    }
}

export interface DeploymentArgs {
    readonly createdDate?: string;
    readonly description?: string;
    readonly executionArn?: string;
    readonly invokeUrl?: string;
    readonly restApiId: string;
    readonly stageDescription?: string;
    readonly stageName: string;
    readonly variables?: {[key: string]: string};
}

