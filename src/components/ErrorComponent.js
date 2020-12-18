import React from 'react';

const ErrorComponent = ({ err }) => {

    return <div className="error-block">
        <p>Во время запроса произошла ошибка</p>
        <p>{err.name}: {err.message}</p>
    </div>;
};

export default ErrorComponent;
