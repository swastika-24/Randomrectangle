import { Rectangle } from "./Rectangle";

export function createRandomShape(type){
    if(type == 'rectangle'){
        let width = Math.random()*100 + 'px';
        let height = Math.random()*100 + 'px';
        let x = Math.random()*100 ;
        let y = Math.random()*100 ;
        let color = randomColor();
        return {
            width,
            height,
            x,
            y,
            color,
            type,
            element: <Rectangle x={x + '%'} y={y + '%'} width={width} height={height} color={color} />
        }
    } else {
        return null;
    }
}

function randomColor(){
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    return `rgb(${r},${g},${b})`;
}