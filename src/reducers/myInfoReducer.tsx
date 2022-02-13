import emptyObj from '../utils/emptyObj';

type MyInfoActionTypes = 'GET' | 'EMPTY';

export interface IMyInfoAction {
  type: MyInfoActionTypes;
}

const basicInfo = {
  name: 'Tielin Li',
  emails: ['tielinli@yahoo.com'],
  introShort: `Hey, I'm **Tielin Li**. I'm a **programmer** working on Full-Stack development.`,
  employeeStatus: {
    title: 'Application developer',
    company: {
      name: 'Pollard Banknote Ltd.',
      link: 'https://www.pollardbanknote.com',
    },
  },
  aboutMe: `Currently, I'm an Application developer working on the lottery app and web development at Pollard Banknote Ltd. Previously, I did internship at Rally the Locals as a web developer.`,
  myPicture:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRfUJotBDs2jTiNGiShQ9DFQ3oF2R0X0EZjjlHeYBr7ZI27ik0YyNhl1bCPwznqdOwWms&usqp=CAU',
};

const career = [
  {
    title: 'Software Developer student',

    company: {
      name: 'College',
      link: '',
      city: 'Winnipeg',
      province: 'Manitoba',
    },
    start: '9/20/2020',
    end: '8/20/2021',
    description: null,
  },
  {
    title: 'Web Developer',
    company: {
      name: 'Rally the Locals',
      link: '',
      city: 'Winnipeg',
      province: 'Manitoba',
    },
    start: '6/20/2021',
    end: '8/20/2021',
    description: null,
  },
  {
    title: 'Application Developer',
    company: {
      name: 'Pollard Banknote Ltd.',
      link: 'https://www.pollardbanknote.com',
      city: 'Winnipeg',
      province: 'Manitoba',
    },
    start: '1/10/2022',
    end: null,
    description: null,
  },
];

const socialAccounts = {
  github: {
    icon: 'fa-brands fa-github',
    link: 'https://github.com/ltlkong',
  },
  linkedin: {
    icon: 'fa-brands fa-linkedin',
    link: '',
  },
  instagram: {
    icon: 'fa-brands fa-instagram',
    link: 'https://www.instagram.com/tielin_li/?hl=en',
  },
  wechat: {
    icon: 'fa-brands fa-weixin',
    link: '',
  },
  bilibili: {
    icon: 'fa-brands fa-bilibili',
    link: 'https://space.bilibili.com/19474186?from=search&seid=567741156219813303&spm_id_from=333.337.0.0',
  },
};

const initialState = {
  basicInfo,
  career,
  socialAccounts,
};

const myInfoReducer = (state = initialState, action: IMyInfoAction) => {
  const { type } = action;

  switch (type) {
    case 'GET':
      return state;
    case 'EMPTY':
      return emptyObj(state);
    default:
      return state;
  }
};

export default myInfoReducer;

export type MyInfo = ReturnType<typeof myInfoReducer>;
