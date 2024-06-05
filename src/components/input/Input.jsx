import React from "react";

const Input = ({ type, chengeValue, placeholder, style, name,
    isRef
}) => {
    return <>
        <input
            type={type}
            onChange={chengeValue}
            placeholder={placeholder}
            className={style}
            name={name}
            ref={isRef}
        />
    </>;
};

export default Input;
