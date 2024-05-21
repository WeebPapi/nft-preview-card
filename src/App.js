import  {NftCard}  from './components';
import {data} from './constants'
import './App.css';

function App() {
  const props = data.ether

  return (
      <div className='App'>
        <div className='app__bg flex__center'>
          <NftCard hero={props.img.hero} title={props.title} desc={props.desc} logo={props.img.logo} price={props.price} clock={props.img.clock} time={props.time} avatar={props.img.avatar} author={props.author}/>
        </div>
      </div>
  
  )
}

export default App;
