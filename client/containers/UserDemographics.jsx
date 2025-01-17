import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import UserDemographicsCMPT from '../components/UserDemographicsCMPT';

const mapStateToProps = store => ({
  clicks: store.test.clicks,
  test: store.test.test,
  apiStatus: store.test.apiStatus,
  dropDowns: store.userData.dropDowns,
  userData: store.userData.userData,
  dates: store.userData.dates,
});

const mapDispatchToProps = dispatch => ({
  showClicks: () => dispatch(actions.showClicks()),
  fetchTest: () => dispatch(actions.fetchTest()),
  handleChange: (event) => dispatch(actions.handleChange(event)),
  handleChangeDeploy: () => dispatch(actions.handleChangeDeploy(event)),
  setDate: () => dispatch(actions.setDate()),
  handleChangeTwo: (event) => dispatch(actions.handleChangeTwo(event)),
  storeDemoData: (userData) => dispatch(actions.storeDemoData(userData)),
  //fetch LTVR
  //post demo data

});

class UserDemographics extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this);
  }
  componentDidMount() {
    this.props.fetchTest();
    this.props.setDate();
  }


  submit (e) {
    this.props.storeDemoData(this.props.userData)
    e.preventDefault()
  }

  render () {
    return (
      <div>
        <h1>Demo Information</h1>
        <UserDemographicsCMPT 
        userData={this.props.userData}
        dates={this.props.dates}
        handleChange={this.props.handleChange}
        handleChangeTwo={this.props.handleChangeTwo}
        handleChangeDeploy={this.props.handleChangeDeploy}
        dropDowns={this.props.dropDowns}
        submit={this.submit}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDemographics);

