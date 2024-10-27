
/**
 * loads and decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  block.innerHTML=`
    <header class="header-area header-sticky">
      <div class="container">
          <div class="row">
              <div class="col-12">
                  <nav class="main-nav">
                      <!-- ***** Logo Start ***** -->
                      <a href="index.html" class="logo">
                          <img src="/assets/images/logo.png" alt="" style="width: 158px;">
                      </a>
                      <!-- ***** Logo End ***** -->
                      <!-- ***** Menu Start ***** -->
                      <ul class="nav">
                        <li><a href="index.html" class="active">Home</a></li>
                        <li><a href="shop.html">Our Shop</a></li>
                        <li><a href="product-details.html">Product Details</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>   
                      <a class='menu-trigger'>
                          <span>Menu</span>
                      </a>
                      <!-- ***** Menu End ***** -->
                  </nav>
              </div>
          </div>
      </div>
    </header>
  `
}
