import ThreeContainer from './ThreeContainer';
import Form from './Form';
import ErrorBoundary from './ErrorBoundary';

const App = () => {
    return (
        <ErrorBoundary>
            <Form />
            <ThreeContainer />
        </ErrorBoundary>
    );
}

export default App;
