import React from 'react';

function Column({ size, children }) {
    return (
        <div
            className={size
            .split(" ")
            .map(size => "col-" + size)
            .join(" ")}
        >
            {children}
        </div>
    );
            }
    export default Column;