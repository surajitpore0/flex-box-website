$(document).ready(function() {
    $('#menu-btn').click(changeNav);


    function changeNav() {
        $('#links').toggle(1000);
        $('#menu-btn').toggleClass('turn')
    }
})