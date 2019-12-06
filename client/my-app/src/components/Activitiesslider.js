import React, { Component } from 'react';
import Activityimgcard from './activityimgcard';
import { connect } from 'react-redux';
import { getActivities, getActivitiesbytitle } from '../redux/actions/activityaction';
import axios from 'axios'



class activitiesslider extends Component {
    state = {
        activities: []
    }


    async componentDidMount() {
        let nombre = this.props.name
        const actividades = await axios(`http://localhost:4000/activities/${nombre}`)
        const activities = actividades.data
        this.setState({activities: activities})
        console.log(this.state)
    }


    render() {
        return (
            
               <div> 
                {
                    this.state.activities.map(activity => {
                        return (
                            <div  key={activity._id}>
                                <Activityimgcard
                                    name={activity.name}
                                    url={activity.img}
                                />
                            </div>
                        );
                    })
                }

            </div>
        );
    }
}
const mapStateToProps = state => ({
    activity: state.activity,
    isAuthenticated: state.user.isAuthenticated
});

export default connect(
    mapStateToProps,
    { getActivities, getActivitiesbytitle }
)(activitiesslider); 