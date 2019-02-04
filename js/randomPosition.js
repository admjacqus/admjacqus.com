// window.onLoad = Prep();

// function Prep(){
//     window_Height = window.innerHeight;
//     window_Width = window.innerWidth;
    
//     image_Element = document.getElementById("random");
//     image_Height = image_Element.clientHeight;
//     image_Width = image_Element.clientWidth;
    
//     availSpace_V = window_Height - image_Height;
//     availSpace_H = window_Width - image_Width;
    
//     // var changeInterval = 3000; // Time has to be in miliseconds. So, 3000 is 3 seconds
//     // setInterval(moveImage, changeInterval);
// }




var randomImgs = [
    "https://res.cloudinary.com/dsvt6q8vh/image/upload/v1549208806/11-12/Designs_Lookbook_2012-14.jpg",
    "https://res.cloudinary.com/dsvt6q8vh/image/upload/v1549208803/11-12/Designs_Lookbook_2012-20.jpg",
    "https://res.cloudinary.com/dsvt6q8vh/image/upload/v1549208886/collage/BEHAVIOURTEST-01.png",
    "https://res.cloudinary.com/dsvt6q8vh/image/upload/v1549208790/11-12/Designs_Lookbook_2012-16.jpg",
    "https://res.cloudinary.com/dsvt6q8vh/image/upload/v1549209421/11-12/colummash-pinkrobot.png",
    "https://res.cloudinary.com/dsvt6q8vh/image/upload/v1549208769/11-12/Designs_Lookbook_2012-11.jpg",
    "https://res.cloudinary.com/dsvt6q8vh/image/upload/v1549208743/11-12/Designs_Lookbook_2012-02.jpg",
    "https://res.cloudinary.com/dsvt6q8vh/image/upload/v1549208753/11-12/Designs_Lookbook_2012-09.jpg",
    "https://res.cloudinary.com/dsvt6q8vh/image/upload/v1549208793/11-12/Designs_Lookbook_2012-10.jpg",
    "https://res.cloudinary.com/dsvt6q8vh/image/upload/v1549209298/11-12/eddiesTORM.png",
    "https://res.cloudinary.com/dsvt6q8vh/image/upload/v1549209413/11-12/colummash-y-01.png"
  ];
  

// $('img.random').click(function(){
//   var randomItem = randomImgs[Math.floor(Math.random()*randomImgs.length)];

//     $('img.random').attr('src', randomItem );
//     return false;
// });

    // $.each( randomImgs, function( index, value ) {
        // alert( key + ": " + value );
        // var indexClass = "index" + index;
        // $('#random').before('<img class="random ' + indexClass + '" src="' + value + '" />');
        // moveImage(indexClass);
    //   });

//   });

  $(document).ready(function(){

    window_Height = window.innerHeight;
    window_Width = window.innerWidth;
    
    image_Element = document.getElementById("random");
    image_Height = image_Element.clientHeight;
    image_Width = image_Element.clientWidth;
    
    availSpace_V = window_Height - image_Height;
    availSpace_H = window_Width - image_Width;
    
    // var timesRun = 0; 

// $('.random').click(function() {
        
        // timesRun += 1;

            var randNum_V = Math.round(Math.random() * availSpace_V);
            var randNum_H = Math.round(Math.random() * availSpace_H);
            // console.log("img.random." + currentImg);
            // $("img.random." + currentImg).style.top = randNum_V + "px";
            // $("img.random." + currentImg).style.left = randNum_H + "px";
        


        var randSrc = randomImgs[Math.floor(Math.random() * randomImgs.length)];


        // $("#egg").delay(1000).fadeIn(10).delay(3000).fadeOut(100);

     
        $("#random").attr("src", randSrc, "style.left", randNum_H, "style.top", randNum_V, "style.opacity", 0);
        // $("#random").style.left = randNum_H + "px";
        // $("#random").style.top = randNum_V + "px";
          
        // $("#random").after('<img class="random ' + timesRun + '" src="' + randSrc + '" style="top:' + randNum_H + 'px;left:' + randNum_V + 'px" />');
// $("#random").fadeIn(100);
// console.log(".random." + timesRun);


        // if(timesRun === 5){
        //     clearInterval(interval);
        //     // remove clicks
        // }
    // return false;

// });

});
