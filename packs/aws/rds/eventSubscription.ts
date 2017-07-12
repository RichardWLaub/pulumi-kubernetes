// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class EventSubscription extends lumi.NamedResource implements EventSubscriptionArgs {
    public readonly customerAwsId?: string;
    public readonly enabled?: boolean;
    public readonly eventCategories?: string[];
    public readonly _name: string;
    public readonly snsTopic: string;
    public readonly sourceIds?: string[];
    public readonly sourceType?: string;
    public readonly tags?: {[key: string]: any};

    constructor(name: string, args: EventSubscriptionArgs) {
        super(name);
        this.customerAwsId = args.customerAwsId;
        this.enabled = args.enabled;
        this.eventCategories = args.eventCategories;
        this._name = args._name;
        this.snsTopic = args.snsTopic;
        this.sourceIds = args.sourceIds;
        this.sourceType = args.sourceType;
        this.tags = args.tags;
    }
}

export interface EventSubscriptionArgs {
    readonly customerAwsId?: string;
    readonly enabled?: boolean;
    readonly eventCategories?: string[];
    readonly _name: string;
    readonly snsTopic: string;
    readonly sourceIds?: string[];
    readonly sourceType?: string;
    readonly tags?: {[key: string]: any};
}

