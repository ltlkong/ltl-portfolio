import { Theme } from './themePrimary';

const styles = (theme: Theme) => ({
    Bookmark: {
        background: theme.backgroundHome,
    },
    Contact: {
        '& section': {
            minHeight: '100vh',
        },
    },
});

export default styles;
