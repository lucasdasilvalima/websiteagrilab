
function appendElements(appendToThisElement, arr) {
  arr.forEach(e => {
    appendToThisElement.appendChild(e);
  })
}

function configureImgElement(element, className, path, name) {
  element.className = className;
  element.src = path;
  element.alt = name;
}

function configureDescElement(element, description) {
  element.innerHTML = description
}

function configureDiv(element, className, childElements) {
  element.className = className;
  element.appendChild(childElements);
}

function configureProductName(element, name) {
  element.innerHTML = name;
}

function loadProducts() {
  const produtos = item.all_itens_in_agrilab;
  const listaProdutos = document.querySelector("#products");

  produtos.forEach((produto) => {
    const div_name = document.createElement("DIV");
    const product_name = document.createElement("H3");

    const div_description = document.createElement("DIV");
    const product_description = document.createElement("P");
    const div_img = document.createElement("DIV");
    const product_image = document.createElement("IMG");

    configureProductName(product_name, produto.name);

    configureDiv(div_name, "col-md-3 col-md-offset-1", product_name);
    
    configureImgElement(product_image,"img-circle", produto.path_image, produto.name);
    
    configureDiv(div_img, "col-md-4 col-sm-6", product_image);
    
    configureDescElement(product_description, produto.description);

    configureDiv(div_description, "col-md-7", div_img);
    configureDiv(div_description, "col-md-7", product_description);
    

    appendElements(listaProdutos, [div_name, div_description])
    
  });
}
setTimeout(() => loadProducts(), 500)
