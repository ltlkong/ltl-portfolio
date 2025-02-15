import emptyObj from "../utils/emptyObj";
import myPic from "../assets/imgs/mypic.jpeg";

type MyInfoActionTypes = "GET" | "EMPTY" | "RELOAD";

export interface IMyInfoAction {
  type: MyInfoActionTypes;
}

const basicInfo = {
  name: "Tielin Li",
  emails: ["tielinli@yahoo.com"],
  introShort: `Hey, I'm **Tielin Li**. An experienced Full-Stack developer. Let's create something great!!`,
  employeeStatus: {
    title: "CS student",
    company: {
      name: "The University of British Columbia",
      link: "https://www.ubc.ca",
    },
  },
  aboutMe: `Highly motivated software developer with 2 years of experience in the lottery industry, specializing in developing and maintaining complex web and mobile applications using React and Java.  `,
  myPicture: myPic,
};

const career = [
  {
    title: "Software Developer student",

    company: {
      name: "College",
      link: "https://mitt.ca",
      city: "Winnipeg",
      province: "Manitoba",
    },
    start: "9/20/2020",
    end: "8/20/2021",
    description: null,
  },
  {
    title: "Web Developer",
    company: {
      name: "Rally the Locals",
      link: "https://www.rallythelocals.com",
      city: "Winnipeg",
      province: "Manitoba",
    },
    start: "6/20/2021",
    end: "8/20/2021",
    description: null,
  },
  {
    title: "Application Developer",
    company: {
      name: "Pollard Banknote Ltd.",
      link: "https://www.pollardbanknote.com",
      city: "Winnipeg",
      province: "Manitoba",
    },
    start: "1/10/2022",
    end: "6/10/2024",
    description: null,
  },
  {
    title: "CS student",
    company: {
      name: "The University of British Columbia",
      link: "https://www.ubc.ca",
      city: "Kelowna",
      province: "British Columbia",
    },
    start: "9/1/2024",
    end: null,
    description: null,
  },
];

const socialAccounts = {
  github: {
    icon: "fa-brands fa-github",
    link: "https://github.com/ltlkong",
  },
  linkedin: {
    icon: "fa-brands fa-linkedin",
    link: "https://www.linkedin.com/in/tielin-li-a3335820b/",
  },
  instagram: {
    icon: "fa-brands fa-instagram",
    link: "https://www.instagram.com/tielin_li/?hl=en",
  },
  wechat: {
    icon: "fa-brands fa-weixin",
    link: "",
  },
  bilibili: {
    icon: "fa-brands fa-bilibili",
    link: "https://space.bilibili.com/19474186?from=search&seid=567741156219813303&spm_id_from=333.337.0.0",
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
    case "GET":
      return state;
    case "EMPTY":
      return emptyObj(state);
    case "RELOAD":
      return initialState;
    default:
      return state;
  }
};

export default myInfoReducer;

export type MyInfo = ReturnType<typeof myInfoReducer>;
