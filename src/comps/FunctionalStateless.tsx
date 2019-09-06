import * as React from 'react';

interface Props {
    data: string | null;
}

export const FunctionalStateless: React.FC<Props> = ({ data }) => {
    return (
        <div>
            <h4>Hello FunctionalStateless</h4>
            <h3>dataProp: {data}</h3>
        </div>
    );
};

export default FunctionalStateless;
