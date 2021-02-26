class Color{
    //***** size = ขนาดที่ต้องการ  *****
    static getRandomColorSet(size){
        return new Promise((resolve,reject)=>{
            //---------------YOUR COLOR SET------------------
            let colorSet = ["white","red","blue","tomato","green","#8C8C8C"];
            let newColor = [];

            for(let i=0;i<size;i++){
                newColor.push(colorSet[Math.floor(Math.random()*colorSet.length)]);
            }

            resolve(newColor);
        });
    }
}

//---------use-----------
async function main(){
    let color = await Color.getRandomColorSet(4);
    console.log(color);
}

 main();
