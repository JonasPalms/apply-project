// styles
import './KommuneIntro.css'

export default function KommuneKomponent({ setInteractive }) {


    return (
        <div className="container">
            <h2 className='header'>Danmarks Kommuner</h2>
            <p className='description'>Hvis du savner en fed liste over Danmarks mange kommuner, så look no further! Tryk på knappen herunder, og forbered dig på at blive imponeret.</p>
            <button className='btn' onClick={() => setInteractive(true)}>Se Danmarks Kommuner</button>
        </div>
    )
}
