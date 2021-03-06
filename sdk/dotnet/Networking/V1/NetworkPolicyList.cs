// *** WARNING: this file was generated by the Pulumi Kubernetes codegen tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Kubernetes.Networking.V1
{
    /// <summary>
    /// NetworkPolicyList is a list of NetworkPolicy objects.
    /// </summary>
    public partial class NetworkPolicyList : Pulumi.CustomResource
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
        /// Items is a list of schema objects.
        /// </summary>
        [Output("items")]
        public Output<ImmutableArray<Types.Outputs.Networking.V1.NetworkPolicy>> Items { get; private set; } = null!;

        /// <summary>
        /// Kind is a string value representing the REST resource this object represents. Servers
        /// may infer this from the endpoint the client submits requests to. Cannot be updated. In
        /// CamelCase. More info:
        /// https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
        /// </summary>
        [Output("kind")]
        public Output<string> Kind { get; private set; } = null!;

        /// <summary>
        /// Standard list metadata. More info:
        /// https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
        /// </summary>
        [Output("metadata")]
        public Output<Types.Outputs.Meta.V1.ListMeta> Metadata { get; private set; } = null!;


        /// <summary>
        /// Create a NetworkPolicyList resource with the given unique name, arguments, and options.
        /// </summary>
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public NetworkPolicyList(string name, Types.Inputs.Networking.V1.NetworkPolicyListArgs? args = null, CustomResourceOptions? options = null)
            : base("kubernetes:networking.k8s.io/v1:NetworkPolicyList", name, SetAPIKindAndVersion(args), MakeResourceOptions(options))
        {
        }

        private static ResourceArgs SetAPIKindAndVersion(Types.Inputs.Networking.V1.NetworkPolicyListArgs? args)
        {
            if (args != null) {
                args.ApiVersion = "networking.k8s.io/v1";
                args.Kind = "NetworkPolicyList";
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
        /// Get an existing NetworkPolicyList resource's state with the given name and ID.
        /// </summary>
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static NetworkPolicyList Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new NetworkPolicyList(name, null, CustomResourceOptions.Merge(options, new CustomResourceOptions
            {
                Id = id,
            }));
        }

    }
}
