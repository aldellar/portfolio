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

import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

/**
 * @return {object} JSX component
 */
function TopBar() {
  return (
    <AppBar position="static">
      <Typography>Andrew Dell'Aringa Personal Website</Typography>
    </AppBar>
  );
}

export default TopBar;
