export const validateAndParseJSON = (input: string) => {
  try {
    // First, try to parse the input in case it's a JSON string
    let obj = JSON.parse(input);

    // If the parsed result is a string, it might be an escaped JSON string, so parse it again
    if (typeof obj === 'string') {
      obj = JSON.parse(obj);
    }

    // If we've made it here, it's valid JSON. Format it.
    return {
      isValid: true,
      obj,
    };
  } catch (error) {
    // If there's an error, it's not valid JSON
    throw error;
  }
};
