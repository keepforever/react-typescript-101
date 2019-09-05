import React from 'react';

interface Props {
    name: string
}

// React has created type definitons that take a generic.  and a generic is what the Props are becase they don't know ahead of time what data you want to pass into your component. 

const HelloWorld: React.FC<Props> = ({name}) => {
    return (
        <div>
            <h3>Hello {name}</h3>
        </div>
    );
};

export default HelloWorld;
