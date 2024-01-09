type DynamicProperties<T> = {
  [key: string]: T;
};

let dict: DynamicProperties<number> = { key1: 42, key2: 30 };
