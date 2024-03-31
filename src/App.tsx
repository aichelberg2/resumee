import './App.css';
import SplineRender from './components/SplineRender';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { I18nextProvider } from 'react-i18next';
import i18n from './locale/i18n';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className='resumee'>
        <SplineRender />
        <Header />
        <Sidebar />
      </div>
    </I18nextProvider>
  );
}

export default App;