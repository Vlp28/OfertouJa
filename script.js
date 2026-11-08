/* ===== GOOGLE ANALYTICS =====
   Cole aqui o ID de medição do Google Analytics (começa com G-, ex.: "G-ABC123XYZ9").
   Deixe "" para não usar. */
const GA_ID = "G-S9NRTE5SHC";

/* ===== CONFIGURAÇÃO (mexa só aqui para mudar o destino dos botões) ===== */
// Link de convite do seu grupo do WhatsApp
const LINK_GRUPO = "https://chat.whatsapp.com/KTiGnNSg9xJ6MZV7xvUXYb";
// "grupo"  = todos os botões levam para o grupo
// "loja"   = cada botão leva para o link de afiliado do produto (Shopee, Shein, Mercado Livre...)
const MODO = "loja";

/* ===== PIX (venda direta dos produtos 3D) =====
   Preencha chave, nome e cidade para aparecer o botão "Pagar com Pix" nos produtos 3D
   que não têm link de pagamento. O dinheiro cai direto na sua conta. */
const PIX = { chave: "45516432-b25a-4fbb-9f28-84a7e03fd9d9", nome: "Wallace Farias da Paixao", cidade: "Diadema" };
// Contato para o cliente mandar o comprovante e o endereço (link do WhatsApp, ex: "https://wa.me/5511999999999")
const CONTATO_VENDAS = "https://wa.me/5511941829338";

// Times do chaveiro giratório. Para incluir ou tirar um time, edite esta lista (um nome entre aspas, separado por vírgula).
const TIMES = ["Vasco","Flamengo","Fluminense","Botafogo","Corinthians","Palmeiras","São Paulo","Santos","Grêmio","Internacional","Cruzeiro","Atlético-MG","Bahia","Outro (combinar no WhatsApp)"];

/* ===== PRODUTOS PRÓPRIOS (3D) =====
   comprar: link de pagamento do produto (Mercado Pago, PagBank, InfinitePay...). Se deixar "" e o PIX
            acima estiver preenchido, o botão vira "Pagar com Pix". Sem nenhum dos dois, fica "Em breve".
   foto: caminho da foto dentro do site, ex: "fotos3d/suporte.jpg". Se deixar "", usa o emoji.
   cartao: link de pagamento no cartão (Mercado Pago, PagBank, InfinitePay...). Se preencher, aparece o botão
            "Pagar com cartão" junto do Pix. Deixe "" para não mostrar.
   estoque: quantas unidades restam (opcional). De 1 a 5 aparece "Últimas unidades"; em 0 o botão vira "Esgotado".
            O site não desconta sozinho: quando vender, diminua o número aqui e sincronize. */
