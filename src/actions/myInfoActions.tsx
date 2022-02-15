import { IMyInfoAction } from '../reducers/myInfoReducer';

const emptyAllInfoData = (): IMyInfoAction => {
  return {
    type: 'EMPTY',
  };
};

const reloadInfoData = (): IMyInfoAction => {
  return {
    type: 'RELOAD',
  };
};

export { emptyAllInfoData, reloadInfoData };
