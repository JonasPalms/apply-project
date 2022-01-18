import { useState } from 'react';

// Components
import KommuneIntro from './components/KommuneIntro'
import KommuneActive from './components/KommuneActive';


// styles
import './App.css';

function App() {

  const [interactive, setInteractive] = useState(false)

  return (
    <div className="App">
      {!interactive && <KommuneIntro setInteractive={setInteractive} />}

      {interactive && <KommuneActive setInteractive={setInteractive} />}

    </div>
  );

}



export default App;