const produtosProprios = [
  {nome:"Darth Vader sentado",          desc:"Vader sentado, pronto para enfeitar a beirada da mesa ou da estante.", preco:37.50,  emoji:"🖤", cor:"#E3E6EE", foto:"fotos3d/dark_grande.jpg",    estoque:50, comprar:"", cartao:"https://link.infinitepay.io/wallace-farias-da-727/VC1D-FnSq3IB3p3-37,50"},
  {nome:"Mini Darth Vader",             desc:"Versão miniatura do Vader, boa para a mesa de trabalho.",              preco:19.95,  emoji:"🖤", cor:"#E3E6EE", foto:"fotos3d/dark_miniatura.jpg", estoque:50, comprar:"", cartao:"https://link.infinitepay.io/wallace-farias-da-727/VC1D-c9xHxzXZM9-19,95"},
  {nome:"Chaveiro Hello Kit",           desc:"Chaveiro colorido, pequeno e leve para levar na bolsa.",               preco:28.50,  emoji:"🎀", cor:"#FFD9E8", foto:"fotos3d/hello_kit.jpg",      estoque:50, comprar:"", cartao:"https://link.infinitepay.io/wallace-farias-da-727/VC1D-nrz0GzCGlT-28,50"},
  {nome:"Dispenser de alimento",        desc:"Guarda cebola, alho e batata e libera um por vez.",                    preco:91.00,  emoji:"🧅", cor:"#FFE7B8", foto:"fotos3d/dispenser.jpg",      estoque:50, comprar:"", cartao:"https://link.infinitepay.io/wallace-farias-da-727/VC1D-YNNWnHfaSi-91,00"},
  {nome:"Charizard facetado",           desc:"Charizard em estilo facetado, com asas abertas e cauda em chamas.",    preco:74.00,  emoji:"🔥", cor:"#FFD2C2", foto:"fotos3d/charizard.jpg",      estoque:50, comprar:"", cartao:"https://link.infinitepay.io/wallace-farias-da-727/VC1D-FLPiOuLrS4-74,00"},
  {nome:"Chaveiro giratório de time",   desc:"Chaveiro com o escudo do seu time, que gira. Escolha o time abaixo (a foto é só um exemplo).",                         preco:18.00,  emoji:"🔑", cor:"#CFE3FF", foto:"fotos3d/chaveiro.jpg",       estoque:50, opcoes:{rotulo:"Escolha o time", item:"o time", lista:TIMES}, comprar:"", cartao:"https://link.infinitepay.io/wallace-farias-da-727/VC1D-lhb0PuurxJ-18,00"},
  {nome:"Pokémon pintura",              desc:"Peças para pintar com canetinha. Diversão para as crianças.",          preco:20.16,  emoji:"🖍️", cor:"#FFF0A6", foto:"fotos3d/pokemon.jpg",        estoque:50, comprar:"", cartao:"https://link.infinitepay.io/wallace-farias-da-727/VC1D-DtUW3B0h5N-20,16"},
  {nome:"Suporte para controle remoto", desc:"Organiza os controles remotos num lugar só.",                          preco:32.00,  emoji:"📺", cor:"#D9CCFF", foto:"fotos3d/suporte.jpg",        estoque:50, comprar:"", cartao:"https://link.infinitepay.io/wallace-farias-da-727/VC1D-daBUiL93JN-32,00"},
  {nome:"Funko personalizado",          desc:"Funko com o seu rosto, feito sob encomenda. Depois de pagar, mande a foto no WhatsApp.", preco:330.00, emoji:"🧍", cor:"#E9ECF5", foto:"fotos3d/funko.jpg", estoque:50, comprar:"", cartao:"https://link.infinitepay.io/wallace-farias-da-727/VC1D-C4dC5Qd8Sq-330,00"},
  {nome:"Biscoito de gengibre", desc:"Bonequinho de gengibre para enfeitar o Natal.", preco:39.90, emoji:"🍪", cor:"#F3E3CC", foto:"fotos3d/biscoito.jpg", estoque:50, comprar:"", cartao:"https://link.infinitepay.io/wallace-farias-da-727/VC1D-KQ08UKMRUQ-39,90"},
  {nome:"Boneco de neve", desc:"Boneco de neve com gorro e cachecol vermelhos.", preco:39.90, emoji:"⛄", cor:"#E3ECF7", foto:"fotos3d/boneco_neve.jpg", estoque:50, comprar:"", cartao:"https://link.infinitepay.io/wallace-farias-da-727/VC1D-KQ08UKMRUQ-39,90"},
  {nome:"Papai Noel", desc:"Papai Noel sentadinho, para enfeitar a casa no Natal.", preco:45.00, emoji:"🎅", cor:"#FFD9D2", foto:"fotos3d/papai_noel.jpg", estoque:50, comprar:"", cartao:"https://link.infinitepay.io/wallace-farias-da-727/VC1D-DX8GluIxW3-45,00"},
  {nome:"Pinguim", desc:"Pinguim com gorro de Natal, para decorar ou presentear.", preco:39.90, emoji:"🐧", cor:"#E3ECF7", foto:"fotos3d/pinguim.jpg", estoque:50, comprar:"", cartao:"https://link.infinitepay.io/wallace-farias-da-727/VC1D-KQ08UKMRUQ-39,90"},
  {nome:"Rena", desc:"Rena com chifres, para completar a decoração de Natal.", preco:39.90, emoji:"🦌", cor:"#F3E3CC", foto:"fotos3d/rena.jpg", estoque:50, comprar:"", cartao:"https://link.infinitepay.io/wallace-farias-da-727/VC1D-KQ08UKMRUQ-39,90"},
  {nome:"Urso polar", desc:"Urso polar com gorro e cachecol de Natal.", preco:39.90, emoji:"🐻‍❄️", cor:"#E3ECF7", foto:"fotos3d/urso_polar.jpg", estoque:50, comprar:"", cartao:"https://link.infinitepay.io/wallace-farias-da-727/VC1D-KQ08UKMRUQ-39,90"},
  {nome:"Mini Jesus", desc:"Mini Jesus sentadinho, para ter em casa ou presentear.", preco:32.00, emoji:"✝️", cor:"#F3E3CC", foto:"fotos3d/mini_jesus.jpg", estoque:50, comprar:"", cartao:"https://link.infinitepay.io/wallace-farias-da-727/VC1D-dmhrYshKi6-32,00"},
  {nome:"Símbolo GTA 6", desc:"Placa com o logo do GTA 6, para enfeitar a mesa ou a estante.", preco:62.50, emoji:"🎮", cor:"#E3D9FF", foto:"fotos3d/gta.jpg", estoque:50, comprar:"", cartao:"https://link.infinitepay.io/wallace-farias-da-727/VC1D-u6iIgHMGAC-62,50"},
  {nome:"Chaveiro de coração", desc:"Chaveiro em formato de coração, ótimo para presentear.", preco:11.40, emoji:"❤️", cor:"#FFD9D2", foto:"fotos3d/chaveiro_coracao.jpg", estoque:50, comprar:"", cartao:"https://link.infinitepay.io/wallace-farias-da-727/VC1C-wwHOpQl7B2-11,40"}
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
const CATEGORIAS_FIXAS=["Eletrônicos","Casa","Beleza","Moda","Achados"];
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
      </div></article>`}).join(""):`<p class="vazio">${!produtos.length?"Os achadinhos de hoje estão chegando! Entre no grupo para ver as ofertas.":(!t&&atual!=="Todos")?"Ainda não tem ofertas em "+esc(atual)+". Entre no grupo para ver as novidades!":"Nenhum produto encontrado. Tente outra busca."}</p>`;
}
// Opções do produto (ex.: escolher o time do chaveiro). Guarda o que a pessoa escolheu.
const escolhas={};
const linkZap=t=>CONTATO_VENDAS+(CONTATO_VENDAS.includes("?")?"&":"?")+"text="+encodeURIComponent(t);
function seletor(p,i){
  if(!p.opcoes)return "";
  const sel=escolhas[i]||"";
  return `<label class="opc"><span>${esc(p.opcoes.rotulo)}</span><select data-opc="${i}"><option value="">Selecione...</option>${p.opcoes.lista.map(o=>`<option${o===sel?" selected":""}>${esc(o)}</option>`).join("")}</select><span class="opc-erro" hidden>Escolha primeiro.</span></label>`;
}
function avisoOpc(p,i){
  if(!p.opcoes)return "";
  const sel=escolhas[i];
  let h=`<span class="opc-aviso">Depois de pagar, mande o comprovante e ${esc(p.opcoes.item)} escolhido no WhatsApp.`;
  if(sel&&CONTATO_VENDAS)h+=` <a href="${esc(linkZap("Olá! Comprei o "+p.nome+" ("+sel+"). Segue o comprovante."))}" target="_blank" rel="noopener">Avisar no WhatsApp</a>`;
  return h+`</span>`;
}
// Monta os botões do produto 3D: Pix (se a chave estiver preenchida) e cartão (se tiver link em "cartao")
function botoes(p,i,pixPronto,esgotado){
  if(esgotado)return `<span class="buy own soon" aria-disabled="true">Esgotado</span>`;
  if(p.comprar)return `<a class="buy own" href="${esc(p.comprar)}" target="_blank" rel="noopener">Comprar</a>`;
  let h="";
  if(pixPronto)h+=`<button type="button" class="buy own" data-pix="${i}">Pagar com Pix</button>`;
  if(p.cartao)h+=`<a class="buy cartao" data-i="${i}" href="${esc(p.cartao)}" target="_blank" rel="noopener">Pagar com cartão</a>`;
  return h||`<span class="buy own soon" aria-disabled="true">Em breve</span>`;
}
// Desenha a parte "Nossos produtos 3D"
function lista3d(){
  const t=termo.trim().toLowerCase();
  const f3d=produtosProprios.map((p,i)=>({p,i})).filter(({p})=>!t||p.nome.toLowerCase().includes(t));
  $("t3d").parentElement.hidden=f3d.length===0;
  const pixPronto=!!(PIX.chave&&PIX.nome&&PIX.cidade);
  const acabou=p=>p.estoque!==undefined&&p.estoque<=0;
  $("grid3d").innerHTML=f3d.map(({p,i})=>{
    const imagem=p.foto?`<img src="${esc(p.foto)}" alt="${esc(p.nome)}">`:p.emoji;
    return `<article class="card">
      <div class="pic" style="background:${p.cor}" aria-hidden="${p.foto?"false":"true"}">${imagem}</div>
      <div class="body">
        <h3 class="name">${esc(p.nome)}</h3>
        <span class="desc">${esc(p.desc)}</span>
        ${p.estoque>0&&p.estoque<=5?`<span class="ultimas">Últimas ${p.estoque} unidade${p.estoque>1?"s":""}</span>`:""}
        <span class="price"><small>R$</small> ${brl(p.preco)}</span>
        ${acabou(p)?"":seletor(p,i)}
        ${botoes(p,i,pixPronto,acabou(p))}
        ${acabou(p)?"":avisoOpc(p,i)}
      </div></article>`}).join("");
}
// ----- Pix "copia e cola" (padrão do Banco Central) -----
const semAcento=s=>s.normalize("NFD").replace(/[\u0300-\u036f]/g,"");
const campo=(id,v)=>id+String(v.length).padStart(2,"0")+v;
// Código de verificação (CRC16) que fecha o código Pix
function crc16(t){let c=0xFFFF;for(let i=0;i<t.length;i++){c^=t.charCodeAt(i)<<8;for(let j=0;j<8;j++)c=(c&0x8000)?((c<<1)^0x1021):(c<<1);c&=0xFFFF}return c.toString(16).toUpperCase().padStart(4,"0")}
function pixPayload(valor){
  const conta=campo("00","br.gov.bcb.pix")+campo("01",PIX.chave.trim());
  const nome=semAcento(PIX.nome).toUpperCase().slice(0,25);
  const cidade=semAcento(PIX.cidade).toUpperCase().slice(0,15);
  const base=campo("00","01")+campo("01","11")+campo("26",conta)+campo("52","0000")+campo("53","986")+campo("54",valor.toFixed(2))+campo("58","BR")+campo("59",nome)+campo("60",cidade)+campo("62",campo("05","***"))+"6304";
  return base+crc16(base);
}
// Abre a janela de pagamento do produto 3D número i
function abrirPix(i){
  const p=produtosProprios[i], codigo=pixPayload(p.preco);
  const esc1=escolhas[i]||"";
  $("pix-titulo").textContent=p.nome+(esc1?" – "+esc1:"");
  $("pix-valor").textContent="R$ "+brl(p.preco);
  $("pix-codigo").value=codigo;
  $("pix-qr").innerHTML="";
  if(window.QRCode)new QRCode($("pix-qr"),{text:codigo,width:200,height:200,correctLevel:QRCode.CorrectLevel.M});
  $("pix-contato").hidden=!CONTATO_VENDAS;
  if(CONTATO_VENDAS)$("pix-contato").href=linkZap("Olá! Paguei o "+p.nome+(esc1?" ("+esc1+")":"")+" (R$ "+brl(p.preco)+"). Segue o comprovante.");
  $("pix-copiar").textContent="Copiar código Pix";
  $("modal-pix").hidden=false;
}
const fecharPix=()=>{$("modal-pix").hidden=true};
// Se o produto tem opção (ex.: time) e a pessoa ainda não escolheu, avisa em vez de pagar
function faltaEscolha(i,el){
  const p=produtosProprios[i];
  if(!p.opcoes||escolhas[i])return false;
  const card=el.closest(".card"), sel=card&&card.querySelector("select");
  if(sel){sel.classList.add("erro");const m=card.querySelector(".opc-erro");if(m)m.hidden=false;sel.focus()}
  return true;
}
$("grid3d").addEventListener("click",e=>{
  const b=e.target.closest("[data-pix]");
  if(b){const i=Number(b.dataset.pix);if(!faltaEscolha(i,b))abrirPix(i);return}
  const c=e.target.closest("a.cartao[data-i]");
  if(c&&faltaEscolha(Number(c.dataset.i),c))e.preventDefault();
});
$("grid3d").addEventListener("change",e=>{
  const s=e.target.closest("select[data-opc]");
  if(s){escolhas[Number(s.dataset.opc)]=s.value;lista3d()}
});
$("pix-fechar").addEventListener("click",fecharPix);
$("modal-pix").addEventListener("click",e=>{if(e.target.id==="modal-pix")fecharPix()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")fecharPix()});
$("pix-copiar").addEventListener("click",async()=>{
  const t=$("pix-codigo");
  try{await navigator.clipboard.writeText(t.value)}catch(err){t.select();document.execCommand("copy")}
  $("pix-copiar").textContent="Código copiado!";
});
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
// Google Analytics: só liga se o GA_ID estiver preenchido
if(GA_ID){
  const g=document.createElement("script");
  g.async=true; g.src="https://www.googletagmanager.com/gtag/js?id="+encodeURIComponent(GA_ID);
  document.head.appendChild(g);
  window.dataLayer=window.dataLayer||[];
  window.gtag=function(){window.dataLayer.push(arguments)};
  window.gtag("js",new Date()); window.gtag("config",GA_ID);
}
