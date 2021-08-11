$(function () {
    expression = $('#hacker').html();// Take the code
    $('#hacker').html(''); // empty the div
    let i=0;
    $('.cursor2').hide();
    function cursoronoff()
    {
      $('.cursor').hide();
      $('.cursor2').show();
    }
    $("#mobile").focus(function () {
        $('#mobile').css("opacity","0");
        window.addEventListener("keydown", hackertyping);
    })
    function hackertyping(){
        var key = event.keyCode || event.charCode;

        if( key == 8 ){
           i-=1;
            if(i<0)i=0;
            while (expression[i]==' ')i-=1;
            while (expression[i]==';')i-=4;
            while (expression[i]=='>')i-=3;
            $('#hacker').html(expression.substr(0,i));
        }
        else{
        cursoronoff();
        while (expression[i]==' ')i+=1;
        while (expression[i]=='<')i+=3;
        while (expression[i]=='&')i+=3;
        var c = document.querySelector("#scroll");
        c.scrollIntoView();
        $('#hacker').html(expression.substr(0,i));
        i+=1;
        setTimeout(() => {
            cursoronoff();
        }, 2000);
      }
        ending();
    }
    function ending(){
        if((i-1)==expression.length){
          window.removeEventListener("keydown", hackertyping);
          readytyping("Please  enter  password  ", document.querySelector("#end"));
      }
    }
    function showinput(){
      $('#password').css("display", "inline");
      $('.cursor').hide();
      $('.cursor2').hide();
      $('#password').focus();
      $("#password").css("width", (document.qeurySelector('#password').length*8)+'px');
    }
    function readytyping(content, address){
      let k=0;
      function typing(){
        if(k<content.length){
          cursoronoff();
          let txt=content.charAt(k);
          address.innerHTML += txt;
          k++;
          cursoronoff();
        }
        if(k>=content.length)
        {
          showinput();
          clearInterval(typing);
        }
      }
      setInterval(typing, 200);
    }
})
