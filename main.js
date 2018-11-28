// Creare una griglia formata da 8x8 quadratini tutti
// bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se
// cliccati diventano rossi, gli altri diventano verdi
// Sopra alla griglia deve esserci un contatore che
// conta quanti rossi e quanti verdi sono stati scoperti


var count1 = 0;

$('.rossi').click(function() {
  $(this).addClass('red')
  count1++
  $('#counter1').html('Quadrati Rossi: ' + count1)
});

var count2 = 0;

$('.verdi').click(function(){
  $(this).addClass('green')
  count2++
  $('#counter2').html('Quadrati Verdi: ' + count2)
});
