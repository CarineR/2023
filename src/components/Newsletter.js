import React from 'react';
import { Box, Button, OutlinedInput } from '@mui/material';

/* eslint-disable jsx-a11y/label-has-associated-control */
const Honeypot = () => (
  <Box
    className="field-shift"
    aria-label="Please leave the following three fields empty"
    aria-hidden="true"
    sx={{ position: 'absolute', left: -9999 }}
  >
    <label htmlFor="b_name">Name: </label>
    <input type="text" name="b_name" tabIndex="-1" value="" placeholder="Bob" id="b_name" />

    <label htmlFor="b_email">Email: </label>
    <input type="email" name="b_email" tabIndex="-1" value="" placeholder="votreadresse@gmail.com" id="b_email" />

    <label htmlFor="b_comment">Comment: </label>
    <textarea name="b_comment" tabIndex="-1" placeholder="Please comment" id="b_comment" />
  </Box>
);
/* eslint-enable */

const nullObj = {};

const SubmitButton = React.forwardRef(({ label = 'Ok', ...props }, ref) => ((
  <Button
    variant="outlined"
    type="submit"
    name="submit"
    size="small"
    sx={{ minWidth: 0, py: 1, px: 2 }}
    ref={ref}
    {...props}
  >
    {label}
  </Button>
)));

SubmitButton.displayName = 'SubmitButton';

const Newsletter = ({
  label = 'Inscrivez-vous à la newsletter',
  inputProps = nullObj,
  labelProps = nullObj,
  submitProps = nullObj,
  ...props
}) => (
  <Box
    component="form"
    action="https://sudweb.us10.list-manage.com/subscribe/post"
    method="POST"
    {...props}
  >
    <input type="hidden" name="u" value="97ca8fd39c2ce2d39c235b3a2" />
    <input type="hidden" name="id" value="e528f83f39" />

    <Honeypot />

    <Box component="label" htmlFor="MERGE0" {...labelProps}>
      {label}
    </Box>

    <OutlinedInput
      placeholder="votre@adresse.email"
      type="email"
      name="MERGE0"
      id="MERGE0"
      size="small"
      inputProps={{
        autoCapitalize: 'off',
        autoCorrect: 'off',
      }}
      sx={{ pr: 0.25 }}
      fullWidth
      endAdornment={<SubmitButton {...submitProps} />}
      {...inputProps}
    />
  </Box>
);

export default Newsletter;
