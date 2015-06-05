$(function() {
	$('.sound_button').on('click', function() {
		var audio_id = $(this).attr('data-soundID');
		play_sample(audio_id);
	});
});
function play_sample(audio_id) {
	var sample = document.getElementById(audio_id);
	sample.currentTime = 0;
	sample.play();
}
