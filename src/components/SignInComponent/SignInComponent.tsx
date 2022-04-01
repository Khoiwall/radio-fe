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
        const user = {
            emailOrUserName: e.target.emailOrUserName.value,
            password: e.target.password.value
        }
        await axios.post(`${Endpoints}/api/user/login`, user)
            .then((res) => {
                if (res.data.Login) {
                    localStorage.setItem('accessToken', res.data.accessToken);
                    dispatch(userAction('login', {
                        user: res.data.user,
                        avatar: res.data.avatar,
                        blance: res.data.blance
                    }));
                    history.push("/");
                }else{
                    alert(res.data.message);
                }
            })
            .catch(err => { console.log(err) })
    }

    return (
        <Container maxWidth="sm" className="sign__padding_top">
            <form className="sign__form" onSubmit={submit}>
                <div className="sign__form_title">
                    <Link to="/">
                        <span className="sign__icon">
                            <LibraryMusicIcon />
                        </span>
                        <span className="sign__title">Pirex Radio</span>
                    </Link>
                </div>
                <TextField id="emailOrUserName" label="Email or UserName" name="emailOrUserName" variant="outlined" className="sign__form_input" />
                <TextField id="password" label="Password" variant="outlined" name="password" className="sign__form_input" type="password" />
                <Button variant="contained" className="sign__form_button" type="submit">Sign In</Button>
                <div className="sign__text">
                    <span>Don't have an account?</span>
                    <Link to="/sign-up" className="sign__link">
                        Sign Up!
                    </Link>
                </div>
                <div className="sign__text">
                    <Link to="/forgot-password" className="sign__link">
                        Forgot password?
                    </Link>
                </div>
            </form>
        </Container>
    )
}

export default SignInComponent;