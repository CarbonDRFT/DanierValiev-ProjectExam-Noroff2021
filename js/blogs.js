const postsUrl = "http://tilici.com/wp-json/wp/v2/posts?_embed";

async function getPosts(postsUrl) {
  try {
    const repsonse = await fetch(postsUrl);
    const jsonFromServer = await repsonse.json();
    const postsResults = jsonFromServer;
    console.log(postsResults);

    document.querySelector(".loader").classList.add("hide");

    for (let i = 0; i < postsResults.length; i++) {
      document.querySelector(".blogList__section").innerHTML += `
      <div class="card__containerBlog">
      <a href="blogpage.html?id=${postsResults.id}">
        <img class="cardBlog" src="${postsResults[i]._embedded["wp:featuredmedia"]["0"].source_url}"/>
      </a>
        <h3 class="cardTitleBlog">${postsResults[i].title.rendered}</h3>
        <p class="blogg__date">${postsResults[i].date}</p>
        <p class="blogg__author"${postsResults[i]._embedded["author"].name}</p>
        <p class="blogg__description">${postsResults[i].excerpt.rendered}</p>
        </div>`;

      if (i === 9) {
        break;
      }
    }
  } catch (error) {
    document.querySelector(".alert").innerHTML = showAlertTouser(
      "An error occured (Cannot load content)",
      "error"
    );
  } finally {
    setTimeout(function () {
      document.querySelector(".alert").innerHTML = "";
    }, 3000);
  }
}

getPosts(postsUrl);

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
