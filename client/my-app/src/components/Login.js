import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { register } from '../redux/actions/useraction';
import { Redirect } from 'react-router-dom'


class Createaccount extends Component {
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
        console.log(e.target.name);
        const { value } = e.target;
        const name = e.target.name;
        this.setState({
            [name]: value
        });
    }

    onSubmit = e => {
        e.preventDefault();
        const { username, password } = this.state;
        if (!username || !password) {
            console.log('completar');
            window.M.toast({ html: 'complete all fields', classes:"red accent-4" });

        }
        else {
            const newUser = {
                username,
                password
            };

            this.props.register(newUser)
            this.setState({ redirect: true });

        }
    };
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
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
                                endIcon={<Icon>log in</Icon>}
                            >
                                Log in
                        </Button>

                        </div>

                    </form >
                </Paper >
            </div >
        );
    }
}

const mapStateToProps = state => ({
    // isAuthenticated: state.auth.isAuthenticated,
    // error: state.error
});

export default connect(
    mapStateToProps,
    { register }
)(Createaccount);


