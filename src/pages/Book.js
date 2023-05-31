import NewForm from '../components/NewForm'
import bkNow from '../assets/bookNow1.jpg'
import bkNow2 from '../assets/bookNow2.jpg'
import bookcl from './Book.module.css'
import {useNavigate} from 'react-router-dom'



function Bookpg (){

    const history = useNavigate();

    function addEnteredInputsHandler(enteredInputs){
        fetch('https://schedule-6a0b0-default-rtdb.firebaseio.com/schd.json', 
        {
            method: 'POST',
            body: JSON.stringify(enteredInputs),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(()=>{
            history('/thankyou')
          });
    }

    return(
        <div className={bookcl.allCont}>
            <div className={bookcl.bannerCont}>
                <img src={bkNow} alt=''/>
                <div className={bookcl.bookCont}>
                    <p>Select a date</p>
                    <input type='date' name='chooseDate' />
                    <p>Pick a time</p>
                    <input type='time' name='chooseTime' />
                    <p>Doctor specialties</p>
                    <select name='doctors'>
                        <option>Choose one</option>
                        <option>Internal medicine</option>
                        <option>Urology</option>
                        <option>Obstetrics and gynaecology</option>
                        <option>Neurology</option>
                        <option>Family medicine</option>
                        <option>Dermatology</option>
                        <option>Gastroenterology</option>
                        <option>Ophthalmology</option>
                        <option>Pediatrics</option>
                        <option>Cardiology</option>
                        <option>Pathology</option>
                    </select>

                    <button>Submit</button>
                </div>
            </div>

            <div className={bookcl.bannerCont}>
                <img src={bkNow2} alt=''/>
            </div>
        </div>
    );
}

export default Bookpg;