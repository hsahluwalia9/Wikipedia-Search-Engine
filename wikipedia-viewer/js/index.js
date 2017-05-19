$(document).ready(function() {
  
  $("#submit").on("click", function(){
    
    var search = $('#searchQuery').val();
    var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+search+'&callback=?';
  $.ajax({
    type: 'GET',
    url: url,
    async: false,
    dataType: 'json',
    success: function(data){
      $('#content').html('');
      for (var i=0; i<data[1].length;i++){
      $('#content').prepend('<a target="_blank" href='+data[3][i]+'>'+'<li>'+ data[1][i]+'</a>'+'<br>'+data[2][i] +'</li>'+ '<br>');
      }
    },
    error: function(errorMessage){
      alert('error');
    }
  }); 
  });
  });