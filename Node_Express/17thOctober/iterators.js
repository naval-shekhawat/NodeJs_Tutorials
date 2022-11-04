function multipleOfTen(start = 0, end = Infinity,steps = 0) {
    let multiples = 0;
    let nextIndex = 0;
    let result = 0;

    return {
        next : function(){
            if(nextIndex < end) {
                result = result + (multiples + 10);
                nextIndex += steps;
                return {
                    value : result,
                    done : false
                }
            } else {
                return {
                    value: result,
                    done : true
                }
            }
        }
    }
}

const multiples = multipleOfTen(0,5,1);
let it = multiples.next();
while(!it.done){
    console.log(it.value);
    it = multiples.next();
}
