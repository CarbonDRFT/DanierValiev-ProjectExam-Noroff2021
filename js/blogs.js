const postsAPI = "http://tilici.com/wp-json/wp/v2/posts/";

const getposts = async (url) => {
  try {
    const repsonse = await fetch(url);
    const posts = await repsonse.json();
    console.log(posts);

    document.querySelector(".loader").classList.add("hide");

    posts.forEach((element) => {
      document.querySelector(".blogList__section").innerHTML += `
      <div class="card__containerBlog">
      <a href="blogpage.html?id=${element.id}">
        <img class="cardBlog" src="${element.better_featured_image.source_url}">
      </a>
        <h3 class="cardTitleBlog">${element.title.rendered}</h3>
        <p class="blogg__date">${element.date}</p>
        <p class="blogg__author"${element._embedded["author"].name}</p>
        <p class="blogg__description">${element.excerpt.rendered}</p>
        </div>`;
    });
  } catch (error) {
    document.querySelector(".alert").innerHTML = showAlertTouser(
      "An error occured (Cannot load content)",
      "error"
    );
    console.log(error);
  } finally {
    setTimeout(function () {
      document.querySelector(".alert").innerHTML = "";
    }, 3000);
  }
};
getposts(postsAPI);

const viewMoreBtn = document.getElementById("viewMoreBtn");
const viewMoreDiv = document.querySelector(".viewMoreDiv");

viewMoreBtn.onclick = function () {
  getPosts(postsUrl + "&page=2");
  viewMoreDiv.innerHTML = ` <div class="loader hidden">
  <img src="/img/loader.gif" alt="Loading..." />
</div>`;
  setTimeout(function () {
    viewMoreDiv.innerHTML = ``;
  }, 1000);
  viewMoreBtn.style.display = "none";
};
