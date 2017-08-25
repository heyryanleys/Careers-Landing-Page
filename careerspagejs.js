<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script>
  window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')
</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js"></script>
<script>
  // Javascript functin to trigger animation when user reaches greycircle div //
$(document).ready(function() {
  var controller = new ScrollMagic.Controller();
  var ourScene = new ScrollMagic.Scene({
      triggerElement: '.greycircle'
    })
    .setClassToggle('#project01', 'fade-in') // add class to project 01
    .addTo(controller);
});

  // Changes main video based on which thumbnail is clicked //
$(document).ready(
function(){
  $("#video1").click(function(){
    $('a[name*="Section_6"]+.einspaltig div .text_ohne_bild p iframe').prop('src', 'https://www.youtube.com/embed/a7fz0R3qSvk');
    document.getElementById("video1").style.border = "3px solid #f58220"
    document.getElementById("video2").style.border = "none"
    document.getElementById("video3").style.border = "none"
  })
  $("#video2").click(function(){
    $('a[name*="Section_6"]+.einspaltig div .text_ohne_bild p iframe').prop('src', 'https://www.youtube.com/embed/9aeYsG5DCUo');
    document.getElementById("video1").style.border = "none"
    document.getElementById("video2").style.border = "3px solid #f58220"
    document.getElementById("video3").style.border = "none"
  })
  $("#video3").click(function(){
    $('a[name*="Section_6"]+.einspaltig div .text_ohne_bild p iframe').prop('src', 'https://www.youtube.com/embed/90PHsrUZe7g');
    document.getElementById("video1").style.border = "none"
    document.getElementById("video2").style.border = "none"
    document.getElementById("video3").style.border = "3px solid #f58220"
  })
});

  // Shows and hides Company Culture, Trainings, and Company History sections when label is clicked) //
$(document).ready(
  function() {
    $('a[name*=Section_11]+.einspaltig+.dreispaltigG').click(function() {
      $("a[name*=Section_13]+.einspaltig+.zweispaltigG").attr("style", "display: block !important");
      $("a[name*=Section_14]+.einspaltig+.zweispaltigG").attr("style", "display: none !important");
      $("a[name*=Section_15]+.einspaltig+.zweispaltigG").attr("style", "display: none !important");
      $("a[name*=Section_13]+.einspaltig +.zweispaltigG +.zweispaltig").attr("style", "display: block !important");
      $("a[name*=Section_14]+.einspaltig +.zweispaltigG +.zweispaltig").attr("style", "display: none !important");
      $("a[name*=Section_15]+.einspaltig +.zweispaltigG +.zweispaltig").attr("style", "display: none !important");
    });
    $('a[name*=Section_11]+.einspaltig+.dreispaltigG+.dreispaltigG').click(function() {
      $("a[name*=Section_13]+.einspaltig+.zweispaltigG").attr("style", "display: none !important");
      $("a[name*=Section_14]+.einspaltig+.zweispaltigG").attr("style", "display: block !important");
      $("a[name*=Section_15]+.einspaltig+.zweispaltigG").attr("style", "display: none !important");
      $("a[name*=Section_13]+.einspaltig +.zweispaltigG +.zweispaltig").attr("style", "display: none !important");
      $("a[name*=Section_14]+.einspaltig +.zweispaltigG +.zweispaltig").attr("style", "display: block !important");
      $("a[name*=Section_15]+.einspaltig +.zweispaltigG +.zweispaltig").attr("style", "display: none !important");
    });
      $('a[name*=Section_11]+.einspaltig+.dreispaltigG+.dreispaltigG+.dreispaltigG').click(function() {
      $("a[name*=Section_13]+.einspaltig+.zweispaltigG").attr("style", "display: none !important");
      $("a[name*=Section_14]+.einspaltig+.zweispaltigG").attr("style", "display: none !important");
      $("a[name*=Section_15]+.einspaltig+.zweispaltigG").attr("style", "display: block !important");
      $("a[name*=Section_13]+.einspaltig +.zweispaltigG +.zweispaltig").attr("style", "display: none !important");
      $("a[name*=Section_14]+.einspaltig +.zweispaltigG +.zweispaltig").attr("style", "display: none !important");
      $("a[name*=Section_15]+.einspaltig +.zweispaltigG +.zweispaltig").attr("style", "display: block !important");
    });
  });

  // Checking if browser supports clippaths for the selection arrow for Company Culture, Trainings, and Company History //
$(document).ready(
  function(){
  var areClipPathShapesSupported = function () {

	var base = 'clipPath',
		prefixes = [ 'webkit', 'moz', 'ms', 'o' ],
		properties = [ base ],
		testElement = document.createElement( 'testelement' ),
		attribute = 'polygon(50% 0%, 0% 100%, 100% 100%)';

  	// Push the prefixed properties into the array of properties //
	for ( var i = 0, l = prefixes.length; i < l; i++ ) {
		var prefixedProperty = prefixes[i] + base.charAt( 0 ).toUpperCase() + base.slice( 1 );
		properties.push( prefixedProperty );
	}

  	// Interate over the properties and see if they pass two tests //
	for ( var i = 0, l = properties.length; i < l; i++ ) {
		var property = properties[i];

  		// First, they need to even support clip-path (IE <= 11 does not) //
		if ( testElement.style[property] === '' ) {

  			// Second, we need to see what happens when we try to create a CSS shape //
			testElement.style[property] = attribute;
			if ( testElement.style[property] !== '' ) {
				return true;
			}
		}
	}

	return false;
};

  // Determining what to show depending on if clip paths are supported //
if ( areClipPathShapesSupported() ) {
  $('a[name*=Section_11]+.einspaltig+.dreispaltigG').click(function() {
    $('.triangle1').attr('style','display:block');
    $('.triangle2').attr('style','display:none');
    $('.triangle3').attr('style','display:none');
  });
  $('a[name*=Section_11]+.einspaltig+.dreispaltigG+.dreispaltigG').click(function() {
    $('.triangle1').attr('style','display:none');
    $('.triangle2').attr('style','display:block');
    $('.triangle3').attr('style','display:none');
  });
  $('a[name*=Section_11]+.einspaltig+.dreispaltigG+.dreispaltigG+.dreispaltigG').click(function() {
    $('.triangle1').attr('style','display:none');
    $('.triangle2').attr('style','display:none');
    $('.triangle3').attr('style','display:block');
  });
}
else {
  $('.triangle1').attr('style','display:none !important');
  $('.triangle2').attr('style','display:none !important');
  $('.triangle3').attr('style','display:none !important');
}
});

</script>
