import { useState } from "react"

export default function Search({ getQuery }) {


    const [term, setTerm] = useState("")

    const onChange = (q) => {

        setTerm(q)
        getQuery(q)
    }

    return (
        <section>
            <form>
                <input
                    type="text"
                    onChange={(e) => onChange(e.target.value)}
                    value={term}
                    required
                    placeholder='Søg...'
                    autoComplete='off' />
            </form>
        </section>
    )
}
