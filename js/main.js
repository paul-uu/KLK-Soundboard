$(function() {
	$('.sound_button').on('click', function() {
		if ($(this).attr('id') === 'b_ryuko_1') {
			if (window.confirm("Do you have your tissues ready?")) {
				var audio_id = $(this).attr('data-soundID');
				play_sample(audio_id);		
			}
		} else {
			var audio_id = $(this).attr('data-soundID');
			play_sample(audio_id);		
		}

	});
});
function play_sample(audio_id) {
	var sample = document.getElementById(audio_id);
	sample.currentTime = 0;
	sample.play();
}
