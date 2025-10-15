import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App.tsx';
import { Header } from './components/Header.tsx';
import { SidebarMenu } from './components/SidebarMenu.tsx';
import { PageTitle } from './components/PageTitle.tsx';
import { TracksList } from './components/TracksList.tsx';
import { TrackDetail } from './components/TrackDetail.tsx';
import { Footer } from './components/Footer.tsx';

const rootEl = document.getElementById('root');
const reactRoot = createRoot(rootEl!);

reactRoot.render(<MainPage />);

function MainPage() {
  return (
    <div>
      <Header />
      <SidebarMenu />
      <PageTitle />
      <div style={{ display: 'flex' }}>
        <TracksList />
        <TrackDetail />
      </div>
      <Footer />
    </div>
  );
}
