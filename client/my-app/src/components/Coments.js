import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import { TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';


class Coments extends Component {
    constructor() {
        super()
        this.state = {
            redirect: false,
            coment: "",

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
    onSubmit = (e) => {
        e.preventDefault();
        window.M.toast({ html: 'saved' });
        const { coment} = this.state;
        console.log(coment);
        this.setState({
        coment: "",
        });
    };
    render() {
        const { user } = this.props.imgavatar
        return (
            <div>


                {
                    this.props.isAuthenticated ? (
                        <div>
                            <form onSubmit={this.onSubmit}>

                        <Grid  container wrap="nowrap" spacing={1}>
                                <Grid item  xs={3} zeroMinWidth>
                                    <div className="  container section">
                                        <Link to="#" className="btn-floating grey dropdown-trigger" data-target="dropdown1"><Avatar alt="Remy Sharp" src={user.imgurl} >
                                        </Avatar></Link>
                                    </div>
                                   
                                </Grid>
                                <Grid  item xs={9}>
                                <div className="input-field">
                            <textarea 
                            id="coment" 
                            className="materialize-textarea" 
                            data-length="120"
                            onChange={this.handleChange} 
                            value={this.state.id}>
                            </textarea>
                            <label htmlFor="coment">Leave us a coment</label>
                        </div>
                                </Grid>
                        </Grid>
                        <Grid  container wrap="nowrap" spacing={1}>
                        <Grid  item xs={3}>
                        </Grid>
                             <Grid  item xs={9}>
                                    
                        <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        value="Submit"
                        endIcon={<Icon>message</Icon>}
                    >
                        Coment
                </Button>
                                 </Grid>
                        </Grid>
                        </form>
</div>



        ) : (
            <Typography variant="body2" gutterBottom noWrap>
                Leave a coment
                      </Typography>


        )
    }
            </div>
                    );
            }
        }


const mapStateToProps = state => ({
    isAuthenticated: state.user.isAuthenticated,
    imgavatar: state.user
});

export default connect(
    mapStateToProps,
)(Coments);