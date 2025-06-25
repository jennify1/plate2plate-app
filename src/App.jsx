import './App.css'
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { CommunityPage } from './pages/CommunityPage';
import { DonationsPage } from './pages/DonationsPage';
import { NotificationsPage } from './pages/NotificationsPage';
import { Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/donations" element={<DonationsPage />} />
      <Route path="/notifications" element={<NotificationsPage />} />
    </Routes>

  )
}

export default App
