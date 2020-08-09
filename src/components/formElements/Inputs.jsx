import React from "react";

const InputWithIcon = ({ Icon, ...props }) => (
    <div className="input-field">
        <input {...props} />
        <Icon className="input-icon" />
    </div>
);

export { InputWithIcon };
