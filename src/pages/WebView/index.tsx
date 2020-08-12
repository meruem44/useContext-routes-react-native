import React, { useContext } from 'react';
import { WebView } from 'react-native-webview';
import AuthContext from '../../contexts/auth';

// import { Container } from './styles';

const WebViewPage: React.FC = () => {
  
    const { user } = useContext(AuthContext);

    return (
      <WebView

        source={{ uri: user?.html_url || '' }}
        style={{ flex: 1 }}
      />
  )
}

export default WebViewPage;