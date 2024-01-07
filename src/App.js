import { RouterProvider } from 'react-router-dom';

import router from './routes/route';
import GlobalStyles from 'styles/global.style';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme.style';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
export default App;
