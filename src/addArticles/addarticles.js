import React, { useState } from "react";
import useFetch from "../Hook/UseFetch";
import "./addarticles.css"
const Addarticles = () => {

    const [title, settitle] = useState();
    const [creator, setcreator] = useState();
    const [createdate, setcreatedate] = useState();
    const [articleimg, setarticleimg] = useState();
    const [content, setcontent] = useState();
    
    const { Data:id } = useFetch("https://viral-web-application-pl3j-agyzf8hrl-ussef11.vercel.app/count");


  const submitHandler = (e) => {
    e.preventDefault();
    let idart = id+1

    var myHeaders = new Headers();
    myHeaders.append("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36");
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "articleimg": articleimg,
      "createdate":"03/11/2023",
      "title": title,
      "creator": "youssef",
      "id_articles": idart,
      "content" : content
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://viral-web-application-pl3j-agyzf8hrl-ussef11.vercel.app/addarticles", requestOptions)
      .then(response => response.text())
      .then(result => {alert("Done");
      window.location.replace(`http://localhost:3000/addarticles`)
    
    })
      .catch(error => console.log('error', error));
  };


  return <>
   <form action="post" onSubmit={submitHandler}>
<div className="inp"> 
<label  className="label"  htmlFor="title"> title</label>
<input placeholder="title" value={title}  onChange={(e)=>{settitle(e.target.value)}} />
</div>
<div className="inp"> 
<label className="label" htmlFor="title"> articleimg</label>
<input placeholder="articleimg" value={articleimg}  onChange={(e)=>{setarticleimg(e.target.value)}} />
</div>
<div className="inp"> 
<label  className="label"  htmlFor="content"> content</label>
<textarea placeholder="content" value={content}  onChange={(e)=>{setcontent(e.target.value)}} />
</div>
 <div className="sb">
 <input type="submit" value="Submit"/>

 </div>
   </form>
  
  </>;
};

export default Addarticles;
