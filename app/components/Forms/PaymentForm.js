import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import {
  GradientDivider,
  DashDivider,
  ShadowDivider,
  InsetDivider,
} from '../Divider';

function PaymentForm() {
  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        My Training Budget
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" label="Amount" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl>
            <InputLabel htmlFor="age-simple">Per</InputLabel>
            <Select
              defaultValue={10}
              onChange={() => { }}
              inputProps={{
                name: 'age',
                id: 'age-simple',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Hour</MenuItem>
              <MenuItem value={20}>Day</MenuItem>
              <MenuItem value={30}>Course</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <GradientDivider />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Cost breakdown
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Let Edstellar handle all costs and give me a proposal"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Cost breakdown
          </Typography>
          <Grid container alignItems="center">
            <Grid item xs={12} md={9}>
              <FormControlLabel
                control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                label="Travel"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField required id="cardName" label="Amount" fullWidth />
            </Grid>
            <Grid item xs={12} md={9}>
              <FormControlLabel
                control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                label="Accomadation"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField required id="cardName" label="Amount" fullWidth />
            </Grid>
            <Grid item xs={12} md={9}>
              <FormControlLabel
                control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                label="Daily Allowance"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField required id="cardName" label="Amount" fullWidth />
            </Grid>
            <Grid item xs={12} md={9}>
              <FormControlLabel
                control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                label="Misc"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField required id="cardName" label="Amount" fullWidth />
            </Grid>
          </Grid>
          <GradientDivider />
          <Grid container justify="center">
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                label="Prefer Local candidates (Will sort local candidates first)"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default PaymentForm;
