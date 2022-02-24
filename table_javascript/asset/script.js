function calc(){
    var opArit = window.document.getElementsByName('opArit');
    var tableNum = window.document.getElementById('tableNum');
    var numCal = 0; //x
    
    
    //convert
    var cTableNum = Number(tableNum.value) //value

    var res = window.document.getElementById('res')
    res.innerHTML = 'Resultado:\n'
    
    if (opArit[0].checked){
        while (numCal < 10){
            numCal= numCal+1;
            //y = value+x 
            var cal = cTableNum + numCal;
            res.innerHTML += ` ${cTableNum}+${numCal}=${cal}   `
        }
    } else if (opArit[1].checked){
        while (numCal < 10){
            numCal= numCal+1;
            //y = value-x 
            var cal = cTableNum - numCal;
            res.innerHTML += ` ${cTableNum}-${numCal}=${cal}  `
        } 
    } else if (opArit[2].checked){
        while (numCal < 10){
            numCal= numCal+1;
            //y = value*x 
            var cal = cTableNum * numCal;
            res.innerHTML += ` ${cTableNum}*${numCal}=${cal}  `
        } 
    } else if (opArit[3].checked){
        while (numCal < 10){
            numCal= numCal+1;
            //y = value/x 
            var cal = cTableNum / numCal;
            res.innerHTML += ` ${cTableNum}/${numCal}=${cal}  `
        } 
    }
}