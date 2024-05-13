import { useRef } from "react";
import Stamp from "./components/Stamp";
function App() {

var circle1 = {
  shapeType : 'circle',
  x : 100,
  y : 100,
  radius : 50,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 4,
  opacity : 0.5

};


var circle2 = {
  shapeType : 'circle',
  x : 100,
  y : 100,
  radius : 50,
  fill: 'green',
  stroke: 'black',
  strokeWidth: 4,
  opacity : 0.2,
  forceCenter : true

};

var rect1 = {
  shapeType : 'rect',
  x: 0,
  y: 0,
  width: 30,
  height: 30,
  fill : 'yellow',
  stroke: 'black',
  strokeWidth: 3,
  opacity: 0.3,
  
}

var rect2 = {
  shapeType : 'rect',
 
  width: 30,
  height: 30,
  fill : 'red',
  stroke: 'black',
  strokeWidth: 3,
  opacity: 0.3,
  forceCenter : true,
  rotation : 10
  
}

var triangle1 = {
  shapeType : 'triangle',
  x : 150,
  y : 200,
  radius : 60,
  fill: 'gray',
  stroke: 'black',
  strokeWidth: 5,
  rotation : 10
  
}

var text1 = {
  shapeType : 'text',
  x : 60,
  y : 60,
  text : 'ทดสอบ',
  fontFamily : 'Calibri',
  fill: 'green',
  fontSize: 30,
 
}

var shapes = [circle1,circle2,rect1,rect2,triangle1,text1]


var stampRef = useRef(null);
var imageRef = useRef(null);

function exportImage(){
  if(stampRef){
   let uri = stampRef.current.toDataURL();
    console.log(uri); //base64 format
    imageRef.current.src = uri;
  }
}

  return (
    <>
      <Stamp ref={stampRef} width={400} height={400} backgroundColor='white' borderWidth={2} borderColor='black' opacity={0.2}  shapes={shapes} draggable={true}></Stamp>
      <br/>
      <button  onClick={ ()=> exportImage() }>Export</button>
      <br/>
      <img ref={imageRef} alt="test" />
      
    </>
  );
}

export default App;
