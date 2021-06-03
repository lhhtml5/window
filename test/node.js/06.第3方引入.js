const {JSDOM} = require("jsdom");
const {window}= new JSDOM("");
const $ = require("jquery")(window);

const arr =[1,2,3,4];
$.each(arr,(index,item)=>{
    console.log(item);
})