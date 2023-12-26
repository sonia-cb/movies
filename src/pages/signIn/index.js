import './styles.css';
import CommonLayout from '../../components/Layout/layout';
import SignInForm from '../../components/Forms/SignInForm';
import './styles.css';
const SignIn=(props)=> {
    return (
        <CommonLayout>
            <div className='centerd-div' >
                <SignInForm {...props} />
            </div>
        </CommonLayout>
    )
}

export default SignIn;