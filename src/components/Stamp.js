import { forwardRef } from 'react';
import { Stage, Layer, Rect, Text, Circle, Line,RegularPolygon } from 'react-konva';


const  Stamp = forwardRef( (props, ref) =>{
// V0.1 9 may 2024
    var width = props.width;
    var height = props.height;
    var backgroundColor = props.backgroundColor?props.backgroundColor:'white';
    var opacity = props.backgroundOpacity?props.backgroundOpacity:1;
    var borderWidth = props.borderWidth?props.borderWidth:0;
    var borderColor = props.borderColor? props.borderColor:backgroundColor;
    var draggable = props.draggable?props.draggable:false;
    var shapes  = props.shapes?props.shapes:[];
   

    var drawCircle = (shapeData,index)=>{
        let myprops = {...shapeData} ;
        if(myprops.forceCenter){
            let x = width/2;
            let y = height/2;

            myprops.x = x;
            myprops.y = y;

        }
        
        let shape = <Circle key={'shape'+index}  {...myprops} draggable={draggable}  />
       
        return shape
    }

    var drawRect = (shapeData,index)=>{
        let myprops = {...shapeData} ;
        if(myprops.forceCenter){
            let x = (width-myprops.width)/2;
            let y = (height-myprops.height)/2;

            myprops.x = x;
            myprops.y = y;

        }
        
        let shape = <Rect key={'shape'+index}  {...myprops} draggable={draggable}  />
       
        return shape
    }


    var drawTriangular = (shapeData,index)=>{
        let myprops = {...shapeData} ;
        myprops['sides'] = 3;
        if(myprops.forceCenter){
            let x = width/2;
            let y = height/2;

            myprops.x = x;
            myprops.y = y;

            

        }
        
        let shape = <RegularPolygon key={'shape'+index}   {...myprops} draggable={draggable}  />
       
        return shape
    }

    var drawText = (shapeData,index)=>{
        let myprops = {...shapeData} ;
       
        /*if(myprops.forceCenterH){
            let x = width/2;
            myprops.x = x;
           

            

        }*/
        
        let shape = <Text key={'shape'+index} {...myprops} draggable={draggable}  />
        
        return shape
    }

    var shapeHandlers = {'circle' : drawCircle ,'rect' : drawRect,'triangle' : drawTriangular,'text' : drawText}

    var drawShape = (shapeData,index)=>{
        let shapeType = shapeData['shapeType'];
        let  drawShapeFunc = shapeHandlers[shapeType];
        if(drawShapeFunc){
            let shape = drawShapeFunc(shapeData,index);
            
            return shape;
        }
       
    }

   
   
    return (
         <Stage id='stage' ref={ref} width={width} height={height}>
            <Layer id='layer' >
                <Rect id='border' width={width} height={height} strokeWidth={borderWidth} stroke={borderColor} fill={backgroundColor} opacity={opacity} draggable={false} >

                </Rect>
                {
                    shapes.map( (shapeData,idx) => {
                        return drawShape(shapeData,idx);
                    })
                }
            </Layer>

            </Stage>

    );
    
}
);

export default Stamp;