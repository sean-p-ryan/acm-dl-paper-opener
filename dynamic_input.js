function openInput(val){
    var element=document.getElementById('dynamic-input');
    if(val=='Other')
      element.style.display='block';
    else  
      element.style.display='none';
   }