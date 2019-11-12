import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';




class Searchbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
          filter: ""
        }
        this.handleChange = this.handleChange.bind(this);
      }
      
      handleChange = (e) => {
          console.log(e.target.value);
        const {value}= e.target;
        this.setState({

          filter: value
          
        });
        console.log(this.state);
       }



    render() {
 
        return (
            <Paper component="form" >
                <InputBase
                
                    placeholder="Search a city"
                    onChange={this.handleChange}
                    value={this.state.filter} 
                   
                />
                <IconButton type="submit" aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
        );
    }
}
export default Searchbar