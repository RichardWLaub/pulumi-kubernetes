// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class EventRule extends lumi.NamedResource implements EventRuleArgs {
    public readonly arn?: string;
    public readonly description?: string;
    public readonly eventPattern?: string;
    public readonly isEnabled?: boolean;
    public readonly _name: string;
    public readonly roleArn?: string;
    public readonly scheduleExpression?: string;

    constructor(name: string, args: EventRuleArgs) {
        super(name);
        this.arn = args.arn;
        this.description = args.description;
        this.eventPattern = args.eventPattern;
        this.isEnabled = args.isEnabled;
        this._name = args._name;
        this.roleArn = args.roleArn;
        this.scheduleExpression = args.scheduleExpression;
    }
}

export interface EventRuleArgs {
    readonly arn?: string;
    readonly description?: string;
    readonly eventPattern?: string;
    readonly isEnabled?: boolean;
    readonly _name: string;
    readonly roleArn?: string;
    readonly scheduleExpression?: string;
}

