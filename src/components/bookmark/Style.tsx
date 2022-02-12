import { Theme } from '../../styles/themePrimary';

const styles = (theme: Theme) => ({
  Bookmark: {
    composes: ' position-absolute',
    top: '0',
    left: '8vw',
    backgroundColor: theme.colorNight,
    width: '50px',
    height: '13vh',
    zIndex: 100,

    '& h1': {
      fontSize: '35px',
      position: 'absolute',
      bottom: 0,
      textAlign: 'center',
      width: '100%',
      marginBottom: '2vh',
      color: 'transparent',
      backgroundClip: 'text',
    },
  },
});

export default styles;
