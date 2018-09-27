import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProfile } from '../actions/index.js';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import Button from '@material-ui/core/Button';
import '../styles/style.css';

class Profile extends Component {
  constructor (props) {
    super (props);
    this.state= {
      profile: {
        firstName: 'Jim',
        lastName: 'Smith',
        email: 'john.smith@smith.com',
        street: 'Johnsmith dr.',
        city: 'Smithcity',
        userState: 'Bigstate',
        zipCode: '00000'
      }
    };
  }

  componentDidMount () {
    console.log('PROPS:', this.props);
    // this.setState({
    //   profile: this.props.userProfile
    // })
    this.props.getProfile();
    console.log('PROPS:', this.props);
  }

  render () {
    // const { firstName, lastName, email, street, city, zipCode } = this.props.userProfile;
    return (
      <div>
        <Link to="/EditProfile" >Edit Profile</Link>
        <ul>
            <li>
              {this.props.firstName}
            </li>
            <li>
              {this.props.lastName}
            </li>
            <li>
              {this.props.email}
            </li>
            <li>
              {this.props.street}
            </li>
            <li>
              {this.props.city}
            </li>
            <li>
              {this.props.userState}
            </li> 
            <li>
              {this.props.zipCode}
            </li>
        </ul>
      </div>
    )
  }

}

function mapStateToProps (state) {
  //whatever is returned will show up as props inside of Profile
  return {
    firstName: state.userProfile.firstName,
    lastName: state.userProfile.lastName,
    email: state.userProfile.email,
    street: state.userProfile.street,
    city: state.userProfile.city,
    userState: state.userProfile.userState,
    zipCode: state.userProfile.zipCode
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators ({getProfile: getProfile}, dispatch);
}


export default connect (mapStateToProps, mapDispatchToProps) (Profile);

  // export default connect (null, {getProfile})(Profile);

// export default Profile;

//proptypes





