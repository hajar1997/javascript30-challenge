const canvas = document.getElementById('draw');
const ctx = canvas.getContext('2d');


ctx.strokeStyle = '#BADA55';
ctx.lineCap = 'round';
ctx.lineJoin = 'round';

let isDrawing;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e){
    if(!isDrawing) return;
    ctx.strokeStyle = `hsl(${hue},100%,50%)`;
    ctx.lineWidth = hue;

    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    [lastX,lastY] = [e.offsetX,e.offsetY];
    hue++;

    if(hue >= 360){
        hue = 0;
    }

    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
        direction = !direction;
    }

    if(direction){
        ctx.lineWidth++;
    }else{
        ctx.lineWidth--;
    }
}

canvas.addEventListener('mousedown',(e) =>{
    isDrawing = true;
    [lastX,lastY] = [e.offsetX,e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout',() => isDrawing = false);
canvas.addEventListener('mousemove',draw);