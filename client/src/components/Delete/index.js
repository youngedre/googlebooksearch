import React from "react";

function Delete(props) {
    return (
        <div>
            <button class="btn-danger"
                    onClick={props.onClick}>
                        REMOVE
            </button>
        </div>
    );
}

export default Delete;