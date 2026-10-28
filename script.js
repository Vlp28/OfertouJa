/* ===== CONFIGURAÇÃO (mexa só aqui para mudar o destino dos botões) ===== */
// Link de convite do seu grupo do WhatsApp
const LINK_GRUPO = "https://chat.whatsapp.com/KTiGnNSg9xJ6MZV7xvUXYb";
// "grupo"  = todos os botões levam para o grupo
// "loja"   = cada botão leva para o link de afiliado do produto (Shopee, Shein, Mercado Livre...)
const MODO = "grupo";

/* ===== PRODUTOS PRÓPRIOS (3D) =====
   comprar: link de pagamento do produto (Mercado Pago, PagBank, InfinitePay...). O cliente paga
            nessa página e volta para o site. Se deixar "", o botão fica "Em breve".
   foto: nome do arquivo da foto na pasta docs, ex: "docs/suporte.jpg". Se deixar "", usa o emoji. */
const produtosProprios = [
  {nome:"Suporte de celular 3D",   desc:"Impresso em 3D, firme e leve. Várias cores.", preco:29.90, emoji:"📱", cor:"#FFE7B8", foto:"", comprar:""},
  {nome:"Chaveiro personalizado",  desc:"Com o nome ou o desenho que você escolher.",  preco:14.90, emoji:"🔑", cor:"#CFE3FF", foto:"", comprar:""},
  {nome:"Vaso geométrico",         desc:"Decoração moderna para plantas pequenas.",    preco:39.90, emoji:"🪴", cor:"#D5F5E3", foto:"", comprar:""}
];

/* ===== EDITE AQUI: antes = preço antigo (opcional, pode apagar) ===== */
let produtos = [
  {nome:"Fone Bluetooth sem fio",         cat:"Eletrônicos", preco:39.90, antes:79.90, emoji:"🎧", cor:"#BFD9FF", loja:"Shopee", link:"https://shopee.com.br/"},
  {nome:"Kit organizador de gavetas",     cat:"Casa",        preco:24.90, antes:39.90, emoji:"🧺", cor:"#FFD9A8", loja:"Shopee", link:"https://shopee.com.br/"},
  {nome:"Sérum facial vitamina C",        cat:"Beleza",      preco:29.90, antes:59.90, emoji:"🧴", cor:"#FFC2D6", loja:"Shopee", link:"https://shopee.com.br/"},
  {nome:"Luminária LED de mesa",          cat:"Casa",        preco:34.90, antes:54.90, emoji:"💡", cor:"#FFF0A6", loja:"Shopee", link:"https://shopee.com.br/"},
  {nome:"Capinha transparente reforçada", cat:"Eletrônicos", preco:12.90,               emoji:"📱", cor:"#C8F2DA", loja:"Shopee", link:"https://shopee.com.br/"},
  {nome:"Garrafa térmica 500 ml",         cat:"Casa",        preco:27.90, antes:44.90, emoji:"🥤", cor:"#D9CCFF", loja:"Shopee", link:"https://shopee.com.br/"},
  {nome:"Kit de pincéis de maquiagem",    cat:"Beleza",      preco:19.90, antes:35.90, emoji:"🖌️", cor:"#FFCFE9", loja:"Shopee", link:"https://shopee.com.br/"},
  {nome:"Mini caixa de som portátil",     cat:"Eletrônicos", preco:44.90, antes:89.90, emoji:"🔊", cor:"#FFD2C2", loja:"Shopee", link:"https://shopee.com.br/"}
];
/* ================================================================= */
// Atalho para pegar um elemento da página pelo id
const $=id=>document.getElementById(id);
// Categorias que sempre aparecem, mesmo sem produto. Categorias novas dos produtos entram sozinhas.
const CATEGORIAS_FIXAS=["Eletrônicos","Casa","Beleza"];
let cats=["Todos",...new Set([...CATEGORIAS_FIXAS,...produtos.map(p=>p.cat)])];
let atual="Todos", termo="";
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const brl=n=>n.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2});

