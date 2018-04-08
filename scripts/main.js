$(document).ready(function(){
   
    $("#btnOne").click(function(){
        alert("Button was clicked");
    });
        $("#btnTwo").click(function(){
            $(".update-html").html("<h3>Howdy World!</h3>");
        });

            $("#btnThree").click(function(){
            $("#text-update").val("Thank Heavens!");
            });
                $("#btnCopyHtml").click(function(){
                   var copiedHtml = $(".copy-html").html();
                   $(".paste-html").html(copiedHtml);
                });
                    $("#btnCopyValues").click(function(){
                        var copiedValue = $("#copy-text").val();
                        $("#paste-text").val(copiedValue);
                    });
  });

