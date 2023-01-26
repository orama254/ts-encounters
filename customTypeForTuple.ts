type TCoord = [number, number];
// This is a tuple type. It represents an array with a fixed number of elements. FYI from the total typescript extension for vscode.


const coordinates: TCoord = [-1.28491, 36.82595];


const getCoodinates = (): TCoord => coordinates;
const setCoordinates = (coordinates: TCoord) => console.log (coordinates);


