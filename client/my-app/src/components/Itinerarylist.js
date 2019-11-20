import React, { Component } from 'react';
import { connect } from 'react-redux';
import Itineraryeach from './Itineraryeach';
import { getItineraries, getItinerariesbycity } from '../redux/actions/itineraryaction';

class Itinerarylist extends Component {
    constructor(props){
        super(props)
        
    }
    

    componentDidMount() {
        this.props.getItinerariesbycity(this.props.name);
    }
    render() {
        const { itineraries } = this.props.itinerary;
        return (
            <div>
                {
                    itineraries.map(itinerary => {
                        return (
                            <div className="section" key={itinerary._id}>
                                <Itineraryeach
                                    id={itinerary._id}
                                    name={itinerary.name}
                                    user={itinerary.username}
                                    rating={itinerary.rating}
                                    duration={itinerary.duration}
                                    price={itinerary.price}
                                    hashtags={itinerary.hashtags}
                                />
                            </div>
                        )

                    })

                }

            </div>
        );
    }
}

const mapStateToProps = state => ({
    itinerary: state.itinerary,
    // isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps,
    { getItineraries,getItinerariesbycity }
)(Itinerarylist); 