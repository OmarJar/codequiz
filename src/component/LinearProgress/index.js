import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import "./index.scss"
export default function LinearDeterminate(props) {
  useEffect(() => {
  }, [props.value]);

  return (
    <Box sx={{ width: '50%' }}>
      <LinearProgress variant="determinate" value={props.value} />
    </Box>
  );
}