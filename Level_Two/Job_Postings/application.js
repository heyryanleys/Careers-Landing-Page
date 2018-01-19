<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function() {
function getUrlParams() {

  var paramMap = {};
  if (location.search.length == 0) {
    return paramMap;
  }
  var parts = location.search.substring(1).split("&");

  for (var i = 0; i < parts.length; i ++) {
    var component = parts[i].split("=");
    paramMap [decodeURIComponent(component[0])] = decodeURIComponent(component[1]);
  }
  return paramMap;
}
var params = getUrlParams();
var noSpace = params.position.split('_').join(' ');
var job = noSpace.replace(/\b\w/g, l => l.toUpperCase());
document.getElementById('myTextFieldId').innerHTML = job;
});
</script>
