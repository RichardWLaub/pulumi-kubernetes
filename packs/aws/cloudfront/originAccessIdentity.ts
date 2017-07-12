// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class OriginAccessIdentity extends lumi.NamedResource implements OriginAccessIdentityArgs {
    public readonly callerReference?: string;
    public readonly cloudfrontAccessIdentityPath?: string;
    public readonly comment?: string;
    public readonly etag?: string;
    public readonly iamArn?: string;
    public readonly s3CanonicalUserId?: string;

    constructor(name: string, args: OriginAccessIdentityArgs) {
        super(name);
        this.callerReference = args.callerReference;
        this.cloudfrontAccessIdentityPath = args.cloudfrontAccessIdentityPath;
        this.comment = args.comment;
        this.etag = args.etag;
        this.iamArn = args.iamArn;
        this.s3CanonicalUserId = args.s3CanonicalUserId;
    }
}

export interface OriginAccessIdentityArgs {
    readonly callerReference?: string;
    readonly cloudfrontAccessIdentityPath?: string;
    readonly comment?: string;
    readonly etag?: string;
    readonly iamArn?: string;
    readonly s3CanonicalUserId?: string;
}

