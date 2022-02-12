import { Theme } from '../../styles/themePrimary';

const styles = (theme: Theme) => ({
  Bar: {
    position: 'fixed',
    zIndex: 100,
    '& ul': {
      padding: 0,
      margin: 0,
    },
    '& li': {
      listStyle: 'none',
    },
    '& a': {
      color: theme.textColorPrimary,
      textDecoraion: 'none',
    },
  },
  Line: {
    width: '1.5px',
    height: '3em',
    marginTop: '10px',
    backgroundColor: 'black',
    transform: 'translateX(0.48em)',
  },
});

export default styles;
