let url = "dados.xml";

$(document).ready(function() {
    // Load and display all volleyball balls
    $.ajax(url)
        .done(function(xml){
            $(xml).find("bola").each(function(){
                // Convert price from Berrys to reais (assuming 1 Berry = 0.01 reais)
                var priceInReais = parseFloat($(this).find("preco").text()) * 0.01;

                $("#cards").append('<div class="card"><a href="individual.html?id='+ $(this).find("id").text() +'"><p class="procurado">Bola de Vôlei</p> <img class="foto" src="'+ $(this).find("id").text() +'.jpg"><p class="vivo">Preço e cor</p> <p class="nome">'+ $(this).find("nome").text() +'</p> <p class="rec"> <span class="price">R$ '+ priceInReais.toFixed(2) +'</span> <br> <span class="cor">'+ $(this).find("cor").text() +'</span></p></a></div>');
            });
        })
        .fail(function(){
            alert("Ocorreu um erro na leitura do arquivo XML.");
        });

    // Retrieve ID from URL query string
    var url_string = window.location.href;
    var url1 = new URL(url_string);
    var id = parseInt(url1.searchParams.get("id"));

    // Load and display individual volleyball ball details
    $.ajax(url)
        .done(function(xml){
            $(xml).find("bola").each(function(){
                var pos = parseInt($(this).find("id").text());
                if(id === pos){
                    // Convert price from Berrys to reais (assuming 1 Berry = 0.01 reais)
                    var priceInReais = parseFloat($(this).find("preco").text()) * 0.01;

                    $("#individual").append('<div class="card"><p class="procurado">Bola de Vôlei</p> <img class="foto" src="'+ $(this).find("id").text() +'.jpg"><p class="vivo">Preço e cor</p> <p class="nome">'+ $(this).find("nome").text() +'</p> <p class="rec"> <span class="price">R$ '+ priceInReais.toFixed(2) +'</span> <br> <span class="cor">'+ $(this).find("cor").text() +'</span></p></div>');
                }
            });
        })
        .fail(function(){
            alert("Ocorreu um erro na leitura do arquivo XML.");
        });
});
