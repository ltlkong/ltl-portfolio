import { Theme } from './themePrimary';
import meW from '../assets/imgs/meW.png';

const styles = (theme: Theme) => ({
  Home: {
    background: theme.backgroundHome,
    color: theme.textColorPrimary,

    '& *::selection': {
      color: theme.colorPrimary,
      backgroundColor: theme.textColorPrimary,
    },

    '& section': {
      minHeight: '100vh',
      padding: '1px',
    },
  },
  Bookmark: {
    '& h1': {
      background: theme.backgroundHome,
    },
  },
  Footer: {
    background: theme.backgroundHome,
  },
  Banner: {
    composes: 'd-flex align-items-center position-relative',
    height: '100vh',
    zIndex: 0,

    '&:after': {
      content: '""',
      backgroundImage: `url("${meW}")`,
      backgroundSize: '23em',
      backgroundPosition: 'right bottom',
      backgroundRepeat: 'no-repeat',
      opacity: 0.7,
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: '-70px',
      right: 0,
      zIndex: -1,
    },
  },
  Introduction: {
    composes: 'col-md-6 ms-md-5 mb-5 mb-sm-4',
    lineHeight: '1.5',
    fontSize: '1.6em',
    padding: '0 16px 0 16px',
    color: theme.textColorPrimary,
    fontFamily: theme.fontFamily,
  },
  EmploymentStatus: {
    composes: 'fst-italic',
    fontSize: '.5em',
    color: 'rgb(33,53,90)',

    '& a': {
      ...theme.textMagic,
      fontStyle: 'normal',
      color: 'inherit',
      backgroundImage: 'linear-gradient(90deg, rgba(33,53,90,0.9) 100%, rgba(0,212,255,1) 100%)',
      padding: '.2em',
    },
    '& a:hover': {
      color: 'ghostwhite',
    },
  },
  About: {
    composes: 'd-flex flex-wrap justify-content-evenly p-4',
    marginTop: '10vh',
  },
  AboutMeImgContainer: {
    composes: 'col-8 col-md-4 m-auto m-md-0 d-block',
    '& img': {
      width: '100%',
    },
  },
  CareerTimeline: {
    '& a': {
      color: theme.textColorPrimary,
    },
  },
  SocialAccountsBar: {
    composes: 'animate__animated animate__fadeInUp',
    left: '3%',
    bottom: '5%',
    animationDelay: '.5s',
    '& li': {
      transition: 'transform .5s',
    },
    '& li:hover': {
      transform: 'translateY(-5px)',
    },
  },
});

export default styles;
