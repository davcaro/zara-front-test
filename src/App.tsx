import { AppProvider } from './providers/app';
import { Layout } from './components/Layout';

export default function App() {
  return (
    <AppProvider>
      <Layout />
    </AppProvider>
  );
}
