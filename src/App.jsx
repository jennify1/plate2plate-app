import './App.css'
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { CommunityPage } from './pages/CommunityPage';
import { DonationsPage } from './pages/DonationsPage';
import { Routes, Route} from 'react-router-dom';
import { SharingPage } from './pages/SharingPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      {/* <Route path="/home" element={<HomePage />} /> */}
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/donations" element={<DonationsPage />} />
      {/* <Route path="/notifications" element={<NotificationsPage />} /> */}
      <Route path="/sharing" element={<SharingPage />} />
    </Routes>

  )
}

export default App
