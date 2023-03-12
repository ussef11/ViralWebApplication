import "./pages.css"
import useFetch from "../Hook/UseFetch";
import { useParams } from 'react-router-dom';

const Pages = () => {
    const {id} = useParams()


    const {Data} = useFetch(`https://viral-web-application-pl3j.vercel.app/getContentbyid/${id}`)
    return ( 

        <>
         {Data && Data.map((art)=>( 
        <div class="wrapper">
        <div style={{textAlign:"center"}}>    <h1>{art.title}   </h1> </div> 
  <div class="scroll-indicator"></div>
  <div class="content-wrapper">
    <div class="contenta">
      
    
      <div class="words">
       
 <p>
     {art.content}    
</p>      
       
       
      </div>
     
      
      <div class="author">
        {art.creator}
        <div class="image"></div>
      </div>
     
    </div>
  </div>


</div>
        ))} 
        </>
     );
}
 
export default Pages;
