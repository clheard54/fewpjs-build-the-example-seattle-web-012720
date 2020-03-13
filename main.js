// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const hearts = document.getElementsByClassName("like")

toggleHeart = {
  '♡': '♥',
  '♥': '♡'
}

document.addEventListener("DOMContentLoaded", function() {
  function postLike(event) {
    mimicServerCall()
    .then(response => {
      event.target.innerText = toggleHeart[event.target.innerText]
      event.target.classList.toggle("activated-heart")
      })
      .catch(error => {
        const modal = document.getElementById('modal');
        modal.className = '';
        const modalMsg = document.getElementById('modal-message');
        modalMsg.innerText = error;
        setTimeout(function(){
          modal.className = 'hidden'
        }, 5000)
      })
  }

  for (heartIcon of hearts) {
    heartIcon.addEventListener("click", postLike) 
  }
})

/*
------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------
*/

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
