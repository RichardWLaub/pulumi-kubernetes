// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Alias extends lumi.NamedResource implements AliasArgs {
    public readonly arn?: string;
    public readonly description?: string;
    public readonly functionName: string;
    public readonly functionVersion: string;
    public readonly _name: string;

    constructor(name: string, args: AliasArgs) {
        super(name);
        this.arn = args.arn;
        this.description = args.description;
        this.functionName = args.functionName;
        this.functionVersion = args.functionVersion;
        this._name = args._name;
    }
}

export interface AliasArgs {
    readonly arn?: string;
    readonly description?: string;
    readonly functionName: string;
    readonly functionVersion: string;
    readonly _name: string;
}

