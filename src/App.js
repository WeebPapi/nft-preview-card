import  {NftCard}  from './components';
import {data} from './constants'
import './App.css';

function App() {
  const props = data.ether

  return (
      <div className='App'>
        <div className='app__bg flex__center'>
          {NftCard(props)}
        </div>
      </div>
  
  )
}

export default App;
