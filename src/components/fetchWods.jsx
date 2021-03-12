import { useEffect, useState } from 'react';
import axios from 'axios';

function useFetchWods($url){
    const [wods,fetchWods] = useState({
        wods : [],
        load : false
    })
    useEffect(async () => {
        const result = await axios($url)     
        fetchWods({wods : result.data,
                   load : true });
      },[]  
      );
    return [wods]
}

export default useFetchWods