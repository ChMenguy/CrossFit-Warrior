import { useEffect, useState } from 'react';
import axios from 'axios';

function useFetchWods(url){
    const [wods,fetchWods] = useState({
        wods : [],
        load : false
    })

    useEffect(() => {
        async function fetchData() {
          const response = await axios.get(url);
          fetchWods({wods : response.data,
            load : true });
        }
        fetchData();
      }, []); 

    return [wods]
}


export default useFetchWods