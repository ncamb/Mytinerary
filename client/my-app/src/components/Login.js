import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { login } from '../redux/actions/useraction';
import { googleacount } from '../redux/actions/useraction';

import { clearErrors } from '../redux/actions//erroraction';
import { Redirect } from 'react-router-dom'

import GoogleLogin from 'react-google-login';


class loginwind extends Component {
    constructor() {
        super()
        this.state = {
            redirect: false,
            username: "",
            password: "",
            msg: null

        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.id);
        const { value } = e.target;
        const name = e.target.id;
        this.setState({
            [name]: value
        });
    }

    onSubmit = e => {
        e.preventDefault();
        const { username, password } = this.state;
        console.log(username, password)
        if (!username || !password) {
            console.log('completar');
            window.M.toast({ html: 'complete all fields', classes: "red accent-4" });

        }
        else {
            const User = {
                username,
                password
            };

            this.props.login(User)
            this.setState({ redirect: true });

        }
    };
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }

    responseGoogle = (response) => {
        console.log(response.profileObj);
        const user = response.profileObj;
        const username = user.name;
        const Firtsname = user.givenName;
        const lastname = user.familyName;
        const email = user.email;
        const imgurl = user.imageUrl;
        const password = user.googleId;
        const newUser = {
            username,
            Firtsname,
            lastname,
            email,
            imgurl,
            password,

        }
        console.log(newUser);
        this.props.googleacount(newUser);
        this.setState({ redirect: true });
    }

    render() {
        return (

            <div className=" section " >
                {this.renderRedirect()}
                <Paper className=" section center-align container">
                    <Typography variant="h5">Log in</Typography>

                    <form autoComplete="on" className=" section center-align container" onSubmit={this.onSubmit}>
                        <div className="input-field">
                            <input id="username" type="text" className="validate" onChange={this.handleChange} value={this.state.id} />
                            <label htmlFor="username">User name</label>
                        </div>
                        <div className="input-field">
                            <input id="password" type="text" className="validate" onChange={this.handleChange} value={this.state.id} />
                            <label htmlFor="password">password</label>
                        </div>


                        <div className=" section center-align container">
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                value="Submit"
                                endIcon={<Icon>person</Icon>}
                            >
                                Log in
                        </Button>

                        </div>

                    </form >

                    <GoogleLogin
                        clientId="219780341816-fjth86optlo6ne60gjrv3smecn870207.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                    />

                </Paper >
            </div >
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.user.isAuthenticated,
    // error: state.error
});

export default connect(
    mapStateToProps,
    { login, clearErrors, googleacount }
)(loginwind);


