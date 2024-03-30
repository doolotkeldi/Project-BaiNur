import React, { useState, useEffect} from 'react'
import "./Search.css"

function Search() {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])



    const performSearch = ()=>{
        return [];
    }
    useEffect(()=>{
        const searchResults = performSearch(query)
        setResults(searchResults)
    }, [query])
  return (
    <div>
        <input type="text" placeholder={` Search`} onChange={(e)=>setQuery(e.target.value)}/>
        <div className="results">
            {results.map((result) =>(
                <div key={result.id}>{result.title}</div>
            ))}
        </div>
    </div>
  )
}

export default Search