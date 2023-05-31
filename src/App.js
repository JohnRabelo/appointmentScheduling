import {Routes, Route} from "react-router-dom"
import Bookpg from "./pages/Book";
import ThankYouPg from './pages/ThankYou';


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Bookpg/>} />
        <Route path='/thankyou' element={<ThankYouPg/>} />
      </Routes>
    </div>
  );
}

export default App;


