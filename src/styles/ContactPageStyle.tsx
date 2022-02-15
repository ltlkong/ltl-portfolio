import { Theme } from './themePrimary';
import generateGradient from '../utils/generateGradient';

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
  ContactForm: {
    padding: '40px',
    background: generateGradient(),
    '& button': {
      color: theme.textColorPrimary,
    },
  },
});

export default styles;
