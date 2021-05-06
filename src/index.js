const sum = ()=>{
    return  4 + 6;
}
console.log(sum());
const ele = document.createElement('div');
ele.innerHTML = "w hh jlf jlj";
document.body.appendChild(ele);

if(module.hot){
    module.hot.accept();
    module.hot.dispose((_data)=>{
        document.body.innerHTML = "";
    })
}