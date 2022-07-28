// Packages
import { Routes, Route } from 'react-router-dom';

// Components
import BGParticles from './components/bgparticles/BGParticles';
import HomePage from './components/home/HomePage';
import Sidebar from './components/sidebar/sidebar';
import AboutMe from './components/about-me/AboutMe';
import Projects from './components/my-projects/projects';
import Skills from './components/skills/skills';
import CV from './components/cv/cv';
import Contact from './components/contact/contact';
import LoginPage from './components/admin-page/LoginPage';
import AdminPage from './components/admin-page/AdminPage';
import BlogPage from './components/blog-page/BlogPage';

function App() {
  return (
    <div>
      <Sidebar />
      <BGParticles />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/curriculum-vitae' element={<CV />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/blog' element={<BlogPage />} />
      </Routes>
    </div>
  );
}

export default App;
