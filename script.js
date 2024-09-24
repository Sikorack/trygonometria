function trojkat(){
    var a = (document.getElementById('a').value)
    var b = (document.getElementById('b').value)
    var c = (document.getElementById('c').value)
    
    if(a==''){
        a=Math.sqrt(parseFloat(c)*parseFloat(c)-parseFloat(b)*parseFloat(b))
    }
    if(b==''){
        b=Math.sqrt(parseFloat(c)*parseFloat(c)-parseFloat(a)*parseFloat(a))
    }
    if(c==''){
        c=Math.sqrt(parseFloat(a)*parseFloat(a)+parseFloat(b)*parseFloat(b))
    }
    if(a<=0 || b<=0 || c<=0){
        alert("Bok trójkąta nie może być ujemny lub równy zero!")
        //exit
    }
    a=parseFloat(a)
    b=parseFloat(b)
    c=parseFloat(c)
    const boki = [a,b,c]
    
    najdluzszy=Math.max(a,b,c)
    najkrotszy=Math.min(a,b,c)

    boki.sort(function(a, b){return a - b});
    boki.pop()
    boki.sort(function(a, b){return b - a});
    boki.pop()
    trzeciBok=boki[0]
    sumaDwochKrotszych=trzeciBok+najkrotszy
    if(najdluzszy>=sumaDwochKrotszych){
        alert("Z podanych poniżej wartości nie można zbudować trójkąta")
    }else{
        
        var sin=a/c
        var cos=b/c
        var obwod=a+b+c
        var pole = (a*b)/2
        if(sin<0 || sin>1){
            alert("Taki trójkąt prostokątny nie istnieje")
        }else{
            alfa=Math.asin(sin)
            alfa=alfa*(180 / Math.PI)
            document.getElementById("alfaWynik").innerHTML = "Kąt alfa wynosi: "+alfa;
            document.getElementById("sinWynik").innerHTML = "Sinus wynosi: "+sin;
            document.getElementById("cosWynik").innerHTML = "Cosinus wynosi: "+cos;
            document.getElementById("obwWynik").innerHTML = "Obwód wynosi: "+obwod;
            document.getElementById("poleWynik").innerHTML = "Pole wynosi: "+pole;
            function drawRightTriangle(ctx, base, height, startX, startY, scale) {
                // Skalowanie podstawy i wysokości
                const scaledBase = base * scale;
                const scaledHeight = height * scale;
        
                // Rysowanie trójkąta
                ctx.beginPath();
                ctx.moveTo(startX, startY); // Punkt początkowy
                ctx.lineTo(startX + scaledBase, startY); // Linia wzdłuż podstawy
                ctx.lineTo(startX, startY - scaledHeight); // Linia wzdłuż wysokości
                ctx.closePath();
                ctx.stroke();
        
                // Obliczanie długości przeciwprostokątnej (skalowanej)
                const hypotenuse = Math.sqrt(scaledBase * scaledBase + scaledHeight * scaledHeight);
        
                // Dodawanie długości boków (skalowanych)
                ctx.font = "16px Arial";
                ctx.fillStyle = "black";
                
                // Długość podstawy
                ctx.fillText(scaledBase.toFixed(2)/scale, startX + scaledBase / 2, startY + 20);
        
                // Długość wysokości
                ctx.fillText(scaledHeight.toFixed(2)/scale, startX - 30, startY - scaledHeight / 2);
        
                // Długość przeciwprostokątnej
                ctx.fillText(hypotenuse.toFixed(2)/scale, startX + scaledBase / 2 + 20, startY - scaledHeight / 2);

                const squareSize = 20; // Rozmiar kwadratu dla oznaczenia kąta prostego
                ctx.beginPath();
                ctx.moveTo(startX, startY);
                ctx.lineTo(startX + squareSize, startY);
                ctx.lineTo(startX + squareSize, startY - squareSize);
                ctx.lineTo(startX, startY - squareSize);
                ctx.closePath();
                ctx.stroke();

                // Oznaczenie kąta alfa (symbol α w lewym górnym rogu)
                ctx.font = "24px Arial";
                ctx.fillText("α", startX + scaledBase - 50, startY - 10);
            }
        
            const canvas = document.getElementById("myCanvas");
            const ctx = canvas.getContext("2d");
        
            // Parametry trójkąta: podstawa, wysokość, start X, start Y, skala
            drawRightTriangle(ctx, b, a, 50, 250, 50);





        }
    }
    
    
}
function wyczysc(){
    location.reload()
}