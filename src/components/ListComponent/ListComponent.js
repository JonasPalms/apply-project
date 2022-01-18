export default function ListComponent({ items, isLoading }) {
    return isLoading ? (<h1>Henter data...</h1>) :
        <div>
            <table>
                <thead>
                    <tr>
                        <th >Kommunekode</th>
                        <th >Navn</th>
                        <th>Region</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(kommune => (
                        <tr key={kommune.dagi_id}>
                            <td>{kommune.kode}</td>
                            <td>{kommune.navn}</td>
                            <td>{kommune.region.navn}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
}
