import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileEntry from './ProfileEntry';
import _ from 'lodash';
import Button from '@material-ui/core/Button';
import '../styles/style.css';

class ProfileApp extends Component {
  constructor (props) {
    super (props);
    this.state= {
      profile: {
        firstName: 'John',
        lastName: 'Smith',
        email: 'john.smith@smith.com',
        street: 'Johnsmith dr.',
        city: 'Smithcity',
        state: 'Bigstate',
        zipCode: '00000'
      }
    };
  }

  render () {
    return (
      <div>
        <Button >Edit Profile</Button>
        <ul>
          _.mapValues(this.props.state.profile, (value, key) => {
            return <ProfileEntry profileKey={key} profileValue={value} />        
          })
        </ul>
      </div>
    )
  }

}

//proptypes