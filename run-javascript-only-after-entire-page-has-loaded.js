/*
* Run JavaScript Only After Entire Page Has Loaded
* https://css-tricks.com/snippets/jquery/run-javascript-only-after-entire-page-has-loaded/
*/

jQuery(window).bind("load", function() {
   // code here
});

// Delayed Modal Display + Cookie On Click
// example
/*
jQuery(window).bind("load", function() {
   console.log('load page');
   if(jQuery.cookie("langblog")==''){
      // If no cookie with our chosen name (e.g. no_thanks)...
      if (jQuery.cookie("no_thanks") == null) {
         // Show the modal, with delay func.
         jQuery('#myModal').appendTo("body");
         function show_modal() {
            jQuery('#myModal').modal();
         }
         // Set delay func. time in milliseconds
         window.setTimeout(show_modal, 3000);
      }
      // On click of specified class (e.g. 'nothanks'), trigger cookie, which expires in 100 years
      jQuery(".nothanks").click(function () {
         jQuery.cookie('no_thanks', 'true', {
            expires: 36500,
            path: '/'
         });
      });
      jQuery(".nothanksone").click(function () {
         jQuery.cookie('no_thanks', 'true', {
            expires: 1,
            path: '/'
         });
      });
   }
});
*/
