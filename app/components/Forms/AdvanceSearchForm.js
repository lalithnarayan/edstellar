import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { DatePicker, KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { SelectSuggestionTags } from '../../containers/Forms/demos'


function AddressForm() {
  const selectedDate = new Date();
  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Project
      </Typography>
      <Grid container spacing={3} alignContent="center">
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Project Title"
            fullWidth
            autoComplete="fname"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Description"
            fullWidth
            autoComplete="lname"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="All course content is required in the form of course material"
          />
        </Grid>
        <Grid item xs={12}>
          <SelectSuggestionTags />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <KeyboardDatePicker
              clearable
              label="Start Date"
              value={selectedDate}
              onChange={() => { }}
              animateYearScrolling={false}
              fullWidth
            />
          </MuiPickersUtilsProvider>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <KeyboardDatePicker
              clearable
              label="End Date"
              value={selectedDate}
              onChange={() => { }}
              animateYearScrolling={false}
              fullWidth
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12} sm={6}
          style={{ display: 'flex' }}
        >
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="One day training"
          />
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default AddressForm;
