// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class IntegrationResponse extends lumi.NamedResource implements IntegrationResponseArgs {
    public readonly contentHandling?: string;
    public readonly httpMethod: string;
    public readonly resourceId: string;
    public readonly responseParameters?: {[key: string]: string};
    public readonly responseParametersInJson?: string;
    public readonly responseTemplates?: {[key: string]: string};
    public readonly restApiId: string;
    public readonly selectionPattern?: string;
    public readonly statusCode: string;

    constructor(name: string, args: IntegrationResponseArgs) {
        super(name);
        this.contentHandling = args.contentHandling;
        this.httpMethod = args.httpMethod;
        this.resourceId = args.resourceId;
        this.responseParameters = args.responseParameters;
        this.responseParametersInJson = args.responseParametersInJson;
        this.responseTemplates = args.responseTemplates;
        this.restApiId = args.restApiId;
        this.selectionPattern = args.selectionPattern;
        this.statusCode = args.statusCode;
    }
}

export interface IntegrationResponseArgs {
    readonly contentHandling?: string;
    readonly httpMethod: string;
    readonly resourceId: string;
    readonly responseParameters?: {[key: string]: string};
    readonly responseParametersInJson?: string;
    readonly responseTemplates?: {[key: string]: string};
    readonly restApiId: string;
    readonly selectionPattern?: string;
    readonly statusCode: string;
}

