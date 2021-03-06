// *** WARNING: this file was generated by the Pulumi Kubernetes codegen tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Kubernetes.AdmissionRegistration.V1Beta1
{
    /// <summary>
    /// ValidatingWebhookConfiguration describes the configuration of and admission webhook that
    /// accept or reject and object without changing it. Deprecated in v1.16, planned for removal in
    /// v1.19. Use admissionregistration.k8s.io/v1 ValidatingWebhookConfiguration instead.
    /// </summary>
    public partial class ValidatingWebhookConfiguration : Pulumi.CustomResource
    {
        /// <summary>
        /// APIVersion defines the versioned schema of this representation of an object. Servers
        /// should convert recognized schemas to the latest internal value, and may reject
        /// unrecognized values. More info:
        /// https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
        /// </summary>
        [Output("apiVersion")]
        public Output<string> ApiVersion { get; private set; } = null!;

        /// <summary>
        /// Kind is a string value representing the REST resource this object represents. Servers
        /// may infer this from the endpoint the client submits requests to. Cannot be updated. In
        /// CamelCase. More info:
        /// https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
        /// </summary>
        [Output("kind")]
        public Output<string> Kind { get; private set; } = null!;

        /// <summary>
        /// Standard object metadata; More info:
        /// https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.
        /// </summary>
        [Output("metadata")]
        public Output<Types.Outputs.Meta.V1.ObjectMeta> Metadata { get; private set; } = null!;

        /// <summary>
        /// Webhooks is a list of webhooks and the affected resources and operations.
        /// </summary>
        [Output("webhooks")]
        public Output<ImmutableArray<Types.Outputs.AdmissionRegistration.V1Beta1.ValidatingWebhook>> Webhooks { get; private set; } = null!;


        /// <summary>
        /// Create a ValidatingWebhookConfiguration resource with the given unique name, arguments, and options.
        /// </summary>
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ValidatingWebhookConfiguration(string name, Types.Inputs.AdmissionRegistration.V1Beta1.ValidatingWebhookConfigurationArgs? args = null, CustomResourceOptions? options = null)
            : base("kubernetes:admissionregistration.k8s.io/v1beta1:ValidatingWebhookConfiguration", name, SetAPIKindAndVersion(args), MakeResourceOptions(options))
        {
        }

        private static ResourceArgs SetAPIKindAndVersion(Types.Inputs.AdmissionRegistration.V1Beta1.ValidatingWebhookConfigurationArgs? args)
        {
            if (args != null) {
                args.ApiVersion = "admissionregistration.k8s.io/v1beta1";
                args.Kind = "ValidatingWebhookConfiguration";
            }
            return args ?? ResourceArgs.Empty;
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            return CustomResourceOptions.Merge(defaultOptions, options);
        }

        /// <summary>
        /// Get an existing ValidatingWebhookConfiguration resource's state with the given name and ID.
        /// </summary>
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ValidatingWebhookConfiguration Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new ValidatingWebhookConfiguration(name, null, CustomResourceOptions.Merge(options, new CustomResourceOptions
            {
                Id = id,
            }));
        }

    }
}
