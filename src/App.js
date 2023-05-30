import {Routes, Route} from "react-router-dom"
import Step2pg from './pages/Step2';
import ThankYouPg from './pages/ThankYou';


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Step2pg/>} />
        <Route path='/thankyou' element={<ThankYouPg/>} />
      </Routes>
    </div>
  );
}

export default App;


