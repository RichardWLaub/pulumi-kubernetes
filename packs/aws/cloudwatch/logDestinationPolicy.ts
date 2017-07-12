// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class LogDestinationPolicy extends lumi.NamedResource implements LogDestinationPolicyArgs {
    public readonly accessPolicy: string;
    public readonly destinationName: string;

    constructor(name: string, args: LogDestinationPolicyArgs) {
        super(name);
        this.accessPolicy = args.accessPolicy;
        this.destinationName = args.destinationName;
    }
}

export interface LogDestinationPolicyArgs {
    readonly accessPolicy: string;
    readonly destinationName: string;
}

