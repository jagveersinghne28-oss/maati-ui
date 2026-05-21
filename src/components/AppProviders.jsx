import { Provider } from 'react-redux';
import { ConfigProvider, App as AntApp } from 'antd';
import { store } from '../store';

const theme = {
  token: {
    colorPrimary: '#1C1C1C',
    colorBgBase: '#F8F5F1',
    colorTextBase: '#1C1C1C',
    colorBorder: '#EAEAEA',
    borderRadius: 2,
    fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
  },
  components: {
    Button: { primaryShadow: 'none', controlHeight: 44, fontWeight: 500 },
    Input: { controlHeight: 48, borderRadius: 0 },
    Drawer: { colorBgElevated: '#F8F5F1' },
  },
};

export default function AppProviders({ children }) {
  return (
    <Provider store={store}>
      <ConfigProvider theme={theme}>
        <AntApp>{children}</AntApp>
      </ConfigProvider>
    </Provider>
  );
}
