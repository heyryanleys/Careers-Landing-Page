$(document).ready(function() {
  var controller = new ScrollMagic.Controller();
  var ourScene = new ScrollMagic.Scene({
      triggerElement: '.ryancontainer'
    })
    .setClassToggle('.ryanprogrssbarfill', 'flyin')
    .addTo(controller);
});
