import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { register } from '../redux/actions/useraction';
import { Redirect } from 'react-router-dom'

class Createaccount extends Component {
    constructor() {
        super()
        this.state = {
            redirect: false,
            username: "",
            Firtsname: "",
            lastname: "",
            email: "",
            imgurl: "",
            password: "",
            rpassword: "",
            counrty: "",
            msg: null,
            val:"validate",

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
        const { username, Firtsname, lastname, email, imgurl, password, rpassword } = this.state;
        if (!username || !password || !email || !imgurl) {
            window.M.toast({ html: 'complete all fields', classes: "red accent-4" });

        }
        else {
            console.log(password);
            console.log(rpassword);

            if (password !== rpassword){
                window.M.toast({ html: 'complete the password correctly', classes: "red accent-4" });

            }
            else{
            const newUser = {
                username,
                Firtsname,
                lastname,
                email,
                imgurl,
                password
            };



            this.props.register(newUser)
            this.setState({ redirect: true });
        }
        }

    };
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/Afterregister' />
        }
    }

    render() {
        return (

            <div className=" section " >
                {this.renderRedirect()}
                <Paper className=" section center-align container">
                    <Typography variant="h5">Create a new Account</Typography>

                    <form autoComplete="on" className=" section center-align container" onSubmit={this.onSubmit}>
                        <Grid container wrap="nowrap" spacing={4}>
                            <Grid item xs zeroMinWidth>
                                <div className="input-field">
                                    <input id="username" type="text" className="validate" onChange={this.handleChange} value={this.state.id} />
                                    <label htmlFor="username">User name</label>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container wrap="nowrap" spacing={3}>
                            <Grid item xs zeroMinWidth>
                                <div className="input-field">
                                    <input id="Firtsname" type="text" className="validate" onChange={this.handleChange} value={this.state.id} />
                                    <label htmlFor="Firtsname">Firts Name</label>
                                </div>

                            </Grid>
                        </Grid>
                        <Grid container wrap="nowrap" spacing={3}>
                            <Grid item xs zeroMinWidth>
                                <div className="input-field">
                                    <input id="lastname" type="text" className="validate" onChange={this.handleChange} value={this.state.id} />
                                    <label htmlFor="lastname">Last Name</label>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container wrap="nowrap" spacing={3}>
                            <Grid item xs zeroMinWidth>
                                <div className="input-field">
                                    <input id="email" type="text"  type="email" className="validate" onChange={this.handleChange} value={this.state.id} />
                                    <label htmlFor="email">Email</label>
                                    <span class="helper-text" data-error="wrong" data-success="right"></span>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container wrap="nowrap" spacing={4}>
                            <Grid item xs zeroMinWidth>
                                <div className="input-field">
                                    <input id="imgurl" type="text" className="validate" onChange={this.handleChange} value={this.state.id} />
                                    <label htmlFor="imgurl">Url for image</label>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container wrap="nowrap" spacing={3}>
                            <Grid item xs zeroMinWidth>
                                <div className="input-field">
                                    <input id="password" type="password" className="validate" onChange={this.handleChange} value={this.state.id} />
                                    <label htmlFor="password">password</label>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container wrap="nowrap" spacing={3}>
                            <Grid item xs zeroMinWidth>
                                <div className="input-field">
                                    <input id="rpassword"type="password" className="validate" onChange={this.handleChange} value={this.state.id} />
                                    <label htmlFor="rpassword">Repeat your password</label>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container wrap="nowrap" spacing={3}>
                            <Grid item xs zeroMinWidth>
                                <div>
                                    <select id="country">
                                        <option disabled selected value="">Country</option>
                                        <option value="England">England</option>
                                        <option value="France">France</option>
                                        <option value="Germany">Germany</option>
                                        <option value="holland">holland</option>
                                        <option value="Ireland">Ireland</option>
                                        <option value="Spain">Spain</option>
                                        <option value="United State">United State</option>


                                        

                                    </select>
                                    <label>Select a country</label>
                                </div>
                            </Grid>
                        </Grid>
                        <div className=" section center-align container">
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                value="Submit"
                                endIcon={<Icon>send</Icon>}
                            >
                                Submit
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


