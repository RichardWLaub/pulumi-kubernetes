// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Notification extends lumi.NamedResource implements NotificationArgs {
    public readonly groupNames: string[];
    public readonly notifications: string[];
    public readonly topicArn: string;

    constructor(name: string, args: NotificationArgs) {
        super(name);
        this.groupNames = args.groupNames;
        this.notifications = args.notifications;
        this.topicArn = args.topicArn;
    }
}

export interface NotificationArgs {
    readonly groupNames: string[];
    readonly notifications: string[];
    readonly topicArn: string;
}

