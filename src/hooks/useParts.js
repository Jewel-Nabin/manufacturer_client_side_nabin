import { useEffect, useState } from "react"

const useParts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        console.log(parts);
        fetch('https://peaceful-dawn-98509.herokuapp.com/part')
            .then(res => res.json())
            .then(data => setParts(data));
    }, [parts]);
    return [parts, setParts];
}
export default useParts;