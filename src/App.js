import React ,{useState} from "react"
const logAPI=({ stack,level,package:package,message})// 
function App(){
  const [urls,setUrl]=useState([{
    longurl:"",validity:"",shortcode:''
  }])
  const [shortendUrls,setShortendUrls]=useState([])
  const [error,setError]=useState("")
  const handleinputchange=(index,field,value)=>{
    const newUrls=[...urls];
    newURls[index][field]=value;
    setUrl(newUrls);
    logAPI({stack:'frontend',level:'info', package:'URlshortener',message:'input changed at index ${index}'});

  }
  const shortenURl=()=>{
    const invalid=urls.some(url=>!url.longURl ||if(invalid){
      setError('please enter a valid url')
      logAPI ({})
    }
  }

}