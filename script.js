$(function () {
    expression = $('#hacker').html();// Take the code
    $('#hacker').html(''); // empty the div
    let i=0;
    $('.cursor2').hide();
    function cursoron()
    {
      $('.cursor').hide();
      $('.cursor2').show();
    }
    function cursoroff()
    {
      $('.cursor').show();
      $('.cursor2').hide();
    }
    $("#mobile").focus(function () {
        $('#mobile').css("opacity","0");
        window.addEventListener("keydown", hackertyping);
    })
    function hackertyping(){
        var key = event.keyCode || event.charCode;
        cursoron();
        while (expression[i]==' ')i+=1;
        while (expression[i]=='<'){
          if(expression[i+1]=='/')i+=7;
          else i+=6;
        }
        while (expression[i]=='&')i+=3;
        var c = document.querySelector("#scroll");
        c.scrollIntoView();
        $('#hacker').html(expression.substr(0,i));
        i+=10;
        setTimeout(() => {
            cursoroff();
        }, 200);
        ending();
    }
    function ending(){
        if((i-11)<=expression.length&&expression.length<=(i-1)){
          window.removeEventListener("keydown", hackertyping);
          $('#mobile').css("display","none");
          readytyping("Please  enter  password  ", document.querySelector("#end"));
          $('#monitor').scroll(function(){
            $('.a').css("color","black");
            setTimeout(function(){
              $('.a').css("color","#17fc03");
            }, 20);
          });
      }
    }
    function showinput(){
      $('#password').css("display", "inline");
      $('.cursor').hide();
      $('.cursor2').hide();
      $('#password').focus();
    }
    function readytyping(content, address){
      let k=0;
      function typing(){
        if(k<content.length){
          cursoron();
          let txt=content.charAt(k);
          address.innerHTML += txt;
          k++;
          cursoroff();
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
function check(){
  const pw = document.getElementById('password').value;
  if(pw=='7919'){
    location.href='https://skyp0714.github.io/CH1-1/';
  }
}
