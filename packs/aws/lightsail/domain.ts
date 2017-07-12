// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Domain extends lumi.NamedResource implements DomainArgs {
    public readonly arn?: string;
    public readonly domainName: string;

    constructor(name: string, args: DomainArgs) {
        super(name);
        this.arn = args.arn;
        this.domainName = args.domainName;
    }
}

export interface DomainArgs {
    readonly arn?: string;
    readonly domainName: string;
}

