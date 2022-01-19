import './ListComponent.css'

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
                        <tr key={kommune.kommune.dagi_id}>
                            <td>{kommune.kommune.kode}</td>
                            <td>{kommune.kommune.navn}</td>
                            <td>{kommune.kommune.region.navn}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                <a href="#">&laquo;</a>
                <a href="#">1</a>
                <a className="active" href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a href="#">&raquo;</a>
            </div>
        </div>
}
