import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCities } from '../redux/actions/cityaction';
import { getItineraries } from '../redux/actions/itineraryaction';
import PropTypes from 'prop-types';
import Searchbar from './Searchbar';
import Itinerary from './Itinerary'

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';


class Cities extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: "",
            click: ""

        }
        this.handleChange = this.handleChange.bind(this);
    }
    // constructor() {
    //     super();
    //     this.state = {
    //         name: '',
    //         country: '',
    //         _id: '',
    //         cities: []
    //     };
    // }

    // componentDidMount() {
    //     this.fetchcities();
    // }
    // fetchcities() {
    //     fetch('http://localhost:4000/test')
    //         .then(res => res.json())
    //         .then(data => {
    //             this.setState({ cities: data });
    //         })
    //         .catch(err => console.error(err));
    // }

    static propTypes = {
        getCities: PropTypes.func.isRequired,
        city: PropTypes.object.isRequired,
        // isAuthenticated: PropTypes.bool
    };

    componentDidMount() {
        this.props.getCities();
    }

    handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        const { value } = e.target;
        this.setState({
            filter: value
        });
    }


    render() {

        const regex = new RegExp(`^${this.state.filter}`, 'i');
        const { cities } = this.props.city;
        const { loading } = this.props.city;
        console.log(cities);
        return (
            <div className="center-align container">
                <div className="container section">
                    <h4>Cities</h4>
                    <Paper component="form" >
                        <InputBase
                            placeholder="Search a city"
                            onChange={this.handleChange}
                            value={this.state.filter}
                        />
                        <IconButton aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>

                </div>
                {loading ? (
                    <CircularProgress />
                ) : (
                        <div className="container">
                            <div>
                                {
                                    cities.filter(n => regex.test(n.name)).map(cities => {
                                        return (
                                            <div key={cities._id} className="card-panel white">
                                                <h5 > {cities.name}</h5>
                                                <Itinerary name={cities.name} />
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    )}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    city: state.city,
    // isAuthenticated: state.auth.isAuthenticated
});



export default connect(
    mapStateToProps,
    { getCities, getItineraries }
)(Cities);