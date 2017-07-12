// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class OpenIdConnectProvider extends lumi.NamedResource implements OpenIdConnectProviderArgs {
    public readonly arn?: string;
    public readonly clientIdList: string[];
    public readonly thumbprintList: string[];
    public readonly url: string;

    constructor(name: string, args: OpenIdConnectProviderArgs) {
        super(name);
        this.arn = args.arn;
        this.clientIdList = args.clientIdList;
        this.thumbprintList = args.thumbprintList;
        this.url = args.url;
    }
}

export interface OpenIdConnectProviderArgs {
    readonly arn?: string;
    readonly clientIdList: string[];
    readonly thumbprintList: string[];
    readonly url: string;
}

