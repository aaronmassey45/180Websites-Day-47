$(document).ready( () => {
  $('.click').on('click', () => {
    $('.stuff').css('visibility','visible').hide().fadeIn('slow');
    $('.click').css('display','none');
  })
})
