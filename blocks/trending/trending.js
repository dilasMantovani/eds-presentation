export default async function decorate(block) {

    const items = Array.from(block.children).map(item=>{
        const image=item.children[0].querySelector("img").outerHTML;
        const name=item.children[1].textContent;
        const link=item.children[2].textContent;
        return `
        <div class="col-lg-3 col-md-6">
          <div class="item">
              <div class="thumb">
                  <a href="${link}">${image}</a>
              </div>
              <div class="down-content">
                  <h4>${name}</h4>
                  <a href="${link}"><i class="fa fa-shopping-bag"></i></a>
              </div>
          </div>
        </div>
        `  
    })

    block.innerHTML=`
      <div class="section trending">
        <div class="container">
        <div class="row">
            ${items.join(",").replaceAll(",","")}
        </div>
        </div>
    </div>
    `
}