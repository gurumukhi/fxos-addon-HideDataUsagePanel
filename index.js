// If injecting into an app that was already running at the time
// the app was enabled, simply initialize it.
if (document.documentElement) {
  initialize();
}

// Otherwise, we need to wait for the DOM to be ready before
// starting initialization since add-ons are injected
// *before* `document.documentElement` is defined.
else {
  window.addEventListener('DOMContentLoaded', initialize);
}

function initialize() {
  var $$ = document.getElementById.bind(document);
  $$('cost-control-widget').style.display="none";
}

function uninitialize() {
  var $$ = document.getElementById.bind(document);
  $$('cost-control-widget').style.display="block";
}
