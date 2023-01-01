import Main from '../components/Main';
import '../components/css/App.css';
import Footer from '../components/Footer';

function App() {
  return (
    <div className="flex flex-col justify-center w-screen h-screen">
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
