


//Changes color of selected tab, adds animations, hides unselected app

$(function(){
$('.tab').on("click", (function(event){
    let x = this.id
    console.log(x)

    if(x==="discGolf"){
        $('.earbugs').css("display", "none")
        $('.pantry').css("display", "none")
        $('.discGolf').css("display", "block")
        $('#discGolf').css("background-color", "#d1bfa7")
        $('#earbugs').css("background-color", "#bd8c7d")
        $('#pantryManager').css("background-color", "#bd8c7d")
        bounceLeft()
    }

    if(x==="pantryManager"){
        $('.discGolf').css("display", "none")
        $('.earbugs').css("display", "none")
        $('.pantry').css("display", "block")
        $('#pantryManager').css("background-color", "#d1bfa7")
        $('#earbugs').css("background-color", "#bd8c7d")
        $('#discGolf').css("background-color", "#bd8c7d")
        bounceUp()

    }

    if(x==="earbugs"){
        $('.discGolf').css("display", "none")
        $('.pantry').css("display", "none")
        $('.earbugs').css("display", "block")
        $('#earbugs').css("background-color", "#d1bfa7")
        $('#discGolf').css("background-color", "#bd8c7d")
        $('#pantryManager').css("background-color", "#bd8c7d")
        bounceRight()
    }
}
));
})

//different animations to add to apps to be shown


function bounceLeft(){
    $('.pantry').removeClass("animate bounceInUp faster")
    $('.earbugs').removeClass("animate bounceInRight faster")
    $('.discGolf').addClass("animate bounceInLeft faster")
}

function bounceRight(){
    $('.pantry').removeClass("animate bounceInUp faster")
    $('.discGolf').removeClass("animate bounceInLeft faster")
    $('.earbugs').addClass("animate bounceInRight faster")   
}

function bounceUp(){ 
    $('.earbugs').removeClass("animate bounceInRight faster")
    $('.discGolf').removeClass("animate bounceInLeft faster")
    $('.pantry').addClass("animate bounceInUp faster")
}