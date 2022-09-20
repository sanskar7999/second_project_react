import '../styles/card.css' ;
import {useState} from 'react' ;

const Card = (data) =>{
    const [dark , setdark] = useState(true) 
    console.log(data)
    return (
        <div class = 'card-wrapper' style={{
            backgroundColor: dark ? '#181818' : '#5CBBE4' ,
            color : dark ?  '#5CBBE4' : '#181818'
        }}>          
        <div className='card-header'>
            <h1>{data.tittle}</h1>
        </div>
        <div className='card-body'>
            <p>{data.subtittle}</p>
            <p>{data.details}</p>
        </div>
        <button style={{
            backgroundColor: dark ? '#181818' : '#5CBBE4' ,
            color : dark ?  '#5CBBE4' : '#181818',
            border: '3px solid #5CBBE4' ,
            borderColor: dark ? '#5CBBE4' : '#181818',
            borderRadius : '50px'
            }}
            onClick={ () => {
                setdark(!dark);
            }}
            >{ dark ? 'Dark mode' : 'Light mode'}</button>
        </div>
        

    );
};
export default Card;