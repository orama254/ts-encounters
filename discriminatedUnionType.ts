type CustomShapeWithDiscriminatedUnion = 
    | { 
        kind: 'square';
        size: number; 
      }
    | { 
        kind: 'rectangle', 
        width: number; 
        height: number; 
      }
    | { 
        kind: 'circle';
        radius: number;
      };



// Refactores version of the above code

    //   type TSquare = {
    //     kind: "square";
    //     size: number;
    //   };
      
    //   type TRectangle = {
    //     kind: "rectangle";
    //     width: number;
    //     height: number;
    //   };
      
    //   type TCircle = {
    //     kind: "circle";
    //     radius: number;
    //   };
      
    //   type CustomShapeWithDiscriminatedUnion = TSquare | TRectangle | TCircle;