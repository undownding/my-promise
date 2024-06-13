# Promise

> Promise with props() and all()

## Install

```shell
npm install @undownding/promise
```

## Usage

```typescript
import Promise, { all, props } from '@undownding/promise'

test('test with promise.props', async () => {
  const result = await Promise.props({
    a: Promise.resolve(1),
    b: Promise.resolve(2),
  })
  expect(result).toEqual({ a: 1, b: 2 })
})

test('test with all', async () => {
  const result = await all([Promise.resolve(1), Promise.resolve(2)])
  expect(result).toEqual([1, 2])
})

test('test with props', async () => {
  const result = await props({
    a: Promise.resolve(1),
    b: Promise.resolve(2),
  })
  expect(result).toEqual({ a: 1, b: 2 })
})
```
