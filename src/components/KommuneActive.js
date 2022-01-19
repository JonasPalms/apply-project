
// styles
import './KommuneIntro.css'
import './KommuneActive.css'


// react hooks
import { useState, useEffect } from 'react'

// components 
import Search from './Searchbar/Search'
import ListComponent from './ListComponent/ListComponent'



export default function KommuneActive({ setInteractive }) {

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState("")
    const [url, setUrl] = useState("https://api.dataforsyningen.dk/kommuner")

    useEffect(() => {
        const fetchData = async () => {

            const res = await fetch(url + query)
            const result = await res.json()

            setItems(result)
            setIsLoading(false)
        }

        fetchData()
    }, [query, url])

    return (
        <div className='container active'>
            <header>
                <h2>Danmarks Kommuner</h2>
                <Search
                    getQuery={(q) => setQuery(`/autocomplete?q=${q}`)} />
            </header>
            {items && <ListComponent items={items} isLoading={isLoading} />}
            <button className='btn' onClick={() => setInteractive(false)}>Skjul</button>

        </div>
    )
}

