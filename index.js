import { VectorF } from "./matricies.mjs";
import { MatrixF } from "./matricies.mjs";
import { FOUR } from "./tesseract.mjs";

const canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 500;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

const myCube = FOUR.create4DCube();

let wAngle = 0;
const wAngleDelta = 0.004;
let cameraAngle = 0;

setInterval(function () {
    FOUR.update3DMap(myCube,wAngle,3);
    const myMatrix = FOUR.getCenteringMatrix([0,Math.cos(cameraAngle),Math.sin(cameraAngle)]);
    FOUR.update2DMap(myCube,myMatrix,5);
    FOUR.drawCube(ctx,canvas,myCube);
    wAngle += wAngleDelta;
},16);