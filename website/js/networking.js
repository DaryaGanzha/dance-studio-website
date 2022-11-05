const url = 'https://jsonplaceholder.typicode.com/comments?_limit=10'
const postsList = document.querySelector('.posts__list');

const state = {
    posts: [],
}

const createPost = (post) => `
   <div class="post">
      <div class="post__wrapper">
         <h1 class="wrapper__title">${post.name}</h1>
         <div class="wrapper__body">${post.body}</div>
      </div>
   </div>
`

const fillPostsList = (posts) => {
    postsList.innerHTML = "";
    if (posts.length) {
        posts.forEach((post) => postsList.innerHTML += createPost(post));
    }
}

window.addEventListener("load", async () => {
    await getPostRequest();
    fillPostsList(state.posts);
})

function getRandomNum() {
    let num = Math.floor(Math.random() * 3) + 3;
    console.log(num);
    return num;
}

function showPreloader() {
    document.body.classList.add('.preloader');
}

function getPostRequest() {
    showPreloader();
    return fetch(url, {
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then((res) => {
            if (res.status < 100 * getRandomNum()) {
                return res;
            }
            throw new Error(res.statusText);
        })
        .then((res) => res.json())
        .then((posts) =>  {
            state.posts = state.posts.concat(posts);
            document.querySelector(".preloader").style.display = "none";
        })
        .catch(function (error) {
            console.log(error);
            let err = document.getElementById('#error');
            err.innerHTML = "Что-то пошло не так :(";
        })
}