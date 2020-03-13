const hearts = document.getElementsByClassName("like")
let color = hearts[0].getElementsByClassName("like-glyph")[0]

let toggleHeart = {
  '♡': '♥',
  '♥': '♡'
}

let toggleRed = {
  'red': '',
  '': 'red'
}

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", function() {
  function postLikes(e) {
    let heartTarget = e.target
    console.log(heartTarget);
    mimicServerCall()
      .then(response => {
        heartTarget.innerText = toggleHeart[heartTarget.innerText];
        heartTarget.style.color = toggleRed[heartTarget.style.color];
      })
      .catch(function(error) {
        alert("Something went wrong")
        document.getElementById("modal").className = ''
          setTimeout(function() {
          document.getElementById("modal").className = 'hidden'}, 5000)
      })
  }


  for (let i=0; i<hearts.length; i++) {
    let heartIcon = hearts[i];
    heartIcon.addEventListener("click", postLikes) 
  }

});
    
    /*{
          color.innerText = FULL_HEART;
          color.classList.add("activated-heart")
          console.log(color)
        })
      } else if (color.classList == ("like-glyph", "activated-heart")) {
        heartIcon.addEventListener("click", function() {
          color.innerText = EMPTY_HEART;
          color.classList.remove("activated-heart")
        })
        }
      }
}   
  */  
    
      
  // function heartCallback(event) {
  //     let heartIcon = event.target;
  //     let color = heartIcon.getElementsByClassName("like-glyph")[0];
  //     mimicServerCall("huh?")
  //       .then(function(res) {
  //           toggleRed(color);
  //           color.innerText = toggleHeart[color.innerText]
  //           })
  //         .catch(function(error) {
  //           alert("Something has gone terribly wrong")
  //           document.getElementById("modal").className = ''
  //           setTimeout(function() {
  //             document.getElementById("modal").className = 'hidden'}, 5000)
  //         })
  //       };
  //     }
      // 
      //   })
      // }


// for (let i=0; i<hearts.length; i++) {
//   let heartIcon = hearts[i];
//   heartIcon.addEventListener("click", function() {
//      let color = heartIcon.getElementsByClassName("like-glyph")[0];
//      if (color.classList == ("like-glyph") "activated-heart")) {
//        color.innerText = EMPTY_HEART;
//        color.classList.remove("activated-heart")
//      } else {
//      color.innerText = FULL_HEART;
//      color.classList.add("activated-heart")
//      console.log(color)
//      };
//   })
// }

//