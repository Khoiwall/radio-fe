import react from 'react';
import Container from '@mui/material/Container';
import '../../asset/css/LoginLogout.css'
import { Link } from 'react-router-dom'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {userAction} from '../../redux/actions/user';
import { useHistory } from "react-router-dom";
import {Endpoints} from '../../api/Endpoints';

function SignInComponent() {
    const dispatch = useDispatch();
    let history = useHistory();
    
    const submit = async (e: any) => {
        e.preventDefault();
        if(e.target.password.value !== e.target.comfirmPassword.value){
            alert("Password and confirm password do not match !!!!");
        }else{
            const user = {
                email: e.target.email.value,
                userName: e.target.userName.value,
                password: e.target.password.value
            }
            await axios.post(`${Endpoints}/api/user/register`,user)
                .then((res)=>{
                    if (res.data.userCreated === true){
                        alert(res.data.message);
                    }else{
                        localStorage.setItem('accessToken', res.data.accessToken);
                        dispatch(userAction('login', {
                            user: res.data.user,
                            avatar: res.data.avatar,
                            blance: res.data.blance
                        }));
                        history.push("/");
                    }
                })
                .catch(err=>{console.log(err)})
        }
    }

    return (
        <Container maxWidth="sm" className="sign__padding_top">
            <form className="sign__form" onSubmit={submit}>
                <div className="sign__form_title">
                    <Link to="/">
                        <span className="sign__icon">
                            <LibraryMusicIcon/>
                        </span>
                        <span className="sign__title">Pirex Radio</span>
                    </Link>
                </div>
                <TextField id="email" label="Email" name="email" variant="outlined" className="sign__form_input" type="email"/>
                <TextField id="userName" label="UserName" name="userName" variant="outlined" className="sign__form_input"/>
                <TextField id="password" label="Password" variant="outlined" name="password" className="sign__form_input" type="password"/>
                <TextField id="comfirmPassword" label="Comfirm Password" variant="outlined" name="comfirmPassword" className="sign__form_input" type="password"/>
                <Button variant="contained" className="sign__form_button" type="submit">Sign Up</Button>
                <div className="sign__text">
                    <span>Do have an account?</span>
                    <Link to="/sign-in" className="sign__link">
                        Sign In!    
                    </Link>
                </div>
            </form>
        </Container>
    )
}

export default SignInComponent;