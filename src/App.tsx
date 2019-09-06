import React, { useState } from 'react';
import './App.css';
import HelloWorld from './comps/HelloWorld';
import FunctionalStateless from './comps/FunctionalStateless';
import TextField from './comps/TextField';

import { ReducerExample } from './comps/ReducerExample';

import { Counter } from './comps/Counter';

// Typescript React Cheatsheet:
// https://github.com/typescript-cheatsheets/react-typescript-cheatsheet

const App: React.FC = () => {
    const bobString = 'bob';

    const [inputText, setInputText] = useState<string>('');

    console.log('\n', '\n', `inputText = `, inputText, '\n', '\n');

    return (
        <div className="App">
            <HelloWorld name="Brian Cilent" />
            <hr />
            <FunctionalStateless data="my data" />
            <hr />
            <TextField
                text={inputText}
                person={{ firstName: 'Brian', lastName: 'Cilenti' }}
                obj={{ fieldOne: 'one', fieldTwo: 2 }}
                isOk={true}
                num={42}
                fn={bobString => 'yellow'}
                handleChange={e => setInputText(e.target.value)}
            />
            <hr />
            <ReducerExample />

            <hr />
            <Counter>
                {({ count, setCount }) => {
                    return (
                        <div>
                            {count}
                            <button
                                style={{
                                    height: '40px',
                                    width: '125px',
                                    marginLeft: '30px'
                                }}
                                onClick={() => {
                                    setCount(count + 1);
                                }}
                            >
                                INCREMENT
                            </button>
                        </div>
                    );
                }}
            </Counter>
        </div>
    );
};

export default App;
