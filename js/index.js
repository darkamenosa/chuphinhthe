$(document).ready(function() {

    function handleLazyLoadImg() {
      $('.lazy-load').each(function() {
        // Set src attribute of current element by value of data-src 
        var currentElement = $(this);
        var src            = currentElement.attr('data-src');
        currentElement.attr('src', src); 
      })
    }

    function onActionBtnClicked(event) { 
      fbq('track', 'ViewContent', { action: 'ViewDownloadApp'});
      window.location.href = "http://dangky.chuphinhthe.com"; 
    }

    function main() {
      handleLazyLoadImg();
      $('.btn-action').on('click touchstart', onActionBtnClicked);
    }

    // Run main function
    main();
});
