import React, { useState, useRef } from 'react';

interface Person {
    firstName: string;
    lastName: string;
}

interface Props {
    text: string;
    isOk?: boolean; // adding "?" makes this property optional
    num: number;
    fn: (bob: string) => string; // "void" if you don't want to return anything.
    obj: {
        fieldOne: string;
        fieldTwo: number;
    };
    person: Person;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
    text: string;
}

// FC is a built in type provided by React, "Functional Component".
// The props that TextField takes goes inbetween the angle brackets.
// we could <{text: string}>
export const TextField: React.FC<Props> = ({ handleChange }) => {
    // "TextField expects you to pass a prop called 'text' of the type string into it. "

    // without <> after useState, TS would infer <number> based on what was passed into useState.  We allow null with the "or" operator.
    const [count, setCount] = useState<number | null | undefined>(5);
    // setCount(null);

    const [myText, setMyText] = useState<TextNode>({ text: 'hello' });

    // we need to tell TS what the type of the reference is before we can pass it into the ref property of <input />.  We need to pass the input type into the <Type>.
    const inputRef = useRef<HTMLInputElement>(null); // had to pass null in because leaving it empty was like passing 'undefined' and then TS give this warning: 'Type 'HTMLInputElement | undefined' is not assignable to type 'HTMLInputElement | null'.'

    const divRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={divRef}>
            <p>Hello TextField</p>
            <input type="text" ref={inputRef} onChange={handleChange} />
        </div>
    );
};

export default TextField;
