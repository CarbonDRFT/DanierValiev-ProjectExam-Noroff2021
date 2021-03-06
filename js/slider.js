async function getPosts() {
  try {
    const repsonse = await fetch(
      "https://pensive-golick-bcccac.netlify.app/http://tilici.com/wp-json/wp/v2/posts?_embed"
    );
    const result = await repsonse.json();

    for (let i = 0; i < result.length; i++) {
      document.querySelector("#slider").innerHTML += `
              <div class="carousel__items">
                  <a href="/details-page.html?id=${result[i].id} ">
                      <img src="${result[i]._embedded["wp:featuredmedia"][0].source_url}" alt="Image of an album cover"/>
                      <h3 class="cardTitleBlog">
                          ${result[i].title.rendered}
                      </h3>
                      <p class="blogg__description">${result[i].excerpt.rendered}</p>
                  </a>
                  <div class="readMore__btn">Read more</div>
              </div>
              `;
    }
    /* ---Carousel slider --- */
    $("#slider").slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow:
        '<span class="prev_arrow"><i class="fas fa-angle-left"></i></span>',
      nextArrow:
        '<span class="next_arrow"><i class="fas fa-angle-right"></i></span>',
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    const loaderContent = document.querySelector(".loader");

    setTimeout(function () {
      loaderContent.style.display = "none";
    });
    /* ---/HideLoader --- */
  } catch (error) {
    document.querySelector(".alert").innerHTML += thisIsAnAlert(
      "An error has occured",
      "danger"
    );
    console.log(error);
  } finally {
    setTimeout(function () {
      document.querySelector(".alert").innerHTML = "";
    }, 3000);
  }
}
getPosts();