// Desenha os botões de categoria (Todos, Casa, Beleza...)
function chips(){
  $("chips").innerHTML=cats.map(c=>`<button class="chip" aria-pressed="${c===atual}" data-c="${esc(c)}">${esc(c)}</button>`).join("");
}
// Filtra os produtos pela categoria e pela busca e desenha os cards
function lista(){
  const t=termo.trim().toLowerCase();
  const f=produtos.filter(p=>(atual==="Todos"||p.cat===atual)&&(!t||p.nome.toLowerCase().includes(t)));
  $("count").textContent=atual==="Todos"?"Ofertas de hoje":atual;
  $("grid").innerHTML=f.length?f.map(p=>{
    const d=p.antes?Math.round((1-p.preco/p.antes)*100):0;
    // Escolhe para onde o botão leva e o que está escrito nele, conforme o MODO
    const modoLoja=MODO==="loja"||MODO==="shopee"; // "shopee" é o nome antigo de "loja"
    const destino=modoLoja?p.link:LINK_GRUPO;
    const textoBotao=modoLoja?(p.loja==="Mercado Livre"?"Comprar no Mercado Livre":"Comprar na "+(p.loja||"loja")):"Pegar no grupo";
    return `<article class="card">
      <div class="pic" style="background:${p.cor}" aria-hidden="${p.foto?"false":"true"}">${p.foto?`<img src="${esc(p.foto)}" alt="${esc(p.nome)}" loading="lazy">`:p.emoji}${d>0?`<span class="off">-${d}%</span>`:""}</div>
      <div class="body">
        <h3 class="name">${esc(p.nome)}</h3>
        <span class="cat">${esc(p.cat)}${p.loja?" · "+esc(p.loja):""}</span>
        ${p.antes?`<span class="old">R$ ${brl(p.antes)}</span>`:""}
        <span class="price"><small>R$</small> ${brl(p.preco)}</span>
        <a class="buy" href="${esc(destino)}" target="_blank" rel="noopener${modoLoja?" sponsored":""}">${textoBotao}</a>
      </div></article>`}).join(""):`<p class="vazio">${produtos.length?"Nenhum produto encontrado. Tente outra busca.":"Os achadinhos de hoje estão chegando! Entre no grupo para ver as ofertas."}</p>`;
}
// Desenha a parte "Nossos produtos 3D"
function lista3d(){
  const t=termo.trim().toLowerCase();
  const f3d=produtosProprios.filter(p=>!t||p.nome.toLowerCase().includes(t));
  $("t3d").parentElement.hidden=f3d.length===0;
  $("grid3d").innerHTML=f3d.map(p=>{
    const imagem=p.foto?`<img src="${esc(p.foto)}" alt="${esc(p.nome)}">`:p.emoji;
    return `<article class="card">
      <div class="pic" style="background:${p.cor}" aria-hidden="${p.foto?"false":"true"}">${imagem}</div>
      <div class="body">
        <h3 class="name">${esc(p.nome)}</h3>
        <span class="desc">${esc(p.desc)}</span>
        <span class="price"><small>R$</small> ${brl(p.preco)}</span>
        ${p.comprar?`<a class="buy own" href="${esc(p.comprar)}" target="_blank" rel="noopener">Comprar</a>`:`<span class="buy own soon" aria-disabled="true">Em breve</span>`}
      </div></article>`}).join("");
}
// Quando clica numa categoria, guarda ela e redesenha
$("chips").addEventListener("click",e=>{const b=e.target.closest(".chip");if(b){atual=b.dataset.c;chips();lista()}});
// Quando digita na busca, redesenha a lista
$("busca").addEventListener("input",e=>{termo=e.target.value;lista();lista3d()});
// O botão do topo também leva para o grupo
$("cta-grupo").href=LINK_GRUPO;
// Carrega a lista feita pelo robô (produtos.json). Se não achar o arquivo,
// usa a lista de exemplo que está acima neste arquivo.
async function carregar(){
  try{
    const r=await fetch("produtos.json",{cache:"no-store"});
    if(r.ok){const d=await r.json();if(Array.isArray(d.produtos))produtos=d.produtos;}
  }catch(e){}
  cats=["Todos",...new Set([...CATEGORIAS_FIXAS,...produtos.map(p=>p.cat)])];
  chips();lista();
}
// Primeira vez que a página abre
lista3d();
carregar();
