import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import styles from './Welcome.less';

const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

export default (): React.ReactNode => {
  const intl = useIntl();
  let src = 'http://javalei.com:81' + window.location.pathname;
  let style = { width: '100%', height: '1000px' };
  console.log(window.location.pathname);

  switch (window.location.pathname) {
    case '/et':
      style = { width: '3540pt', height: '3386pt' };
      break;
      case '/t':
        style = { width: '1649px', height: '10410px' };
        break;
        case '/api':
          style = { width: '100%', height: '1580px' };
          break; 
          case '/git':
            style = { width: '100%', height: '1480px' };
            break; 
    default:
      break;
  }

  return (
    <div>
      <iframe id="zzw" scrolling="no" frameBorder="0" width="100%" src={src} style={style}></iframe>
    </div>
  );
};
