//var userinfo =["ali" ,22 ,"egypt" , true ]
//console.log(userinfo)
//userinfo.splice(1,0,"ahmed")
//console.log(userinfo)
//userinfo.shift()
//console.log(userinfo)
//userinfo.unshift("sondos")
//console.log(userinfo)
//console.log(userinfo.length)

//var degree = prompt("enter your degree")
//if(degree >100){
//    prompt("please re-enter your degree")
//}else {
//    if(degree>=85){
//        console.log("A")
//    }
//    else if(degree>=75){
//           console.log("B")
//    }
//    else if(degree>=65){
//           console.log("C")
//    } 
//    else if(degree>=50){
//           console.log("D")
//    }else{
//        console.log("F")
//
//    }
//}
//$('div').css({
//        backgroundColor:"red",
//        height:200,
//        postion:"relative"
//    })
//    $("div p").css({
//        backgroundColor:"blue",
//        height:100,
//        width:200,
//        position:"absolute",
//        top:30,
//        left:"50%"
//
//    })
//    $("div span").css({
//        color:"#fff",
//        display:"block",
//        textAlign:"center"
//    })
//$("button").css({
//        color:"#fff",
//    display:"block",
//    backgroundColor:"blue",
//    width:70,
//    height:30,
//    marginTop:10,
//    marginLeft:"auto",
//    marginRight:"auto"
//    })
//
//
//$(document).ready(function(){
////    
//////    $("div").fadeOut(5000)
//////    $("div").hide()
//////      $('div').slideUp()
////
////    
//////    $('div').fadeIn(1000)
//////    $("div").show()
////     $("div").slideDown(1000)
////
////
//    
//    
//   
//
//    $("button").hover(function(){
//        
//        $("button").css({
//            
//            backgroundColor:"black",
//            color:"#fff"
//        })
//        
//    },function(){
//        
//         $("button").css({
//            
//            backgroundColor:"#fff",
//             color:"#000"
//        })
//    })
//    $("button").click(function(){
//        $("div").slideToggle()
//    })
//    
//})

$(document).ready(function(){
$('.owl-carousel').owlCarousel({
    items:2,
    margin:10,
    dots:false,
    nav:true,
    loop:true,
   navText:['<i class="fa-solid fa-arrow-left left"></i>','<i class="fa-solid fa-arrow-right right"></i>']
}); 
    
    $(".top").click(function(){
        $(window).scrollTop(0)
})
    $(window).scroll(function(){
        if($(this).scrollTop()>100){
       $(".top").fadeIn()
        }else{
       $(".top").fadeOut()

        }
    })
    $(".top").click(function(){
        $("html , body").animate({scrollTop:0},2000)
    })
});



