/* global $*/ /* global inputText */
document.getElementById('go').onclick = function () {
   var inputText = $('#text-input').val(); 
   var dawgifiedText = "Hello, " + inputText;
   document.getElementById('output').innerHTML = dawgifiedText;
};
