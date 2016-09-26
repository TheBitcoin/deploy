// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(function() {
  var amount = 0
  $('.btn').on('click', function(){
    event.preventDefault()
    amount = $('#bitcoin-amount').val();
    var url = '/prices/1'
    console.log(amount)
    $.ajax({
      url: url,
      type: 'GET',
      success: okey,
      error: error,
    })
  })
  error = function (){
    console.log('error')
  }

  okey = function(response) {
      $('.total_price').empty();
      $('.total_price').text(response.last);
      $('.total_price_amount').text(response.last * amount)
  }

})

//
//
// $('#btn-submit').on('click', function(event) {
//       event.preventDefault()
//       var search_term = $('#artist').val();
//       var url = "https://api.spotify.com/v1/search?type=artist&query=" + search_term
//
//   // ajax call needs to be made
//   console.log(this)
//     // this.makeAjax();
//   });
// };
//
// SpotifyController.prototype.makeAjax = function() {
//   $.ajax({
//       url: url,
//       type: 'GET',
//       success: handResponse,
//       error: error,
//   });
// };
