import { posts } from "./database.js";
publications(posts)
    function publications(posts) {
        const postsList = document.querySelector('.publications__people');

        for (let i = 0; i < posts.length; i++) {

            const liUser = document.createElement('li')
            liUser.classList.add("publications__item")
            

            const userBoxDiv = document.createElement("div") //div que separa o box do usuario autor do post
            userBoxDiv.classList.add("publications__user-box")

            const divUserImg = document.createElement('div'); //separando a imagem
            const imgUser = document.createElement('img');
            imgUser.setAttribute('src', posts[i].img);

            const divUser = document.createElement('div') //separando o outro lado
            const pName = document.createElement('h2');
            pName.textContent = posts[i].user;
            const pStack = document.createElement('p');
            pStack.textContent = posts[i].stack;

            const postContent = document.createElement("div")
            postContent.classList.add("publications__post-content")
            const postTitle = document.createElement("h1")
            postTitle.classList.add('publications__post-title')
            postTitle.textContent = posts[i].title
            const postText = document.createElement("p")
            postText.classList.add("publications__post-text")
            postText.textContent = posts[i].text

            const postButtonsContainer = document.createElement("div")
            postButtonsContainer.classList.add("publications__posts-buttons")
            const btnOpenModal = document.createElement("button")
            btnOpenModal.textContent = "Abrir post"
            btnOpenModal.classList.add("publications__post-button-open-modal")
            const btnToLike = document.createElement("img")
            btnToLike.classList.add('span__style')
            btnToLike.src = "./src/assets/img/grey.svg"
            btnToLike.addEventListener("click", () => {
              btnToLike.classList.toggle("liked")
              if(btnToLike.classList.contains("liked")){

                btnToLike.src ="./src/assets/img/liked.svg"
              }else{
                btnToLike.src = "./src/assets/img/grey.svg"
              }
            })
            const spanCount = document.createElement("span")
            spanCount.textContent = posts[i].likes

            postContent.append(postTitle, postText)
            divUserImg.appendChild(imgUser)
            divUser.append(pName, pStack)
            userBoxDiv.append(divUserImg, divUser)
            postButtonsContainer.append(btnOpenModal, btnToLike, spanCount)
            liUser.append(userBoxDiv, postContent, postButtonsContainer,)

            postsList.appendChild(liUser)
            openPost(btnOpenModal, posts[i])
        }
    }

    function openPost(btn, post){
        btn.addEventListener("click", function () {
            const dialog = document.querySelector(".modal__dialog")
            dialog.innerHTML = ""
        
            const btnOpenModalclose = document.createElement("button")
            btnOpenModalclose.textContent = "x"
            btnOpenModalclose.classList.add("close__modal")

            const userBoxDiv = document.createElement("div") //div que separa o box do usuario autor do post
            userBoxDiv.classList.add("publications__user-box")

            const divUserImg = document.createElement('div'); //separando a imagem
            const imgUser = document.createElement('img');
            imgUser.setAttribute('src', post.img);

            const divUser = document.createElement('div') //separando o outro lado
            const pName = document.createElement('h2');
            pName.textContent = post.user;
            const pStack = document.createElement('p');
            pStack.textContent = post.stack;

            const postContent = document.createElement("div")
            postContent.classList.add("publications__post-content")
            const postTitle = document.createElement("h1")
            postTitle.classList.add('publications__post-title')
            postTitle.textContent = post.title
            const postText = document.createElement("p")
            postText.classList.add("publications__post-text")
            postText.textContent = post.text

            postContent.append(postTitle, postText, btnOpenModalclose)
            divUserImg.appendChild(imgUser)
            divUser.append(pName, pStack)
            userBoxDiv.append(divUserImg, divUser)

            dialog.append(userBoxDiv, postContent)
            dialog.showModal()
            modalClose(btnOpenModalclose)

        } )
} 


function modalClose (bnt){
    const modalCLose = document.querySelector(".close__modal")
    const modalDialog = document.querySelector(".modal__dialog")
    bnt.addEventListener('click', function (){
            modalDialog.close()
    } )
        
}


function buttonT() {
    const btns = document.querySelectorAll('.bnt');
    btns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        if (this.innerText === 'Seguir') {
          this.innerText = 'Seguindo';
          this.style.backgroundColor = '#364fc7';
          this.style.color = '#f8f9fa';
          this.style.width = '5.625rem';
        } else {
          this.innerText = 'Seguir';
          this.style.backgroundColor = '#f8f9fa';
          this.style.color = '#0a0c0d';
          this.style.width = '4.375rem';
        }
      });
    });
  }
  buttonT();


  


