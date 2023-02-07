// a UnionToIntersection type that only make keys required that are actually shared across the union

// code contribution by https://github.com/gvergnaud on this tweet by Tanner Linsley https://twitter.com/tannerlinsley/status/1623002318349414400

type Compute<T> = { [K in keyof T]: T[K] } | never
// You can use a mapped type to create objects by iterating over keys.(FYI from the total typescript extension for vscode.) 
// The mapped type is a union of the object types created by the iteration. The never type is used to ensure that the union is never empty.(copilot additional info suggestion)

type AllKeys<T> = T extends any ? keyof T : never

type MergeUnion<T, Keys extends keyof T = keyof T> = Compute<
    {
        [K in Keys]: T[Keys];
    } & {
        [K in AllKeys<T>]? : T extends any
            ? K extends keyof T
                ? T[K]
                : never
            : never;
    }
>

// Check out "passing-generics-to-types", "mapped-type", and "conditional-types" for more info on the above types.(Expand on the FYI by total-typescript extension for vscode)


type T = MergeUnion<{ a: 'a', b: 'b' } | { b: 'b', c: 'c' }>
