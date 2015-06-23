$(document).ready(function(){
    
    var popupVisible = false;
    
    $("#plus").click(function(){
        if (popupVisible) {
            $(".overlay").hide();
            popupVisible = false;
        } else {
            $(".overlay").show();
            popupVisible = true;
        }
    });
    
});