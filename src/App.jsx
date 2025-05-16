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
import Grid from '@mui/material/Grid';

import TopBar from './TopBar';
import NavBar from './NavBar';
import Content from './Content';

/**
 * @return {object} JSX component
 */
function App() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <TopBar />
      </Grid>
      <Grid item sm={2} sx={{display: {xs: 'none', sm: 'inline'}}}>
        <NavBar />
      </Grid>
      <Grid item xs={12} sm={10}>
        <Content />
      </Grid>
    </Grid>
  );
}

export default App;
