// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class OptionGroup extends lumi.NamedResource implements OptionGroupArgs {
    public readonly arn?: string;
    public readonly engineName: string;
    public readonly majorEngineVersion: string;
    public readonly _name?: string;
    public readonly namePrefix?: string;
    public readonly option?: { dbSecurityGroupMemberships?: string[], optionName: string, optionSettings?: { _name: string, value: string }[], port?: number, vpcSecurityGroupMemberships?: string[] }[];
    public readonly optionGroupDescription?: string;
    public readonly tags?: {[key: string]: any};

    constructor(name: string, args: OptionGroupArgs) {
        super(name);
        this.arn = args.arn;
        this.engineName = args.engineName;
        this.majorEngineVersion = args.majorEngineVersion;
        this._name = args._name;
        this.namePrefix = args.namePrefix;
        this.option = args.option;
        this.optionGroupDescription = args.optionGroupDescription;
        this.tags = args.tags;
    }
}

export interface OptionGroupArgs {
    readonly arn?: string;
    readonly engineName: string;
    readonly majorEngineVersion: string;
    readonly _name?: string;
    readonly namePrefix?: string;
    readonly option?: { dbSecurityGroupMemberships?: string[], optionName: string, optionSettings?: { _name: string, value: string }[], port?: number, vpcSecurityGroupMemberships?: string[] }[];
    readonly optionGroupDescription?: string;
    readonly tags?: {[key: string]: any};
}

