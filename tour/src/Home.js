import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import './Home.css';
import Bck from './bckgrnd.jpg'
function Home() {
   return (
      <div className='full'>
         <article className='article'>
         <h1>Travel AROUND HUBLI</h1>
         <br />
         <img className='imgg' src={Bck} alt="Logo" width='100%' ></img>
         
         <p className='para'>Hubli-Dharwad is a center spot for many tourist places of various categories. There are different types of tourists like
            Those who are interested in Historical/ Archaeological sites.
            Those who are interested in Eco-tourism which includes trekking, hiking, adventurous sports etc.,
            Those who are Spiritual in Nature
         </p>
         <p className='para'> We provide travel options that will interest all types of tourists. We have famous tourist locations and a few lesser known, but hidden gems in store.</p>
         <p className='para'>The best part is, every place is near and a round trip may take only a day.</p>
         <p className='para'>HEAD TO PLACES FOR TRAVEL OPTIONS</p>
         <br /><br /><br />
         </article>
      </div>
   )
}
export default Home;