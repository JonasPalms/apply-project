
// styles
import './KommuneIntro.css'
import './KommuneActive.css'

import { useFetch } from '../hooks/useFetch'

export default function KommuneActive({ setInteractive }) {

    const { data: kommuner, isPending, error } = useFetch("https://api.dataforsyningen.dk/kommuner")

    console.log(kommuner)

    return (
        <div className='container active'>
            <h2>Danmarks Kommuner</h2>
            <button className='btn' onClick={() => setInteractive(false)}>Skjul</button>
            {error && <div>En fejl opstod: {error}</div>}
            {isPending && <div>Henter data...</div>}
            {kommuner &&
                <table>
                    <thead>
                        <tr>
                            <th>Kommunekode</th>
                            <th>Navn</th>
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

        </div>
    )
}

