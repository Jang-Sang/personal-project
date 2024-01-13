import { RouterProvider } from 'react-router-dom';
import router from './routes/route';
import GlobalStyles from 'styles/global.style';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme.style';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
export default App;
