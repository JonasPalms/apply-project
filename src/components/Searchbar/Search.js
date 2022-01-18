import './Search.css'

import { useState } from "react"

export default function Search({ getQuery }) {


    const [term, setTerm] = useState("")

    const onSubmit = (e) => {
        e.prevenDefualt()
        getQuery(term)
    }

    return (
        <section>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    onChange={(e) => setTerm(e.target.value)}
                    value={term}
                    required
                    placeholder='Søg...'
                    autoComplete='off' />
                <button className="btn search">Søg</button>
            </form>
        </section>
    )
}
