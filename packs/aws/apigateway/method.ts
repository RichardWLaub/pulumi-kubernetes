// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Method extends lumi.NamedResource implements MethodArgs {
    public readonly apiKeyRequired?: boolean;
    public readonly authorization: string;
    public readonly authorizerId?: string;
    public readonly httpMethod: string;
    public readonly requestModels?: {[key: string]: string};
    public readonly requestParameters?: {[key: string]: boolean};
    public readonly requestParametersInJson?: string;
    public readonly requestValidatorId?: string;
    public readonly resourceId: string;
    public readonly restApiId: string;

    constructor(name: string, args: MethodArgs) {
        super(name);
        this.apiKeyRequired = args.apiKeyRequired;
        this.authorization = args.authorization;
        this.authorizerId = args.authorizerId;
        this.httpMethod = args.httpMethod;
        this.requestModels = args.requestModels;
        this.requestParameters = args.requestParameters;
        this.requestParametersInJson = args.requestParametersInJson;
        this.requestValidatorId = args.requestValidatorId;
        this.resourceId = args.resourceId;
        this.restApiId = args.restApiId;
    }
}

export interface MethodArgs {
    readonly apiKeyRequired?: boolean;
    readonly authorization: string;
    readonly authorizerId?: string;
    readonly httpMethod: string;
    readonly requestModels?: {[key: string]: string};
    readonly requestParameters?: {[key: string]: boolean};
    readonly requestParametersInJson?: string;
    readonly requestValidatorId?: string;
    readonly resourceId: string;
    readonly restApiId: string;
}

