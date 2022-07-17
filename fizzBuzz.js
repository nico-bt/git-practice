const range = [...Array(100).keys()].map(x => x+1);

range.map(item =>{
    console.log(item % 5==0 ? "Multiple of 5" : item)  
})