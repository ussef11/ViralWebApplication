import './home.css'
import from "../Hook/UseFetch"
import React from 'react'
const Home = () => {


const {Data:blog}  = usefetch("https://viral-web-application-pl3j.vercel.app/getAllArticles")


    return ( 
        <>
      <div className="support-grid"></div>

<div className="band">
  <div className="item-1">
        <a href={`http://localhost:3000/pages/1`} className="card">
          <div  style={{backgroundImage:`url(  https://img.freepik.com/free-photo/people-taking-part-business-event_23-2149346666.jpg?t=st=1678496126~exp=1678496726~hmac=063925156b10d7307fb1b3b996e7b97c582193b6d2c91b2f543185eba7724fb6)`}} className="thumb"></div>
          <article>
            <h1>The Challenge of Formulating Business Intelligence Strategy  </h1>
            <span>
           
            </span>
          </article>
        </a>
  </div>
{ 
 blog && blog.map((art)=>(
<div className="item-2">
        <a href={`http://localhost:3000/pages/${art.id_articles}`} className="card">
          <div style={{backgroundImage:`url(${art.articleimg})`}} className="thumb"></div>
          <article>
            <h1>{art.title}</h1>
            <span>{art.creator}</span>
          </article>
        </a>
  </div>

 ))

}


</div>
        </>
     );
}
 
export default Home;
