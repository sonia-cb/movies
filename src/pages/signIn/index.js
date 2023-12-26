import './styles.css';
import CommonLayout from '../../components/Layout/layout';
import CenteredContainer from '../../components/Container';
import SignInForm from '../../components/Forms/SignInForm';

const SignIn=(props)=> {
    return (
        <CommonLayout>
            <div style={{ display: 'flex',justifyContent: 'center', alignItems: 'center', height:'100vh' }}>
                <SignInForm {...props} />
            </div>
        </CommonLayout>
    )
}

export default SignIn;