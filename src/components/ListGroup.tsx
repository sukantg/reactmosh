import { Fragment } from "react";


function ListGroup() {
    const items = [
        'NYC',
        'SF',
        'SD',
        'NO'
    ]

   return (
            <Fragment>
                <h1> List </h1>
                {items.length===0 && <p>No items found</p>}
                <ul className="list-group">
                {items.map((item) => 
                    (<li className="list-group-item" 
                    key={item} 
                    onClick ={() => console.log(item)}>
                    {item}</li>))
                }
                </ul>
            </Fragment>
   );
}

export default ListGroup;