import Main from '../components/Main';
import '../components/css/App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import Channels from '../components/Channels';

function App() {
  return (
    <div className="flex flex-col justify-center w-screen h-screen">
      
      <Routes>
        <Route exact path="/" 
          element={<Main 
            regOrLogin="login"/>}/>

        <Route exact path="/register"
          element={<Main 
            regOrLogin="register"/>}/>

        <Route exact path="/channels"
          element={<Channels />}/>

      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
