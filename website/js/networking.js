// $(document).ready(function() {
// //Preloader
//     let preloaderFadeOutTime = 500;
//     function hidePreloader() {
//         let preloader = $('.spinner-wrapper');
//         preloader.fadeOut(preloaderFadeOutTime);
// }
//     hidePreloader();
// });
//
// function createNode(element) {
//     return document.createElement(element);
// }
//
// function append(parent, el) {
//     return parent.appendChild(el);
// }
//
// const ul = document.getElementById('reviews');
// const url = "https://jsonplaceholder.typicode.com/posts/1";
// const url = "https://randomuser.me/api/?results=10";
//
// fetch(url)
//  .then((resp) => resp.json())
//  .then(function(data) {
//      let reviews = data.result;
//      // console.log(reviews)
//      return reviews.map(function(review) {
//          // let li = createNode('li');
//          // let p = createNode('p');
//          //
//          // append(li, p);
//          // append(ul, li);
//          let li = createNode('li');
//          let img = createNode('img');
//          let span = createNode('span');
//          img.src = review.pictureInPictureElement.media;
//          span.innerHTML = `${review.name.firstChild} ${review.name.lastChild}`;
//          append(li, img);
//          append(li, span);
//          append(ul, li);
//      })
//  })
//  .catch(function (error) {
//      console.log(error);
//  });

// function sendRequest(method, url) {
//     return fetch(url)
//         .then(resp => resp.json())
// }
//
// sendRequest('GET', url)
//  .then(function(data) {
//      console.log(data);
//      obj = JSON.parse(data);
//      console.log(obj.userID);
//      let reviews = data.result;
//      //console.log(reviews);
//      return reviews.map(function(review) {
//          let li = createNode('li');
//          let p = createNode('p');
//          obj = JSON.parse(data);
//          p.innerHTML = obj
//          append(li, p);
//          append(ul, li);
//      })
//  })
//  .catch(error => console.log(error))

const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10'
const postsList = document.querySelector('.posts__list');

const state = {
    posts: [],
}

const createPost = (post, index) => `
   <div class="post">
      <div class="post__wrapper">
         <h1 class="wrapper__title">${post.title}</h1>
         <div class="wrapper__body">${post.body}</div>
      </div>
      <div class="post__buttons">
         <button class="buttons__edit" onclick="editPost(${index})">Edit</button>
         <button class="buttons__delete" onclick="deletePost(${index})">Delete</button>
      </div>
   </div>
`

const fillPostsList = (posts) => {
    postsList.innerHTML = "";
    if (posts.length) {
        posts.forEach((post, index) => postsList.innerHTML += createPost(post, index));
    }
}

window.addEventListener("load", async () => {
    await getPostRequest();
    fillPostsList(state.posts);
})

function getPostRequest() {
    return fetch(url, {
        headers: {
            "Content-type" : "application/json; charset=UTF-8"
        }
    })
        .then((res) => res.json())
        .then((posts) => state.posts = state.posts.concat(posts))
}