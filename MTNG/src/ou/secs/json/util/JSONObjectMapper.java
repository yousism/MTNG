package ou.secs.json.util;

import org.codehaus.jackson.map.DeserializationConfig;
import org.codehaus.jackson.map.DeserializationConfig.Feature;
import org.codehaus.jackson.map.ObjectMapper;

public class JSONObjectMapper extends ObjectMapper {
	public JSONObjectMapper() {
		configure(DeserializationConfig.Feature.FAIL_ON_UNKNOWN_PROPERTIES, false);
		configure(Feature.ACCEPT_SINGLE_VALUE_AS_ARRAY, true);

	}
}
