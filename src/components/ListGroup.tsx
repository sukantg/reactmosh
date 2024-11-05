import { Fragment } from "react";
import { MouseEvent } from "react";

function ListGroup() {
    let selectedIndex = 0;
    const items = [
        'NYC',
        'SF',
        'SD',
        'NO'
    ]
    const handleClick = (event:MouseEvent) => console.log(event)
   return (
            <Fragment>
                <h1> List </h1>
                {items.length===0 && <p>No items found</p>}
                <ul className="list-group">
                {items.map((item, index) => 
                    (<li className =  { selectedIndex === index ? 'list-group-item active' : 'list-group-item' }
                    key={item} 
                    onClick = {handleClick}
                    >
                    {item}
                    </li>))
                }
                </ul>
            </Fragment>
   );
}

export default ListGroup;