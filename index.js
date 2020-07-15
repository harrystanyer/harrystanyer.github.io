$("button").click(function(){
    $.get("https://api.reddit.com/r/"+$('.input1').val(), function(data){
        $('.pictures').text('');
        for(var i = 0; i < data.data.children.length; i++){
            $('.pictures').prepend('<img id="theImg" width="250" height="250" src="'+data.data.children[i].data.thumbnail+'" />');
        }
      });
  });
