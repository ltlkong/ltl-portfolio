import { IMyInfoAction } from '../reducers/myInfoReducer';

const emptyAllInfoData = (): IMyInfoAction => {
  return {
    type: 'EMPTY',
  };
};

export { emptyAllInfoData };
