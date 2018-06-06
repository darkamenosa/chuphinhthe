$(document).ready(function() {

    function onActionBtnClicked(event) { 
      window.location.href = "http://dangky.chuphinhthe.com"; 
    }

    function main() {
      $('.btn-action').on('click touchstart', onActionBtnClicked);
    }

    // Run main function
    main();
});
