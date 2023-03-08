"use Strict";
    var $ = function(id) {
    return document.getElementById(id);
    }

    function Calculate() {
        var num = $("numInput").value;
        var c = $("formula").value;
        switch(c) {
            case "circumfrence":
                $("output").innerHTML = (Math.PI * (num * 2)).toFixed(2);
                break;
        
            case "area":
                $("output").innerHTML = (Math.PI * (Math.pow(num, 2))).toFixed(2);
                break;
            case "diameter":
                $("output").innerHTML = (num * 2).toFixed(2);
                break;
            default:
                $("output").innerHTML = "How did we get here?";
                break
        }
    }
    window.onload = function() {
        $("calculate").onclick = Calculate;
    }