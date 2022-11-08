import React, { useState } from "react";

const InputConError = () => {
    const [name, setName] = useState("");

    const onChange = (e) => {
        // setName(previousValue => [...previousValue, e.key]);
        setName(e.target.value)
    };

    return (
        <div>
            <input value={name} onChange={onChange} />
        </div>
    );
};

export default InputConError;
