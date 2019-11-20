import React, { Component } from 'react';
import Activityimgcard from './activityimgcard';
import { connect } from 'react-redux';
import { getActivities, getActivitiesbytitle } from '../redux/actions/activityaction';



class activitiesslider extends Component {
    constructor(props) {
        super(props)

    }


    componentDidMount() {
        this.props.getActivitiesbytitle(this.props.name);
    }


    render() {
        const { activities } = this.props.activity;
        console.log(activities);
        return (
            
               <div> 
                {
                    activities.map(activity => {
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
    // isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps,
    { getActivities, getActivitiesbytitle }
)(activitiesslider); 