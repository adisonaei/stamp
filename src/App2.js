import { useRef, useState } from "react";
import Stamp from "./components/Stamp";

function App2(){

    var stampRef = useRef(null);
    var blockTypeRef = useRef(null);
    var blockSizeRef = useRef(null);
    var blockStrokeRef = useRef(null);
    var blockOpacityRef = useRef(null);

    var textRef = useRef(null);
    var textXRef = useRef(null);
    var textYRef = useRef(null);
    var fontSizeRef = useRef(null);
    var fontFamilyRef = useRef(null);
    var textRotationRef = useRef(null);

    var block ={
        shapeType : 'rect',
 
        width: 200,
        height: 200,
        fill : 'red',
        stroke: 'black',
        strokeWidth: 3,
        opacity: 0.3,
        forceCenter : true,
    }

    var textShape = {
      shapeType : 'text',
      text : 'Test',
      x : 100,
      y : 100,
      fill : 'gray',
      fontFamily : 'Calibri',
      fontSize: 30
    }

    var [shapes,setShapes]  = useState([block,textShape]);

    
    
   
    var onBlockChange = (e) =>{
        console.log(blockTypeRef.current.value)
       let blockType =  blockTypeRef.current.value;
       block.shapeType = blockType;
       let size = parseInt(blockSizeRef.current.value);
       let strokeWidth = parseInt(blockStrokeRef.current.value);
       let opacity = parseFloat(blockOpacityRef.current.value);
       if(blockType === 'rect'){
        block.width = size;
        block.height = size;
        
       }else if(blockType === 'circle'){
        block.radius = size/2;
       }
       block.strokeWidth = strokeWidth;
       block.opacity = opacity;
       
       console.log(block);
       shapes = [block,textShape];
       setShapes(shapes);
    }


    var onTexthange = (e) =>{

      let text = textRef.current.value;
      textShape.text = text;
      let x = parseInt(textXRef.current.value);
      let y = parseInt(textYRef.current.value);
      let fontSize = parseInt(fontSizeRef.current.value);
      textShape.x = x;
      textShape.y = y;
      textShape.fontSize = fontSize;
      let fontFamily = fontFamilyRef.current.value;
      textShape.fontFamily = fontFamily;

      let rotation = parseInt(textRotationRef.current.value);
      textShape.rotation = rotation;
      shapes = [block,textShape];
      setShapes(shapes);
    }


    return (
        <>
          <Stamp ref={stampRef} width={400} height={400} backgroundColor='white' borderWidth={2} borderColor='black' opacity={0.2}  shapes={shapes} draggable={false}></Stamp>
          <br/>
          Block Type : <select ref={blockTypeRef} defaultValue={'rect'} onChange={  (e)=> onBlockChange(e)}>
            <option value={'rect'}>Square</option>
            <option value={'circle'}>Circle</option>
          </select>
          <br/>
        Block Size : <input ref={blockSizeRef} type="range" min={30} max={300} onChange={  (e)=> onBlockChange(e)} defaultValue={200} />
        <br/>
        Block Stroke : <input ref={blockStrokeRef} type="range" min={0} max={3} onChange={  (e)=> onBlockChange(e)} defaultValue={200} />
        <br/>
        Block Opacity : <input ref={blockOpacityRef} type="range" min={0} max={1} step={0.1} onChange={  (e)=> onBlockChange(e)} defaultValue={0.3} />
        <br/>
        <br/>
        Text : <input ref={textRef} type="text" maxLength={30} defaultValue={'Test'} onChange={ (e) => onTexthange(e)}  />
        <br/>
        Text X : <input ref={textXRef} type="range" min={0} max={400} defaultValue={100}  onChange={ (e) => onTexthange(e)}  />
        <br/>
        Text Y : <input ref={textYRef} type="range" min={0} max={400} defaultValue={100}   onChange={ (e) => onTexthange(e)}  />
        <br/>
        Font Size : <input ref={fontSizeRef} type="range" min={12} max={50} defaultValue={30}   onChange={ (e) => onTexthange(e)}  />
        <br/>
        Font Family : <select ref={fontFamilyRef} defaultValue={'Calibri'} onChange={  (e)=> onTexthange(e)}>
            <option value={'Calibri'}>Calibri</option>
            <option value={'Arial'}>Arial</option>
          </select>
          <br/>
        Text Rotation : <input ref={textRotationRef} type="range" min={0} max={360} defaultValue={0}   onChange={ (e) => onTexthange(e)}  />
        </>
      );
}

export default App2;