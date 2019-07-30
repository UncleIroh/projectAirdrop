import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import UserSubmitBtn from "./UserSubmitBTN";
import {Typography} from "@material-ui/core";
import WorkingMemoryQuestionDisplay from "./WorkingMemoryQuestionDisplay";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  formControl: {
    margin: theme.spacing(3),
  },
  group: {
    margin: theme.spacing(1, 0),
    display: 'inline-table',
  },
}));

const ImageRecognitionQuestionDisplay = props => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Typography>
          {props.question}
        </Typography>
      </div>
      <div className={classes.root}>
        <FormControl component={"fieldset"} className={classes.formControl}>
          <FormLabel component={"legend"}>
            <RadioGroup className={classes.group}>
              <FormControlLabel
                value={props.choices[0]}
                control={<Radio />}
                label={props.choices[0]}
                checked={props.currentChoice === props.choices[0]}
                onChange={(e) => props.updateChoice(e, props.cid)}
                disabled={props.disabled}
              />
              <FormControlLabel
                value={props.choices[1]}
                control={<Radio />}
                label={props.choices[1]}
                checked={props.currentChoice === props.choices[1]}
                onChange={(e) => props.updateChoice(e, props.cid)}
                disabled={props.disabled}
              />
            </RadioGroup>
          </FormLabel>
        </FormControl>
      </div>
      <UserSubmitBtn submitted={props.submitted} onSubmit={props.onSubmit}/>
      <Typography className={classes.root} color={"secondary"}>
        {props.submitError}
      </Typography>
    </div>
  )
};

export default ImageRecognitionQuestionDisplay
