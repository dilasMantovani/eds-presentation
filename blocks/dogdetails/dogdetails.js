export default async function decorate(block) {
    let dogData = {
        image: null,
        name: null,
        bio: null,
        age: null,
        gender: null,
        isCastrated: null,
    }

    Object.keys(dogData).forEach(key => {
        dogData[key] = Array.from(block.querySelectorAll('div')).find(el => el.textContent === key).nextElementSibling;
    });

    const outputHtml = `
    <div class="page-heading header-text">
        <div class="container">
          <div class="row">
              <div class="col-lg-12">
                  <h3>${dogData.name.textContent}</h3>
              </div>
          </div>
        </div>
    </div>

    <div class="single-product section">
      <div class="container">
      <div class="row">
          <div class="col-lg-6">
          <div class="left-image">
              ${dogData.image.innerHTML}
          </div>
          </div>
          <div class="col-lg-6 align-self-center">
          <h4>${dogData.name.textContent}</h4>
          ${dogData.bio.innerHTML}
          <form id="qty" action="#">
              <button type="submit"><i class="fa fa-shopping-bag"></i> Quero adotar ${dogData.name.textContent}</button>
          </form>
          <ul>
              <li><span>Idade:</span> ${dogData.age.textContent}</li>
              <li><span>Gênero:</span> <a href="#">${dogData.gender.textContent}</a></li>
              <li><span>Castrado:</span> <a href="#">${dogData.isCastrated.textContent}</a></li>
          </ul>
          </div>
          <div class="col-lg-12">
          <div class="sep"></div>
          </div>
      </div>
      </div>
  </div>
  `

  block.innerHTML= outputHtml;
}