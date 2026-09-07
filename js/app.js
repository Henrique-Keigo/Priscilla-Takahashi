(function () {
  "use strict";

  /* ============================== Dados-base ============================== */

  var BRAND = "Priscila Takahashi";
  var CIDADE = "São José dos Campos";
  var CRECI = "CRECI/SP 214.508-F";
  var WHATSAPP = "+55 11 95314-9899";
  var EMAIL = "Printakahashi@gmail.com";
  var INSTAGRAM = "priscillatakahashi";

  var FEATS = ["Vista para a serra", "Piscina", "Condomínio fechado", "Portaria 24h", "Área gourmet", "Lareira", "Mobiliado", "Elevador", "Energia solar", "Aceita pets", "Home office", "Jardim", "Pé-direito duplo", "Quintal amplo"];
  var TIPOS = ["Casa", "Apartamento", "Cobertura", "Loft", "Studio", "Terreno"];
  var FAIXAS = [
    { v: "0-800000", l: "Até R$ 800 mil" },
    { v: "800000-1500000", l: "R$ 800 mil a 1,5 mi" },
    { v: "1500000-3000000", l: "R$ 1,5 a 3 milhões" },
    { v: "3000000-99000000", l: "Acima de R$ 3 milhões" },
    { v: "0-5000", l: "Aluguel até R$ 5 mil" },
    { v: "5000-20000", l: "Aluguel R$ 5 a 20 mil" }
  ];

  var STATUS_LABEL = { ativo: "Ativo", vendido: "Vendido", alugado: "Alugado", rascunho: "Rascunho" };

  var SEED = [
    { id: "p1", titulo: "Casa de arquiteto no Urbanova", bairro: "Urbanova", tipo: "Casa", modo: "Venda", preco: 3850000, area: 420, quartos: 4, banheiros: 5, vagas: 4, status: "ativo", etiquetas: ["Exclusivo"], feats: ["Piscina", "Condomínio fechado", "Área gourmet", "Jardim", "Energia solar", "Home office"], endereco: "Rua das Andorinhas, 240", desc: "Projeto de 2018 implantado no sentido do declive do terreno, o que resolveu a insolação sem precisar de brises: a manhã entra pelos quartos e a tarde fica na área gourmet. Nenhuma árvore adulta foi removida na obra.", desc2: "Suíte máster no pavimento superior com varanda voltada para a mata. Cozinha integrada com ilha e despensa, lavanderia com acesso independente e um escritório de 18 m² com entrada própria — funciona para quem atende cliente em casa. Aquecimento solar, cisterna e gerador. A piscina foi retratada em 2023; o deck de madeira pede manutenção anual.", obs: "Proprietários se mudam para Campinas em fevereiro. Chave no escritório. Aceitam proposta até 7%.", photos: [], coverIdx: 0 },
    { id: "p2", titulo: "Cobertura duplex no Jardim Aquarius", bairro: "Jardim Aquarius", tipo: "Cobertura", modo: "Venda", preco: 2450000, area: 268, quartos: 3, banheiros: 4, vagas: 3, status: "ativo", etiquetas: ["Reformado"], feats: ["Vista para a serra", "Elevador", "Área gourmet", "Mobiliado", "Pé-direito duplo", "Portaria 24h"], endereco: "Av. Salmão, 1.120", desc: "Duplex no topo de um edifício de 2006 com apenas duas unidades por andar. A reforma de 2022 abriu a sala em pé-direito duplo e virou a cozinha para a vista da Serra da Mantiqueira.", desc2: "Terraço com churrasqueira, forno de pizza e espaço para ofurô já com ponto de água quente. Marcenaria assinada em todos os ambientes, ar-condicionado por ambiente e automação de iluminação. Condomínio com piscina aquecida, quadra e salão reformados em 2024.", obs: "Documentação em ordem, sem ônus. Proprietário aceita permuta por apartamento menor no Aquarius.", photos: [], coverIdx: 0 },
    { id: "p3", titulo: "Casa térrea nas Colinas do Paratehy", bairro: "Colinas do Paratehy", tipo: "Casa", modo: "Venda", preco: 4900000, area: 520, quartos: 4, banheiros: 6, vagas: 6, status: "ativo", etiquetas: [], feats: ["Piscina", "Condomínio fechado", "Portaria 24h", "Área gourmet", "Jardim", "Energia solar"], endereco: "Alameda dos Ipês, 55", desc: "Toda a casa em um único pavimento, distribuída em três alas independentes em torno de um pátio com espelho d'água. Terreno de 1.400 m² plano, raro no condomínio.", desc2: "Quatro suítes, sendo a máster com closet duplo e banheira. Cozinha profissional, adega climatizada e área gourmet coberta com 90 m². Energia solar dimensionada para consumo integral e poço artesiano outorgado. Paisagismo executado em 2020, já formado.", obs: "Condomínio cobra taxa de R$ 1.850. Visitas apenas com agendamento na portaria — pedir autorização com 24h.", photos: [], coverIdx: 0 },
    { id: "p4", titulo: "Apartamento mobiliado no Jardim Esplanada", bairro: "Jardim Esplanada", tipo: "Apartamento", modo: "Aluguel", preco: 6800, area: 128, quartos: 3, banheiros: 2, vagas: 2, status: "ativo", etiquetas: ["Mobiliado"], feats: ["Mobiliado", "Elevador", "Home office", "Aceita pets"], endereco: "Rua Ministro Nelson Hungria, 310", desc: "Três dormitórios num prédio dos anos 90 bem conservado, a dez minutos do Parque Vicentina Aranha e a quinze do Parque Tecnológico. Sol da manhã na sala.", desc2: "Alugado mobiliado, com marcenaria sob medida e escrivaninha embutida no dormitório menor — pronto para quem chega a trabalho na cidade. Duas vagas cobertas, portaria 24 horas e infraestrutura de fibra em todos os ambientes.", obs: "Locação mínima de 30 meses. Proprietária pede seguro-fiança. Aceita um pet de pequeno porte.", photos: [], coverIdx: 0 },
    { id: "p5", titulo: "Casa em condomínio no Altos da Serra", bairro: "Altos da Serra", tipo: "Casa", modo: "Aluguel", preco: 12500, area: 340, quartos: 4, banheiros: 4, vagas: 4, status: "ativo", etiquetas: [], feats: ["Piscina", "Condomínio fechado", "Área gourmet", "Aceita pets", "Quintal amplo"], endereco: "Rua Guaimbé, 78", desc: "Casa de dois pavimentos em condomínio fechado, com quintal gramado de 300 m² e piscina aquecida. Pensada para família com crianças: sala e cozinha abrem juntas para a área externa, com visão completa do quintal.", desc2: "Quatro dormitórios, sendo duas suítes, e um lavabo social. Área gourmet coberta com churrasqueira e forno. Condomínio com portaria 24 horas, playground e quadra. A dez minutos da Via Dutra.", obs: "Disponível a partir de outubro. Inquilino atual sai no dia 30 — combinar visitas fora do horário comercial.", photos: [], coverIdx: 0 },
    { id: "p6", titulo: "Loft de esquina na Vila Adyana", bairro: "Vila Adyana", tipo: "Loft", modo: "Venda", preco: 780000, area: 68, quartos: 1, banheiros: 1, vagas: 1, status: "ativo", etiquetas: ["Novidade"], feats: ["Pé-direito duplo", "Home office", "Elevador"], endereco: "Rua Paraibuna, 615", desc: "Um único volume de concreto aparente e vidro, pé-direito de 4,8 metros e mezanino de dormir. Duas fachadas com janela, no miolo da Vila Adyana.", desc2: "Ideal como primeiro imóvel ou base de trabalho na cidade: os restaurantes e cafés da região estão todos a pé. Prédio novo, com bicicletário e coworking no térreo.", obs: "Entregue em 2024, ainda com garantia de construtora. Proprietário nunca morou.", photos: [], coverIdx: 0 },
    { id: "p7", titulo: "Casa de campo no Alto da Boa Vista", bairro: "Campos do Jordão", tipo: "Casa", modo: "Venda", preco: 2980000, area: 310, quartos: 4, banheiros: 4, vagas: 3, status: "ativo", etiquetas: ["Segunda casa"], feats: ["Lareira", "Vista para a serra", "Jardim", "Área gourmet"], endereco: "Rua das Hortênsias, 402", desc: "Estrutura de madeira e pedra, com a sala de estar voltada para o vale e duas lareiras — uma na sala, outra na suíte máster. Terreno de 900 m² com araucárias preservadas.", desc2: "Quatro dormitórios, todos com aquecimento central. Cozinha com fogão a lenha em uso e adega sob a escada. A oito minutos do Capivari, mas em rua sem passagem, silenciosa até na alta temporada.", obs: "Usada como segunda casa, ocupada cerca de 60 dias por ano. Mobília pode ficar em negociação separada.", photos: [], coverIdx: 0 },
    { id: "p8", titulo: "Sobrado reformado no Jardim Apolo", bairro: "Jardim Apolo", tipo: "Casa", modo: "Venda", preco: 1290000, area: 210, quartos: 3, banheiros: 3, vagas: 2, status: "ativo", etiquetas: [], feats: ["Quintal amplo", "Área gourmet", "Aceita pets", "Home office"], endereco: "Rua Icaraí, 190", desc: "Sobrado dos anos 90 com reforma completa em 2021: planta reorganizada, esquadrias novas e um jardim de inverno que resolveu a ventilação do centro da casa.", desc2: "Três dormitórios no piso superior, escritório e lavabo no térreo. Quintal com árvores frutíferas adultas e churrasqueira de tijolo. A cinco minutos do Colégio Univap e da Av. Cassiano Ricardo.", obs: "Reforma com nota fiscal, pasta com todos os projetos disponível. Aceita financiamento.", photos: [], coverIdx: 0 },
    { id: "p9", titulo: "Garden no Bosque dos Eucaliptos", bairro: "Bosque dos Eucaliptos", tipo: "Apartamento", modo: "Venda", preco: 690000, area: 96, quartos: 3, banheiros: 2, vagas: 1, status: "ativo", etiquetas: [], feats: ["Jardim", "Aceita pets", "Portaria 24h"], endereco: "Rua Aurora, 88", desc: "Apartamento térreo com quintal privativo de 40 m² — o formato mais difícil de achar na zona sul. Três dormitórios, sendo um adaptado como escritório.", desc2: "Condomínio com portaria 24 horas, piscina e salão de festas. Perto do Shopping Colinas, da Dutra e de duas escolas municipais.", obs: "Proprietária mora fora, negociação por telefone. Precisa de pintura — considerar no valor.", photos: [], coverIdx: 0 },
    { id: "p10", titulo: "Casa com piscina na Vila Ema", bairro: "Vila Ema", tipo: "Casa", modo: "Venda", preco: 1750000, area: 240, quartos: 4, banheiros: 3, vagas: 3, status: "vendido", etiquetas: [], feats: ["Jardim", "Piscina", "Quintal amplo"], endereco: "Rua Uruguaiana, 71", desc: "Casa dos anos 80 com telhado aparente, piscina e um quintal que ocupa mais da metade do terreno.", desc2: "Vendida em julho de 2026. Mantemos no site como referência de negociação no bairro.", obs: "Vendida. Comprador pediu indicação de outra casa na região para a família.", photos: [], coverIdx: 0 },
    { id: "p11", titulo: "Studio no Centro, pronto para morar", bairro: "Centro", tipo: "Studio", modo: "Aluguel", preco: 2400, area: 38, quartos: 1, banheiros: 1, vagas: 1, status: "alugado", etiquetas: [], feats: ["Mobiliado", "Elevador"], endereco: "Rua Rubião Júnior, 240", desc: "Studio compacto e mobiliado, a cinco minutos da Praça Afonso Pena.", desc2: "Alugado em agosto de 2026.", obs: "Contrato até 2028.", photos: [], coverIdx: 0 },
    { id: "p12", titulo: "Terreno em condomínio em Jacareí", bairro: "Jacareí", tipo: "Terreno", modo: "Venda", preco: 520000, area: 1000, quartos: 0, banheiros: 0, vagas: 0, status: "rascunho", etiquetas: [], feats: ["Condomínio fechado", "Vista para a serra"], endereco: "Estrada do Limoeiro, s/n", desc: "", desc2: "", obs: "Falta conferir a metragem na matrícula e agendar as fotos com o drone.", photos: [], coverIdx: 0 }
  ];

  /* ============================== Utilidades ============================== */

  function moneyBR(n) {
    var v = Number(n);
    if (!v || isNaN(v)) return "Valor a combinar";
    return "R$ " + v.toLocaleString("pt-BR", { maximumFractionDigits: 0 });
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function uid(prefix) { return prefix + Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }

  /* ============================== Estado ============================== */

  var STORE_KEY = "ptk.priscilla.v1";

  var state = {
    route: "home",
    openId: null,
    adminTab: "dash",
    galIdx: 0,
    favs: [],
    fl: { loc: "", tipo: "", modo: "", quartos: "", faixa: "", feats: [], sort: "rec", onlyFavs: false },
    props: SEED.map(function (p) { return Object.assign({}, p, { photos: p.photos || [] }); }),
    draft: null,
    dragFrom: null,
    wm: { src: "images/icone-chaves-branco.png", name: "icone-chaves-branco.png (padrão da marca)", on: true, op: 18, scale: 22, pos: "center" },
    lead: { nome: "", tel: "", email: "", interesse: "Comprar", msg: "" },
    visitaOpen: false,
    toast: "",
    cookiesOk: false
  };

  var COOKIE_KEY = "ptk.cookies.v1";

  function loadState() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (raw) {
        var s = JSON.parse(raw);
        if (Array.isArray(s.props) && s.props.length) state.props = s.props.map(function (p) { return Object.assign({}, p, { photos: p.photos || [] }); });
        if (s.favs) state.favs = s.favs;
        if (s.wm) state.wm = Object.assign({}, state.wm, s.wm);
      }
    } catch (e) {}
    try {
      state.cookiesOk = localStorage.getItem(COOKIE_KEY) === "1";
    } catch (e) {}
  }

  function persist() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify({ props: state.props, favs: state.favs, wm: state.wm }));
    } catch (e) {}
  }

  function acceptCookies() {
    state.cookiesOk = true;
    try { localStorage.setItem(COOKIE_KEY, "1"); } catch (e) {}
    render();
  }

  var toastTimer = null;
  function toast(msg) {
    clearTimeout(toastTimer);
    state.toast = msg;
    render();
    toastTimer = setTimeout(function () {
      state.toast = "";
      var el = document.getElementById("toast-el");
      if (el) el.remove();
    }, 2600);
  }

  /* ============================== Registro de ações ============================== */

  var A_ID = 0, actions = {};
  function A(fn) { var id = "a" + (A_ID++); actions[id] = fn; return id; }
  function resetActions() { A_ID = 0; actions = {}; }

  /* ============================== Navegação / lógica ============================== */

  function go(route) {
    return A(function (e) {
      if (e && e.preventDefault) e.preventDefault();
      state.route = route;
      if (route !== "imovel") state.openId = null;
      render();
      window.scrollTo(0, 0);
    });
  }

  function openProp(id) {
    return A(function (e) {
      if (e && e.preventDefault) e.preventDefault();
      state.route = "imovel"; state.openId = id; state.galIdx = 0;
      render();
      window.scrollTo(0, 0);
    });
  }

  function toggleFav(id) {
    return A(function (e) {
      if (e) { e.preventDefault(); e.stopPropagation(); }
      var has = state.favs.indexOf(id) !== -1;
      state.favs = has ? state.favs.filter(function (f) { return f !== id; }) : state.favs.concat(id);
      persist(); render();
      toast(has ? "Removido dos favoritos" : "Salvo nos favoritos");
    });
  }

  function openProperty() {
    return state.props.filter(function (p) { return p.id === state.openId; })[0] || state.props[0];
  }

  function galleryOf(p) {
    if (!p) return [];
    if (p.photos && p.photos.length) {
      return p.photos.map(function (ph, i) { return { isPhoto: true, src: ph.src, i: i }; });
    }
    return [0, 1, 2, 3].map(function (i) { return { isSlot: true, i: i }; });
  }

  function galStep(dir) {
    return A(function () {
      var n = galleryOf(openProperty()).length;
      state.galIdx = (state.galIdx + dir + n) % n;
      render();
    });
  }

  function filtered() {
    var f = state.fl;
    var list = state.props.filter(function (p) { return p.status !== "rascunho"; });
    if (f.onlyFavs) list = list.filter(function (p) { return state.favs.indexOf(p.id) !== -1; });
    if (f.loc) list = list.filter(function (p) { return p.bairro === f.loc; });
    if (f.tipo) list = list.filter(function (p) { return p.tipo === f.tipo; });
    if (f.modo) list = list.filter(function (p) { return p.modo === f.modo; });
    if (f.quartos) list = list.filter(function (p) { return Number(p.quartos) >= Number(f.quartos); });
    if (f.faixa) {
      var parts = f.faixa.split("-").map(Number), a = parts[0], b = parts[1];
      list = list.filter(function (p) { return Number(p.preco) >= a && Number(p.preco) <= b; });
    }
    if (f.feats.length) list = list.filter(function (p) { return f.feats.every(function (x) { return (p.feats || []).indexOf(x) !== -1; }); });
    if (f.sort === "asc") list = list.slice().sort(function (a, b) { return a.preco - b.preco; });
    if (f.sort === "desc") list = list.slice().sort(function (a, b) { return b.preco - a.preco; });
    if (f.sort === "area") list = list.slice().sort(function (a, b) { return b.area - a.area; });
    return list;
  }

  function precoLabel(p) { return p.modo === "Aluguel" ? moneyBR(p.preco) + " /mês" : moneyBR(p.preco); }

  function waLinkFor(text) {
    var num = WHATSAPP.replace(/\D/g, "");
    return "https://wa.me/" + num + "?text=" + encodeURIComponent(text);
  }

  function blankDraft() {
    return { id: "", titulo: "", desc: "", desc2: "", tipo: "Casa", modo: "Venda", preco: "", cep: "", endereco: "", bairro: "", area: "", quartos: "", banheiros: "", vagas: "", status: "rascunho", etiquetas: "", obs: "", feats: [], photos: [], coverIdx: 0 };
  }

  var cepLookupTimer = null;
  function onCepInput(e) {
    var digits = e.target.value.replace(/\D/g, "").slice(0, 8);
    var masked = digits.length > 5 ? digits.slice(0, 5) + "-" + digits.slice(5) : digits;
    state.draft = state.draft || blankDraft();
    state.draft.cep = masked;
    e.target.value = masked;
    clearTimeout(cepLookupTimer);
    if (digits.length === 8) {
      cepLookupTimer = setTimeout(function () { lookupCep(digits); }, 300);
    }
  }

  function lookupCep(digits) {
    toast("Buscando endereço do CEP...");
    fetch("https://viacep.com.br/ws/" + digits + "/json/")
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (!state.draft || data.erro) { toast("CEP não encontrado"); return; }
        if (data.logradouro) state.draft.endereco = data.logradouro;
        if (data.bairro) state.draft.bairro = data.bairro;
        render();
        toast("Endereço preenchido a partir do CEP");
      })
      .catch(function () { toast("Não foi possível buscar esse CEP agora"); });
  }

  /* ============================== Componentes de template ============================== */

  function slotPh(label) {
    return '<div class="slot-ph">' + esc(label || "Foto") + "</div>";
  }

  function photoImg(src, extraStyle) {
    return '<img src="' + esc(src) + '" alt="" style="width:100%;height:100%;object-fit:cover;display:block;' + (extraStyle || "") + '">';
  }

  function wmOverlayHTML(scaleFactor) {
    var w = state.wm;
    if (!w.src || !w.on) return "";
    var pos = {
      center: "left:50%;top:50%;transform:translate(-50%,-50%)",
      "bottom-right": "right:4%;bottom:5%",
      "bottom-left": "left:4%;bottom:5%",
      "top-right": "right:4%;top:5%",
      "top-left": "left:4%;top:5%"
    }[w.pos] || "";
    var sz = (w.scale * scaleFactor);
    return '<div style="position:absolute;z-index:3;width:' + sz + '%;height:' + sz + '%;background-image:url(\'' + esc(w.src) + '\');background-size:contain;background-repeat:no-repeat;background-position:center;opacity:' + (w.op / 100) + ';pointer-events:none;filter:drop-shadow(0 1px 2px rgba(0,0,0,.18));' + pos + '"></div>';
  }

  function heartIcon(filled) {
    return '<svg width="16" height="16" viewBox="0 0 24 24" fill="' + (filled ? "var(--color-accent)" : "none") + '" stroke="currentColor" stroke-width="1.7"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"></path></svg>';
  }

  function cardHTML(p, opts) {
    opts = opts || {};
    var aspect = opts.aspect || "3/2";
    var isFav = state.favs.indexOf(p.id) !== -1;
    var specs = [p.area ? p.area + " m²" : "", p.quartos ? p.quartos + " quartos" : "", p.vagas ? p.vagas + " vagas" : ""].filter(Boolean).join(" · ");
    var cover = p.photos && p.photos.length ? (p.photos[p.coverIdx || 0] || p.photos[0]).src : "";
    var openA = openProp(p.id), favA = toggleFav(p.id);
    var titleSize = opts.titleSize || "18px";
    return (
      '<div style="background:var(--color-bg);padding-bottom:' + (opts.pad || "22px") + '">' +
        '<div style="position:relative;width:100%;aspect-ratio:' + aspect + ';overflow:hidden;background:var(--color-surface)">' +
          '<div class="grayscale" style="position:absolute;inset:0">' + (cover ? photoImg(cover) : slotPh(p.bairro)) + "</div>" +
          wmOverlayHTML(1) +
          '<div style="position:absolute;left:0;top:0;display:flex;gap:2px;pointer-events:none">' +
            '<span style="background:var(--color-accent);color:var(--color-bg);font-family:var(--font-heading);font-weight:500;font-size:10px;letter-spacing:.12em;text-transform:uppercase;padding:6px 10px">' + esc(p.modo) + "</span>" +
            (p.etiquetas && p.etiquetas.length ? '<span style="background:var(--color-text);color:var(--color-bg);font-size:10px;letter-spacing:.12em;text-transform:uppercase;padding:6px 10px">' + esc(p.etiquetas[0]) + "</span>" : "") +
          "</div>" +
          '<button data-onclick="' + favA + '" title="Favoritar" style="position:absolute;right:0;bottom:0;z-index:4;width:40px;height:40px;border:0;cursor:pointer;background:' + (isFav ? "var(--color-bg)" : "rgba(243,242,242,.86)") + ";color:" + (isFav ? "var(--color-accent)" : "var(--color-text)") + ';display:grid;place-items:center">' + heartIcon(isFav) + "</button>" +
        "</div>" +
        '<a href="#" data-onclick="' + openA + '" style="display:block;color:var(--color-text);padding:20px 0 0">' +
          '<div style="font-family:var(--font-heading);font-weight:500;font-size:' + titleSize + ';letter-spacing:-0.02em;line-height:1.14">' + esc(p.titulo) + "</div>" +
          '<div style="margin-top:6px;font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:color-mix(in srgb,var(--color-text) 52%,transparent)">' + esc(p.bairro) + " · " + esc(p.tipo) + "</div>" +
          '<div style="margin-top:16px;display:flex;align-items:baseline;justify-content:space-between;gap:16px;border-top:1px solid color-mix(in srgb,var(--color-text) 12%,transparent);padding-top:14px">' +
            '<span style="font-family:var(--font-heading);font-weight:500;font-size:17px;font-variant-numeric:tabular-nums">' + esc(precoLabel(p)) + "</span>" +
            '<span style="font-size:12px;color:color-mix(in srgb,var(--color-text) 60%,transparent)">' + esc(specs) + "</span>" +
          "</div>" +
        "</a>" +
      "</div>"
    );
  }

  function chipHTML(label, active, onClickFn) {
    var a = A(onClickFn);
    return '<button data-onclick="' + a + '" style="border:1px solid ' + (active ? "var(--color-accent)" : "rgba(32,30,29,.16)") + ";background:" + (active ? "var(--color-accent)" : "transparent") + ";color:" + (active ? "var(--color-bg)" : "var(--color-text)") + ';font-family:var(--font-body);font-size:12.5px;padding:7px 13px;cursor:pointer;transition:background .16s,color .16s,border-color .16s">' + esc(label) + "</button>";
  }

  /* ============================== Cabeçalho / rodapé ============================== */

  function headerHTML() {
    var route = state.route;
    function navColor(r) { return route === r ? "#fff" : "rgba(255,255,255,.82)"; }
    var goHomeA = go("home"), goCatA = go("catalogo"), goSobreA = go("sobre"), goServA = go("servicos"), goContA = go("contato"), goAdminA = go("admin");
    var goFavsA = A(function (e) { if (e) e.preventDefault(); state.route = "catalogo"; state.fl.onlyFavs = true; render(); window.scrollTo(0, 0); });
    return (
      '<div style="position:sticky;top:0;z-index:60;background:var(--color-accent);border-bottom:1px solid #7d1839">' +
        '<div style="max-width:1440px;margin:0 auto;padding:20px clamp(18px,4vw,56px);display:flex;align-items:center;gap:28px;flex-wrap:wrap">' +
          '<a href="#" data-onclick="' + goHomeA + '" style="display:flex;align-items:center;gap:16px;margin-right:auto" title="' + esc(BRAND) + '">' +
            '<img src="images/icone-chaves-branco.png" alt="" style="display:block;height:50px;width:auto">' +
            '<span style="width:1px;height:44px;background:rgba(255,255,255,.34)"></span>' +
            '<img src="images/logo-wordmark-branco.png" alt="' + esc(BRAND) + '" style="display:block;height:56px;width:auto">' +
          "</a>" +
          '<nav style="display:flex;align-items:center;column-gap:22px;row-gap:10px;flex-wrap:wrap">' +
            '<a href="#" data-onclick="' + goCatA + '" style="font-size:13px;letter-spacing:.02em;color:' + navColor("catalogo") + '">Imóveis</a>' +
            '<a href="#" data-onclick="' + goSobreA + '" style="font-size:13px;letter-spacing:.02em;color:' + navColor("sobre") + '">Sobre</a>' +
            '<a href="#" data-onclick="' + goServA + '" style="font-size:13px;letter-spacing:.02em;color:' + navColor("servicos") + '">Serviços</a>' +
            '<a href="#" data-onclick="' + goContA + '" style="font-size:13px;letter-spacing:.02em;color:' + navColor("contato") + '">Contato</a>' +
            '<a href="#" data-onclick="' + goFavsA + '" style="display:flex;align-items:center;gap:7px;font-size:13px;color:#fff">' + heartIcon(false) + '<span style="font-variant-numeric:tabular-nums">' + state.favs.length + "</span></a>" +
            '<button data-onclick="' + goAdminA + '" class="btn" style="font-size:12px;padding:7px 14px;border:1px solid rgba(255,255,255,.65);color:#fff;background:transparent">Painel</button>' +
          "</nav>" +
        "</div>" +
      "</div>"
    );
  }

  function footerHTML() {
    if (state.route === "admin") return "";
    var goCatA = go("catalogo"), goSobreA = go("sobre"), goServA = go("servicos"), goContA = go("contato"), goTermosA = go("termos");
    var wa = waLinkFor("Olá! Vi o site da " + BRAND + " e queria falar com você.");
    return (
      '<div style="border-top:1px solid color-mix(in srgb,var(--color-text) 12%,transparent);background:var(--color-bg)">' +
        '<div style="max-width:1440px;margin:0 auto;padding:clamp(36px,4vw,60px) clamp(18px,4vw,56px)">' +
          '<div style="display:flex;flex-wrap:wrap;gap:36px;justify-content:space-between">' +
            '<div style="flex:1 1 260px">' +
              '<div style="display:flex;align-items:center;gap:16px">' +
                '<img src="images/icone-chaves-vinho.png" alt="" style="display:block;height:56px;width:auto">' +
                '<img src="images/logo-wordmark-rosa.png" alt="' + esc(BRAND) + '" style="display:block;height:64px;width:auto">' +
              "</div>" +
              '<div style="margin-top:8px;font-size:12.5px;color:color-mix(in srgb,var(--color-text) 55%,transparent);max-width:34ch">Imóveis com projeto em ' + esc(CIDADE) + " e no Vale do Paraíba. " + esc(BRAND) + " — " + esc(CRECI) + ".</div>" +
            "</div>" +
            '<div style="flex:0 1 160px">' +
              '<div style="font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:color-mix(in srgb,var(--color-text) 45%,transparent);margin-bottom:12px">Navegar</div>' +
              '<div style="display:flex;flex-direction:column;gap:8px">' +
                '<a href="#" data-onclick="' + goCatA + '" style="font-size:13px;color:var(--color-text)">Imóveis</a>' +
                '<a href="#" data-onclick="' + goSobreA + '" style="font-size:13px;color:var(--color-text)">Sobre</a>' +
                '<a href="#" data-onclick="' + goServA + '" style="font-size:13px;color:var(--color-text)">Serviços</a>' +
                '<a href="#" data-onclick="' + goContA + '" style="font-size:13px;color:var(--color-text)">Contato</a>' +
              "</div>" +
            "</div>" +
            '<div style="flex:0 1 200px">' +
              '<div style="font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:color-mix(in srgb,var(--color-text) 45%,transparent);margin-bottom:12px">Contato</div>' +
              '<div style="display:flex;flex-direction:column;gap:8px;font-size:13px">' +
                '<a href="' + esc(wa) + '" target="_blank">' + esc(WHATSAPP) + "</a>" +
                '<a href="mailto:' + esc(EMAIL) + '">' + esc(EMAIL) + "</a>" +
                '<a href="https://instagram.com/' + esc(INSTAGRAM) + '" target="_blank">@' + esc(INSTAGRAM) + "</a>" +
              "</div>" +
            "</div>" +
          "</div>" +
          '<div style="height:1px;background:color-mix(in srgb,var(--color-text) 12%,transparent);margin:32px 0 16px"></div>' +
          '<div style="display:flex;flex-wrap:wrap;gap:16px;justify-content:space-between;font-size:11.5px;color:color-mix(in srgb,var(--color-text) 45%,transparent)">' +
            "<span>© 2026 " + esc(BRAND) + ". Todos os direitos reservados.</span>" +
            '<span style="display:flex;flex-wrap:wrap;gap:6px 16px">' +
              '<a href="#" data-onclick="' + goTermosA + '" style="color:inherit">Termos de uso</a>' +
              '<a href="#" data-onclick="' + goTermosA + '" style="color:inherit">Privacidade e cookies</a>' +
            "</span>" +
          "</div>" +
        "</div>" +
      "</div>"
    );
  }

  /* ============================== Página: Home ============================== */

  function homeHTML() {
    var ativos = state.props.filter(function (x) { return x.status === "ativo"; });
    var bairros = Array.from(new Set(state.props.filter(function (x) { return x.status !== "rascunho"; }).map(function (x) { return x.bairro; })));
    var featured = ativos.slice(0, 3);
    var metodo = [
      { n: "01", t: "Visita técnica", d: "Vamos ao imóvel antes de aceitar o anúncio." },
      { n: "02", t: "Fotografia própria", d: "Sessão dedicada, sem lente que distorce." },
      { n: "03", t: "Texto honesto", d: "O que encanta e o que precisa de obra." }
    ];
    var goCatA = go("catalogo"), goContA = go("contato");
    var wa = waLinkFor("Olá! Vi o site da " + BRAND + " e queria falar com você.");

    var bairroCards = bairros.slice(0, 4).map(function (b) {
      var goA = A(function (e) { if (e) e.preventDefault(); state.route = "catalogo"; state.fl.loc = b; render(); window.scrollTo(0, 0); });
      var qtd = ativos.filter(function (x) { return x.bairro === b; }).length;
      return (
        '<a href="#" data-onclick="' + goA + '" style="background:var(--color-bg);color:var(--color-text);display:block">' +
          '<div class="grayscale" style="position:relative;width:100%;aspect-ratio:1/1;background:var(--color-surface)">' + slotPh(b) + "</div>" +
          '<div style="padding:16px 16px 20px 0;display:flex;align-items:baseline;justify-content:space-between;gap:10px">' +
            '<span style="font-family:var(--font-heading);font-weight:500;font-size:16px">' + esc(b) + "</span>" +
            '<span style="font-size:11px;color:color-mix(in srgb,var(--color-text) 50%,transparent);font-variant-numeric:tabular-nums">' + qtd + " imóveis</span>" +
          "</div>" +
        "</a>"
      );
    }).join("");

    return (
      '<div>' +
        '<div style="position:relative;width:100%;height:min(88vh,860px);min-height:520px;overflow:hidden;background:var(--color-neutral-900)">' +
          '<div style="position:absolute;inset:0">' + photoImg("images/hero-fachada.webp") + "</div>" +
          '<div style="position:absolute;inset:0;background:linear-gradient(90deg,rgba(20,18,17,.72) 0%,rgba(20,18,17,.38) 48%,rgba(20,18,17,0) 78%);pointer-events:none"></div>' +
          '<div style="position:absolute;inset:0;display:flex;align-items:flex-end;pointer-events:none">' +
            '<div style="max-width:1440px;margin:0 auto;width:100%;padding:0 clamp(18px,4vw,56px) clamp(28px,4vw,64px)">' +
              '<div style="max-width:760px;animation:rise .9s cubic-bezier(.2,.8,.2,1) both">' +
                '<div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">' +
                  '<span style="width:34px;height:2px;background:var(--color-accent)"></span>' +
                  '<span style="font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:#f3f2f2">' + esc(CIDADE) + " · Vale do Paraíba</span>" +
                "</div>" +
                '<h1 style="margin:0;color:#f8f4f4;font-size:clamp(38px,6.4vw,92px);line-height:.94;letter-spacing:-0.035em;text-wrap:balance">Arquitetura<br>para se viver<br>devagar.</h1>' +
                '<p style="margin:22px 0 0;max-width:440px;font-size:15px;line-height:1.6;color:rgba(248,244,244,.78)">Uma seleção curta de casas, coberturas e residências assinadas — apresentadas com o cuidado que elas merecem.</p>' +
              "</div>" +
            "</div>" +
          "</div>" +
        "</div>" +

        '<div style="border-bottom:1px solid color-mix(in srgb,var(--color-text) 12%,transparent);background:var(--color-bg)">' +
          '<div style="max-width:1440px;margin:0 auto;padding:22px clamp(18px,4vw,56px)">' +
            '<div style="display:flex;gap:14px;align-items:flex-end;flex-wrap:wrap">' +
              filterFieldsHTML(bairros) +
              '<button data-onclick="' + goCatA + '" class="btn btn-primary" style="flex:0 0 auto;min-height:36px;padding:9px 22px;justify-content:flex-start">' +
                '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg> Buscar imóveis' +
              "</button>" +
            "</div>" +
          "</div>" +
        "</div>" +

        '<div style="max-width:1440px;margin:0 auto;padding:clamp(48px,6vw,88px) clamp(18px,4vw,56px)">' +
          '<div style="display:flex;align-items:flex-end;justify-content:space-between;gap:24px;flex-wrap:wrap;margin-bottom:36px">' +
            "<div>" +
              '<div style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-accent);margin-bottom:14px">Seleção da casa</div>' +
              '<h2 style="margin:0;font-size:clamp(28px,3.6vw,46px);letter-spacing:-0.03em;line-height:1.02">Três endereços<br>que definem o mês</h2>' +
            "</div>" +
            '<button data-onclick="' + goCatA + '" class="btn btn-secondary" style="padding:10px 18px">Ver o catálogo completo →</button>' +
          "</div>" +
          '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:40px 32px">' +
            featured.map(function (p) { return cardHTML(p, { aspect: "4/5", titleSize: "22px" }); }).join("") +
          "</div>" +
        "</div>" +

        '<div style="border-top:1px solid color-mix(in srgb,var(--color-text) 12%,transparent);border-bottom:1px solid color-mix(in srgb,var(--color-text) 12%,transparent)">' +
          '<div style="max-width:1440px;margin:0 auto;padding:0 clamp(18px,4vw,56px)">' +
            '<div style="display:flex;flex-wrap:wrap;align-items:stretch">' +
              '<div style="flex:1 1 420px;padding:clamp(40px,5vw,76px) clamp(24px,4vw,64px) clamp(40px,5vw,76px) 0">' +
                '<div style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:color-mix(in srgb,var(--color-text) 52%,transparent);margin-bottom:20px">O método</div>' +
                '<h2 style="margin:0 0 22px;font-size:clamp(26px,3vw,38px);letter-spacing:-0.025em;line-height:1.08;max-width:14em">Poucos imóveis por vez. Cada um visitado, fotografado e escrito por nós.</h2>' +
                '<p style="max-width:44ch;font-size:15px;line-height:1.7;color:color-mix(in srgb,var(--color-text) 78%,transparent)">Não trabalhamos com volume. Cada endereço entra no catálogo depois de uma visita técnica, uma sessão de fotografia dedicada e uma conversa longa com quem vende. É por isso que a descrição diz o que você precisa saber — e também o que não é perfeito.</p>' +
                '<div style="margin-top:34px;margin-left:-18px;display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:1px;background:color-mix(in srgb,var(--color-text) 12%,transparent)">' +
                  metodo.map(function (m) {
                    return '<div style="background:var(--color-bg);padding:18px">' +
                      '<div style="font-family:var(--font-heading);font-weight:500;font-size:13px;color:var(--color-accent);margin-bottom:6px">' + m.n + "</div>" +
                      '<div style="font-family:var(--font-heading);font-weight:500;font-size:15px;margin-bottom:4px">' + m.t + "</div>" +
                      '<div style="font-size:12.5px;line-height:1.5;color:color-mix(in srgb,var(--color-text) 62%,transparent)">' + m.d + "</div>" +
                    "</div>";
                  }).join("") +
                "</div>" +
              "</div>" +
              '<div class="grayscale" style="flex:1 1 380px;min-height:440px;position:relative;border-left:1px solid color-mix(in srgb,var(--color-text) 12%,transparent)">' + slotPh("Interior") + "</div>" +
            "</div>" +
          "</div>" +
        "</div>" +

        '<div style="max-width:1440px;margin:0 auto;padding:clamp(48px,6vw,80px) clamp(18px,4vw,56px)">' +
          '<div style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:color-mix(in srgb,var(--color-text) 52%,transparent);margin-bottom:26px">Onde atuamos</div>' +
          '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:36px 28px">' + bairroCards + "</div>" +
        "</div>" +

        '<div style="background:var(--color-accent);color:var(--color-bg)">' +
          '<div style="max-width:1440px;margin:0 auto;padding:clamp(46px,6vw,86px) clamp(18px,4vw,56px);display:flex;flex-wrap:wrap;gap:40px;align-items:flex-end;justify-content:space-between">' +
            '<h2 style="margin:0;font-size:clamp(30px,4.6vw,64px);line-height:.98;letter-spacing:-0.035em;max-width:16em">Conte o que você procura.<br>Nós procuramos.</h2>' +
            '<div style="display:flex;flex-direction:column;gap:12px;align-items:flex-start">' +
              '<a href="' + esc(wa) + '" target="_blank" class="btn" style="background:var(--color-bg);color:var(--color-text);padding:14px 22px;font-size:14px;justify-content:flex-start">' +
                '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-3.3-.6L3 21l1.8-5A8.4 8.4 0 1 1 21 11.5z"></path></svg> Falar com a corretora no WhatsApp' +
              "</a>" +
              '<button data-onclick="' + goContA + '" class="btn" style="border:1px solid rgba(243,242,242,.6);color:var(--color-bg);padding:14px 22px;font-size:14px;justify-content:flex-start">Agendar uma conversa</button>' +
            "</div>" +
          "</div>" +
        "</div>" +
      "</div>"
    );
  }

  function filterFieldsHTML(bairros) {
    var f = state.fl;
    var locOpts = bairros.map(function (b) { return '<option value="' + esc(b) + '"' + (f.loc === b ? " selected" : "") + ">" + esc(b) + "</option>"; }).join("");
    var tipoOpts = TIPOS.map(function (t) { return '<option value="' + esc(t) + '"' + (f.tipo === t ? " selected" : "") + ">" + esc(t) + "</option>"; }).join("");
    var locA = A(function (e) { state.fl.loc = e.target.value; render(); });
    var tipoA = A(function (e) { state.fl.tipo = e.target.value; render(); });
    var modoA = A(function (e) { state.fl.modo = e.target.value; render(); });
    var quartosA = A(function (e) { state.fl.quartos = e.target.value; render(); });
    return (
      '<div class="field" style="flex:1 1 190px"><label>Localização</label>' +
        '<select class="input" data-onchange="' + locA + '"><option value="">Todos os bairros</option>' + locOpts + "</select></div>" +
      '<div class="field" style="flex:1 1 150px"><label>Tipo</label>' +
        '<select class="input" data-onchange="' + tipoA + '"><option value="">Todos</option>' + tipoOpts + "</select></div>" +
      '<div class="field" style="flex:1 1 150px"><label>Finalidade</label>' +
        '<select class="input" data-onchange="' + modoA + '"><option value=""' + (f.modo === "" ? " selected" : "") + ">Venda e aluguel</option><option value=\"Venda\"" + (f.modo === "Venda" ? " selected" : "") + ">Venda</option><option value=\"Aluguel\"" + (f.modo === "Aluguel" ? " selected" : "") + ">Aluguel</option></select></div>" +
      '<div class="field" style="flex:1 1 150px"><label>Quartos</label>' +
        '<select class="input" data-onchange="' + quartosA + '"><option value=""' + (f.quartos === "" ? " selected" : "") + ">Qualquer</option>" +
        [1, 2, 3, 4].map(function (n) { return '<option value="' + n + '"' + (f.quartos === String(n) ? " selected" : "") + ">" + n + " ou mais</option>"; }).join("") +
        "</select></div>"
    );
  }

  /* ============================== Página: Catálogo ============================== */

  function catalogoHTML() {
    var bairros = Array.from(new Set(state.props.filter(function (x) { return x.status !== "rascunho"; }).map(function (x) { return x.bairro; })));
    var f = state.fl;
    var results = filtered();
    var sortA = A(function (e) { state.fl.sort = e.target.value; render(); });
    var faixaA = A(function (e) { state.fl.faixa = e.target.value; render(); });
    var toggleFavFilterA = A(function () { state.fl.onlyFavs = !state.fl.onlyFavs; render(); });
    var clearA = A(function () { state.fl = { loc: "", tipo: "", modo: "", quartos: "", faixa: "", feats: [], sort: "rec", onlyFavs: false }; render(); });
    var catTitle = f.onlyFavs ? "Seus favoritos" : (f.loc || "Todo o catálogo");
    var resultLabel = results.length === 1 ? "1 imóvel encontrado" : results.length + " imóveis encontrados";

    var faixaOpts = FAIXAS.map(function (fx) { return '<option value="' + fx.v + '"' + (f.faixa === fx.v ? " selected" : "") + ">" + esc(fx.l) + "</option>"; }).join("");

    var chips = FEATS.map(function (feat) {
      var active = f.feats.indexOf(feat) !== -1;
      return chipHTML(feat, active, function () {
        var i = state.fl.feats.indexOf(feat);
        if (i === -1) state.fl.feats.push(feat); else state.fl.feats.splice(i, 1);
        render();
      });
    }).join("");

    var grid = results.map(function (p) { return cardHTML(p, { aspect: "3/2", titleSize: "18px", pad: "22px" }); }).join("");

    return (
      '<div style="max-width:1440px;margin:0 auto;padding:clamp(28px,4vw,56px) clamp(18px,4vw,56px) 80px">' +
        '<div style="display:flex;align-items:flex-end;justify-content:space-between;gap:24px;flex-wrap:wrap;padding-bottom:22px;border-bottom:1px solid color-mix(in srgb,var(--color-text) 12%,transparent)">' +
          "<div>" +
            '<div style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-accent);margin-bottom:12px">Catálogo</div>' +
            '<h1 style="margin:0;font-size:clamp(30px,4vw,54px);letter-spacing:-0.03em;line-height:1">' + esc(catTitle) + "</h1>" +
          "</div>" +
          '<div class="field"><label>Ordenar por</label><select class="input" data-onchange="' + sortA + '" style="min-width:190px">' +
            '<option value="rec"' + (f.sort === "rec" ? " selected" : "") + ">Curadoria</option>" +
            '<option value="asc"' + (f.sort === "asc" ? " selected" : "") + ">Menor preço</option>" +
            '<option value="desc"' + (f.sort === "desc" ? " selected" : "") + ">Maior preço</option>" +
            '<option value="area"' + (f.sort === "area" ? " selected" : "") + ">Maior área</option>" +
          "</select></div>" +
        "</div>" +

        '<div style="display:flex;flex-wrap:wrap;gap:14px;align-items:flex-end;padding:22px 0;border-bottom:1px solid color-mix(in srgb,var(--color-text) 12%,transparent)">' +
          filterFieldsHTML(bairros) +
          '<div class="field" style="flex:1 1 200px"><label>Faixa de preço</label><select class="input" data-onchange="' + faixaA + '"><option value="">Qualquer valor</option>' + faixaOpts + "</select></div>" +
          '<button data-onclick="' + toggleFavFilterA + '" class="btn btn-secondary" style="font-size:12.5px;padding:9px 14px;align-self:flex-end;color:' + (f.onlyFavs ? "var(--color-accent)" : "var(--color-text)") + ";border-color:" + (f.onlyFavs ? "var(--color-accent)" : "rgba(32,30,29,.14)") + '">' + heartIcon(f.onlyFavs) + " Favoritos</button>" +
        "</div>" +

        '<div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;padding:18px 0 22px">' +
          '<span style="font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:color-mix(in srgb,var(--color-text) 45%,transparent);margin-right:6px">Diferenciais</span>' + chips +
        "</div>" +

        '<div style="display:flex;align-items:baseline;justify-content:space-between;gap:16px;border-top:1px solid color-mix(in srgb,var(--color-text) 12%,transparent);padding:16px 0 30px">' +
          '<span style="font-size:13px;color:color-mix(in srgb,var(--color-text) 65%,transparent);font-variant-numeric:tabular-nums">' + resultLabel + "</span>" +
          '<button data-onclick="' + clearA + '" class="btn btn-ghost" style="font-size:12px">Limpar filtros</button>' +
        "</div>" +

        '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:40px 32px">' + grid + "</div>" +

        (results.length === 0 ?
          '<div style="padding:70px 0;text-align:left;border-bottom:1px solid color-mix(in srgb,var(--color-text) 12%,transparent)">' +
            '<h3 style="margin:0 0 8px">Nenhum imóvel com esses filtros.</h3>' +
            '<p style="margin:0 0 18px;color:color-mix(in srgb,var(--color-text) 60%,transparent)">Ajuste a busca ou nos diga o que procura — buscamos fora do catálogo.</p>' +
            '<button data-onclick="' + clearA + '" class="btn btn-primary" style="padding:10px 18px">Limpar filtros</button>' +
          "</div>" : "") +
      "</div>"
    );
  }

  /* ============================== Página: Detalhe do imóvel ============================== */

  function detailHTML() {
    var p = openProperty();
    if (!p) return "";
    var isFav = state.favs.indexOf(p.id) !== -1;
    var gal = galleryOf(p);
    var wa = waLinkFor("Olá! Tenho interesse no imóvel " + p.titulo + " (ref. " + p.id.toUpperCase() + ").");
    var mapLink = "https://www.google.com/maps/search/" + encodeURIComponent(p.endereco + ", " + p.bairro + ", " + CIDADE);

    var goCatA = go("catalogo");
    var favA = toggleFav(p.id);
    var shareA = A(function () {
      var url = location.href.split("#")[0] + "#" + p.id;
      if (navigator.clipboard) navigator.clipboard.writeText(url).catch(function () {});
      toast("Link do imóvel copiado");
    });
    var prevA = galStep(-1), nextA = galStep(1);

    var slides = gal.map(function (g, i) {
      var active = i === state.galIdx;
      return '<div style="position:absolute;inset:0;opacity:' + (active ? 1 : 0) + ';transition:opacity .6s cubic-bezier(.4,0,.2,1);z-index:' + (active ? 2 : 1) + ';pointer-events:' + (active ? "auto" : "none") + '">' +
        '<div class="grayscale" style="position:absolute;inset:0">' + (g.isPhoto ? photoImg(g.src) : slotPh("Foto " + (i + 1))) + "</div>" +
      "</div>";
    }).join("");

    var thumbs = gal.map(function (g, i) {
      var active = i === state.galIdx;
      var goA = A(function () { state.galIdx = i; render(); });
      return '<button data-onclick="' + goA + '" style="position:relative;flex:0 0 108px;height:72px;border:0;padding:0;cursor:pointer;overflow:hidden;background:var(--color-surface);outline:' + (active ? "2px solid var(--color-accent)" : "none") + ";outline-offset:-2px;opacity:" + (active ? 1 : 0.7) + ';transition:opacity .2s">' +
        '<div class="grayscale" style="position:absolute;inset:0">' + (g.isPhoto ? photoImg(g.src) : slotPh(String(i + 1).padStart(2, "0"))) + "</div>" +
      "</button>";
    }).join("");

    var specList = [
      { v: p.area || "—", l: "m² privativos" },
      { v: p.quartos || "—", l: "Quartos" },
      { v: p.banheiros || "—", l: "Banheiros" },
      { v: p.vagas || "—", l: "Vagas" }
    ].map(function (s) {
      return '<div style="background:var(--color-bg);padding:20px 16px">' +
        '<div style="font-family:var(--font-heading);font-weight:500;font-size:26px;line-height:1;letter-spacing:-0.02em;font-variant-numeric:tabular-nums">' + esc(s.v) + "</div>" +
        '<div style="margin-top:7px;font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:color-mix(in srgb,var(--color-text) 52%,transparent)">' + s.l + "</div>" +
      "</div>";
    }).join("");

    var feats = (p.feats || []).map(function (f) {
      return '<div style="display:flex;align-items:center;gap:12px;padding:14px 20px 14px 0;border-bottom:1px solid color-mix(in srgb,var(--color-text) 12%,transparent);font-size:14px"><span style="width:6px;height:6px;background:var(--color-accent);flex:none"></span>' + esc(f) + "</div>";
    }).join("");

    var openVisitaA = A(function () { state.visitaOpen = true; render(); });

    var similar = state.props.filter(function (x) { return x.id !== p.id && x.status === "ativo" && (x.bairro === p.bairro || x.tipo === p.tipo); }).slice(0, 3);
    var similarHTML = similar.map(function (x) {
      var cover = x.photos && x.photos.length ? (x.photos[x.coverIdx || 0] || x.photos[0]).src : "";
      var openA = openProp(x.id);
      return '<a href="#" data-onclick="' + openA + '" style="background:var(--color-bg);color:var(--color-text);display:flex;gap:16px;padding:0 16px 0 0;align-items:stretch">' +
        '<div class="grayscale" style="position:relative;width:120px;flex:none;background:var(--color-surface)">' + (cover ? '<div style="position:absolute;inset:0">' + photoImg(cover) + "</div>" : slotPh("")) + "</div>" +
        '<div style="padding:16px 0;min-width:0">' +
          '<div style="font-family:var(--font-heading);font-weight:500;font-size:15px;line-height:1.2">' + esc(x.titulo) + "</div>" +
          '<div style="margin-top:5px;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:color-mix(in srgb,var(--color-text) 50%,transparent)">' + esc(x.bairro) + " · " + esc(x.tipo) + "</div>" +
          '<div style="margin-top:10px;font-family:var(--font-heading);font-weight:500;font-size:14px;font-variant-numeric:tabular-nums">' + esc(precoLabel(x)) + "</div>" +
        "</div>" +
      "</a>";
    }).join("");

    return (
      '<div>' +
        '<div style="max-width:1440px;margin:0 auto;padding:20px clamp(18px,4vw,56px) 0;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap">' +
          '<button data-onclick="' + goCatA + '" class="btn btn-ghost" style="font-size:12.5px;padding-left:0">← Voltar ao catálogo</button>' +
          '<div style="display:flex;gap:8px">' +
            '<button data-onclick="' + shareA + '" class="btn btn-secondary" style="font-size:12.5px;padding:8px 14px"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3v12M12 3l4 4M12 3 8 7"></path><path d="M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5"></path></svg> Compartilhar</button>' +
            '<button data-onclick="' + favA + '" class="btn btn-secondary" style="font-size:12.5px;padding:8px 14px">' + heartIcon(isFav) + " " + (isFav ? "Salvo" : "Favoritar") + "</button>" +
          "</div>" +
        "</div>" +

        '<div style="max-width:1440px;margin:0 auto;padding:18px clamp(18px,4vw,56px) 0">' +
          '<div style="position:relative;width:100%;aspect-ratio:16/9;min-height:300px;overflow:hidden;background:var(--color-surface)">' +
            slides + wmOverlayHTML(1) +
            '<button data-onclick="' + prevA + '" title="Foto anterior" class="gal-nav" style="position:absolute;left:0;top:50%;transform:translateY(-50%);z-index:5;width:54px;height:72px;border:0;background:rgba(32,30,29,.72);color:#f8f4f4;display:grid;place-items:center;cursor:pointer"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m15 5-7 7 7 7"></path></svg></button>' +
            '<button data-onclick="' + nextA + '" title="Próxima foto" class="gal-nav" style="position:absolute;right:0;top:50%;transform:translateY(-50%);z-index:5;width:54px;height:72px;border:0;background:rgba(32,30,29,.72);color:#f8f4f4;display:grid;place-items:center;cursor:pointer"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m9 5 7 7-7 7"></path></svg></button>' +
            '<div style="position:absolute;right:0;bottom:0;z-index:5;background:var(--color-text);color:var(--color-bg);font-family:var(--font-heading);font-weight:500;font-size:12px;letter-spacing:.1em;padding:9px 14px;font-variant-numeric:tabular-nums">' + String(state.galIdx + 1).padStart(2, "0") + " / " + String(gal.length).padStart(2, "0") + "</div>" +
          "</div>" +
          '<div style="display:flex;gap:2px;margin-top:2px;overflow-x:auto;padding-bottom:2px">' + thumbs + "</div>" +
        "</div>" +

        '<div style="max-width:1440px;margin:0 auto;padding:clamp(30px,4vw,54px) clamp(18px,4vw,56px) 80px">' +
          '<div style="display:flex;flex-wrap:wrap;gap:clamp(28px,4vw,64px);align-items:flex-start">' +
            '<div style="flex:1 1 540px;min-width:0">' +
              '<div style="display:flex;gap:8px;margin-bottom:18px">' +
                '<span style="background:var(--color-accent);color:var(--color-bg);font-family:var(--font-heading);font-weight:500;font-size:10px;letter-spacing:.14em;text-transform:uppercase;padding:6px 11px">' + esc(p.modo) + "</span>" +
                '<span style="border:1px solid color-mix(in srgb,var(--color-text) 12%,transparent);font-size:10px;letter-spacing:.14em;text-transform:uppercase;padding:6px 11px">' + esc(p.tipo) + "</span>" +
              "</div>" +
              '<h1 style="margin:0;font-size:clamp(30px,4.4vw,58px);line-height:1;letter-spacing:-0.035em;max-width:20ch">' + esc(p.titulo) + "</h1>" +
              '<div style="margin-top:14px;font-size:13px;letter-spacing:.1em;text-transform:uppercase;color:color-mix(in srgb,var(--color-text) 55%,transparent)">' + esc(p.endereco) + " · " + esc(p.bairro) + ", " + esc(CIDADE) + "</div>" +
              '<div style="margin-top:28px;display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:1px;background:color-mix(in srgb,var(--color-text) 12%,transparent);border-top:1px solid color-mix(in srgb,var(--color-text) 12%,transparent);border-bottom:1px solid color-mix(in srgb,var(--color-text) 12%,transparent)">' + specList + "</div>" +
              '<div style="margin-top:44px">' +
                '<div style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:color-mix(in srgb,var(--color-text) 52%,transparent);margin-bottom:18px">Sobre o imóvel</div>' +
                '<p style="font-size:17px;line-height:1.62;max-width:62ch;overflow-wrap:anywhere;color:color-mix(in srgb,var(--color-text) 88%,transparent)">' + esc(p.desc || "Descrição em preparação — fale com a corretora para detalhes.") + "</p>" +
                (p.desc2 ? '<p style="font-size:15px;line-height:1.7;max-width:62ch;overflow-wrap:anywhere;color:color-mix(in srgb,var(--color-text) 70%,transparent)">' + esc(p.desc2) + "</p>" : "") +
              "</div>" +
              (feats ? '<div style="margin-top:44px"><div style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:color-mix(in srgb,var(--color-text) 52%,transparent);margin-bottom:18px">Diferenciais</div>' +
                '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:0;border-top:1px solid color-mix(in srgb,var(--color-text) 12%,transparent)">' + feats + "</div></div>" : "") +
              '<div style="margin-top:48px">' +
                '<div style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:color-mix(in srgb,var(--color-text) 52%,transparent);margin-bottom:18px">Localização</div>' +
                '<div style="border:1px solid color-mix(in srgb,var(--color-text) 14%,transparent);background:var(--color-surface);display:flex;flex-wrap:wrap;gap:14px;align-items:center;justify-content:space-between;padding:18px 20px">' +
                  '<span style="font-size:13.5px;color:color-mix(in srgb,var(--color-text) 75%,transparent)">' + esc(p.endereco) + " · " + esc(p.bairro) + ", " + esc(CIDADE) + " — referência aproximada, endereço exato na visita.</span>" +
                  '<a href="' + esc(mapLink) + '" target="_blank" class="btn btn-primary" style="font-size:12.5px;padding:9px 16px;flex:none"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Abrir no Google Maps</a>' +
                "</div>" +
              "</div>" +
            "</div>" +

            '<div style="flex:0 1 340px;min-width:280px;position:sticky;top:88px">' +
              '<div style="border:1px solid color-mix(in srgb,var(--color-text) 26%,transparent);background:var(--color-bg)">' +
                '<div style="padding:22px;border-bottom:1px solid color-mix(in srgb,var(--color-text) 12%,transparent)">' +
                  '<div style="font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:color-mix(in srgb,var(--color-text) 52%,transparent)">' + (p.modo === "Aluguel" ? "Aluguel mensal" : "Valor de venda") + "</div>" +
                  '<div style="margin-top:8px;font-family:var(--font-heading);font-weight:500;font-size:34px;line-height:1;letter-spacing:-0.03em;font-variant-numeric:tabular-nums">' + esc(precoLabel(p)) + "</div>" +
                  '<div style="margin-top:10px;font-size:12.5px;color:color-mix(in srgb,var(--color-text) 60%,transparent)">' + (p.modo === "Aluguel" ? "Condomínio e IPTU informados na proposta." : "IPTU e escritura sob consulta. Aceita financiamento.") + "</div>" +
                "</div>" +
                '<div style="padding:20px 22px;display:flex;gap:14px;align-items:center;border-bottom:1px solid color-mix(in srgb,var(--color-text) 12%,transparent)">' +
                  '<div class="grayscale" style="width:52px;height:52px;flex:none;background:var(--color-surface);position:relative">' + slotPh("") + "</div>" +
                  '<div style="min-width:0">' +
                    '<div style="font-family:var(--font-heading);font-weight:500;font-size:15px">' + esc(BRAND) + "</div>" +
                    '<div style="font-size:11.5px;color:color-mix(in srgb,var(--color-text) 55%,transparent)">' + esc(CRECI) + "</div>" +
                  "</div>" +
                "</div>" +
                '<div style="padding:20px 22px;display:flex;flex-direction:column;gap:10px">' +
                  '<a href="' + esc(wa) + '" target="_blank" class="btn btn-primary" style="width:100%;justify-content:flex-start;padding:13px 16px;font-size:13.5px"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-3.3-.6L3 21l1.8-5A8.4 8.4 0 1 1 21 11.5z"></path></svg> Falar no WhatsApp</a>' +
                  '<button data-onclick="' + openVisitaA + '" class="btn btn-secondary" style="width:100%;justify-content:flex-start;padding:13px 16px;font-size:13.5px">Solicitar uma visita</button>' +
                  '<div style="font-size:11.5px;line-height:1.5;color:color-mix(in srgb,var(--color-text) 52%,transparent);margin-top:4px">Resposta no mesmo dia, de segunda a sábado. Ref. ' + esc(p.id.toUpperCase()) + "</div>" +
                "</div>" +
              "</div>" +
            "</div>" +
          "</div>" +

          (similar.length ? '<div style="margin-top:clamp(48px,6vw,86px);border-top:1px solid color-mix(in srgb,var(--color-text) 12%,transparent);padding-top:30px">' +
            '<div style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:color-mix(in srgb,var(--color-text) 52%,transparent);margin-bottom:24px">Imóveis semelhantes</div>' +
            '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:28px 32px">' + similarHTML + "</div>" +
          "</div>" : "") +
        "</div>" +
      "</div>"
    );
  }

  /* ============================== Página: Sobre ============================== */

  function sobreHTML() {
    var ativos = state.props.filter(function (x) { return x.status === "ativo"; });
    var bairros = Array.from(new Set(state.props.filter(function (x) { return x.status !== "rascunho"; }).map(function (x) { return x.bairro; })));
    var stats = [
      { n: ativos.length, l: "Imóveis ativos" },
      { n: bairros.length, l: "Bairros" },
      { n: "12", l: "Anos de mercado" },
      { n: "1", l: "Corretora responsável" }
    ].map(function (s) {
      return '<div style="background:var(--color-bg);padding:22px 18px">' +
        '<div style="font-family:var(--font-heading);font-weight:500;font-size:30px;line-height:1;letter-spacing:-0.02em">' + s.n + "</div>" +
        '<div style="margin-top:7px;font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:color-mix(in srgb,var(--color-text) 52%,transparent)">' + s.l + "</div>" +
      "</div>";
    }).join("");

    return (
      '<div style="max-width:1440px;margin:0 auto;padding:clamp(30px,4vw,64px) clamp(18px,4vw,56px) 90px">' +
        '<div style="max-width:20ch">' +
          '<div style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-accent);margin-bottom:16px">Sobre</div>' +
          '<h1 style="margin:0;font-size:clamp(34px,5.6vw,78px);line-height:.97;letter-spacing:-0.035em">Uma corretora, um catálogo curto.</h1>' +
        "</div>" +
        '<div style="height:1px;background:color-mix(in srgb,var(--color-text) 12%,transparent);margin:44px 0"></div>' +
        '<div style="display:flex;flex-wrap:wrap;gap:clamp(28px,4vw,64px)">' +
          '<div style="flex:1 1 420px">' +
            '<p style="font-size:18px;line-height:1.6;max-width:56ch">Este escritório nasceu de uma inconformidade simples: imóveis bonitos sendo anunciados com fotos ruins e textos copiados. Trabalhamos no contrário disso.</p>' +
            '<p style="font-size:15px;line-height:1.72;max-width:60ch;color:color-mix(in srgb,var(--color-text) 72%,transparent)">Somos um escritório pequeno em ' + esc(CIDADE) + ', dedicado a residências com projeto — casas de arquiteto no Urbanova, coberturas reformadas com critério no Aquarius, apartamentos em edifícios que envelhecem bem. Aceitamos poucos imóveis por vez porque cada um recebe visita técnica, fotografia própria e um texto escrito à mão.</p>' +
            '<p style="font-size:15px;line-height:1.72;max-width:60ch;color:color-mix(in srgb,var(--color-text) 72%,transparent)">Para quem compra, isso significa nunca perder uma tarde numa visita que não fazia sentido. Para quem vende, significa um anúncio que atrai a pessoa certa em vez de dez curiosos.</p>' +
            '<div style="margin-top:36px;display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:1px;background:color-mix(in srgb,var(--color-text) 12%,transparent);border-top:1px solid color-mix(in srgb,var(--color-text) 12%,transparent)">' + stats + "</div>" +
          "</div>" +
          '<div class="grayscale" style="flex:1 1 360px;min-height:520px;position:relative;background:var(--color-surface)">' + slotPh("Retrato") + "</div>" +
        "</div>" +
      "</div>"
    );
  }

  /* ============================== Página: Serviços ============================== */

  function servicosHTML() {
    var servicos = [
      { n: "01", t: "Venda com curadoria", d: "Aceitamos poucos imóveis por vez. Cada anúncio recebe visita técnica, sessão de fotografia e texto próprio — e um plano de divulgação combinado com você antes de publicar.", tags: ["Fotografia inclusa", "Texto autoral", "Plano de mídia"] },
      { n: "02", t: "Locação anual e de temporada", d: "Cuidamos da triagem de candidatos, da vistoria de entrada e do contrato. Você recebe um relatório de cada visita, com o que agradou e o que travou a negociação.", tags: ["Triagem", "Vistoria", "Contrato"] },
      { n: "03", t: "Avaliação de valor", d: "Estudo comparativo com transações reais do bairro nos últimos doze meses, não com anúncios. Entregue em PDF, em até cinco dias úteis.", tags: ["Comparativo real", "PDF", "5 dias"] },
      { n: "04", t: "Busca dirigida", d: "Para quem procura algo que não está no mercado. Mapeamos o bairro, batemos na porta e negociamos direto com proprietários.", tags: ["Off-market", "Negociação direta"] }
    ];
    var wa = waLinkFor("Olá! Vi o site da " + BRAND + " e queria falar sobre avaliação de imóvel.");
    var rows = servicos.map(function (s) {
      return '<div style="display:flex;flex-wrap:wrap;gap:clamp(20px,4vw,56px);padding:36px 0;border-bottom:1px solid color-mix(in srgb,var(--color-text) 12%,transparent)">' +
        '<div style="flex:0 0 64px;font-family:var(--font-heading);font-weight:500;font-size:14px;color:var(--color-accent);font-variant-numeric:tabular-nums">' + s.n + "</div>" +
        '<div style="flex:1 1 240px"><h3 style="margin:0;font-size:clamp(21px,2.4vw,30px);letter-spacing:-0.02em">' + esc(s.t) + "</h3></div>" +
        '<div style="flex:1 1 340px">' +
          '<p style="margin:0 0 14px;font-size:15px;line-height:1.7;color:color-mix(in srgb,var(--color-text) 76%,transparent);max-width:52ch">' + esc(s.d) + "</p>" +
          '<div style="display:flex;flex-wrap:wrap;gap:6px">' + s.tags.map(function (t) { return '<span class="tag tag-neutral">' + esc(t) + "</span>"; }).join("") + "</div>" +
        "</div>" +
      "</div>";
    }).join("");

    return (
      '<div style="max-width:1440px;margin:0 auto;padding:clamp(30px,4vw,64px) clamp(18px,4vw,56px) 90px">' +
        '<div style="max-width:22ch">' +
          '<div style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-accent);margin-bottom:16px">Serviços</div>' +
          '<h1 style="margin:0;font-size:clamp(34px,5.4vw,74px);line-height:.97;letter-spacing:-0.035em">O que fazemos, e como.</h1>' +
        "</div>" +
        '<div style="margin-top:52px;border-top:1px solid color-mix(in srgb,var(--color-text) 12%,transparent)">' + rows + "</div>" +
        '<div style="margin-top:56px;background:var(--color-accent);color:var(--color-bg);padding:clamp(32px,4vw,56px);display:flex;flex-wrap:wrap;gap:28px;align-items:flex-end;justify-content:space-between">' +
          '<h2 style="margin:0;font-size:clamp(26px,3.6vw,46px);line-height:1;letter-spacing:-0.03em;max-width:18em">Quer avaliar<br>o seu imóvel?</h2>' +
          '<a href="' + esc(wa) + '" target="_blank" class="btn" style="background:var(--color-bg);color:var(--color-text);padding:14px 22px;justify-content:flex-start">Pedir avaliação gratuita</a>' +
        "</div>" +
      "</div>"
    );
  }

  /* ============================== Página: Contato ============================== */

  function leadFieldActions() {
    return {
      nome: A(function (e) { state.lead.nome = e.target.value; }),
      tel: A(function (e) { state.lead.tel = e.target.value; }),
      email: A(function (e) { state.lead.email = e.target.value; }),
      interesse: A(function (e) { state.lead.interesse = e.target.value; render(); }),
      msg: A(function (e) { state.lead.msg = e.target.value; })
    };
  }

  function sendLeadFrom(closeDialog) {
    return A(function () {
      var l = state.lead;
      if (!l.nome && !l.tel && !l.email) { toast("Deixe pelo menos um nome ou telefone"); return; }
      state.lead = { nome: "", tel: "", email: "", interesse: "Comprar", msg: "" };
      if (closeDialog) state.visitaOpen = false;
      render();
      toast("Mensagem enviada — responda pelo WhatsApp para agilizar");
    });
  }

  function contatoHTML() {
    var wa = waLinkFor("Olá! Vi o site da " + BRAND + " e queria falar com você.");
    var contatos = [
      { l: "WhatsApp", v: WHATSAPP },
      { l: "E-mail", v: EMAIL },
      { l: "Instagram", v: "@" + INSTAGRAM },
      { l: "Atuação", v: CIDADE + " e Vale do Paraíba" },
      { l: "Atendimento", v: "Segunda a sábado, 9h às 19h" }
    ].map(function (c) {
      return '<div style="display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid color-mix(in srgb,var(--color-text) 12%,transparent)">' +
        '<span style="font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:color-mix(in srgb,var(--color-text) 50%,transparent);padding-top:3px">' + esc(c.l) + "</span>" +
        '<span style="font-size:15px;text-align:right">' + esc(c.v) + "</span>" +
      "</div>";
    }).join("");

    var hl = leadFieldActions();
    var sendA = sendLeadFrom(false);
    var l = state.lead;

    return (
      '<div style="max-width:1440px;margin:0 auto;padding:clamp(30px,4vw,64px) clamp(18px,4vw,56px) 90px">' +
        '<div style="display:flex;flex-wrap:wrap;gap:clamp(28px,5vw,80px)">' +
          '<div style="flex:1 1 380px">' +
            '<div style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-accent);margin-bottom:16px">Contato</div>' +
            '<h1 style="margin:0;font-size:clamp(32px,4.8vw,62px);line-height:.98;letter-spacing:-0.035em;max-width:16ch">Vamos conversar sobre o endereço certo.</h1>' +
            '<div style="margin-top:40px;border-top:1px solid color-mix(in srgb,var(--color-text) 12%,transparent)">' + contatos + "</div>" +
            '<a href="' + esc(wa) + '" target="_blank" class="btn btn-primary" style="margin-top:28px;padding:13px 20px;justify-content:flex-start">Chamar no WhatsApp</a>' +
          "</div>" +
          '<div style="flex:1 1 400px">' +
            '<div style="border:1px solid color-mix(in srgb,var(--color-text) 26%,transparent);padding:clamp(22px,3vw,34px)">' +
              '<h3 style="margin:0 0 6px">Envie uma mensagem</h3>' +
              '<p style="font-size:13px;color:color-mix(in srgb,var(--color-text) 60%,transparent);margin-bottom:22px">Respondemos em até um dia útil.</p>' +
              '<div style="display:grid;gap:14px">' +
                '<div class="field"><label>Nome</label><input class="input" data-oninput="' + hl.nome + '" value="' + esc(l.nome) + '" placeholder="Como podemos te chamar"></div>' +
                '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:14px">' +
                  '<div class="field"><label>Telefone</label><input class="input" data-oninput="' + hl.tel + '" value="' + esc(l.tel) + '" placeholder="(12) 9 9999-9999"></div>' +
                  '<div class="field"><label>E-mail</label><input class="input" data-oninput="' + hl.email + '" value="' + esc(l.email) + '" placeholder="voce@email.com"></div>' +
                "</div>" +
                '<div class="field"><label>Interesse</label><select class="input" data-onchange="' + hl.interesse + '">' +
                  [["Comprar", "Quero comprar"], ["Alugar", "Quero alugar"], ["Vender", "Quero vender / anunciar"], ["Avaliação", "Quero avaliar meu imóvel"]].map(function (opt) {
                    return '<option value="' + opt[0] + '"' + (l.interesse === opt[0] ? " selected" : "") + ">" + opt[1] + "</option>";
                  }).join("") +
                "</select></div>" +
                '<div class="field"><label>Mensagem</label><textarea class="input" data-oninput="' + hl.msg + '" placeholder="Bairros de interesse, faixa de valor, prazo...">' + esc(l.msg) + "</textarea></div>" +
                '<button data-onclick="' + sendA + '" class="btn btn-primary" style="justify-content:flex-start;padding:13px 20px">Enviar mensagem</button>' +
              "</div>" +
            "</div>" +
          "</div>" +
        "</div>" +
      "</div>"
    );
  }

  /* ============================== Página: Termos e privacidade ============================== */

  function termosHTML() {
    var wa = waLinkFor("Olá! Vi o site da " + BRAND + " e queria falar com você.");
    var secoesTermos = [
      { t: "O que é este site", d: "Este site é uma vitrine de imóveis selecionados por " + esc(BRAND) + ", " + esc(CRECI) + ". As informações de cada anúncio (preço, área, características) são fornecidas pelos proprietários ou levantadas em visita e podem mudar sem aviso prévio — confirme sempre os detalhes diretamente com a corretora antes de decidir." },
      { t: "Fotos e conteúdo", d: "Fotografias, textos e a marca-d'água aplicada nas imagens pertencem a " + esc(BRAND) + " ou aos respectivos proprietários dos imóveis. Não é permitido copiar ou redistribuir esse material sem autorização." },
      { t: "Sem garantia de disponibilidade", d: "Um imóvel exibido como \"Ativo\" pode já estar em negociação ou ter sido vendido/alugado no intervalo entre a última atualização do site e o seu acesso. O contato pelo WhatsApp é a forma mais rápida de confirmar a situação real." },
      { t: "Uso aceitável", d: "Este catálogo é para uso pessoal de quem busca comprar, alugar ou vender um imóvel. Não utilize o site para extrair dados em massa, redistribuir o conteúdo comercialmente ou qualquer finalidade que não seja a consulta de imóveis." }
    ];
    var secoesPrivacidade = [
      { t: "O que este site guarda no seu navegador", d: "Os imóveis favoritados, os filtros de busca e as preferências do painel administrativo (quando usado pela corretora) ficam salvos apenas no armazenamento local do seu próprio navegador (localStorage) — nada é enviado para um servidor ou compartilhado com terceiros." },
      { t: "Cookies", d: "Usamos um único cookie/armazenamento local para lembrar que você já viu este aviso, evitando mostrá-lo de novo a cada visita. Não usamos cookies de rastreamento, publicidade ou analytics de terceiros." },
      { t: "Formulário de contato e WhatsApp", d: "Ao enviar uma mensagem pelo formulário de contato ou pelo botão do WhatsApp, os dados (nome, telefone, e-mail, mensagem) vão diretamente para a conversa do WhatsApp ou são tratados manualmente pela corretora — não ficam armazenados neste site." },
      { t: "Como limpar seus dados", d: "Para apagar favoritos e preferências salvos por este site, limpe os dados de navegação (\"cookies e dados de site\") do seu navegador para este domínio." },
      { t: "Contato", d: "Dúvidas sobre estes termos ou sobre seus dados: " + esc(EMAIL) + " ou pelo WhatsApp " + esc(WHATSAPP) + "." }
    ];

    function secaoHTML(list) {
      return list.map(function (s) {
        return '<div style="padding:24px 0;border-bottom:1px solid color-mix(in srgb,var(--color-text) 12%,transparent)">' +
          '<h3 style="margin:0 0 8px;font-size:17px;letter-spacing:-0.01em">' + s.t + "</h3>" +
          '<p style="margin:0;max-width:70ch;font-size:14.5px;line-height:1.7;color:color-mix(in srgb,var(--color-text) 74%,transparent)">' + s.d + "</p>" +
        "</div>";
      }).join("");
    }

    return (
      '<div style="max-width:900px;margin:0 auto;padding:clamp(30px,4vw,64px) clamp(18px,4vw,56px) 90px">' +
        '<div style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-accent);margin-bottom:16px">Informações legais</div>' +
        '<h1 style="margin:0;font-size:clamp(30px,4.4vw,50px);letter-spacing:-0.03em;line-height:1.02">Termos de uso e privacidade</h1>' +
        '<p style="margin:16px 0 0;font-size:14px;color:color-mix(in srgb,var(--color-text) 60%,transparent)">Última atualização: 2026. Um resumo simples de como este site funciona e o que ele guarda sobre você.</p>' +

        '<h2 style="margin:44px 0 0;font-size:22px;letter-spacing:-0.015em">Termos de uso</h2>' +
        '<div style="margin-top:8px;border-top:1px solid color-mix(in srgb,var(--color-text) 12%,transparent)">' + secaoHTML(secoesTermos) + "</div>" +

        '<h2 style="margin:44px 0 0;font-size:22px;letter-spacing:-0.015em">Privacidade e cookies</h2>' +
        '<div style="margin-top:8px;border-top:1px solid color-mix(in srgb,var(--color-text) 12%,transparent)">' + secaoHTML(secoesPrivacidade) + "</div>" +

        '<p style="margin-top:32px;font-size:13.5px;color:color-mix(in srgb,var(--color-text) 55%,transparent)">Prefere conversar em vez de ler? <a href="' + esc(wa) + '" target="_blank">Chame no WhatsApp</a>.</p>' +
      "</div>"
    );
  }

  /* ============================== Painel administrativo ============================== */

  function adminHTML() {
    var tabs = [["dash", "Dashboard"], ["form", "Cadastro"], ["marca", "Marca-d'água"]];
    var goHomeA = go("home");
    var tabsHTML = tabs.map(function (t) {
      var k = t[0], l = t[1];
      var goA = A(function () { state.adminTab = k; if (k === "form" && !state.draft) state.draft = blankDraft(); render(); });
      var active = state.adminTab === k;
      return '<button data-onclick="' + goA + '" style="border:0;background:transparent;cursor:pointer;padding:16px 18px;font-family:var(--font-heading);font-weight:500;font-size:13px;color:' + (active ? "var(--color-accent)" : "var(--color-text)") + ";box-shadow:" + (active ? "inset 0 -3px 0 var(--color-accent)" : "none") + '">' + l + "</button>";
    }).join("");

    var body = "";
    if (state.adminTab === "dash") body = adminDashHTML();
    else if (state.adminTab === "form") body = adminFormHTML();
    else if (state.adminTab === "marca") body = adminMarcaHTML();

    return (
      '<div>' +
        '<div style="border-bottom:1px solid color-mix(in srgb,var(--color-text) 12%,transparent);background:var(--color-surface)">' +
          '<div style="max-width:1440px;margin:0 auto;padding:0 clamp(18px,4vw,56px);display:flex;gap:0;flex-wrap:wrap;align-items:center">' +
            '<span style="font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:color-mix(in srgb,var(--color-text) 50%,transparent);padding:16px 24px 16px 0">Painel da corretora</span>' +
            tabsHTML +
            '<button data-onclick="' + goHomeA + '" class="btn btn-ghost" style="margin-left:auto;font-size:12px">Ver o site público ↗</button>' +
          "</div>" +
        "</div>" +
        '<div style="max-width:1440px;margin:0 auto;padding:clamp(26px,3vw,44px) clamp(18px,4vw,56px) 90px">' + body + "</div>" +
      "</div>"
    );
  }

  function adminDashHTML() {
    var rascunhos = state.props.filter(function (x) { return x.status === "rascunho"; }).length;
    var startNewA = A(function () { state.draft = blankDraft(); state.adminTab = "form"; render(); window.scrollTo(0, 0); });

    var counts = [["ativo", "Ativos"], ["vendido", "Vendidos"], ["alugado", "Alugados"], ["rascunho", "Rascunhos"]].map(function (kl) {
      var n = state.props.filter(function (x) { return x.status === kl[0]; }).length;
      return '<div style="background:var(--color-bg);padding:26px 22px 24px">' +
        '<div style="font-family:var(--font-heading);font-weight:500;font-size:40px;line-height:1;letter-spacing:-0.03em;font-variant-numeric:tabular-nums">' + n + "</div>" +
        '<div style="margin-top:9px;font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:color-mix(in srgb,var(--color-text) 55%,transparent)">' + kl[1] + "</div>" +
      "</div>";
    }).join("");

    var rows = state.props.map(function (x) {
      var editA = A(function () { editProp(x.id); });
      var toggleA = A(function () {
        state.props = state.props.map(function (y) { return y.id === x.id ? Object.assign({}, y, { status: y.status === "ativo" ? "rascunho" : "ativo" }) : y; });
        persist(); render(); toast(x.status === "ativo" ? "Saiu do site" : "Publicado no site");
      });
      var dupA = A(function () {
        var copy = Object.assign({}, x, { id: uid("n"), titulo: x.titulo + " (cópia)", status: "rascunho" });
        state.props = [copy].concat(state.props);
        persist(); render(); toast("Duplicado como rascunho");
      });
      var delA = A(function () {
        state.props = state.props.filter(function (y) { return y.id !== x.id; });
        persist(); render(); toast("Imóvel excluído");
      });
      var tagClass = x.status === "ativo" ? "tag tag-accent" : x.status === "rascunho" ? "tag tag-outline" : "tag tag-neutral";
      return "<tr>" +
        '<td><div style="font-family:var(--font-heading);font-weight:500;font-size:13.5px">' + esc(x.titulo) + "</div><div style=\"font-size:11px;color:color-mix(in srgb,var(--color-text) 50%,transparent)\">" + esc(x.tipo) + " · " + (x.area || "—") + " m² · ref. " + esc(x.id.toUpperCase()) + "</div></td>" +
        '<td style="font-size:13px">' + esc(x.bairro) + "</td>" +
        '<td style="font-size:13px;font-variant-numeric:tabular-nums">' + esc(precoLabel(x)) + "</td>" +
        '<td><span class="' + tagClass + '">' + (STATUS_LABEL[x.status] || x.status) + "</span></td>" +
        '<td><div style="display:flex;gap:4px;justify-content:flex-end">' +
          '<button data-onclick="' + editA + '" class="btn btn-secondary" style="font-size:11.5px;padding:5px 10px">Editar</button>' +
          '<button data-onclick="' + toggleA + '" class="btn btn-secondary" style="font-size:11.5px;padding:5px 10px">' + (x.status === "ativo" ? "Despublicar" : "Publicar") + "</button>" +
          '<button data-onclick="' + dupA + '" class="btn btn-secondary" title="Duplicar" style="font-size:11.5px;padding:5px 9px">⧉</button>' +
          '<button data-onclick="' + delA + '" class="btn btn-secondary" title="Excluir" style="font-size:11.5px;padding:5px 9px;color:var(--color-accent-700)">✕</button>' +
        "</div></td>" +
      "</tr>";
    }).join("");

    return (
      '<div>' +
        '<div style="display:flex;align-items:flex-end;justify-content:space-between;gap:20px;flex-wrap:wrap;margin-bottom:30px">' +
          "<div><h1 style=\"margin:0 0 6px;font-size:clamp(26px,3.2vw,40px);letter-spacing:-0.03em\">Bom te ver, " + esc(BRAND.split(" ")[0]) + ".</h1>" +
          '<p style="margin:0;font-size:14px;color:color-mix(in srgb,var(--color-text) 60%,transparent)">' + rascunhos + " rascunho(s) esperando você.</p></div>" +
          '<button data-onclick="' + startNewA + '" class="btn btn-primary" style="padding:12px 20px;justify-content:flex-start">＋ Cadastrar imóvel</button>' +
        "</div>" +
        '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:1px;background:color-mix(in srgb,var(--color-text) 12%,transparent);border-top:1px solid color-mix(in srgb,var(--color-text) 12%,transparent);border-bottom:1px solid color-mix(in srgb,var(--color-text) 12%,transparent)">' + counts + "</div>" +
        '<div style="margin-top:44px">' +
          '<div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:14px">' +
            '<div style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:color-mix(in srgb,var(--color-text) 52%,transparent)">Seus imóveis</div>' +
            '<span style="font-size:12px;color:color-mix(in srgb,var(--color-text) 50%,transparent)">' + state.props.length + " no total</span>" +
          "</div>" +
          '<div style="overflow-x:auto"><table class="table"><thead><tr><th>Imóvel</th><th>Bairro</th><th>Valor</th><th>Status</th><th style="text-align:right">Ações</th></tr></thead><tbody>' + rows + "</tbody></table></div>" +
        "</div>" +
      "</div>"
    );
  }

  function editProp(id) {
    var p = state.props.filter(function (x) { return x.id === id; })[0];
    if (!p) return;
    state.draft = Object.assign({}, p, {
      preco: String(p.preco || ""), area: String(p.area || ""), quartos: String(p.quartos || ""),
      banheiros: String(p.banheiros || ""), vagas: String(p.vagas || ""),
      etiquetas: (p.etiquetas || []).join(", "), feats: (p.feats || []).slice(), photos: (p.photos || []).slice()
    });
    state.adminTab = "form";
    render(); window.scrollTo(0, 0);
  }

  function syncFormPreview() {
    var d2 = state.draft || blankDraft();
    var titleEl = document.getElementById("prev-titulo");
    var localEl = document.getElementById("prev-local");
    var precoEl = document.getElementById("prev-preco");
    var specsEl = document.getElementById("prev-specs");
    if (titleEl) titleEl.textContent = d2.titulo || "Imóvel sem título";
    if (localEl) localEl.textContent = (d2.bairro || "Bairro") + " · " + d2.tipo;
    if (precoEl) precoEl.textContent = d2.preco ? (d2.modo === "Aluguel" ? moneyBR(d2.preco) + " /mês" : moneyBR(d2.preco)) : "Valor a combinar";
    var specsPrev = [d2.area ? d2.area + " m²" : "", d2.quartos ? d2.quartos + " quartos" : ""].filter(Boolean).join(" · ");
    if (specsEl) specsEl.textContent = specsPrev || "—";
  }

  function setDraftField(key, livePreview) {
    return A(function (e) {
      state.draft = state.draft || blankDraft();
      state.draft[key] = e.target.value;
      if (livePreview) syncFormPreview();
    });
  }

  function adminFormHTML() {
    var d2 = state.draft || blankDraft();
    var cancelA = A(function () { state.draft = null; state.adminTab = "dash"; render(); });
    var saveDraftA = A(function () { saveDraftWith("rascunho"); });
    var publishA = A(function () { saveDraftWith("ativo"); });
    var onPhotosA = A(onPhotos);

    var tipoOpts = TIPOS.map(function (t) { return '<option value="' + esc(t) + '"' + (d2.tipo === t ? " selected" : "") + ">" + esc(t) + "</option>"; }).join("");

    var photosHTML = "";
    if ((d2.photos || []).length) {
      photosHTML = '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(128px,1fr));gap:8px;margin-top:12px">' +
        d2.photos.map(function (ph, i) {
          var isCover = i === (d2.coverIdx || 0);
          var setCoverA = A(function () { state.draft.coverIdx = i; render(); });
          var removeA = A(function () {
            var list = (state.draft.photos || []).filter(function (_, j) { return j !== i; });
            state.draft.photos = list;
            state.draft.coverIdx = Math.min(state.draft.coverIdx || 0, Math.max(0, list.length - 1));
            render();
          });
          var dragStartA = A(function () { state.dragFrom = i; });
          var dragOverA = A(function (e) { e.preventDefault(); });
          var dropA = A(function (e) {
            e.preventDefault();
            var from = state.dragFrom;
            if (from === null || from === undefined || from === i) return;
            var list = (state.draft.photos || []).slice();
            var moved = list.splice(from, 1)[0];
            list.splice(i, 0, moved);
            state.draft.photos = list; state.dragFrom = null;
            render();
          });
          var dragEndA = A(function () { state.dragFrom = null; render(); });
          return '<div draggable="true" data-ondragstart="' + dragStartA + '" data-ondragover="' + dragOverA + '" data-ondrop="' + dropA + '" data-ondragend="' + dragEndA + '" style="position:relative;border:' + (isCover ? "2px solid var(--color-accent)" : "1px solid color-mix(in srgb,var(--color-text) 12%,transparent)") + ";background:var(--color-surface);cursor:grab" + '">' +
            '<div style="width:100%;height:96px;overflow:hidden">' + photoImg(ph.src) + "</div>" +
            (isCover ? '<span style="position:absolute;left:0;top:0;background:var(--color-accent);color:var(--color-bg);font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;padding:4px 7px">Capa</span>' : "") +
            '<div style="display:flex;border-top:1px solid color-mix(in srgb,var(--color-text) 12%,transparent)">' +
              '<button data-onclick="' + setCoverA + '" class="btn" style="flex:1;font-size:10.5px;padding:6px 4px;justify-content:center">Capa</button>' +
              '<button data-onclick="' + removeA + '" class="btn" style="flex:0 0 34px;font-size:11px;padding:6px 0;justify-content:center;color:var(--color-accent-700);border-left:1px solid color-mix(in srgb,var(--color-text) 12%,transparent)">✕</button>' +
            "</div>" +
          "</div>";
        }).join("") + "</div>";
    }

    var featsHTML = FEATS.map(function (f) {
      var active = (d2.feats || []).indexOf(f) !== -1;
      return chipHTML(f, active, function () {
        state.draft = state.draft || blankDraft();
        var cur = state.draft.feats || [];
        var i = cur.indexOf(f);
        if (i === -1) cur.push(f); else cur.splice(i, 1);
        state.draft.feats = cur;
        render();
      });
    }).join("");

    var specsPrev = [d2.area ? d2.area + " m²" : "", d2.quartos ? d2.quartos + " quartos" : ""].filter(Boolean).join(" · ");

    return (
      '<div>' +
        '<div style="display:flex;align-items:flex-end;justify-content:space-between;gap:20px;flex-wrap:wrap;padding-bottom:20px;border-bottom:1px solid color-mix(in srgb,var(--color-text) 12%,transparent)">' +
          "<div>" +
            '<div style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-accent);margin-bottom:10px">' + (d2.id ? "Editando" : "Novo imóvel") + "</div>" +
            '<h1 style="margin:0;font-size:clamp(24px,3vw,36px);letter-spacing:-0.03em">' + esc(d2.id ? (d2.titulo || "Imóvel sem título") : "Cadastrar um imóvel") + "</h1>" +
            '<p style="margin:8px 0 0;font-size:13px;color:color-mix(in srgb,var(--color-text) 58%,transparent)">Nenhum campo é obrigatório. Salve como rascunho e complete depois.</p>' +
          "</div>" +
          '<div style="display:flex;gap:8px;flex-wrap:wrap">' +
            '<button data-onclick="' + cancelA + '" class="btn btn-secondary" style="padding:10px 16px">Cancelar</button>' +
            '<button data-onclick="' + saveDraftA + '" class="btn btn-secondary" style="padding:10px 16px">Salvar rascunho</button>' +
            '<button data-onclick="' + publishA + '" class="btn btn-primary" style="padding:10px 18px">Publicar no site</button>' +
          "</div>" +
        "</div>" +

        '<div style="display:flex;flex-wrap:wrap;gap:clamp(24px,3vw,48px);padding-top:32px;align-items:flex-start">' +
          '<div style="flex:1 1 480px;min-width:0;display:grid;gap:26px">' +
            "<div>" +
              '<div style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:color-mix(in srgb,var(--color-text) 52%,transparent);margin-bottom:16px">Fotos</div>' +
              '<label style="display:block;border:1px dashed color-mix(in srgb,var(--color-text) 18%,transparent);background:var(--color-surface);padding:28px 22px;cursor:pointer;text-align:left">' +
                '<input type="file" accept="image/*" multiple data-onchange="' + onPhotosA + '" style="position:absolute;width:0;height:0;opacity:0">' +
                '<div style="font-family:var(--font-heading);font-weight:500;font-size:15px;margin-bottom:5px">Escolher fotos do computador</div>' +
                '<div style="font-size:12.5px;color:color-mix(in srgb,var(--color-text) 58%,transparent)">JPG ou PNG. Arraste as miniaturas para ordenar — a primeira é a capa. As originais ficam guardadas aqui, sem marca-d\'água.</div>' +
              "</label>" + photosHTML +
            "</div>" +

            "<div>" +
              '<div style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:color-mix(in srgb,var(--color-text) 52%,transparent);margin-bottom:16px">Identificação</div>' +
              '<div style="display:grid;gap:14px">' +
                '<div class="field"><label>Título do anúncio</label><input class="input" data-oninput="' + setDraftField("titulo", true) + '" value="' + esc(d2.titulo) + '" placeholder="Casa de arquiteto no Urbanova"></div>' +
                '<div class="field"><label>Descrição</label><textarea class="input" style="min-height:150px" data-oninput="' + setDraftField("desc", false) + '" placeholder="Escreva como você contaria numa visita: o que encanta, a luz, o entorno — e o que precisa de reforma.">' + esc(d2.desc) + "</textarea></div>" +
                '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:14px">' +
                  '<div class="field"><label>Tipo</label><select class="input" data-onchange="' + setDraftField("tipo", true) + '">' + tipoOpts + "</select></div>" +
                  '<div class="field"><label>Finalidade</label><select class="input" data-onchange="' + setDraftField("modo", true) + '"><option value="Venda"' + (d2.modo === "Venda" ? " selected" : "") + ">Venda</option><option value=\"Aluguel\"" + (d2.modo === "Aluguel" ? " selected" : "") + ">Aluguel</option></select></div>" +
                  '<div class="field"><label>Valor (R$)</label><input class="input" data-oninput="' + setDraftField("preco", true) + '" value="' + esc(d2.preco) + '" placeholder="1290000"></div>' +
                "</div>" +
              "</div>" +
            "</div>" +

            "<div>" +
              '<div style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:color-mix(in srgb,var(--color-text) 52%,transparent);margin-bottom:16px">Endereço e medidas</div>' +
              '<div style="display:grid;gap:14px">' +
                '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:14px">' +
                  '<div class="field"><label>CEP</label><input class="input" inputmode="numeric" data-oninput="' + A(onCepInput) + '" value="' + esc(d2.cep) + '" placeholder="12210-000"><div style="font-size:11px;margin-top:5px;color:color-mix(in srgb,var(--color-text) 52%,transparent)">Preenche endereço e bairro automaticamente</div></div>' +
                "</div>" +
                '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:14px">' +
                  '<div class="field"><label>Endereço / referência</label><input class="input" data-oninput="' + setDraftField("endereco", false) + '" value="' + esc(d2.endereco) + '" placeholder="Rua das Andorinhas, 240"></div>' +
                  '<div class="field"><label>Bairro</label><input class="input" data-oninput="' + setDraftField("bairro", true) + '" value="' + esc(d2.bairro) + '" placeholder="Urbanova"></div>' +
                "</div>" +
                '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:14px">' +
                  '<div class="field"><label>Área (m²)</label><input class="input" data-oninput="' + setDraftField("area", true) + '" value="' + esc(d2.area) + '" placeholder="210"></div>' +
                  '<div class="field"><label>Quartos</label><input class="input" data-oninput="' + setDraftField("quartos", true) + '" value="' + esc(d2.quartos) + '" placeholder="3"></div>' +
                  '<div class="field"><label>Banheiros</label><input class="input" data-oninput="' + setDraftField("banheiros", false) + '" value="' + esc(d2.banheiros) + '" placeholder="2"></div>' +
                  '<div class="field"><label>Vagas</label><input class="input" data-oninput="' + setDraftField("vagas", false) + '" value="' + esc(d2.vagas) + '" placeholder="2"></div>' +
                "</div>" +
              "</div>" +
            "</div>" +

            "<div>" +
              '<div style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:color-mix(in srgb,var(--color-text) 52%,transparent);margin-bottom:16px">Características</div>' +
              '<div style="display:flex;flex-wrap:wrap;gap:8px">' + featsHTML + "</div>" +
            "</div>" +
          "</div>" +

          '<div style="flex:0 1 320px;min-width:270px;display:grid;gap:20px">' +
            '<div style="border:1px solid color-mix(in srgb,var(--color-text) 14%,transparent);padding:20px">' +
              '<div style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:color-mix(in srgb,var(--color-text) 52%,transparent);margin-bottom:14px">Publicação</div>' +
              '<div class="field" style="margin-bottom:14px"><label>Status</label><select class="input" data-onchange="' + setDraftField("status", false) + '">' +
                ["rascunho", "ativo", "vendido", "alugado"].map(function (s) {
                  var label = s === "rascunho" ? "Rascunho (invisível no site)" : STATUS_LABEL[s];
                  return '<option value="' + s + '"' + (d2.status === s ? " selected" : "") + ">" + label + "</option>";
                }).join("") +
              "</select></div>" +
              '<div class="field"><label>Etiquetas (separe por vírgula)</label><input class="input" data-oninput="' + setDraftField("etiquetas", false) + '" value="' + esc(d2.etiquetas) + '" placeholder="Exclusivo, Aceita permuta"></div>' +
            "</div>" +
            '<div style="border:1px solid color-mix(in srgb,var(--color-text) 14%,transparent);padding:20px;background:var(--color-surface)">' +
              '<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" style="color:var(--color-accent)"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"></path><path d="m4 20 16-16"></path></svg><span style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:color-mix(in srgb,var(--color-text) 55%,transparent)">Observações internas</span></div>' +
              '<textarea class="input" style="min-height:120px;background:var(--color-bg)" data-oninput="' + setDraftField("obs", false) + '" placeholder="Proprietário aceita proposta até 8%. Chave na portaria. Não divulgar o nome do condomínio.">' + esc(d2.obs) + "</textarea>" +
              '<div style="font-size:11.5px;line-height:1.5;color:color-mix(in srgb,var(--color-text) 52%,transparent);margin-top:10px">Este campo nunca aparece no site público.</div>' +
            "</div>" +
            '<div style="border:1px solid color-mix(in srgb,var(--color-text) 14%,transparent);padding:20px">' +
              '<div style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:color-mix(in srgb,var(--color-text) 52%,transparent);margin-bottom:12px">Prévia do card</div>' +
              '<div id="prev-titulo" style="font-family:var(--font-heading);font-weight:500;font-size:16px;line-height:1.18">' + esc(d2.titulo || "Imóvel sem título") + "</div>" +
              '<div id="prev-local" style="margin-top:5px;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:color-mix(in srgb,var(--color-text) 50%,transparent)">' + esc((d2.bairro || "Bairro") + " · " + d2.tipo) + "</div>" +
              '<div style="margin-top:12px;padding-top:10px;border-top:1px solid color-mix(in srgb,var(--color-text) 12%,transparent);display:flex;justify-content:space-between;gap:10px">' +
                '<span id="prev-preco" style="font-family:var(--font-heading);font-weight:500;font-size:14px">' + esc(d2.preco ? (d2.modo === "Aluguel" ? moneyBR(d2.preco) + " /mês" : moneyBR(d2.preco)) : "Valor a combinar") + "</span>" +
                '<span id="prev-specs" style="font-size:11.5px;color:color-mix(in srgb,var(--color-text) 55%,transparent)">' + esc(specsPrev || "—") + "</span>" +
              "</div>" +
            "</div>" +
          "</div>" +
        "</div>" +
      "</div>"
    );
  }

  function onPhotos(e) {
    var files = Array.prototype.slice.call(e.target.files || []);
    if (!files.length) return;
    Promise.all(files.map(function (f) {
      return new Promise(function (res) {
        var r = new FileReader();
        r.onload = function () { res({ id: uid("ph"), src: r.result, name: f.name }); };
        r.readAsDataURL(f);
      });
    })).then(function (added) {
      state.draft = state.draft || blankDraft();
      state.draft.photos = (state.draft.photos || []).concat(added);
      render();
      toast(added.length + (added.length > 1 ? " fotos adicionadas" : " foto adicionada"));
    });
    e.target.value = "";
  }

  function saveDraftWith(status) {
    var d = state.draft || blankDraft();
    var rec = Object.assign({}, d, {
      id: d.id || uid("n"),
      titulo: d.titulo || "Imóvel sem título",
      preco: Number(String(d.preco).replace(/\D/g, "")) || 0,
      area: Number(d.area) || 0, quartos: Number(d.quartos) || 0, banheiros: Number(d.banheiros) || 0, vagas: Number(d.vagas) || 0,
      etiquetas: String(d.etiquetas || "").split(",").map(function (s) { return s.trim(); }).filter(Boolean),
      bairro: d.bairro || "A definir",
      status: status
    });
    var exists = state.props.some(function (p) { return p.id === rec.id; });
    state.props = exists ? state.props.map(function (p) { return p.id === rec.id ? rec : p; }) : [rec].concat(state.props);
    state.draft = null; state.adminTab = "dash";
    persist(); render();
    toast(status === "rascunho" ? "Rascunho salvo — complete quando quiser" : "Publicado no site");
    window.scrollTo(0, 0);
  }

  function onWm(e) {
    var f = (e.target.files || [])[0];
    if (!f) return;
    var r = new FileReader();
    r.onload = function () {
      state.wm = Object.assign({}, state.wm, { src: r.result, name: f.name, on: true });
      persist(); render();
      toast("Marca-d'água atualizada");
    };
    r.readAsDataURL(f);
    e.target.value = "";
  }

  function syncWmPreview() {
    var overlay = document.getElementById("wm-preview-overlay");
    if (overlay) overlay.outerHTML = wmSimOverlayHTML();
    var opLabel = document.getElementById("wm-op-label");
    if (opLabel) opLabel.textContent = state.wm.op + "%";
    var scaleLabel = document.getElementById("wm-scale-label");
    if (scaleLabel) scaleLabel.textContent = state.wm.scale + "%";
  }

  function wmSimOverlayHTML() {
    if (!state.wm.on || !state.wm.src) return '<div id="wm-preview-overlay"></div>';
    var html = wmOverlayHTML(1);
    return html.replace("<div ", '<div id="wm-preview-overlay" ');
  }

  function adminMarcaHTML() {
    var w = state.wm;
    var onWmA = A(onWm);
    var removeWmA = A(function () { state.wm = Object.assign({}, state.wm, { src: "", name: "" }); persist(); render(); toast("Marca-d'água removida"); });
    var onToggleA = A(function (e) { state.wm.on = e.target.checked; persist(); render(); });
    var opInputA = A(function (e) { state.wm.op = Number(e.target.value); syncWmPreview(); });
    var opChangeA = A(function (e) { state.wm.op = Number(e.target.value); persist(); syncWmPreview(); });
    var scaleInputA = A(function (e) { state.wm.scale = Number(e.target.value); syncWmPreview(); });
    var scaleChangeA = A(function (e) { state.wm.scale = Number(e.target.value); persist(); syncWmPreview(); });
    var posA = A(function (e) { state.wm.pos = e.target.value; persist(); render(); });

    var fileBlock = w.src ?
      '<div>' +
        '<div style="background:repeating-conic-gradient(var(--color-neutral-200) 0 25%,var(--color-bg) 0 50%) 0 0/18px 18px;border:1px solid color-mix(in srgb,var(--color-text) 12%,transparent);padding:22px;display:grid;place-items:center;min-height:130px">' +
          '<div style="width:100%;height:110px;background-image:url(\'' + esc(w.src) + '\');background-size:contain;background-repeat:no-repeat;background-position:center"></div>' +
        "</div>" +
        '<div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap">' +
          '<label class="btn btn-secondary" style="padding:9px 14px;cursor:pointer">Substituir<input type="file" accept="image/png,image/jpeg" data-onchange="' + onWmA + '" style="position:absolute;width:0;height:0;opacity:0"></label>' +
          '<button data-onclick="' + removeWmA + '" class="btn btn-secondary" style="padding:9px 14px;color:var(--color-accent-700)">Remover</button>' +
        "</div>" +
        '<div style="font-size:11.5px;color:color-mix(in srgb,var(--color-text) 50%,transparent);margin-top:10px">' + esc(w.name) + "</div>" +
      "</div>" :
      '<label style="display:block;border:1px dashed color-mix(in srgb,var(--color-text) 18%,transparent);background:var(--color-surface);padding:32px 22px;cursor:pointer">' +
        '<input type="file" accept="image/png,image/jpeg" data-onchange="' + onWmA + '" style="position:absolute;width:0;height:0;opacity:0">' +
        '<div style="font-family:var(--font-heading);font-weight:500;font-size:15px;margin-bottom:5px">Enviar imagem da marca-d\'água</div>' +
        '<div style="font-size:12.5px;color:color-mix(in srgb,var(--color-text) 58%,transparent)">PNG com fundo transparente dá o melhor resultado.</div>' +
      "</label>";

    var simPhoto = "";
    for (var i = 0; i < state.props.length && !simPhoto; i++) {
      var pp = state.props[i];
      if (pp.photos && pp.photos.length) simPhoto = (pp.photos[pp.coverIdx || 0] || pp.photos[0]).src;
    }

    return (
      '<div>' +
        '<div style="padding-bottom:20px;border-bottom:1px solid color-mix(in srgb,var(--color-text) 12%,transparent)">' +
          '<div style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-accent);margin-bottom:10px">Marca-d\'água</div>' +
          '<h1 style="margin:0;font-size:clamp(24px,3vw,36px);letter-spacing:-0.03em">Sua marca sobre as fotos publicadas</h1>' +
          '<p style="margin:8px 0 0;max-width:60ch;font-size:13.5px;color:color-mix(in srgb,var(--color-text) 60%,transparent)">Envie um PNG, JPG ou JPEG. Aplicamos automaticamente nas fotos do site público, centralizada e discreta. As originais continuam intactas aqui no painel.</p>' +
        "</div>" +
        '<div style="display:flex;flex-wrap:wrap;gap:clamp(24px,3vw,48px);padding-top:32px;align-items:flex-start">' +
          '<div style="flex:1 1 320px;display:grid;gap:20px">' +
            '<div style="border:1px solid color-mix(in srgb,var(--color-text) 14%,transparent);padding:22px">' +
              '<div style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:color-mix(in srgb,var(--color-text) 52%,transparent);margin-bottom:16px">Arquivo</div>' + fileBlock +
            "</div>" +
            '<div style="border:1px solid color-mix(in srgb,var(--color-text) 14%,transparent);padding:22px">' +
              '<div style="display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:18px"><span style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:color-mix(in srgb,var(--color-text) 52%,transparent)">Ajuste fino</span>' +
                '<label class="radio"><input type="checkbox" ' + (w.on ? "checked" : "") + ' data-onchange="' + onToggleA + '"><span class="dot"></span>Aplicar</label></div>' +
              '<div class="field" style="margin-bottom:16px"><label>Opacidade — <span id="wm-op-label">' + w.op + '%</span></label><input type="range" min="5" max="60" step="1" value="' + w.op + '" data-oninput="' + opInputA + '" data-onchange="' + opChangeA + '" style="width:100%;accent-color:var(--color-accent)"></div>' +
              '<div class="field" style="margin-bottom:16px"><label>Tamanho — <span id="wm-scale-label">' + w.scale + '%</span> da largura</label><input type="range" min="10" max="70" step="1" value="' + w.scale + '" data-oninput="' + scaleInputA + '" data-onchange="' + scaleChangeA + '" style="width:100%;accent-color:var(--color-accent)"></div>' +
              '<div class="field"><label>Posição</label><select class="input" data-onchange="' + posA + '">' +
                [["center", "Centralizada (padrão)"], ["bottom-right", "Canto inferior direito"], ["bottom-left", "Canto inferior esquerdo"], ["top-right", "Canto superior direito"], ["top-left", "Canto superior esquerdo"]].map(function (o) {
                  return '<option value="' + o[0] + '"' + (w.pos === o[0] ? " selected" : "") + ">" + o[1] + "</option>";
                }).join("") +
              "</select></div>" +
            "</div>" +
          "</div>" +
          '<div style="flex:1 1 420px;min-width:300px">' +
            '<div style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:color-mix(in srgb,var(--color-text) 52%,transparent);margin-bottom:14px">Simulação sobre uma foto</div>' +
            '<div style="position:relative;width:100%;aspect-ratio:3/2;background:var(--color-surface);border:1px solid color-mix(in srgb,var(--color-text) 14%,transparent);overflow:hidden">' +
              '<div class="grayscale" style="position:absolute;inset:0">' + (simPhoto ? photoImg(simPhoto) : slotPh("Foto")) + "</div>" +
              wmSimOverlayHTML() +
            "</div>" +
            '<div style="display:flex;gap:14px;margin-top:14px;flex-wrap:wrap">' +
              '<div style="flex:1 1 180px;border-top:1px solid color-mix(in srgb,var(--color-text) 12%,transparent);padding-top:12px"><div style="font-family:var(--font-heading);font-weight:500;font-size:13px;margin-bottom:4px">Site público</div><div style="font-size:12px;color:color-mix(in srgb,var(--color-text) 58%,transparent)">Todas as fotos recebem a marca automaticamente.</div></div>' +
              '<div style="flex:1 1 180px;border-top:1px solid color-mix(in srgb,var(--color-text) 12%,transparent);padding-top:12px"><div style="font-family:var(--font-heading);font-weight:500;font-size:13px;margin-bottom:4px">Painel</div><div style="font-size:12px;color:color-mix(in srgb,var(--color-text) 58%,transparent)">Miniaturas do cadastro mostram sempre o original.</div></div>' +
            "</div>" +
          "</div>" +
        "</div>" +
      "</div>"
    );
  }

  /* ============================== Diálogo de visita / Toast ============================== */

  function visitaDialogHTML() {
    if (!state.visitaOpen) return "";
    var p = openProperty();
    var closeA = A(function () { state.visitaOpen = false; render(); });
    var hl = leadFieldActions();
    var sendA = sendLeadFrom(true);
    var l = state.lead;
    return (
      '<div class="dialog-backdrop" style="z-index:200;animation:fadein .2s both">' +
        '<div class="dialog">' +
          '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:16px">' +
            '<div><div style="font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-accent);margin-bottom:8px">Solicitar visita</div><div class="dialog-title">' + esc(p ? p.titulo : "") + "</div></div>" +
            '<button data-onclick="' + closeA + '" class="btn btn-secondary" style="padding:6px 10px">✕</button>' +
          "</div>" +
          '<div style="display:grid;gap:12px">' +
            '<div class="field"><label>Nome</label><input class="input" data-oninput="' + hl.nome + '" value="' + esc(l.nome) + '"></div>' +
            '<div class="field"><label>WhatsApp</label><input class="input" data-oninput="' + hl.tel + '" value="' + esc(l.tel) + '" placeholder="(12) 9 9999-9999"></div>' +
            '<div class="field"><label>Melhor dia e horário</label><input class="input" data-oninput="' + hl.msg + '" value="' + esc(l.msg) + '" placeholder="Quinta à tarde, por exemplo"></div>' +
          "</div>" +
          '<div class="dialog-actions">' +
            '<button data-onclick="' + closeA + '" class="btn btn-secondary" style="padding:10px 16px">Depois</button>' +
            '<button data-onclick="' + sendA + '" class="btn btn-primary" style="padding:10px 18px">Enviar pedido</button>' +
          "</div>" +
        "</div>" +
      "</div>"
    );
  }

  function toastHTML() {
    if (!state.toast) return "";
    return '<div id="toast-el" style="position:fixed;left:50%;bottom:28px;transform:translateX(-50%);z-index:300;background:var(--color-text);color:var(--color-bg);padding:13px 20px;font-size:13px;font-family:var(--font-heading);font-weight:500;letter-spacing:-0.01em;box-shadow:var(--shadow-lg);animation:rise .3s cubic-bezier(.2,.8,.2,1) both">' + esc(state.toast) + "</div>";
  }

  function cookieBarHTML() {
    if (state.cookiesOk) return "";
    var okA = A(function () { acceptCookies(); });
    var moreA = go("termos");
    return (
      '<div class="ptk-cookie-bar">' +
        '<p>Usamos apenas um armazenamento local para lembrar seus favoritos e preferências — sem cookies de rastreamento ou publicidade. <a href="#" data-onclick="' + moreA + '">Saiba mais</a>.</p>' +
        '<button data-onclick="' + okA + '" class="btn btn-primary" style="padding:10px 18px">Entendi</button>' +
      "</div>"
    );
  }

  /* ============================== Render principal ============================== */

  function render() {
    resetActions();
    var route = state.route;
    var page = "";
    if (route === "home") page = homeHTML();
    else if (route === "catalogo") page = catalogoHTML();
    else if (route === "imovel") page = detailHTML();
    else if (route === "sobre") page = sobreHTML();
    else if (route === "servicos") page = servicosHTML();
    else if (route === "contato") page = contatoHTML();
    else if (route === "termos") page = termosHTML();
    else if (route === "admin") page = adminHTML();

    var html =
      '<div style="min-height:100vh;background:var(--color-bg);font-family:var(--font-body)">' +
        headerHTML() + page + footerHTML() + visitaDialogHTML() + toastHTML() + cookieBarHTML() +
      "</div>";

    document.getElementById("app").innerHTML = html;
  }

  /* ============================== Delegação de eventos ============================== */

  function initEvents() {
    var app = document.getElementById("app");
    ["click", "change", "input", "dragstart", "dragover", "drop", "dragend"].forEach(function (evt) {
      app.addEventListener(evt, function (e) {
        var attr = "data-on" + evt;
        var el = e.target.closest && e.target.closest("[" + attr + "]");
        if (!el) return;
        var id = el.getAttribute(attr);
        var fn = actions[id];
        if (fn) fn(e);
      });
    });
  }

  document.addEventListener("keydown", function (e) {
    if (state.route !== "imovel") return;
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    var p = openProperty();
    var n = galleryOf(p).length;
    if (!n) return;
    state.galIdx = (state.galIdx + (e.key === "ArrowRight" ? 1 : -1) + n) % n;
    render();
  });

  /* ============================== Início ============================== */

  loadState();
  initEvents();
  render();

  setTimeout(function () {
    var loader = document.getElementById("ptk-loader");
    if (!loader) return;
    loader.classList.add("ptk-loader-hidden");
    setTimeout(function () { loader.remove(); }, 550);
  }, 1650);
})();
