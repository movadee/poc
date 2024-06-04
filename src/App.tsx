import React from 'react';
import { Box, Card, Grid, Rating, Typography } from '@mui/material';
import styles from './styles';
import {Theme} from './theme';
import { Experimental_CssVarsProvider as ThemeVarProvider } from '@mui/material/styles';



export default function App() {
  return (
    <ThemeVarProvider theme={Theme}>
    <Grid sx={styles.mainContainer}>
      <Card sx={{minWidth: '950px'}}>
        <Typography variant='h3'>Gregs Deli and Cafe</Typography>
        <Typography variant='body1'>Restaurant</Typography>
        <Box sx={styles.pillarWrapper}>
          <Box sx={styles.pillar}>
            <Typography variant='h3'>Eating places</Typography>
            <Typography variant='body1'>Business sub-type</Typography>
          </Box>
            <Box sx={styles.pillar}>
              <Typography variant='h3'>Sandwich shop</Typography>
              <Typography variant='body1'>Specialization</Typography>
            </Box>
            <Box sx={styles.pillar}>
              <Typography variant='h3'>Moderate</Typography>
              <Typography variant='body1'>Price level</Typography>
            </Box>
            <Box sx={styles.pillar}>
              <Typography variant='h3'>4.0</Typography> <Rating name="read-only" value={4} readOnly></Rating>
              <Typography variant='body1'>Average rating</Typography>
            </Box>
        </Box>
      </Card>
    </Grid>
    </ThemeVarProvider>
  );
}
