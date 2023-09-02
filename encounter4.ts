// a type function that would create a new type from a given one, where only the fields of type string would be present

type StringFields<T> = {
    [K in keyof T]: T[K] extends string ? K : never;
};

