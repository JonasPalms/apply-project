// styles
import './KommuneIntro.css'

export default function KommuneKomponent({ setInteractive }) {


    return (
        <div className="container">
            <h2 className='header'>Danmarks Kommuner</h2>
            <p className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos labore, vero veniam modi expedita sed corrupti maiores repellat officia aliquam ad officiis numquam, necessitatibus recusandae neque illo error saepe enim.</p>
            <button className='btn' onClick={() => setInteractive(true)}>Se Danmarks Kommuner</button>
        </div>
    )
}
