// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class SpotInstanceRequest extends lumi.NamedResource implements SpotInstanceRequestArgs {
    public readonly ami: string;
    public readonly associatePublicIpAddress?: boolean;
    public readonly availabilityZone?: string;
    public readonly blockDurationMinutes?: number;
    public readonly disableApiTermination?: boolean;
    public readonly ebsBlockDevice?: { deleteOnTermination?: boolean, deviceName: string, encrypted?: boolean, iops?: number, snapshotId?: string, volumeSize?: number, volumeType?: string }[];
    public readonly ebsOptimized?: boolean;
    public readonly ephemeralBlockDevice?: { deviceName: string, noDevice?: boolean, virtualName?: string }[];
    public readonly iamInstanceProfile?: string;
    public readonly instanceInitiatedShutdownBehavior?: string;
    public readonly instanceState?: string;
    public readonly instanceType: string;
    public readonly ipv6AddressCount?: number;
    public readonly ipv6Addresses?: string[];
    public readonly keyName?: string;
    public readonly monitoring?: boolean;
    public readonly networkInterface?: { deleteOnTermination?: boolean, deviceIndex: number, networkInterfaceId: string }[];
    public readonly networkInterfaceId?: string;
    public readonly placementGroup?: string;
    public readonly primaryNetworkInterfaceId?: string;
    public readonly privateDns?: string;
    public readonly privateIp?: string;
    public readonly publicDns?: string;
    public readonly publicIp?: string;
    public readonly rootBlockDevice?: { deleteOnTermination?: boolean, iops?: number, volumeSize?: number, volumeType?: string }[];
    public readonly securityGroups?: string[];
    public readonly sourceDestCheck?: boolean;
    public readonly spotBidStatus?: string;
    public readonly spotInstanceId?: string;
    public readonly spotPrice: string;
    public readonly spotRequestState?: string;
    public readonly spotType?: string;
    public readonly subnetId?: string;
    public readonly tags?: {[key: string]: any};
    public readonly tenancy?: string;
    public readonly userData?: string;
    public readonly volumeTags?: {[key: string]: any};
    public readonly vpcSecurityGroupIds?: string[];
    public readonly waitForFulfillment?: boolean;

    constructor(name: string, args: SpotInstanceRequestArgs) {
        super(name);
        this.ami = args.ami;
        this.associatePublicIpAddress = args.associatePublicIpAddress;
        this.availabilityZone = args.availabilityZone;
        this.blockDurationMinutes = args.blockDurationMinutes;
        this.disableApiTermination = args.disableApiTermination;
        this.ebsBlockDevice = args.ebsBlockDevice;
        this.ebsOptimized = args.ebsOptimized;
        this.ephemeralBlockDevice = args.ephemeralBlockDevice;
        this.iamInstanceProfile = args.iamInstanceProfile;
        this.instanceInitiatedShutdownBehavior = args.instanceInitiatedShutdownBehavior;
        this.instanceState = args.instanceState;
        this.instanceType = args.instanceType;
        this.ipv6AddressCount = args.ipv6AddressCount;
        this.ipv6Addresses = args.ipv6Addresses;
        this.keyName = args.keyName;
        this.monitoring = args.monitoring;
        this.networkInterface = args.networkInterface;
        this.networkInterfaceId = args.networkInterfaceId;
        this.placementGroup = args.placementGroup;
        this.primaryNetworkInterfaceId = args.primaryNetworkInterfaceId;
        this.privateDns = args.privateDns;
        this.privateIp = args.privateIp;
        this.publicDns = args.publicDns;
        this.publicIp = args.publicIp;
        this.rootBlockDevice = args.rootBlockDevice;
        this.securityGroups = args.securityGroups;
        this.sourceDestCheck = args.sourceDestCheck;
        this.spotBidStatus = args.spotBidStatus;
        this.spotInstanceId = args.spotInstanceId;
        this.spotPrice = args.spotPrice;
        this.spotRequestState = args.spotRequestState;
        this.spotType = args.spotType;
        this.subnetId = args.subnetId;
        this.tags = args.tags;
        this.tenancy = args.tenancy;
        this.userData = args.userData;
        this.volumeTags = args.volumeTags;
        this.vpcSecurityGroupIds = args.vpcSecurityGroupIds;
        this.waitForFulfillment = args.waitForFulfillment;
    }
}

export interface SpotInstanceRequestArgs {
    readonly ami: string;
    readonly associatePublicIpAddress?: boolean;
    readonly availabilityZone?: string;
    readonly blockDurationMinutes?: number;
    readonly disableApiTermination?: boolean;
    readonly ebsBlockDevice?: { deleteOnTermination?: boolean, deviceName: string, encrypted?: boolean, iops?: number, snapshotId?: string, volumeSize?: number, volumeType?: string }[];
    readonly ebsOptimized?: boolean;
    readonly ephemeralBlockDevice?: { deviceName: string, noDevice?: boolean, virtualName?: string }[];
    readonly iamInstanceProfile?: string;
    readonly instanceInitiatedShutdownBehavior?: string;
    readonly instanceState?: string;
    readonly instanceType: string;
    readonly ipv6AddressCount?: number;
    readonly ipv6Addresses?: string[];
    readonly keyName?: string;
    readonly monitoring?: boolean;
    readonly networkInterface?: { deleteOnTermination?: boolean, deviceIndex: number, networkInterfaceId: string }[];
    readonly networkInterfaceId?: string;
    readonly placementGroup?: string;
    readonly primaryNetworkInterfaceId?: string;
    readonly privateDns?: string;
    readonly privateIp?: string;
    readonly publicDns?: string;
    readonly publicIp?: string;
    readonly rootBlockDevice?: { deleteOnTermination?: boolean, iops?: number, volumeSize?: number, volumeType?: string }[];
    readonly securityGroups?: string[];
    readonly sourceDestCheck?: boolean;
    readonly spotBidStatus?: string;
    readonly spotInstanceId?: string;
    readonly spotPrice: string;
    readonly spotRequestState?: string;
    readonly spotType?: string;
    readonly subnetId?: string;
    readonly tags?: {[key: string]: any};
    readonly tenancy?: string;
    readonly userData?: string;
    readonly volumeTags?: {[key: string]: any};
    readonly vpcSecurityGroupIds?: string[];
    readonly waitForFulfillment?: boolean;
}

