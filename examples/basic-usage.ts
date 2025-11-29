/**
 * Basic usage examples for toon2json package
 */

import { encode, decode } from '../src/index';

// ============================================
// Example 1: Simple Object Encoding
// ============================================
console.log('=== Example 1: Simple Object Encoding ===');
const simpleObject = {
  name: 'Alice',
  age: 28,
  active: true
};

const toonSimple = encode(simpleObject);
console.log('Original:', simpleObject);
console.log('TOON:', toonSimple);
console.log();

// ============================================
// Example 2: Nested Objects
// ============================================
console.log('=== Example 2: Nested Objects ===');
const nestedObject = {
  user: {
    id: 1,
    name: 'Bob',
    email: 'bob@example.com'
  },
  settings: {
    theme: 'dark',
    notifications: true
  }
};

const toonNested = encode(nestedObject);
console.log('Original:', JSON.stringify(nestedObject, null, 2));
console.log('TOON:', toonNested);
console.log();

// ============================================
// Example 3: Arrays
// ============================================
console.log('=== Example 3: Arrays ===');
const objectWithArray = {
  title: 'My Project',
  tags: ['typescript', 'nodejs', 'converter'],
  scores: [95, 87, 92]
};

const toonArray = encode(objectWithArray);
console.log('Original:', objectWithArray);
console.log('TOON:', toonArray);
console.log();

// ============================================
// Example 4: Complex Nested Structure
// ============================================
console.log('=== Example 4: Complex Nested Structure ===');
const complexObject = {
  company: 'TechCorp',
  employees: [
    {
      id: 1,
      name: 'Alice Johnson',
      role: 'Developer',
      skills: ['JavaScript', 'Python', 'Go'],
      contact: {
        email: 'alice@techcorp.com',
        phone: '555-0001'
      }
    },
    {
      id: 2,
      name: 'Bob Smith',
      role: 'Designer',
      skills: ['UI/UX', 'Figma', 'CSS'],
      contact: {
        email: 'bob@techcorp.com',
        phone: '555-0002'
      }
    }
  ],
  founded: 2020,
  active: true
};

const toonComplex = encode(complexObject);
console.log('TOON:', toonComplex);
console.log();

// ============================================
// Example 5: Decoding TOON Back to JSON
// ============================================
console.log('=== Example 5: Decoding TOON ===');
const toonInput = '{name="Charlie"; age=35; skills=["Python"; "Java"; "C++"];active=true}';
const decodedObject = decode(toonInput);
console.log('TOON Input:', toonInput);
console.log('Decoded:', decodedObject);
console.log();

// ============================================
// Example 6: Round-Trip Conversion
// ============================================
console.log('=== Example 6: Round-Trip Conversion ===');
const original = {
  message: 'Hello TOON!',
  version: 1.0,
  features: ['encode', 'decode', 'lightweight'],
  metadata: {
    author: 'Developer',
    license: 'ISC'
  }
};

const encoded = encode(original);
const decoded = decode(encoded);

console.log('Original:', original);
console.log('Encoded:', encoded);
console.log('Decoded:', decoded);
console.log('Match:', JSON.stringify(original) === JSON.stringify(decoded));
console.log();

// ============================================
// Example 7: Special Characters and Escaping
// ============================================
console.log('=== Example 7: Escaping Special Characters ===');
const specialChars = {
  formula: 'a=b;c=d',
  path: 'C:\\Users\\Documents',
  quote: 'He said "Hello"',
  combined: 'a\\b=c;d=e'
};

const toonSpecial = encode(specialChars);
console.log('Original:', specialChars);
console.log('TOON:', toonSpecial);
console.log('Decoded:', decode(toonSpecial));
console.log();

// ============================================
// Example 8: Data Types
// ============================================
console.log('=== Example 8: Various Data Types ===');
const dataTypes = {
  string: 'text',
  number: 42,
  float: 3.14159,
  boolean_true: true,
  boolean_false: false,
  null_value: null,
  array: [1, 2, 3],
  object: { nested: 'value' }
};

const toonTypes = encode(dataTypes);
console.log('Original:', dataTypes);
console.log('TOON:', toonTypes);
console.log('Decoded:', decode(toonTypes));
