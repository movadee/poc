import { SxProps } from '@mui/system';

const mainContainer: SxProps = {
  minWidth: { desktop: '380px' },
  width: {
    desktop: '50%',
    mobile: '100%',
  },
  '& .MuiTypography-body1': {
    color: 'secondary.light',
    marginTop: '3px',
  },
};


const pillarWrapper: SxProps = {
  display: 'flex',
  flexDirection: 'row',
  gap: '15%',
  marginTop: '16px',
};


const pillar: SxProps = {
  display: 'flex',
  flexDirection: 'column',
};


export default {
  mainContainer,
  pillarWrapper,
  pillar,
};
