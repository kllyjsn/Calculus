import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { Curriculum } from './pages/Curriculum';
import { Lesson } from './pages/Lesson';
import { Practice } from './pages/Practice';
import { Stats } from './pages/Stats';
import { SettingsPage } from './pages/SettingsPage';

function LessonWrapper() {
  const { day } = useParams<{ day: string }>();
  return <Lesson key={day} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/lesson/:day" element={<LessonWrapper />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
