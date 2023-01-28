import React ,{ useState } from 'react'
import { useContext } from 'react'
import { CircleLoader } from 'react-spinners';
import  {MainData} from '../context/Context';
import { Nav } from '../nav/Nav';
import { NotFound } from '../NotFound/NotFound';
import { Page } from '../pages/Page';
import { Shadow } from '../shadow/Shadow';
import { Side } from '../side/Side';
import { Stack } from '../stack/Stack';
import "./home.css";

export const Home = () => {
    let {data__loader,data} = useContext(MainData);
    let [slide__status,setSlide] = useState(false);

    let change__state = _ => {
       slide__status ? setSlide(false) : setSlide(true);
    }
    
    { return data__loader.length > 0 ? <>
    <Nav status = {change__state}  slide__status = {slide__status} hidder={true}/>
    <div className='grid'>
        <Side status={slide__status} setSlide = {setSlide}/>
        {data.length > 1 ? <><Stack/><Shadow/><Page/></> :<NotFound/>}
     </div> 
    </> : <div className='loader'><CircleLoader size={100} className='Loading' color="#ffd32a" /></div>}
}
