import { useEffect, useState } from "react"

const useHooks = () => {
    const [menu, setMenu] = useState([])
    const [lodding,setLodding] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                setMenu(data)
                setLodding(false)
            })
    }, [])
    return [menu,lodding]
}

export default useHooks;