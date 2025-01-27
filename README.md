# TypeScript Utilities & Zod Type Inference

This document highlights my learning about TypeScript utilities and Zod type inference.

---

## TypeScript Utilities

### 1. `Pick<>`
- Extracts specific properties from a type to create a new one.

### 2. `Partial<>`
- Converts all properties of a type to optional.

### 3. `Readonly<>`
- Makes all properties of a type immutable.

### 4. `Record<>`
- Defines an object type with specified keys and values.

### 5. `Exclude<>`
- Removes specific properties from a union type.

---

## JavaScript `map()`
- Iterates over an array and transforms its elements into a new array based on a provided function.

---

## Zod Type Inference
- Extracts TypeScript types directly from Zod schemas, ensuring type safety and validation consistency.
```typescript
const userSchema = z.object({ id: z.number(), name: z.string() });
type User = z.infer<typeof userSchema>;
