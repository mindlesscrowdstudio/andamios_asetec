
 $( document ).ready(function() {
    
     $('.wrapperTabs .tab').on('click', function(event) {
        event.preventDefault();
        $('.wrapperTabs .tab').removeClass('tabActive');
        $(this).addClass('tabActive');
        var cual = $(this).data('tab');
        $('.wrapperContentTab  .contentTab').removeClass('projectActive');
        $('.wrapperContentTab .atributo' + cual).addClass('projectActive');
    });
});
