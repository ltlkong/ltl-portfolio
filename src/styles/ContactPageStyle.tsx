import { Theme } from './themePrimary';

const styles = (theme: Theme) => ({
  Bookmark: {
    background: theme.backgroundContact,
  },
  Contact: {
    background: theme.backgroundContact,

    '& section': {
      minHeight: '100vh',
    },
  },
  Footer: {
    background: theme.backgroundContact,
  },
});

export default styles;
