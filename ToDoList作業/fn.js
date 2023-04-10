var a =document.getElementById("a1");
var btn =document.getElementById("a2");
var txt =document.getElementById("a3");

btn.addEventListener('click',function (){
    
    var newtxt =document.createElement('li')
    newtxt.innerText=a.value 
    txt.append(newtxt)
    a.value = ''
    
    var del = document.createElement('button')
    del.innerText='想刪就刪'
    txt.append(del)
    

    del.addEventListener('click',function () {
    var c = document.querySelector('li')
        c.remove();
        del.remove();

    })
})

