import React, { useState,useEffect } from 'react';

const Noltification = ({setError,error}) => {
   
    function setErrorMessage(type) {
        let error='';
        console.log(type);
        switch(type) {
            case 'invalid':
                error = 'Invalid Field or Existing Username and/or Email';
                break;
            case 'internal':
                error = 'Internal Server Error';
                break;
            case 'invalid-login':
                error = 'Incorrect Password/Username';
                break;
            case 'invalid-post':
                error= 'Somewhere is empty...'
                break;
            default:
                error = type;
                break;
        }

        return error;
    }
    useEffect(() => {
        let timer = setTimeout(() => setError(null),3000)
        return () => {
            clearTimeout(timer);   
        }
    },[]);

  

    return (
    <div className={`noltifcation bg-${error} b shadow`}>
        {setErrorMessage(error)}
    </div>);
}


export default Noltification;