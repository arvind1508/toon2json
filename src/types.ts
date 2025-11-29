export type Primitive = string | number | boolean | null;
export type JSONObject = { [k: string]: JSONValue };
export type JSONArray = JSONValue[];
export type JSONValue = Primitive | JSONObject | JSONArray;
