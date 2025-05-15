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
import Typography from '@mui/material/Typography';
import {LoremIpsum} from 'react-lorem-ipsum';

/**
 * @return {object} JSX component
 */
function Content() {
  return (
    <Typography>
      <LoremIpsum p={8} />
    </Typography>
  );
}

export default Content;
