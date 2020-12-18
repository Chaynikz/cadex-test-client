import { connect } from 'react-redux';

import ErrorComponent from './ErrorComponent';
import Loadbar from './Loadbar';
import ThreeScene from './ThreeScene';

const ThreeContainer = ({ threeData }) => {

    const { data, error, isFetching } = threeData;

    const renderTemplate = () => {

        if (error) {
            return (
                <div className="three-wrapper">
                    <ErrorComponent err={error} />
                </div>
            );
        }

        if (isFetching) {
            return (
                <div className="three-wrapper">
                    <Loadbar />
                </div>
            );
        }

        if (data) {
            return <ThreeScene threeData={threeData} />;
        }

        return <div className="three-wrapper"> . . . </div>;
        
    };

    return <>
        {renderTemplate()}
    </>;
}



/* react-redux */
const mapStateToProps = store => ({
    threeData: store.threeData
});

export default connect(
    mapStateToProps
)(ThreeContainer);