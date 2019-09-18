$(document).ready(function() {
	$('.js--pov-box').waypoint(
		function(direction) {
			if (direction == 'down') {
				$('nav').addClass('sticky');
			} else {
				$('nav').removeClass('sticky');
			}
		},
		{
			offset: '105px'
		}
	);

	$('.js--section-prakse').waypoint(function(direction) {
		if (direction == 'down') {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	});
});
/* var waypoints = $('#handler-first').waypoint(function (direction) {
  notify(this.element.id + ' hit 25% from top of window')
 }, {
  offset: '25%'
 }) */
