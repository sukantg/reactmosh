import ListGroup from './components/ListGroup'


function App(){
  const items = [
    'NYC',
    'SF',
    'SD',
    'NO'
]

const handleSelectitem = (item: string) => {
  console.log(item);
}
  return (
  <div>
    <ListGroup 
      items={items} 
      heading="Cities"
      onSelectItem={handleSelectitem}>

    </ListGroup>
  </div>
  )
}

export default App;