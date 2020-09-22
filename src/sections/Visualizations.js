import React from 'react';

function Visualizations({ data }) {
    console.log(data);
    return (
        <div>
            {data.label}
        </div>
    );
} 

export default Visualizations;

function Cell({ data }) {
    return (
        <div>

        </div>
    );
};