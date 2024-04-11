import Normal from './Normal'
import Optimized from './Optimized';
import EnhancedComponent from "./HOC";
import { render } from 'react-dom';


// function useToggle(v) {
//   const [value, setValue] = React.useState(v);
//   const toggle = React.useCallback(() => {
//     setValue(v => !v);
//   }, []);
//   return [value, toggle];
// }

function App() {
  render(){
  const { show, handleclick } = this.props 
  return (
    <div>
      {/* <Normal/> */}
      <Optimized/>
      <button onClick={handleclick}>{show} 
    </button>  
    </div>
  )
}
}

export default App;