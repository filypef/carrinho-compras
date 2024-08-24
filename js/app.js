let totalNoCarrinho = [];
let carrinhoTotal = document.getElementById('valor-total');
totalNoCarrinho.push(parseInt(carrinhoTotal.textContent.replace('R$','')));

function adicionar(){
    let produto = document.getElementById('produto').value;
    let produtoSemEspaco = produto.split(" - ");

    let descricaoProduto = document.getElementById('lista-produtos');
    let quantidade = document.getElementById('quantidade').value;

    if(quantidade == ""){
        alert("Por favor informe um valor!");
        return false;
    }

    let valorDoProduto = produtoSemEspaco[1].replace('R$','') * quantidade;

    console.log(parseInt(carrinhoTotal.textContent.replace('R$','')));

    totalNoCarrinho.push(valorDoProduto);

    descricaoProduto.innerHTML = descricaoProduto.innerHTML + `<section class="carrinho__produtos" id="lista-produtos">
    <section class="carrinho__produtos__produto">
      <span class="texto-azul">${quantidade} x</span> ${produtoSemEspaco[0]} <span class="texto-azul">${produtoSemEspaco[1]}</span>
    </section>
  </section>`;

    carrinhoTotal.innerHTML = totalNoCarrinho.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function limpar(){
    totalNoCarrinho = [];

    document.getElementById('quantidade').value = "";
    document.getElementById('lista-produtos').innerHTML = "";
    document.getElementById('valor-total').innerHTML =  `0`;
}