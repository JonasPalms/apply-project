
// styles
import './KommuneIntro.css'
import './KommuneActive.css'

import { useFetch } from '../hooks/useFetch'

export default function KommuneActive({ setInteractive }) {

    const { data: kommuner, isPending, error } = useFetch("https://api.dataforsyningen.dk/kommuner")

    const sortByName = () => {
        kommuner.sort((a, b) => a.navn.localeCompare(b.navn))
        console.log(kommuner)
    }



    return (
        <div className='container active'>
            <h2>Danmarks Kommuner</h2>

            {error && <div>En fejl opstod: {error}</div>}
            {isPending && <div>Henter data...</div>}
            {kommuner &&
                <table>
                    <thead>
                        <tr>
                            <th >Kommunekode</th>
                            <th onClick={sortByName}>Navn</th>
                            <th>Region</th>
                        </tr>
                    </thead>
                    <tbody>
                        {kommuner.map(kommune => (
                            <tr key={kommune.dagi_id}>
                                <td>{kommune.kode}</td>
                                <td>{kommune.navn}</td>
                                <td>{kommune.region.navn}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>}
            <button className='btn' onClick={() => setInteractive(false)}>Skjul</button>

        </div>


    )
}

