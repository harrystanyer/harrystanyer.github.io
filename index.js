$("button").click(function(){
    console.log('Console . bruh more like');
    $.get("http://api.reddit.com/r/aww", function(data){
        console.log(data.data.children[0].data.thumbnail);
        //$('#theDiv').append('<img id="theImg" src="'+data.data.children[0].data.thumbnail+'" />')
      });
  });