// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Target extends lumi.NamedResource implements TargetArgs {
    public readonly maxCapacity: number;
    public readonly minCapacity: number;
    public readonly resourceId: string;
    public readonly roleArn: string;
    public readonly scalableDimension: string;
    public readonly serviceNamespace: string;

    constructor(name: string, args: TargetArgs) {
        super(name);
        this.maxCapacity = args.maxCapacity;
        this.minCapacity = args.minCapacity;
        this.resourceId = args.resourceId;
        this.roleArn = args.roleArn;
        this.scalableDimension = args.scalableDimension;
        this.serviceNamespace = args.serviceNamespace;
    }
}

export interface TargetArgs {
    readonly maxCapacity: number;
    readonly minCapacity: number;
    readonly resourceId: string;
    readonly roleArn: string;
    readonly scalableDimension: string;
    readonly serviceNamespace: string;
}

