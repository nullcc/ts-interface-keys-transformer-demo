import { keys } from 'ts-interface-keys-transformer';

interface Foo {
  a: number;
  b?: string;
  c: {
    d: number;
    e?: boolean;
  }
  f: Bar;
}

interface Bar {
  x: string;
  y: number;
}

console.log(keys<Foo>());
