import { useState } from "react";

export function CountryCapitalGame({inputData}) {
  const [data, setData] = useState(inputData);
  const [tempData, setTempData] = useState('');
  
  let dataArray = [];
  // for(const [key,value] of Object.entries(data)){
  //   dataArray.push(key);
  //   dataArray.push(value);
  // }
  Object.keys(data).map(key=>dataArray.push(key));
  Object.values(data).map(val=>dataArray.push(val));
  dataArray.sort()
  
  function handleClick(item){
    if(!Boolean(tempData)){
      setTempData(item);
      return;
    } else {
      if( Object.keys(data).includes(item) && data[item]===tempData ){
        console.log('Selected city first. Corrrect!');
        setData(removePropertyFromObject(item));
      } else if ( !Object.keys(data).includes(item) && data[tempData]===item ){
        console.log('Selected country first. Correct!')
        setData(removePropertyFromObject(tempData));
      }
      setTempData('');
    }
  }

  function removePropertyFromObject(key){
    const newObj = {...data};
    delete newObj[key];
    return newObj;
  }

  return (
    <div className="container col-12 col-md-8 col-lg-6">
      {
        dataArray.map((value, index)=>
          <button 
            className='btn btn-primary me-5 mt-4' 
            key={index}
            onClick={(e)=>handleClick(value)}
            style={value===tempData ? {backgroundColor:'white', color:'black'} : {}}
          >
            {value}
          </button>)
      }
      {
        dataArray.length === 0 && (
          <>
          <p className="mt-5 fs-6 fw-bold">YOU WIN!</p>
          <button className="btn btn-success mt-3" onClick={() => window.location.reload(false)}>Restart</button>
          </>
          )
      }
    </div>
  )
}
