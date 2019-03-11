require('../src/less/series.less');

var pageFunctions = {
  seriesSorter: function(){
    if ($('body').hasClass('home-template')) {
      $('.sort-container').on('click', function(){
    		$('.sorted-series').toggleClass('descending');
    	});

    	$('.sort-container').on('click', function(e) {
    		$('.sort').toggleClass('sort-toggle');
    	});
    }
  }
}

$(document).ready(function() {
  pageFunctions.seriesSorter();
});
