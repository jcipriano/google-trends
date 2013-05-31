//= require_tree .

(function () {

	var trends = this.trends = {},
	regions = {
		'8': 'Austrailia',
		'13': 'Canada',
		'10': 'Hong Kong',
		'3': 'India',
		'6': 'Israel',
		'4': 'Japan',
		'14': 'Russia',
		'5': 'Singapore',
		'12': 'Taiwan',
		'9': 'United Kingdom',
		'1': 'United States'
	};

	/**
	 * request data from proxy
	 **/
	trends.init = function () {

		var that = this;

		$.ajax({
			url: 'http://aqueous-ridge-3010.herokuapp.com',
			dataType: 'jsonp',
			jsonpCallback: 'jsonpCallback',
			data: {
				url: 'http://hawttrends.appspot.com/api/terms/',
				format: 'json'
			}
		}).done(function (data) {
			that.dataSuccess(data);
		});
	};

	/**
	 * on data request success
	 **/
	trends.dataSuccess = function (data) {

		var tmp = $('#region-list-template').html();

		for (var key in data) {
			var region = {
				name: regions[key],
				terms: data[key]
			};
			$('#list-container').append( Mustache.render(tmp, region) );
  		}
	};

	/**
	 * on data request fail
	 **/
	trends.dataFailure = function () {
		// the goggles do nothing!
	};

})();

// jquery on load
$(function () {
	trends.init();
});