var config = chrome.extension.getURL('mathjax_config.js');
var mathjax = chrome.extension.getURL('MathJax/MathJax.js');

$.include([config], function() {
    $.include([mathjax]);
});
