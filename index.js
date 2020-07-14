$("button").click(function(){
    console.log('Console . bruh more like');
    $.get("http://api.reddit.com/r/dog", function(data){
        $('.pictures').text('');
        for(var i = 0; i < data.data.children.length; i++){
            $('.pictures').prepend('<img id="theImg" width="250" height="250" src="'+data.data.children[i].data.thumbnail+'" />');
        }
      });
  });