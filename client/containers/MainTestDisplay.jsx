import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import UserDemographics from './UserDemographics.jsx';
import LongTermVerbalRecallDisplayCMPT from '../components/LongTermVerbalRecallDisplayCMPT.jsx';
import LongTermVerbalRecallResponseCMPT from '../components/LongTermVerbalRecallResponseCMPT.jsx'
import VisualProcessingSpeed from './VisualProcessingSpeed.jsx';
<<<<<<< HEAD
import WorkingMemory from './WorkingMemory.jsx';
import ImageRecognition from './ImageRecognition.jsx';
import Questionnaires from '../components/QuestionnairesCMPT.jsx';
=======
import WorkingMemory from '../components/WorkingMemoryCMPT.jsx';
import ImageRecognition from '../components/ImageRecognitionCMPT.jsx';
// import Questionnaires from '../components/QuestionnairesCMPT.jsx';
>>>>>>> 4de97dd2421a7b6aaac6ba7b3e40936b836fc099
import SectionEndScreen from '../components/SectionEndScreen.jsx';
import QuestionnaireCont from './../containers/QuestionnaireCont.jsx';

const mapStateToProps = store => ({
//test
  test: store.test.test,
  currentSection: store.test.currentSection,
  currentSlide: store.test.currentSlide,
  vpsAnswers: store.test.vpsAnswers,
//question
//answer
//input
//currentSlide
});

const mapDispatchToProps = dispatch => ({
  changeSection: () => dispatch(actions.changeSection()),
  changeSlide: () => dispatch(actions.changeSlide()),
  buildVPSAnswers: () => dispatch(actions.buildVPSAnswers()),
  fetchTest: () => dispatch(actions.fetchTest()),
//fetch tests except LTVR
//next
//submit
//update input
//post section
});

class MainTestDisplay extends Component {
  constructor(props){
    super(props);
    this.changeSection = this.props.changeSection.bind(this);
    this.buildVPSAnswers = this.props.buildVPSAnswers.bind(this);
  }

  componentDidMount() {
    this.props.fetchTest();
  }

/*<VisualProcessingSpeed changeSection={this.changeSection} vpsAnswers={this.props.vpsAnswers}/>,*/
  render () {

    const compArray = [<UserDemographics changeSection={this.changeSection}/>,
      <LongTermVerbalRecallDisplayCMPT changeSection={this.changeSection} buildVPSAnswers={this.buildVPSAnswers}/>,

      <WorkingMemory WM={this.props.test[5]} changeSlide={this.props.changeSlide} currentSlide={this.props.currentSlide} changeSection={this.changeSection}/>,
      <ImageRecognition IR={this.props.test[6]} changeSlide={this.props.changeSlide} currentSlide={this.props.currentSlide} changeSection={this.changeSection}/>,
      <LongTermVerbalRecallResponseCMPT changeSection={this.changeSection}/>,
      <QuestionnaireCont test={this.props.test}/>];

    // for (let i = 0; i < compArray.length; i++) {
    //   if (i % 2 === 1) compArray.splice(i, 0, <SectionEndScreen changeSection={this.changeSection}/>)
    // }

    console.log(compArray, 'currentSection 20');

    return (
      <div>
        {this.props.test.length > 0 && compArray[this.props.currentSection]}
      </div>
    );
  }
}
// export default MainTestDisplay;
export default connect(mapStateToProps, mapDispatchToProps)(MainTestDisplay);
