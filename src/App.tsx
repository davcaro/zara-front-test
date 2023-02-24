import { AppProvider } from './providers/app';
import { Layout } from './components/Layout';
import { AppRoutes } from './routes';

export default function App() {
  return (
    <AppProvider>
      <Layout>
        <AppRoutes />
      </Layout>
    </AppProvider>
  );
}
