const queryString = document.location.search;
console.log(queryString);

const params = new URLSearchParams(queryString);
console.log(params);

const id = params.get("id");
console.log(id);

const main = document.querySelector("main");

async function getId(id) {
  try {
    const response = await fetch("http://tilici.com/wp-json/wp/v2/posts" + id);
    const jsonResults = await response.json();
    console.log(jsonResults);

    main.innerHTML += `
            
                ${jsonResults.content.rendered}
            
        `;

    // console.log(document.querySelector('.portrait'))
    let backgroundImage = document.querySelector(".portrait");
    backgroundImage.style.backgroundImage = `url('${jsonResults.better_featured_image.source_url}')`;

    const openImg = document.querySelector(".gallery__cover");
    const modalContainer = document.querySelector(".modal__container");

    openImg.onclick = function (e) {
      e.preventDefault();
      console.log(e.target);
      modalContainer.classList.remove("hide");

      targetImg = e.target.getAttribute("src");
      targetAlt = e.target.getAttribute("alt");
      console.log(targetImg);

      modalContainer.innerHTML = `
            <div class="modal__windows">            
                <i class="fas fa-times modal__close"></i>           
                <img class="modal__img" src="${targetImg}" />
                <h2 class="modal__h2">${jsonResults.title.rendered}</h2>
            </div>
        `;
      let modalClose = document.querySelector(".modal__close");

      modalClose.onclick = function (e) {
        console.log(modalClose);
        modalContainer.classList.add("hide");
      };
    };
  } catch (error) {
    document.querySelector(".alert").innerHTML = showAlertTouser(
      "An error occured. We are working to fix it as soon as possible",
      "danger"
    );
    console.log(error);
  } finally {
    setTimeout(function () {
      document.querySelector(".alert").innerHTML = "";
    }, 3000);
  }
}

getId(id);
