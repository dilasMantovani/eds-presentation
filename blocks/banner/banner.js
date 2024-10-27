export default async function decorate(block) {

    const welcome = block.children[0].textContent;
    const title = block.children[1].textContent;
    const subtitle = block.children[2].textContent;
    const image = block.children[3];

    block.innerHTML =`
      <div class="main-banner">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 align-self-center">
                <div class="caption header-text">
                    <h6>${welcome}</h6>
                    <h2>${title}</h2>
                    <p>${subtitle}</p>
                </div>
                </div>
                <div class="col-lg-4 offset-lg-2">
                <div class="right-image">
                    ${image.innerHTML}
                </div>
                </div>
            </div>
        </div>
    </div>
    `
}