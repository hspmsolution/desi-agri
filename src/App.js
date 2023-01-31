// routes
import Router from './routes';
// theme
import ThemeProvider from './admin/theme';
// components
import ScrollToTop from './admin/components/scroll-to-top';
import { StyledChart } from './admin/components/chart';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <StyledChart />
      <Router />
    </ThemeProvider>
  );
}
