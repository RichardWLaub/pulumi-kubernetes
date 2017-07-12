// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class SnapshotCreateVolumePermission extends lumi.NamedResource implements SnapshotCreateVolumePermissionArgs {
    public readonly accountId: string;
    public readonly snapshotId: string;

    constructor(name: string, args: SnapshotCreateVolumePermissionArgs) {
        super(name);
        this.accountId = args.accountId;
        this.snapshotId = args.snapshotId;
    }
}

export interface SnapshotCreateVolumePermissionArgs {
    readonly accountId: string;
    readonly snapshotId: string;
}

