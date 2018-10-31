import pulumi
import pulumi.runtime

from ...tables import _CASING_FORWARD_TABLE, _CASING_BACKWARD_TABLE

class NodeConfigSource(pulumi.CustomResource):
    """
    NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding
    metadata) must be non-nil.
    """
    def __init__(self, __name__, __opts__=None, config_map_ref=None):
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['apiVersion'] = 'v1'
        self.apiVersion = 'v1'

        __props__['kind'] = 'NodeConfigSource'
        self.kind = 'NodeConfigSource'

        if config_map_ref and not isinstance(config_map_ref, dict):
            raise TypeError('Expected property aliases to be a dict')
        self.config_map_ref = config_map_ref
        
        __props__['configMapRef'] = config_map_ref

        super(NodeConfigSource, self).__init__(
            "kubernetes:core/v1:NodeConfigSource",
            __name__,
            __props__,
            __opts__)

    def translate_output_property(self, prop: str) -> str:
        return _CASING_FORWARD_TABLE.get(prop) or prop

    def translate_input_property(self, prop: str) -> str:
        return _CASING_BACKWARD_TABLE.get(prop) or prop