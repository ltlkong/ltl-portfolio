import React, { ReactElement, HTMLProps } from 'react';
import 'react-vertical-timeline-component/style.min.css';
import theme from '../../../../styles/themePrimary';
import { connect } from 'react-redux';
import { IRootState } from '../../../../store';
import VerticalBar from '../../../../components/verticalBar/index';

interface IProps extends HTMLProps<ReactElement>, ReturnType<typeof mapStateToProps> {}

const SocialAccountsBar = ({ className, socialAccounts }: IProps): ReactElement => {
  return (
    <VerticalBar.Container className={className}>
      {Object.keys(socialAccounts).map((type, key) => {
        return <VerticalBar.Item key={key} icon={socialAccounts[type].icon} link={socialAccounts[type].link} />;
      })}
    </VerticalBar.Container>
  );
};

const mapStateToProps = ({ myInfo: { socialAccounts } }: IRootState) => ({
  socialAccounts,
});

export default connect(mapStateToProps)(SocialAccountsBar);
