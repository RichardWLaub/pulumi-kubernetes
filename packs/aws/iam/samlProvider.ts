// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class SamlProvider extends lumi.NamedResource implements SamlProviderArgs {
    public readonly arn?: string;
    public readonly _name: string;
    public readonly samlMetadataDocument: string;
    public readonly validUntil?: string;

    constructor(name: string, args: SamlProviderArgs) {
        super(name);
        this.arn = args.arn;
        this._name = args._name;
        this.samlMetadataDocument = args.samlMetadataDocument;
        this.validUntil = args.validUntil;
    }
}

export interface SamlProviderArgs {
    readonly arn?: string;
    readonly _name: string;
    readonly samlMetadataDocument: string;
    readonly validUntil?: string;
}

