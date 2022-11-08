import React, { useState } from "react";

const InputConError = () => {
    const [name, setName] = useState("");

    const onKeyDown = (e) => {
        setName(e.key);
    };

    return (
        <div>
            <input value={name} onKeyDown={onKeyDown} />
        </div>
    );
};

export default InputConError;
