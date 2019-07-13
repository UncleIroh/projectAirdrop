import React from 'react';
import IRQuestion from './IRQuestionDisplay';
import SectionEndScreen from "./SectionEndScreen";

const ImageRecognitionCMPT = (props) => {
  console.log('props IR', props.IR, 'ir content', IR_content);
    const IR_content = [
      props.IR.instructions[0].instruction_text,

      <img src={props.IR.images[0].image_url}/> ,
      <IRQuestion question={props.IR.images[0].questions[0].question_text} choices={Object.values(props.IR.images[0].questions[0].choices[0])}/>,
      // [props.IR.images[0].questions[0].question_text,
      // Object.values(props.IR.images[0].questions[0].choices[0])],

      <img src={props.IR.images[1].image_url}/> ,
      <IRQuestion question={props.IR.images[1].questions[0].question_text} choices={Object.values(props.IR.images[0].questions[0].choices[0])}/>,
      // [props.IR.images[1].questions[0].question_text,
      //   Object.values(props.IR.images[1].questions[0].choices[0])],

      props.IR.instructions[1].instruction_text,
      <img src={props.IR.images[2].image_url}/> ,
      <IRQuestion question={props.IR.images[2].questions[0].question_text} choices={Object.values(props.IR.images[0].questions[0].choices[0])}/>,
      // [props.IR.images[2].questions[0].question_text,
      //   Object.values(props.IR.images[2].questions[0].choices[0])],

      <img src={props.IR.images[3].image_url}/> ,
      <IRQuestion question={props.IR.images[3].questions[0].question_text} choices={Object.values(props.IR.images[0].questions[0].choices[0])}/>,
      // [props.IR.images[3].questions[0].question_text,
      //   Object.values(props.IR.images[3].questions[0].choices[0])],

      <img src={props.IR.images[4].image_url}/> ,
      <IRQuestion question={props.IR.images[4].questions[0].question_text} choices={Object.values(props.IR.images[0].questions[0].choices[0])}/>,
      // [props.IR.images[4].questions[0].question_text,
      //   Object.values(props.IR.images[4].questions[0].choices[0])],

      <img src={props.IR.images[5].image_url}/> ,
      <IRQuestion question={props.IR.images[5].questions[0].question_text} choices={Object.values(props.IR.images[0].questions[0].choices[0])}/>,
      // [props.IR.images[5].questions[0].question_text,
      //   Object.values(props.IR.images[5].questions[0].choices[0])],

      <img src={props.IR.images[6].image_url}/> ,
      <IRQuestion question={props.IR.images[6].questions[0].question_text} choices={Object.values(props.IR.images[0].questions[0].choices[0])}/>,
      // [props.IR.images[6].questions[0].question_text,
      //   Object.values(props.IR.images[6].questions[0].choices[0])],

      <SectionEndScreen changeSection={props.changeSection}/>

    ];

  let currentBTN;
  if (props.currentSlide === 0) {
    currentBTN = <button onClick={props.startPractice}>Start Practice</button>
  } else if (props.currentSlide === 5) {
    currentBTN = <button onClick={props.startTest}>Start Test</button>
  }

  return (

    <div>
      {IR_content[props.currentSlide]}
      {currentBTN}
    </div>
  )
};

export default ImageRecognitionCMPT;
