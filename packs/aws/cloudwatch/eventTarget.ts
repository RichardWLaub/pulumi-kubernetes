// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class EventTarget extends lumi.NamedResource implements EventTargetArgs {
    public readonly arn: string;
    public readonly ecsTarget?: { taskCount?: number, taskDefinitionArn: string }[];
    public readonly input?: string;
    public readonly inputPath?: string;
    public readonly roleArn?: string;
    public readonly rule: string;
    public readonly runCommandTargets?: { key: string, values: string[] }[];
    public readonly targetId?: string;

    constructor(name: string, args: EventTargetArgs) {
        super(name);
        this.arn = args.arn;
        this.ecsTarget = args.ecsTarget;
        this.input = args.input;
        this.inputPath = args.inputPath;
        this.roleArn = args.roleArn;
        this.rule = args.rule;
        this.runCommandTargets = args.runCommandTargets;
        this.targetId = args.targetId;
    }
}

export interface EventTargetArgs {
    readonly arn: string;
    readonly ecsTarget?: { taskCount?: number, taskDefinitionArn: string }[];
    readonly input?: string;
    readonly inputPath?: string;
    readonly roleArn?: string;
    readonly rule: string;
    readonly runCommandTargets?: { key: string, values: string[] }[];
    readonly targetId?: string;
}

