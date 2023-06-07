import {Routes, Route} from "react-router-dom"
import Bookpg from "./pages/Book";
import Appointment from "./pages/MyAppointments";
import ThankYouPg from './pages/ThankYou';


function App() {

  return (
    <div>
      <Routes>
        <Route index element={<Bookpg/>} />
        <Route path='/appointment' element={<Appointment/>} />
        <Route path='/thankyou' element={<ThankYouPg/>} />
      </Routes>
    </div>
  );
}

export default App;


