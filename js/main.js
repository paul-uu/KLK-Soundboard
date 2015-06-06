$(function() {
	$('.sound_button').on('click', function() {
		var audio_id = $(this).attr('data-soundID');
		if ($(this).attr('id') === 'b_ryuko_2') {
			if (window.confirm("Do you have your tissues ready?")) {
				play_sample(audio_id);
			}
		} else {
			play_sample(audio_id);
		}
	});
});
function play_sample(audio_id) {
	var sample = document.getElementById(audio_id);
	sample.currentTime = 0;
	sample.play();
}
