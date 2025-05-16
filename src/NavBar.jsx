/*
#######################################################################
#
# Copyright (C) 2020-2025 David C. Harrison. All right reserved.
#
# You may not use, distribute, publish, or modify this code without
# the express written permission of the copyright holder.
#
#######################################################################
*/

import {Fragment} from 'react';
import Typography from '@mui/material/Typography';

/**
 * @return {object} JSX component
 */
function NavBar() {
  return (
    <Fragment>
      <Typography>Item #1</Typography>
      <Typography>Item #2</Typography>
      <Typography>Item #3</Typography>
      <Typography>Item #4</Typography>
      <Typography>Item #5</Typography>
      <Typography>Item #6</Typography>
    </Fragment>
  );
}

export default NavBar;
