import { useState, useEffect } from "react";

function App(props){
    const [page, setPage] = useState(0)
    const [keyword, setKeyword] = useState(0)

    function fn(page, keyword) {
        console.log('ajax', page, keyword)
    }

    useEffect(() => {
        fn(page, keyword)
    }, [page, keyword])

    return <div>
        <button onClick={() => setPage(page + 1)}>setPage</button>
        <button onClick={() => setKeyword(keyword + 'x')}>setKeyword</button>
    </div>
}

export default App