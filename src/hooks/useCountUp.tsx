import { useEffect, useState } from 'react'

const useCountUp = ({progress, duration = 1000}:{progress: number, duration?: number}) => {
    const [value, setValue] = useState(0);

    useEffect(()=>{
        const increment = progress / (duration / 16); 
        let start = 0;
        const interval = setInterval(()=>{
            if(start <= progress){
                start += increment;
                setValue(Math.round(start));
            }else{
                clearInterval(interval)
            }
        }, 16)
    }, [progress, duration])
    
    return value;
}

export default useCountUp