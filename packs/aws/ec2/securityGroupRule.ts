// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class SecurityGroupRule extends lumi.NamedResource implements SecurityGroupRuleArgs {
    public readonly cidrBlocks?: string[];
    public readonly fromPort: number;
    public readonly ipv6CidrBlocks?: string[];
    public readonly prefixListIds?: string[];
    public readonly protocol: string;
    public readonly securityGroupId: string;
    public readonly self?: boolean;
    public readonly sourceSecurityGroupId?: string;
    public readonly toPort: number;
    public readonly type: string;

    constructor(name: string, args: SecurityGroupRuleArgs) {
        super(name);
        this.cidrBlocks = args.cidrBlocks;
        this.fromPort = args.fromPort;
        this.ipv6CidrBlocks = args.ipv6CidrBlocks;
        this.prefixListIds = args.prefixListIds;
        this.protocol = args.protocol;
        this.securityGroupId = args.securityGroupId;
        this.self = args.self;
        this.sourceSecurityGroupId = args.sourceSecurityGroupId;
        this.toPort = args.toPort;
        this.type = args.type;
    }
}

export interface SecurityGroupRuleArgs {
    readonly cidrBlocks?: string[];
    readonly fromPort: number;
    readonly ipv6CidrBlocks?: string[];
    readonly prefixListIds?: string[];
    readonly protocol: string;
    readonly securityGroupId: string;
    readonly self?: boolean;
    readonly sourceSecurityGroupId?: string;
    readonly toPort: number;
    readonly type: string;
}

