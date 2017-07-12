// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class UserPolicyAttachment extends lumi.NamedResource implements UserPolicyAttachmentArgs {
    public readonly policyArn: string;
    public readonly user: string;

    constructor(name: string, args: UserPolicyAttachmentArgs) {
        super(name);
        this.policyArn = args.policyArn;
        this.user = args.user;
    }
}

export interface UserPolicyAttachmentArgs {
    readonly policyArn: string;
    readonly user: string;
}

