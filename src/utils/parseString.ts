export interface ParsedString {
  first_name: string;
  last_name: string;
  id: string;
}

export function parseEncodedString(encodedString: string): ParsedString {
  const [first_name, last_name, id] = encodedString.split(/0+/);

  if (!first_name || !last_name || !id) {
    throw new Error("Encoded string is not well-formed.");
  }

  return { first_name, last_name, id };
}

export function emptyState(): ParsedString {
  return { first_name: "", last_name: "", id: "" };
}
