import Main from '../components/Main';
import '../components/css/App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import { useState } from 'react';

function App() {

  const [currentUser, setCurrentUser] = useState("");

  return (
    <div className="flex flex-col lg:justify-center w-screen lg:h-screen">
      
      <Routes>
        <Route exact path="/" 
          element={<Main 
            regOrLogin="login"
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}/>}/>

        <Route exact path="/register"
          element={<Main 
            regOrLogin="register"/>}/>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
