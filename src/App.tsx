import Alert from './components/Alert';
import { Button } from './components/Button';
import { useState } from 'react';
// import ListGroup from './components/ListGroup'

function App(){
//   const items = [
//     'NYC',
//     'SF',
//     'SD',
//     'NO'
// ]

// const handleSelectitem = (item: string) => {
// console.log(item);
// }
const [alertVisible, setAlertVisibility] = useState(false);

  return (
  <div>
    {/* <ListGroup 
      items={items} 
      heading="Cities"
      onSelectItem={handleSelectitem}>
    </ListGroup> */}
    {alertVisible && <Alert onClose={() => setAlertVisibility(false)}> My Alert </Alert>}
    <Button  color='primary' onClick={() => setAlertVisibility(true)}> My Button </Button>


  </div>
  )
}

export default App;