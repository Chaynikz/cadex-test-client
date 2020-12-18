import React, { Component } from 'react';


class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }

    render() {
        if (this.state.errorInfo) {
            return <div className="error-block">Rendering error</div>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;

