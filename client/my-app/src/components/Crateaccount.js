import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class Createaccount extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            name: "",
            email:"",
            imgurl:"",
            password:"",
            rpassword:"",


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

    render() {
        return (
            <div className=" section " >
                <Paper className=" section center-align container">
                    <Typography variant="h5">Create a new Account</Typography>

                    <form autoComplete="on" className=" section center-align container">
                        <Grid container wrap="nowrap" spacing={4}>
                            <Grid item xs zeroMinWidth>

                                <TextField
                                    name="username"
                                    label="User name"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    value={this.state.username}

                                />
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <TextField
                                    name="name"
                                    label="Name"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    value={this.state.name}
                                />
                            </Grid>
                        </Grid>
                        <Grid container wrap="nowrap" spacing={3}>
                            <Grid item xs zeroMinWidth>
                                <TextField
                                    name="email"
                                    label="Email"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    value={this.state.email}
                                />
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <TextField
                                    name="imgurl"
                                    label="Image URL"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    value={this.state.imgurl}

                                />
                            </Grid>
                        </Grid>
                        <Grid container wrap="nowrap" spacing={3}>
                            <Grid item xs zeroMinWidth>
                                <TextField
                                    name="password"
                                    label="Password"
                                    margin="normal"
                                    variant="outlined"
                                    type="password"
                                    onChange={this.handleChange}
                                    value={this.state.password}
                                />
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <TextField
                                    name="rpassword"
                                    label="repeat Password"
                                    margin="normal"
                                    variant="outlined"
                                    type="password"
                                    onChange={this.handleChange}
                                    value={this.state.rpassword}
                                />
                            </Grid>
                        </Grid>
                        <div className=" section center-align container">
                            <Button
                                variant="contained"
                                color="primary"

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
export default Createaccount
