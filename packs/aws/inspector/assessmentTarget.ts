// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class AssessmentTarget extends lumi.NamedResource implements AssessmentTargetArgs {
    public readonly arn?: string;
    public readonly _name: string;
    public readonly resourceGroupArn: string;

    constructor(name: string, args: AssessmentTargetArgs) {
        super(name);
        this.arn = args.arn;
        this._name = args._name;
        this.resourceGroupArn = args.resourceGroupArn;
    }
}

export interface AssessmentTargetArgs {
    readonly arn?: string;
    readonly _name: string;
    readonly resourceGroupArn: string;
}

