import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar'
import {Routes, Route } from "react-router-dom";
import Home from './components/Pages/HomePage/Home'
import TimeConverter from './components/Pages/TimeConverter/TimeConverter'
import NoPage from './components/Pages/NoPage/NoPage'

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.Background}>
        <div className={styles.Container}>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="time" element={<TimeConverter />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
