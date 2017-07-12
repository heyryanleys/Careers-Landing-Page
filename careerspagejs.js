<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script>
  window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')
</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js"></script>
<script>
  $(document).ready(function() {
    var controller = new ScrollMagic.Controller();
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '.greycircle'
      })
      .setClassToggle('#project01', 'fade-in') // add class to project 01
      .addTo(controller);
  });
  $(document).ready(
    function() {
      $('#Trainings').click(function() {
        $("a[name*=Section_10] + .einspaltig").show();
        $('.triangle1').show();
        $("a[name*=Section_11] + .einspaltig").hide();
        $("a[name*=Section_12] + .einspaltig").hide();
      });
      $('#CompanyCulture').click(function() {
        $("a[name*=Section_10] + .einspaltig").hide();
        $("a[name*=Section_11] + .einspaltig").show();
        $('.triangle2').show();
        $("a[name*=Section_12] + .einspaltig").hide();
      });
      $('#OfficeSpace').click(function() {
        $("a[name*=Section_10] + .einspaltig").hide();
        $("a[name*=Section_11] + .einspaltig").hide();
        $('.triangle3').show();
        $("a[name*=Section_12] + .einspaltig").show();
      });
    });

$(document).ready(
  function(){
    if ($('a[name*=Section_3]+.einspaltigG img').attr('alt')){
      $('a[name*=Section_3]+.einspaltigG img').attr('src','https://s17.postimg.org/hv2mzuulr/careersupdatedbanner.png');
    }
  });
</script>
