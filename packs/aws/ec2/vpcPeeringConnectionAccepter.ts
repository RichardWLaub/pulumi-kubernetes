// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class VpcPeeringConnectionAccepter extends lumi.NamedResource implements VpcPeeringConnectionAccepterArgs {
    public readonly acceptStatus?: string;
    public readonly accepter?: { allowClassicLinkToRemoteVpc?: boolean, allowRemoteVpcDnsResolution?: boolean, allowVpcToRemoteClassicLink?: boolean }[];
    public readonly autoAccept?: boolean;
    public readonly peerOwnerId?: string;
    public readonly peerVpcId?: string;
    public readonly requester?: { allowClassicLinkToRemoteVpc?: boolean, allowRemoteVpcDnsResolution?: boolean, allowVpcToRemoteClassicLink?: boolean }[];
    public readonly tags?: {[key: string]: any};
    public readonly vpcId?: string;
    public readonly vpcPeeringConnectionId: string;

    constructor(name: string, args: VpcPeeringConnectionAccepterArgs) {
        super(name);
        this.acceptStatus = args.acceptStatus;
        this.accepter = args.accepter;
        this.autoAccept = args.autoAccept;
        this.peerOwnerId = args.peerOwnerId;
        this.peerVpcId = args.peerVpcId;
        this.requester = args.requester;
        this.tags = args.tags;
        this.vpcId = args.vpcId;
        this.vpcPeeringConnectionId = args.vpcPeeringConnectionId;
    }
}

export interface VpcPeeringConnectionAccepterArgs {
    readonly acceptStatus?: string;
    readonly accepter?: { allowClassicLinkToRemoteVpc?: boolean, allowRemoteVpcDnsResolution?: boolean, allowVpcToRemoteClassicLink?: boolean }[];
    readonly autoAccept?: boolean;
    readonly peerOwnerId?: string;
    readonly peerVpcId?: string;
    readonly requester?: { allowClassicLinkToRemoteVpc?: boolean, allowRemoteVpcDnsResolution?: boolean, allowVpcToRemoteClassicLink?: boolean }[];
    readonly tags?: {[key: string]: any};
    readonly vpcId?: string;
    readonly vpcPeeringConnectionId: string;
}

