// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class DefaultVpc extends lumi.NamedResource implements DefaultVpcArgs {
    public readonly assignGeneratedIpv6CidrBlock?: boolean;
    public readonly cidrBlock?: string;
    public readonly defaultNetworkAclId?: string;
    public readonly defaultRouteTableId?: string;
    public readonly defaultSecurityGroupId?: string;
    public readonly dhcpOptionsId?: string;
    public readonly enableClassiclink?: boolean;
    public readonly enableClassiclinkDnsSupport?: boolean;
    public readonly enableDnsHostnames?: boolean;
    public readonly enableDnsSupport?: boolean;
    public readonly instanceTenancy?: string;
    public readonly ipv6AssociationId?: string;
    public readonly ipv6CidrBlock?: string;
    public readonly mainRouteTableId?: string;
    public readonly tags?: {[key: string]: any};

    constructor(name: string, args: DefaultVpcArgs) {
        super(name);
        this.assignGeneratedIpv6CidrBlock = args.assignGeneratedIpv6CidrBlock;
        this.cidrBlock = args.cidrBlock;
        this.defaultNetworkAclId = args.defaultNetworkAclId;
        this.defaultRouteTableId = args.defaultRouteTableId;
        this.defaultSecurityGroupId = args.defaultSecurityGroupId;
        this.dhcpOptionsId = args.dhcpOptionsId;
        this.enableClassiclink = args.enableClassiclink;
        this.enableClassiclinkDnsSupport = args.enableClassiclinkDnsSupport;
        this.enableDnsHostnames = args.enableDnsHostnames;
        this.enableDnsSupport = args.enableDnsSupport;
        this.instanceTenancy = args.instanceTenancy;
        this.ipv6AssociationId = args.ipv6AssociationId;
        this.ipv6CidrBlock = args.ipv6CidrBlock;
        this.mainRouteTableId = args.mainRouteTableId;
        this.tags = args.tags;
    }
}

export interface DefaultVpcArgs {
    readonly assignGeneratedIpv6CidrBlock?: boolean;
    readonly cidrBlock?: string;
    readonly defaultNetworkAclId?: string;
    readonly defaultRouteTableId?: string;
    readonly defaultSecurityGroupId?: string;
    readonly dhcpOptionsId?: string;
    readonly enableClassiclink?: boolean;
    readonly enableClassiclinkDnsSupport?: boolean;
    readonly enableDnsHostnames?: boolean;
    readonly enableDnsSupport?: boolean;
    readonly instanceTenancy?: string;
    readonly ipv6AssociationId?: string;
    readonly ipv6CidrBlock?: string;
    readonly mainRouteTableId?: string;
    readonly tags?: {[key: string]: any};
}

