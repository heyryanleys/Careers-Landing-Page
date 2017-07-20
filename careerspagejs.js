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
      $('a[name*=Section_11]+.einspaltig+.dreispaltigG').click(function() {
        $('.triangle1').show();
        $('.triangle2').hide();
        $('.triangle3').hide();
        $("a[name*=Section_13]+.einspaltig+.zweispaltigG").attr("style", "display: block !important");
        $("a[name*=Section_14]+.einspaltig+.zweispaltigG").attr("style", "display: none !important");
        $("a[name*=Section_15]+.einspaltig+.zweispaltigG").attr("style", "display: none !important");
        $("a[name*=Section_13]+.einspaltig +.zweispaltigG +.zweispaltig").attr("style", "display: block !important");
        $("a[name*=Section_14]+.einspaltig +.zweispaltigG +.zweispaltig").attr("style", "display: none !important");
        $("a[name*=Section_15]+.einspaltig +.zweispaltigG +.zweispaltig").attr("style", "display: none !important");
      });
      $('a[name*=Section_11]+.einspaltig+.dreispaltigG+.dreispaltigG').click(function() {
        $('.triangle1').hide();
        $('.triangle2').show();
        $('.triangle3').hide();
        $("a[name*=Section_13]+.einspaltig+.zweispaltigG").attr("style", "display: none !important");
        $("a[name*=Section_14]+.einspaltig+.zweispaltigG").attr("style", "display: block !important");
        $("a[name*=Section_15]+.einspaltig+.zweispaltigG").attr("style", "display: none !important");
        $("a[name*=Section_13]+.einspaltig +.zweispaltigG +.zweispaltig").attr("style", "display: none !important");
        $("a[name*=Section_14]+.einspaltig +.zweispaltigG +.zweispaltig").attr("style", "display: block !important");
        $("a[name*=Section_15]+.einspaltig +.zweispaltigG +.zweispaltig").attr("style", "display: none !important");
      });
      $('a[name*=Section_11]+.einspaltig+.dreispaltigG+.dreispaltigG+.dreispaltigG').click(function() {
        $('.triangle1').hide();
        $('.triangle2').hide();
        $('.triangle3').show();
        $("a[name*=Section_13]+.einspaltig+.zweispaltigG").attr("style", "display: none !important");
        $("a[name*=Section_14]+.einspaltig+.zweispaltigG").attr("style", "display: none !important");
        $("a[name*=Section_15]+.einspaltig+.zweispaltigG").attr("style", "display: block !important");
        $("a[name*=Section_13]+.einspaltig +.zweispaltigG +.zweispaltig").attr("style", "display: none !important");
        $("a[name*=Section_14]+.einspaltig +.zweispaltigG +.zweispaltig").attr("style", "display: none !important");
        $("a[name*=Section_15]+.einspaltig +.zweispaltigG +.zweispaltig").attr("style", "display: block !important");
      });
    });

  $(document).ready(
    function(){
      if ($('a[name*=Section_3]+.einspaltigG img').attr('alt')){
        $('a[name*=Section_3]+.einspaltigG img').attr('src','https://s17.postimg.org/hv2mzuulr/careersupdatedbanner.png');
      }
    });

  $(document).ready(
  function(){
    $("#video1").click(function(){
      $('a[name*="Section_6"]+.einspaltig div .text_ohne_bild p iframe').prop('src', 'https://www.youtube.com/embed/a7fz0R3qSvk')
    })
    $("#video2").click(function(){
      $('a[name*="Section_6"]+.einspaltig div .text_ohne_bild p iframe').prop('src', 'https://www.youtube.com/embed/9aeYsG5DCUo')
    })
    $("#video3").click(function(){
      $('a[name*="Section_6"]+.einspaltig div .text_ohne_bild p iframe').prop('src', 'https://www.youtube.com/embed/ZGBipbgwgME')
    })
  });
</script>
