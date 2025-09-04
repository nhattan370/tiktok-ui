
import { useEffect, useState } from "react";

function UseDebounce(value, delay){
    const [debounce, setDebounce] = useState(value);
    useEffect(()=>{
        const handleTimeOut = setTimeout(()=>{setDebounce(value)}, delay)
        return () => clearTimeout(handleTimeOut) 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])
    return debounce;
}

export default UseDebounce;