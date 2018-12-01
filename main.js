
 
 

$(document).ready(function(){

    var boxs = $(".box") //selected box class from index.html 
    var turn = true 
    var x ='x', o = "o";
    

    game();

    function game(){
        boxs.on('click',function(){
            if (turn && $(this).html() == ""){
                $(this).html(o);
                turn = false; 
               
              
                selectWinner();
                
            }else if (!turn && $(this).html() == "") {
                $(this).html(x);
                turn = true;
                selectWinner();
                ``
            } 
            
        })
        
    }

    function selectWinner(){

         var winnerArry = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [2,4,6],
            [0,4,8]
         ]
    
         for(var i = 0; i < winnerArry.length; i++){
             var one = winnerArry[i][0];
             console.log('one = ',one);
             var two = winnerArry[i][1];
             console.log('two',two);
             var three = winnerArry[i][2];
             console.log('three',three);

             //console.log($(boxs[one]).html());
             if ( $(boxs[one]).html() == $(boxs[two]).html() && $(boxs[two]).html() == $(boxs[three]).html() && $(boxs[three]).html() !== ''){
                 winner($(boxs[one]).html());
             }
         }
         if ( $(boxs[0]).html() && $(boxs[1]).html() && $(boxs[2]).html() && $(boxs[3]).html() && $(boxs[4]).html() && $(boxs[5]).html() && $(boxs[6]).html() && $(boxs[7]).html() && $(boxs[8]).html() ){
            alert ("draw");
         }

    }

    function winner(plyer){
        if (plyer == 'o'){
            alert ("The winner is O")

        } else {
            alert('The winner is x')
        }
    }


        
        
$("#rest").on('click', function(){
    
        boxs.html("");
    

})




})
