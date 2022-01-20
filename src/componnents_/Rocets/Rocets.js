import React, {useEffect, useState} from 'react';

const Rocets = () => {
   const [rocerts,setRocets]=useState([]);
    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())

            .then(value => setRocets(value) )

    },[])
    return (
        <div>
us
        </div>
    );
};

export default Rocets;
