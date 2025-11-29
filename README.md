# toon2json

Convert between TOON and JSON formats bidirectionally. This package provides a simple and efficient way to encode JSON objects to TOON format and decode TOON strings back to JSON.

## Features

✨ **Bidirectional Conversion** - Seamlessly convert between TOON and JSON formats
🚀 **Fast & Lightweight** - Minimal dependencies with zero external runtime dependencies  
🔒 **Type-Safe** - Full TypeScript support with type definitions included
🛠️ **CLI Tool** - Command-line interface for quick conversions
✅ **Well Tested** - Comprehensive test coverage

## Installation

### npm

```bash
npm install toon2json
```

### yarn

```bash
yarn add toon2json
```

### pnpm

```bash
pnpm add toon2json
```

## Usage

### As a Module

#### Encode JSON to TOON

```typescript
import { encode } from 'toon2json';

const data = {
  name: 'John Doe',
  age: 30,
  email: 'john@example.com',
  active: true,
  tags: ['developer', 'nodejs'],
  address: {
    city: 'New York',
    zip: '10001'
  }
};

const toonString = encode(data);
console.log(toonString);
// Output: {name="John Doe";age=30;email="john@example.com";active=true;tags=["developer";"nodejs"];address={city="New York";zip="10001"}}
```

#### Decode TOON to JSON

```typescript
import { decode } from 'toon2json';

const toonString = '{name="John Doe";age=30;active=true}';
const jsonObject = decode(toonString);
console.log(jsonObject);
// Output: { name: 'John Doe', age: 30, active: true }
```

#### Round-Trip Conversion

```typescript
import { encode, decode } from 'toon2json';

const original = { message: 'Hello World', count: 42 };
const encoded = encode(original);
const decoded = decode(encoded);

console.log(decoded); // { message: 'Hello World', count: 42 }
```

### CLI Usage

Convert files from the command line:

```bash
# Encode JSON file to TOON
toon2json encode input.json output.toon

# Decode TOON file to JSON
toon2json decode input.toon output.json

# Get help
toon2json --help
```

## TOON Format Specification

TOON is a lightweight text format similar to JSON but with different syntax:

### Data Types

| Type | Example |
|------|---------|
| String | `"hello"` |
| Number | `42`, `3.14`, `-5` |
| Boolean | `true`, `false` |
| Null | `null` |
| Array | `["a"; "b"; "c"]` (semicolon-separated) |
| Object | `{key="value"; number=42}` |

### Format Rules

- **Objects**: Enclosed in `{}`, key-value pairs separated by `;`, keys and values separated by `=`
- **Arrays**: Enclosed in `[]`, elements separated by `;`
- **Strings**: Enclosed in `""`
- **Numbers**: Unquoted integers and floats
- **Booleans & Null**: Unquoted literals (`true`, `false`, `null`)
- **Escaping**: Use `\` to escape special characters (`\=`, `\;`, `\\`)

### Examples

```toon
# Simple object
{name="Alice"; age=28}

# Nested structure
{
  user={
    id=1;
    name="Bob";
    active=true
  };
  roles=["admin"; "user"]
}

# Array of objects
[
  {id=1; name="Item 1"};
  {id=2; name="Item 2"}
]
```

## API Reference

### `encode(obj: any): string`

Converts a JavaScript object to TOON format string.

**Parameters:**
- `obj` (any): The JavaScript object to encode (must be JSON-serializable)

**Returns:** `string` - TOON formatted string

**Example:**
```typescript
const toon = encode({ key: 'value', num: 123 });
```

### `decode(input: string): any`

Converts a TOON format string to a JavaScript object.

**Parameters:**
- `input` (string): The TOON formatted string to decode

**Returns:** `any` - Decoded JavaScript object

**Example:**
```typescript
const obj = decode('{key="value"; num=123}');
```

## TypeScript Support

This package includes complete TypeScript type definitions:

```typescript
import { encode, decode, JSONValue, JSONObject } from 'toon2json';

const data: JSONObject = {
  name: 'Example',
  count: 5
};

const encoded: string = encode(data);
const decoded: JSONValue = decode(encoded);
```

## Testing

Run the test suite:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

## Linting & Formatting

Check code quality:

```bash
npm run lint
```

Fix formatting issues:

```bash
npm run format
```

## Building

Build TypeScript to JavaScript:

```bash
npm run build
```

Clean build artifacts:

```bash
npm run clean
```

## Repository

[GitHub](https://github.com/arvind1508/toon2json)

## License

ISC

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues, questions, or suggestions, please open an [issue](https://github.com/arvind1508/toon2json/issues) on GitHub.
