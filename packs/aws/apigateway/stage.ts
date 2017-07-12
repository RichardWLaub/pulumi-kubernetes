// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Stage extends lumi.NamedResource implements StageArgs {
    public readonly cacheClusterEnabled?: boolean;
    public readonly cacheClusterSize?: string;
    public readonly clientCertificateId?: string;
    public readonly deploymentId: string;
    public readonly description?: string;
    public readonly documentationVersion?: string;
    public readonly restApiId: string;
    public readonly stageName: string;
    public readonly variables?: {[key: string]: any};

    constructor(name: string, args: StageArgs) {
        super(name);
        this.cacheClusterEnabled = args.cacheClusterEnabled;
        this.cacheClusterSize = args.cacheClusterSize;
        this.clientCertificateId = args.clientCertificateId;
        this.deploymentId = args.deploymentId;
        this.description = args.description;
        this.documentationVersion = args.documentationVersion;
        this.restApiId = args.restApiId;
        this.stageName = args.stageName;
        this.variables = args.variables;
    }
}

export interface StageArgs {
    readonly cacheClusterEnabled?: boolean;
    readonly cacheClusterSize?: string;
    readonly clientCertificateId?: string;
    readonly deploymentId: string;
    readonly description?: string;
    readonly documentationVersion?: string;
    readonly restApiId: string;
    readonly stageName: string;
    readonly variables?: {[key: string]: any};
}

