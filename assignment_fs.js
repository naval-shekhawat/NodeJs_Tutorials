// open a file and then append
//  some content to the existing content

const fs = require("fs");
fs.open("test.txt","a", function(err, fd){
    if(err) {
        console.log("Cannot open the file");
        return;
    }
   
    fs.write(fd,"This",function(err,written,str){
        console.log(str);
        console.log(written);
    })
})
