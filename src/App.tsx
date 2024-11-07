import Alert from './components/Alert';
import { Button } from './components/Button';
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

  return (
  <div>
    {/* <ListGroup 
      items={items} 
      heading="Cities"
      onSelectItem={handleSelectitem}>
    </ListGroup> */}
    <Alert> My Alert </Alert>
    <Button  color='primary' onClick={() => console.log('Clicked')}> My Button </Button>


  </div>
  )
}

export default App;