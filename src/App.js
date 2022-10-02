import Home from './Home/Home';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bollywood from './BOLLYWOOD/Bollywood';
import Navbar from './Navbar/Navbar';
import Tech from './Technology/Tech';
import Hollywood from './Hollywood/hollywood';
import Fitness from './Fitness/Fitness';
import Food from './Food/Food';
import SinglePage from './SinglePage';


function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Bollywood' element={<Bollywood />} />
            <Route path='/Tech' element={<Tech />} />
            <Route path='/Hollywood' element={<Hollywood />} />
            <Route path='/Fitness' element={<Fitness />} />
            <Route path='/Food' element={<Food />} />
            <Route path='/SinglePage' element={<SinglePage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
