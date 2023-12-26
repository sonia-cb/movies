import './styles.css';
import CommonLayout from '../../components/Layout/layout';
import CenteredContainer from '../../components/Container';
import EmptyData from '../../components/Empty/Index';

function Empty() {
    return (
        <CommonLayout>
            <CenteredContainer>
                <EmptyData>
                </EmptyData>
            </CenteredContainer>
        </CommonLayout>
    )
}

export default Empty;