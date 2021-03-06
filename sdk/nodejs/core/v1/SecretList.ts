// *** WARNING: this file was generated by the Pulumi Kubernetes codegen tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputApi from "../../types/input";
import * as outputApi from "../../types/output";

    /**
     * SecretList is a list of Secret.
     */
    export class SecretList extends pulumi.CustomResource {
      /**
       * APIVersion defines the versioned schema of this representation of an object. Servers should
       * convert recognized schemas to the latest internal value, and may reject unrecognized
       * values. More info:
       * https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
       */
      public readonly apiVersion: pulumi.Output<"v1">;

      /**
       * Items is a list of secret objects. More info:
       * https://kubernetes.io/docs/concepts/configuration/secret
       */
      public readonly items: pulumi.Output<outputApi.core.v1.Secret[]>;

      /**
       * Kind is a string value representing the REST resource this object represents. Servers may
       * infer this from the endpoint the client submits requests to. Cannot be updated. In
       * CamelCase. More info:
       * https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
       */
      public readonly kind: pulumi.Output<"SecretList">;

      /**
       * Standard list metadata. More info:
       * https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
       */
      public readonly metadata: pulumi.Output<outputApi.meta.v1.ListMeta>;

      /**
       * Get the state of an existing `SecretList` resource, as identified by `id`.
       * Typically this ID  is of the form <namespace>/<name>; if <namespace> is omitted, then (per
       * Kubernetes convention) the ID becomes default/<name>.
       *
       * Pulumi will keep track of this resource using `name` as the Pulumi ID.
       *
       * @param name _Unique_ name used to register this resource with Pulumi.
       * @param id An ID for the Kubernetes resource to retrieve. Takes the form
       *  <namespace>/<name> or <name>.
       * @param opts Uniquely specifies a CustomResource to select.
       */
      public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SecretList {
          return new SecretList(name, undefined, { ...opts, id: id });
      }

      public getInputs(): inputApi.core.v1.SecretList { return this.__inputs; }
      private readonly __inputs: inputApi.core.v1.SecretList;

      /**
       * Create a core.v1.SecretList resource with the given unique name, arguments, and options.
       *
       * @param name The _unique_ name of the resource.
       * @param args The arguments to use to populate this resource's properties.
       * @param opts A bag of options that control this resource's behavior.
       */
      constructor(name: string, args?: inputApi.core.v1.SecretList, opts?: pulumi.CustomResourceOptions) {
          let inputs: pulumi.Inputs = {};
          inputs["apiVersion"] = "v1";
          inputs["items"] = args && args.items || undefined;
          inputs["kind"] = "SecretList";
          inputs["metadata"] = args && args.metadata || undefined;
          super("kubernetes:core/v1:SecretList", name, inputs, opts);
          this.__inputs = <any>args;
      }
    }
