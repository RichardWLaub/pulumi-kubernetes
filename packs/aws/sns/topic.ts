// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Topic extends lumi.NamedResource implements TopicArgs {
    public readonly arn?: string;
    public readonly deliveryPolicy?: string;
    public readonly displayName?: string;
    public readonly _name: string;
    public readonly policy?: string;

    constructor(name: string, args: TopicArgs) {
        super(name);
        this.arn = args.arn;
        this.deliveryPolicy = args.deliveryPolicy;
        this.displayName = args.displayName;
        this._name = args._name;
        this.policy = args.policy;
    }
}

export interface TopicArgs {
    readonly arn?: string;
    readonly deliveryPolicy?: string;
    readonly displayName?: string;
    readonly _name: string;
    readonly policy?: string;
}

