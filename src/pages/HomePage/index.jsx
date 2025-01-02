import './style.css';
import { Main_page } from '../../components/Main_page/Main_page.jsx';
import { AboutUs } from '../../components/AboutUs/AboutUs.jsx';

export const HomePage = () => {
  return (
    <div className="container">
      <Main_page />
      <AboutUs />
    </div>
  );
};
