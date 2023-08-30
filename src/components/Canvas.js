import { useState } from "react";
import { createRandomShape } from "./shapes/createRandomShape";
import Draggable from "react-draggable";


export const Canvas = () => {
    
    const [shapeList, setShapeList] = useState([]);

    function addShape(){
        let newShape = createRandomShape('rectangle');
        let newShapeList = [...shapeList, newShape];
        setShapeList(newShapeList);
    }

    function printJSON(){
        console.log(JSON.stringify(shapeList));
    }

    return <div>
        <div className="buttons">
            <button onClick={addShape}>Add Shape</button>
            <button onClick={printJSON}>Print JSON</button>
        </div>
        <div className="shape-container">
            {
                shapeList.map(s => <Draggable defaultPosition={{ x:s.x, y:s.y }}>
                    <div>{s.element}</div>
                </Draggable>)
            }
        </div>
    </div>

}