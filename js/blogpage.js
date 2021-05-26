// LOADING GIF
document.querySelector(".loading").innerHTML = `<img src="/img/sun.gif"/>`;

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

async function getId(blogId) {
  try {
    const response = await fetch(
      "http://tilici.com/wp-json/wp/v2/posts" + blogId
    );
    const jsonResults = await response.json();

    document.title = jsonResults.title.rendered;
    document.querySelector(".detail__container").innerHTML = `
        <h1 class="h1__headline__js">${jsonResults.title.rendered}</h1>
        <div class="content__text">${jsonResults.content.rendered}</div>
        `;

    // IMAGE MODAL

    const imgModal = document.querySelectorAll(".wp-image");
    const imgOverlay = document.querySelector(".overlay__div");

    imgModal.forEach((element) => {
      element.onclick = function () {
        imgOverlay.style.display = "block";
        imgOverlay.innerHTML = `<img src="${element.src}" />`;
      };
    });
    imgOverlay.onclick = function () {
      imgOverlay.style.display = "none";
    };
  } catch (error) {
    console.log(error);
    document.querySelector(".alert").innerHTML += showAlert(
      "An error has occured",
      "danger"
    );
  } finally {
    document.querySelector(".loading").classList.add("hide");
  }
}

getId(id);
