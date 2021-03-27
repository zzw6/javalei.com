import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

export default () => (
  <DefaultFooter
    copyright="2021"
    links={[
      // {
      //   key: 'Ant Design Pro',
      //   title: 'Ant Design Pro',
      //   href: 'https://pro.ant.design',
      //   blankTarget: true,
      // },
      {
        key: 'github',
        title: <GithubOutlined />,
        href: 'https://github.com/zzw6',
        blankTarget: true,
      }
    ]}
  />
);
