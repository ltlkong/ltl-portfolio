import { Theme } from './themePrimary';

const styles = (theme: Theme) => ({
  Bookmark: {
    background: theme.colorPrimary,
  },
  Contact: {
    '& section': {
      minHeight: '100vh',
    },
  },
});

export default styles;
