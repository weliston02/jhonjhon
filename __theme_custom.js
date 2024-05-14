// js loja neutral clean modificado
function accountMenu() {
    var i = !1;
    $("#cabecalho .btn-group").length && (i = !0,
    $("#cabecalho .btn-group > a").text()),
    i ? $(".account").append($("<ul class='account-list'><li><a href='/conta/index'>Minha Conta</a></li><li><a href='/conta/pedido/listar'>Meus Pedidos</a></li><li><a href='/conta/favorito/listar'>Lista de Desejos</a></li><li><a href='/conta/logout'>Sair</a></li></ul></div>")) : $(".account").append($("<ul class='account-list'> <li> <a href='/conta/login'>Entrar</a> </li> <li> <a href='/conta/login'>Cadastrar</a> </li></ul></div>"))
}

function addWishlist() {
    $('<a class="adic-favo" href="#"></a>').prependTo(".pagina-inicial .listagem-item"),
    $(".pagina-inicial .listagem-item").each(function() {
        var i = $(this).find(".produto .produto-compartilhar .lista-redes").attr("data-trustvox-product-code");
        $(this).find(".adic-favo").attr("href", "/conta/favorito/" + i + "/adicionar")
    })
}

function buyOfShowcase() {
    $(".listagem .acoes-produto").append($('<a class="adic-prod" href="" title="Adicionar">Adicionar</a>')),
    $(".listagem-item").each(function() {
        var i = "/carrinho/produto/" + $(this).find(".info-produto .hide.trustvox-stars").attr("data-trustvox-product-code") + "/adicionar";
        $(this).find(".adic-prod").attr("href", i)
    }),
    $(document).on("click", ".adic-prod", function(i) {
        i.preventDefault();
        var t = $(this);
        $.ajax({
            url: $(this).attr("href").replace("https:", ""),
            dataType: "json",
            type: "POST"
        }).done(function() {
            t.text("").attr("title", "Adicionado").addClass("adicionado"),
            $(".carrinho-interno-ajax").load("/carrinho/listar_produtos"),
            selectAddItem(),
            updateCartItems(),
            setTimeout(function() {
                updateCartTotal()
            }, 1e3)
        })
    })
}

function updateCartItems() {
    var i = parseInt($(".carrinho .carrinho-info i").text().split("")[0]) || 0;
    i++,
    $(".qtd-carrinho").text(i.toString()),
    i > 0 && $(".carrinho").removeClass("vazio")
}

function updateCartTotal() {
    var i = $("#cabecalho .carrinho .carrinho-interno").find(".carrino-total .titulo").text();
    $("#cabecalho .carrinho .wrap .total-cart").text(i)
}

function selectAddItem() {
    $(".listagem-item").each(function() {
        $(this).find(".adic-prod").hasClass("adicionado") && $(this).addClass("item-adicionado")
    })
}

function cartWithPrice() {
    var i = $("#cabecalho .carrinho, #barraTopo .carrinho")
      , t = i.eq(0).find(".carrinho-interno .carrino-total .titulo").text()
      , e = "<div class='wrap'><h3 class='title-cart'>Meu carrinho</h3><strong class='total-cart titulo'>" + (i.length && i.hasClass("vazio") ? "R$ 0,00" : t) + "</strong></div>";
    i.find(" > a").append(e)
}

function copyright() {
    $("#rodape div:last-child .span9.span12 + div,#rodape div:last-child .span9.span12 + div + div ").remove(""),
    $("#rodape div:last-child > .conteiner > .row-fluid").append('<div class="cr conteiner" style="opacity:1!important;display:block!important;visibility:visible!important;margin:0 auto!important;margin-top:20px!important;position:static!important;text-align:center!important;overflow:visible!important;padding:7px 0px!important;"><div>'),
    $(".cr.conteiner").append('<div id="cr-chicle-theme" style="opacity:1;display:inline-block;visibility:visible;margin:0!important;position:static!important;overflow:visible!important;padding:0 30px 2px 0px!important;"><a href="https://globecommerce.com.br/" rel="nofollow" title="Globe Theme Templates Loja Virtual" target="_blank" style="opacity:1!important;display:inline-block!important;visibility:visible!important;margin:0!important;position:static!important;overflow:visible!important;float:right!important;"><img src="https://cdn.awsli.com.br/1196/1196362/arquivos/logo_preto_tipo_2.png" alt="Globe Commerce Loja Virtual" style="opacity:1!important;display:inline-block!important;visibility:visible!important;margin:0!important;position:static!important;overflow:visible!important;max-width: 150px;"></a></div></div>'),
    $(".cr.conteiner").append('<div id="cr-li" style="opacity:1!important;display:inline-block;visibility:visible;margin:0!important;position:static!important;overflow:visible!important;padding:0 15px 5px 0px!important;"><a href="https://sua.lojaintegrada.com.br/NDu-2h0e0" target="_blank" title="Loja Integrada" style="opacity:1!important;display:inline-block!important;visibility:visible!important;margin:0!important;position:static!important;overflow:visible!important;float:right!important;"><img src="https://cdn.awsli.com.br/1196/1196362/arquivos/logoli.png" title="Loja Integrada" alt="Loja Integrada" style="opacity:1!important;display:inline-block!important;visibility:visible!important;margin:0!important;position:static!important;overflow:visible!important;max-width: 140px;"></a></div>'),
    $("head").append($("<style>@media screen and (max-width:767px){.span9.span12 p{margin-bottom:-25px!important}}.span9.span12 p{padding:5px 0 15px 0}</style>"))
}

function discountOff() {
    $(".bandeiras-produto .bandeira-promocao").each(function() {
        var i;
        i = $(this).text().replace("Desconto", ""),
        $(this).text(i)
    })
}

function floatMenu() {
    $('<button class="open-menu"><span class="line"></span><span class="line"></span><span class="line"></span></button>').insertBefore($("#cabecalho .busca")),
    $(".open-menu").click(function() {
        $(this).toggleClass("active"),
        $(".full.menu").toggleClass("active")
    })
}

function calculateShipping(i, t) {
    return i = i.replace("R$", "").replace(",", "."),
    t - Number(i)
}

function formatResult(i) {
    return "R$ " + i.toFixed(2).replace(".", ",").toString()
}

function messageResult(i) {
    return '<span class="free-shipping warning"><svg version="1.1" class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M119.467,337.067c-28.237,0-51.2,22.963-51.2,51.2c0,28.237,22.963,51.2,51.2,51.2s51.2-22.963,51.2-51.2C170.667,360.03,147.703,337.067,119.467,337.067z M119.467,422.4c-18.825,0-34.133-15.309-34.133-34.133c0-18.825,15.309-34.133,34.133-34.133s34.133,15.309,34.133,34.133C153.6,407.091,138.291,422.4,119.467,422.4z"/></g></g><g><g><path d="M409.6,337.067c-28.237,0-51.2,22.963-51.2,51.2c0,28.237,22.963,51.2,51.2,51.2c28.237,0,51.2-22.963,51.2-51.2C460.8,360.03,437.837,337.067,409.6,337.067z M409.6,422.4c-18.825,0-34.133-15.309-34.133-34.133c0-18.825,15.309-34.133,34.133-34.133c18.825,0,34.133,15.309,34.133,34.133C443.733,407.091,428.425,422.4,409.6,422.4z"/></g></g><g><g><path d="M510.643,289.784l-76.8-119.467c-1.57-2.441-4.275-3.917-7.177-3.917H332.8c-4.719,0-8.533,3.823-8.533,8.533v213.333c0,4.719,3.814,8.533,8.533,8.533h34.133v-17.067h-25.6V183.467h80.674l72.926,113.442v82.825h-42.667V396.8h51.2c4.719,0,8.533-3.814,8.533-8.533V294.4C512,292.77,511.531,291.157,510.643,289.784z"/></g></g><g><g><path d="M375.467,277.333V217.6h68.267v-17.067h-76.8c-4.719,0-8.533,3.823-8.533,8.533v76.8c0,4.719,3.814,8.533,8.533,8.533h128v-17.067H375.467z"/></g></g><g><g><path d="M332.8,106.667H8.533C3.823,106.667,0,110.49,0,115.2v273.067c0,4.719,3.823,8.533,8.533,8.533H76.8v-17.067H17.067v-256h307.2v256H162.133V396.8H332.8c4.719,0,8.533-3.814,8.533-8.533V115.2C341.333,110.49,337.519,106.667,332.8,106.667z"/></g></g><g><g><rect x="8.533" y="345.6" width="51.2" height="17.067"/></g></g><g><g><rect x="179.2" y="345.6" width="145.067" height="17.067"/></g></g><g><g><rect x="469.333" y="345.6" width="34.133" height="17.067"/></g></g><g><g><rect x="34.133" y="140.8" width="298.667" height="17.067"/></g></g><g><g><rect x="110.933" y="379.733" width="17.067" height="17.067"/></g></g><g><g><rect x="401.067" y="379.733" width="17.067" height="17.067"/></g></g><g><g><rect x="34.133" y="72.533" width="119.467" height="17.067"/></g></g><g><g><rect y="72.533" width="17.067" height="17.067"/></g></g><g></svg>Ol&aacute;, faltam apenas <em>' + i + "</em> de compras para voc&ecirc; aproveitar o frete gr&aacute;tis!</span>"
}

function messageFreeShipping() {
    return '<span class="free-shipping success"><svg version="1.1" class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M119.467,337.067c-28.237,0-51.2,22.963-51.2,51.2c0,28.237,22.963,51.2,51.2,51.2s51.2-22.963,51.2-51.2C170.667,360.03,147.703,337.067,119.467,337.067z M119.467,422.4c-18.825,0-34.133-15.309-34.133-34.133c0-18.825,15.309-34.133,34.133-34.133s34.133,15.309,34.133,34.133C153.6,407.091,138.291,422.4,119.467,422.4z"/></g></g><g><g><path d="M409.6,337.067c-28.237,0-51.2,22.963-51.2,51.2c0,28.237,22.963,51.2,51.2,51.2c28.237,0,51.2-22.963,51.2-51.2C460.8,360.03,437.837,337.067,409.6,337.067z M409.6,422.4c-18.825,0-34.133-15.309-34.133-34.133c0-18.825,15.309-34.133,34.133-34.133c18.825,0,34.133,15.309,34.133,34.133C443.733,407.091,428.425,422.4,409.6,422.4z"/></g></g><g><g><path d="M510.643,289.784l-76.8-119.467c-1.57-2.441-4.275-3.917-7.177-3.917H332.8c-4.719,0-8.533,3.823-8.533,8.533v213.333c0,4.719,3.814,8.533,8.533,8.533h34.133v-17.067h-25.6V183.467h80.674l72.926,113.442v82.825h-42.667V396.8h51.2c4.719,0,8.533-3.814,8.533-8.533V294.4C512,292.77,511.531,291.157,510.643,289.784z"/></g></g><g><g><path d="M375.467,277.333V217.6h68.267v-17.067h-76.8c-4.719,0-8.533,3.823-8.533,8.533v76.8c0,4.719,3.814,8.533,8.533,8.533h128v-17.067H375.467z"/></g></g><g><g><path d="M332.8,106.667H8.533C3.823,106.667,0,110.49,0,115.2v273.067c0,4.719,3.823,8.533,8.533,8.533H76.8v-17.067H17.067v-256h307.2v256H162.133V396.8H332.8c4.719,0,8.533-3.814,8.533-8.533V115.2C341.333,110.49,337.519,106.667,332.8,106.667z"/></g></g><g><g><rect x="8.533" y="345.6" width="51.2" height="17.067"/></g></g><g><g><rect x="179.2" y="345.6" width="145.067" height="17.067"/></g></g><g><g><rect x="469.333" y="345.6" width="34.133" height="17.067"/></g></g><g><g><rect x="34.133" y="140.8" width="298.667" height="17.067"/></g></g><g><g><rect x="110.933" y="379.733" width="17.067" height="17.067"/></g></g><g><g><rect x="401.067" y="379.733" width="17.067" height="17.067"/></g></g><g><g><rect x="34.133" y="72.533" width="119.467" height="17.067"/></g></g><g><g><rect y="72.533" width="17.067" height="17.067"/></g></g><g></svg>Sua compra serÃ¡ realizada com frete grÃ¡tis!</span>'
}

function writeMessage(i) {
    $(i).insertBefore($(".pagina-carrinho .tabela-carrinho"))
}

function freeShippingNotice() {
    if (void 0 !== FRETE_GRATIS) {
        var i = FRETE_GRATIS.precoMinimo
          , t = calculateShipping($(".pagina-carrinho .subtotal strong").text(), i);
        writeMessage(t < i && t > 0 ? messageResult(formatResult(t)) : messageFreeShipping())
    }
}

function fullMenu() {
    $("#cabecalho .conteiner").after($(".menu.superior").clone()),
    $("#cabecalho .conteiner .menu.superior").attr("class", "menu superior visible-phone"),
    $("#cabecalho > .menu.superior").attr("class", "full menu hidden-phone"),
    $(".full.menu .nivel-um").wrap("<div class='conteiner'></div>")
}

function headerFixed() {
    $(window).scroll(function() {
        $(this).scrollTop() > 20 && !$("body").hasClass("pagina-carrinho") ? $("#cabecalho").addClass("fixed") : $("#cabecalho").removeClass("fixed")
    })
}

function infoBanner() {
    $(".flexslider .slides li").each(function() {
        var i = "<h3 class='title-banner'>" + $(this).find("img").attr("alt") + "</h3>";
        $(this).find(".info-banner").wrap('<div class="wrap"></div>'),
        $(this).find(".wrap").prepend($(i))
    })
}

function instagram() {
    if ("undefined" != typeof $instagramUser && "undefined" != typeof $instagramID) {
        var e = '<div id="instagram"><div class="conteiner"><h2><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="-8700.68 2378.321 32.422 32.421"><path id="Union_72" data-name="Union 72" class="cls-1" d="M7835.447-3201.945a8.957,8.957,0,0,1-8.947-8.947v-14.528a8.957,8.957,0,0,1,8.947-8.946h14.526a8.957,8.957,0,0,1,8.949,8.946v14.528a8.957,8.957,0,0,1-8.949,8.947Zm-6.071-23.475v14.528a6.077,6.077,0,0,0,6.071,6.069h14.528a6.075,6.075,0,0,0,6.069-6.069v-14.528a6.079,6.079,0,0,0-6.071-6.071h-14.526A6.078,6.078,0,0,0,7829.376-3225.42Zm4.98,7.264a8.364,8.364,0,0,1,8.355-8.355,8.363,8.363,0,0,1,8.353,8.355,8.361,8.361,0,0,1-8.353,8.353A8.362,8.362,0,0,1,7834.356-3218.156Zm2.877,0a5.483,5.483,0,0,0,5.478,5.477,5.484,5.484,0,0,0,5.477-5.477,5.484,5.484,0,0,0-5.477-5.477A5.483,5.483,0,0,0,7837.233-3218.156Zm12.692-7.191a2.128,2.128,0,0,1-.622-1.493,2.114,2.114,0,0,1,.622-1.491,2.116,2.116,0,0,1,1.489-.617,2.127,2.127,0,0,1,1.493.617,2.118,2.118,0,0,1,.617,1.491,2.132,2.132,0,0,1-.617,1.493,2.138,2.138,0,0,1-1.493.617A2.123,2.123,0,0,1,7849.926-3225.347Z" transform="translate(-16527.18 5612.687)"></path></svg><span class="titulo">' + $instagramTexto + '</span><a href="https://instagram.com/' + $instagramUser + '" target="blank">@' + $instagramUser + '</a></h2><div class="row-fluid"> <div class="tagembed-container" style=" width:100%;height:auto;overflow: auto;"><div class="tagembed-socialwall" data-wall-id="' + $instagramID + '" view-url="https://widget.tagembed.com/' + $instagramID + '?view">  </div> <script src="//widget.tagembed.com/embed.min.js" type="text/javascript"></script></div> </div></div></div>';
        $(".pagina-inicial, .pagina-categoria, .pagina-produto").length ? $(".pagina-inicial #video, .pagina-categoria #video, .pagina-produto #video").after(e) : $(".pagina-inicial #corpo , .pagina-categoria #corpo, .pagina-produto #corpo").before(e)
    }
}

function measurementTable() {
    if (void 0 !== TABELA_MEDIDAS) {
        var i = '<div class="measurement-table"> <button class="trigger-table">GUIA DE MEDIDAS</button> <div class="img-table"><button class="close-table">X</button><img src="' + TABELA_MEDIDAS.src + '" width="100%" height="100%" /> </div> </div>';
        $(i).insertAfter($(".pagina-produto .produto .atributos")),
        $(document).on("click", ".trigger-table", function() {
            $(this).addClass("active"),
            $(".img-table").slideDown("fast")
        }),
        $(document).on("click", ".close-table", function() {
            $(".trigger-table").removeClass("active"),
            $(".img-table").slideUp("fast")
        })
    }
}

function menuMobile() {
    $("#cabecalho .menu.superior.visible-phone").append($("<button class='menu-close'></button>")),
    $(".atalho-menu").click(function() {
        $("#cabecalho .menu.superior.visible-phone").addClass("menu-active")
    }),
    $("#cabecalho .menu.superior.visible-phone > ul.nivel-um").wrap("<div class='wrap'></div>"),
    $("#cabecalho .menu.superior.visible-phone .wrap").append($("<ul class='action-links'><li><a href='/conta/index'>Minha Conta<a></li><li><a href='/carrinho/index'>Meu Carrinho<a></li></ul>")),
    $(".menu-close").click(function() {
        $("#cabecalho .menu.superior.visible-phone").removeClass("menu-active"),
        $("#cabecalho .menu.superior.visible-phone ul.nivel-um").removeClass("active")
    }),
    $(".menu.superior.visible-phone .nivel-um > li.com-filho > a").click(function(i) {
        i.preventDefault(),
        $(this).next().toggleClass("active")
    })
}

function otherCategories() {
    if ($(".full.menu .nivel-um > li").length > 6) {
        var i = $(".full.menu .nivel-um > li").slice(6).detach();
        $(".full.menu .nivel-um").append($("<li class='outras-categorias com-filho'><a href='#'><strong class='titulo'>Outros<strong></a><ul class='nivel-dois'></ul></li>")),
        $(".full.menu .nivel-um > li.outras-categorias > .nivel-dois").append($(i))
    }
}

function responsiveShowcase() {
    if ($(".listagem").length) {
        !function(i) {
            "use strict";
            "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
        }(function(i) {
            "use strict";
            var t = window.Slick || {};
            (t = function() {
                var t = 0;
                return function(e, o) {
                    var s, n = this;
                    n.defaults = {
                        accessibility: !0,
                        adaptiveHeight: !1,
                        appendArrows: i(e),
                        appendDots: i(e),
                        arrows: !0,
                        asNavFor: null,
                        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                        autoplay: !1,
                        autoplaySpeed: 3e3,
                        centerMode: !1,
                        centerPadding: "50px",
                        cssEase: "ease",
                        customPaging: function(i, t) {
                            return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (t + 1) + "</button>"
                        },
                        dots: !1,
                        dotsClass: "slick-dots",
                        draggable: !0,
                        easing: "linear",
                        edgeFriction: .35,
                        fade: !1,
                        focusOnSelect: !1,
                        infinite: !0,
                        initialSlide: 0,
                        lazyLoad: "ondemand",
                        mobileFirst: !1,
                        pauseOnHover: !0,
                        pauseOnDotsHover: !1,
                        respondTo: "window",
                        responsive: null,
                        rows: 1,
                        rtl: !1,
                        slide: "",
                        slidesPerRow: 1,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 500,
                        swipe: !0,
                        swipeToSlide: !1,
                        touchMove: !0,
                        touchThreshold: 5,
                        useCSS: !0,
                        useTransform: !1,
                        variableWidth: !1,
                        vertical: !1,
                        verticalSwiping: !1,
                        waitForAnimate: !0,
                        zIndex: 1e3
                    },
                    n.initials = {
                        animating: !1,
                        dragging: !1,
                        autoPlayTimer: null,
                        currentDirection: 0,
                        currentLeft: null,
                        currentSlide: 0,
                        direction: 1,
                        $dots: null,
                        listWidth: null,
                        listHeight: null,
                        loadIndex: 0,
                        $nextArrow: null,
                        $prevArrow: null,
                        slideCount: null,
                        slideWidth: null,
                        $slideTrack: null,
                        $slides: null,
                        sliding: !1,
                        slideOffset: 0,
                        swipeLeft: null,
                        $list: null,
                        touchObject: {},
                        transformsEnabled: !1,
                        unslicked: !1
                    },
                    i.extend(n, n.initials),
                    n.activeBreakpoint = null,
                    n.animType = null,
                    n.animProp = null,
                    n.breakpoints = [],
                    n.breakpointSettings = [],
                    n.cssTransitions = !1,
                    n.hidden = "hidden",
                    n.paused = !1,
                    n.positionProp = null,
                    n.respondTo = null,
                    n.rowCount = 1,
                    n.shouldClick = !0,
                    n.$slider = i(e),
                    n.$slidesCache = null,
                    n.transformType = null,
                    n.transitionType = null,
                    n.visibilityChange = "visibilitychange",
                    n.windowWidth = 0,
                    n.windowTimer = null,
                    s = i(e).data("slick") || {},
                    n.options = i.extend({}, n.defaults, s, o),
                    n.currentSlide = n.options.initialSlide,
                    n.originalSettings = n.options,
                    void 0 !== document.mozHidden ? (n.hidden = "mozHidden",
                    n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden",
                    n.visibilityChange = "webkitvisibilitychange"),
                    n.autoPlay = i.proxy(n.autoPlay, n),
                    n.autoPlayClear = i.proxy(n.autoPlayClear, n),
                    n.changeSlide = i.proxy(n.changeSlide, n),
                    n.clickHandler = i.proxy(n.clickHandler, n),
                    n.selectHandler = i.proxy(n.selectHandler, n),
                    n.setPosition = i.proxy(n.setPosition, n),
                    n.swipeHandler = i.proxy(n.swipeHandler, n),
                    n.dragHandler = i.proxy(n.dragHandler, n),
                    n.keyHandler = i.proxy(n.keyHandler, n),
                    n.autoPlayIterator = i.proxy(n.autoPlayIterator, n),
                    n.instanceUid = t++,
                    n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
                    n.registerBreakpoints(),
                    n.init(!0),
                    n.checkResponsive(!0)
                }
            }()).prototype.addSlide = t.prototype.slickAdd = function(t, e, o) {
                var s = this;
                if ("boolean" == typeof e)
                    o = e,
                    e = null;
                else if (0 > e || e >= s.slideCount)
                    return !1;
                s.unload(),
                "number" == typeof e ? 0 === e && 0 === s.$slides.length ? i(t).appendTo(s.$slideTrack) : o ? i(t).insertBefore(s.$slides.eq(e)) : i(t).insertAfter(s.$slides.eq(e)) : !0 === o ? i(t).prependTo(s.$slideTrack) : i(t).appendTo(s.$slideTrack),
                s.$slides = s.$slideTrack.children(this.options.slide),
                s.$slideTrack.children(this.options.slide).detach(),
                s.$slideTrack.append(s.$slides),
                s.$slides.each(function(t, e) {
                    i(e).attr("data-slick-index", t)
                }),
                s.$slidesCache = s.$slides,
                s.reinit()
            }
            ,
            t.prototype.animateHeight = function() {
                var i = this;
                if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
                    var t = i.$slides.eq(i.currentSlide).outerHeight(!0);
                    i.$list.animate({
                        height: t
                    }, i.options.speed)
                }
            }
            ,
            t.prototype.animateSlide = function(t, e) {
                var o = {}
                  , s = this;
                s.animateHeight(),
                !0 === s.options.rtl && !1 === s.options.vertical && (t = -t),
                !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
                    left: t
                }, s.options.speed, s.options.easing, e) : s.$slideTrack.animate({
                    top: t
                }, s.options.speed, s.options.easing, e) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
                i({
                    animStart: s.currentLeft
                }).animate({
                    animStart: t
                }, {
                    duration: s.options.speed,
                    easing: s.options.easing,
                    step: function(i) {
                        i = Math.ceil(i),
                        !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)",
                        s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)",
                        s.$slideTrack.css(o))
                    },
                    complete: function() {
                        e && e.call()
                    }
                })) : (s.applyTransition(),
                t = Math.ceil(t),
                !1 === s.options.vertical ? o[s.animType] = "translate3d(" + t + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + t + "px, 0px)",
                s.$slideTrack.css(o),
                e && setTimeout(function() {
                    s.disableTransition(),
                    e.call()
                }, s.options.speed))
            }
            ,
            t.prototype.asNavFor = function(t) {
                var e = this
                  , o = e.options.asNavFor;
                o && null !== o && (o = i(o).not(e.$slider)),
                null !== o && "object" == typeof o && o.each(function() {
                    var e = i(this).slick("getSlick");
                    e.unslicked || e.slideHandler(t, !0)
                })
            }
            ,
            t.prototype.applyTransition = function(i) {
                var t = this
                  , e = {};
                !1 === t.options.fade ? e[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : e[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase,
                !1 === t.options.fade ? t.$slideTrack.css(e) : t.$slides.eq(i).css(e)
            }
            ,
            t.prototype.autoPlay = function() {
                var i = this;
                i.autoPlayTimer && clearInterval(i.autoPlayTimer),
                i.slideCount > i.options.slidesToShow && !0 !== i.paused && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
            }
            ,
            t.prototype.autoPlayClear = function() {
                var i = this;
                i.autoPlayTimer && clearInterval(i.autoPlayTimer)
            }
            ,
            t.prototype.autoPlayIterator = function() {
                var i = this;
                !1 === i.options.infinite ? 1 === i.direction ? (i.currentSlide + 1 === i.slideCount - 1 && (i.direction = 0),
                i.slideHandler(i.currentSlide + i.options.slidesToScroll)) : (i.currentSlide - 1 == 0 && (i.direction = 1),
                i.slideHandler(i.currentSlide - i.options.slidesToScroll)) : i.slideHandler(i.currentSlide + i.options.slidesToScroll)
            }
            ,
            t.prototype.buildArrows = function() {
                var t = this;
                !0 === t.options.arrows && (t.$prevArrow = i(t.options.prevArrow).addClass("slick-arrow"),
                t.$nextArrow = i(t.options.nextArrow).addClass("slick-arrow"),
                t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows),
                t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows),
                !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
                    "aria-disabled": "true",
                    tabindex: "-1"
                }))
            }
            ,
            t.prototype.buildDots = function() {
                var t, e, o = this;
                if (!0 === o.options.dots && o.slideCount > o.options.slidesToShow) {
                    for (e = '<ul class="' + o.options.dotsClass + '">',
                    t = 0; t <= o.getDotCount(); t += 1)
                        e += "<li>" + o.options.customPaging.call(this, o, t) + "</li>";
                    e += "</ul>",
                    o.$dots = i(e).appendTo(o.options.appendDots),
                    o.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
                }
            }
            ,
            t.prototype.buildOut = function() {
                var t = this;
                t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
                t.slideCount = t.$slides.length,
                t.$slides.each(function(t, e) {
                    i(e).attr("data-slick-index", t).data("originalStyling", i(e).attr("style") || "")
                }),
                t.$slider.addClass("slick-slider"),
                t.$slideTrack = 0 === t.slideCount ? i('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(),
                t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),
                t.$slideTrack.css("opacity", 0),
                (!0 === t.options.centerMode || !0 === t.options.swipeToSlide) && (t.options.slidesToScroll = 1),
                i("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
                t.setupInfinite(),
                t.buildArrows(),
                t.buildDots(),
                t.updateDots(),
                t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
                !0 === t.options.draggable && t.$list.addClass("draggable")
            }
            ,
            t.prototype.buildRows = function() {
                var i, t, e, o, s, n, a, r = this;
                if (o = document.createDocumentFragment(),
                n = r.$slider.children(),
                r.options.rows > 1) {
                    for (a = r.options.slidesPerRow * r.options.rows,
                    s = Math.ceil(n.length / a),
                    i = 0; s > i; i++) {
                        var l = document.createElement("div");
                        for (t = 0; t < r.options.rows; t++) {
                            var d = document.createElement("div");
                            for (e = 0; e < r.options.slidesPerRow; e++) {
                                var c = i * a + (t * r.options.slidesPerRow + e);
                                n.get(c) && d.appendChild(n.get(c))
                            }
                            l.appendChild(d)
                        }
                        o.appendChild(l)
                    }
                    r.$slider.html(o),
                    r.$slider.children().children().children().css({
                        width: 100 / r.options.slidesPerRow + "%",
                        display: "inline-block"
                    })
                }
            }
            ,
            t.prototype.checkResponsive = function(t, e) {
                var o, s, n, a = this, r = !1, l = a.$slider.width(), d = window.innerWidth || i(window).width();
                if ("window" === a.respondTo ? n = d : "slider" === a.respondTo ? n = l : "min" === a.respondTo && (n = Math.min(d, l)),
                a.options.responsive && a.options.responsive.length && null !== a.options.responsive) {
                    s = null;
                    for (o in a.breakpoints)
                        a.breakpoints.hasOwnProperty(o) && (!1 === a.originalSettings.mobileFirst ? n < a.breakpoints[o] && (s = a.breakpoints[o]) : n > a.breakpoints[o] && (s = a.breakpoints[o]));
                    null !== s ? null !== a.activeBreakpoint ? (s !== a.activeBreakpoint || e) && (a.activeBreakpoint = s,
                    "unslick" === a.breakpointSettings[s] ? a.unslick(s) : (a.options = i.extend({}, a.originalSettings, a.breakpointSettings[s]),
                    !0 === t && (a.currentSlide = a.options.initialSlide),
                    a.refresh(t)),
                    r = s) : (a.activeBreakpoint = s,
                    "unslick" === a.breakpointSettings[s] ? a.unslick(s) : (a.options = i.extend({}, a.originalSettings, a.breakpointSettings[s]),
                    !0 === t && (a.currentSlide = a.options.initialSlide),
                    a.refresh(t)),
                    r = s) : null !== a.activeBreakpoint && (a.activeBreakpoint = null,
                    a.options = a.originalSettings,
                    !0 === t && (a.currentSlide = a.options.initialSlide),
                    a.refresh(t),
                    r = s),
                    t || !1 === r || a.$slider.trigger("breakpoint", [a, r])
                }
            }
            ,
            t.prototype.changeSlide = function(t, e) {
                var o, s, n, a = this, r = i(t.target);
                switch (r.is("a") && t.preventDefault(),
                r.is("li") || (r = r.closest("li")),
                n = a.slideCount % a.options.slidesToScroll != 0,
                o = n ? 0 : (a.slideCount - a.currentSlide) % a.options.slidesToScroll,
                t.data.message) {
                case "previous":
                    s = 0 === o ? a.options.slidesToScroll : a.options.slidesToShow - o,
                    a.slideCount > a.options.slidesToShow && a.slideHandler(a.currentSlide - s, !1, e);
                    break;
                case "next":
                    s = 0 === o ? a.options.slidesToScroll : o,
                    a.slideCount > a.options.slidesToShow && a.slideHandler(a.currentSlide + s, !1, e);
                    break;
                case "index":
                    var l = 0 === t.data.index ? 0 : t.data.index || r.index() * a.options.slidesToScroll;
                    a.slideHandler(a.checkNavigable(l), !1, e),
                    r.children().trigger("focus");
                    break;
                default:
                    return
                }
            }
            ,
            t.prototype.checkNavigable = function(i) {
                var t, e;
                if (t = this.getNavigableIndexes(),
                e = 0,
                i > t[t.length - 1])
                    i = t[t.length - 1];
                else
                    for (var o in t) {
                        if (i < t[o]) {
                            i = e;
                            break
                        }
                        e = t[o]
                    }
                return i
            }
            ,
            t.prototype.cleanUpEvents = function() {
                var t = this;
                t.options.dots && null !== t.$dots && (i("li", t.$dots).off("click.slick", t.changeSlide),
                !0 === t.options.pauseOnDotsHover && !0 === t.options.autoplay && i("li", t.$dots).off("mouseenter.slick", i.proxy(t.setPaused, t, !0)).off("mouseleave.slick", i.proxy(t.setPaused, t, !1))),
                !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
                t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)),
                t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
                t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
                t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
                t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
                t.$list.off("click.slick", t.clickHandler),
                i(document).off(t.visibilityChange, t.visibility),
                t.$list.off("mouseenter.slick", i.proxy(t.setPaused, t, !0)),
                t.$list.off("mouseleave.slick", i.proxy(t.setPaused, t, !1)),
                !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler),
                !0 === t.options.focusOnSelect && i(t.$slideTrack).children().off("click.slick", t.selectHandler),
                i(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange),
                i(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
                i("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault),
                i(window).off("load.slick.slick-" + t.instanceUid, t.setPosition),
                i(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
            }
            ,
            t.prototype.cleanUpRows = function() {
                var i, t = this;
                t.options.rows > 1 && ((i = t.$slides.children().children()).removeAttr("style"),
                t.$slider.html(i))
            }
            ,
            t.prototype.clickHandler = function(i) {
                !1 === this.shouldClick && (i.stopImmediatePropagation(),
                i.stopPropagation(),
                i.preventDefault())
            }
            ,
            t.prototype.destroy = function(t) {
                var e = this;
                e.autoPlayClear(),
                e.touchObject = {},
                e.cleanUpEvents(),
                i(".slick-cloned", e.$slider).detach(),
                e.$dots && e.$dots.remove(),
                e.$prevArrow && e.$prevArrow.length && (e.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
                e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove()),
                e.$nextArrow && e.$nextArrow.length && (e.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
                e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove()),
                e.$slides && (e.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                    i(this).attr("style", i(this).data("originalStyling"))
                }),
                e.$slideTrack.children(this.options.slide).detach(),
                e.$slideTrack.detach(),
                e.$list.detach(),
                e.$slider.append(e.$slides)),
                e.cleanUpRows(),
                e.$slider.removeClass("slick-slider"),
                e.$slider.removeClass("slick-initialized"),
                e.unslicked = !0,
                t || e.$slider.trigger("destroy", [e])
            }
            ,
            t.prototype.disableTransition = function(i) {
                var t = this
                  , e = {};
                e[t.transitionType] = "",
                !1 === t.options.fade ? t.$slideTrack.css(e) : t.$slides.eq(i).css(e)
            }
            ,
            t.prototype.fadeSlide = function(i, t) {
                var e = this;
                !1 === e.cssTransitions ? (e.$slides.eq(i).css({
                    zIndex: e.options.zIndex
                }),
                e.$slides.eq(i).animate({
                    opacity: 1
                }, e.options.speed, e.options.easing, t)) : (e.applyTransition(i),
                e.$slides.eq(i).css({
                    opacity: 1,
                    zIndex: e.options.zIndex
                }),
                t && setTimeout(function() {
                    e.disableTransition(i),
                    t.call()
                }, e.options.speed))
            }
            ,
            t.prototype.fadeSlideOut = function(i) {
                var t = this;
                !1 === t.cssTransitions ? t.$slides.eq(i).animate({
                    opacity: 0,
                    zIndex: t.options.zIndex - 2
                }, t.options.speed, t.options.easing) : (t.applyTransition(i),
                t.$slides.eq(i).css({
                    opacity: 0,
                    zIndex: t.options.zIndex - 2
                }))
            }
            ,
            t.prototype.filterSlides = t.prototype.slickFilter = function(i) {
                var t = this;
                null !== i && (t.$slidesCache = t.$slides,
                t.unload(),
                t.$slideTrack.children(this.options.slide).detach(),
                t.$slidesCache.filter(i).appendTo(t.$slideTrack),
                t.reinit())
            }
            ,
            t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
                return this.currentSlide
            }
            ,
            t.prototype.getDotCount = function() {
                var i = this
                  , t = 0
                  , e = 0
                  , o = 0;
                if (!0 === i.options.infinite)
                    for (; t < i.slideCount; )
                        ++o,
                        t = e + i.options.slidesToScroll,
                        e += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
                else if (!0 === i.options.centerMode)
                    o = i.slideCount;
                else
                    for (; t < i.slideCount; )
                        ++o,
                        t = e + i.options.slidesToScroll,
                        e += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
                return o - 1
            }
            ,
            t.prototype.getLeft = function(i) {
                var t, e, o, s = this, n = 0;
                return s.slideOffset = 0,
                e = s.$slides.first().outerHeight(!0),
                !0 === s.options.infinite ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1,
                n = e * s.options.slidesToShow * -1),
                s.slideCount % s.options.slidesToScroll != 0 && i + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (i > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (i - s.slideCount)) * s.slideWidth * -1,
                n = (s.options.slidesToShow - (i - s.slideCount)) * e * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1,
                n = s.slideCount % s.options.slidesToScroll * e * -1))) : i + s.options.slidesToShow > s.slideCount && (s.slideOffset = (i + s.options.slidesToShow - s.slideCount) * s.slideWidth,
                n = (i + s.options.slidesToShow - s.slideCount) * e),
                s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0,
                n = 0),
                !0 === s.options.centerMode && !0 === s.options.infinite ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : !0 === s.options.centerMode && (s.slideOffset = 0,
                s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)),
                t = !1 === s.options.vertical ? i * s.slideWidth * -1 + s.slideOffset : i * e * -1 + n,
                !0 === s.options.variableWidth && (o = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(i) : s.$slideTrack.children(".slick-slide").eq(i + s.options.slidesToShow),
                t = !0 === s.options.rtl ? o[0] ? -1 * (s.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0,
                !0 === s.options.centerMode && (o = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(i) : s.$slideTrack.children(".slick-slide").eq(i + s.options.slidesToShow + 1),
                t = !0 === s.options.rtl ? o[0] ? -1 * (s.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0,
                t += (s.$list.width() - o.outerWidth()) / 2)),
                t
            }
            ,
            t.prototype.getOption = t.prototype.slickGetOption = function(i) {
                return this.options[i]
            }
            ,
            t.prototype.getNavigableIndexes = function() {
                var i, t = this, e = 0, o = 0, s = [];
                for (!1 === t.options.infinite ? i = t.slideCount : (e = -1 * t.options.slidesToScroll,
                o = -1 * t.options.slidesToScroll,
                i = 2 * t.slideCount); i > e; )
                    s.push(e),
                    e = o + t.options.slidesToScroll,
                    o += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
                return s
            }
            ,
            t.prototype.getSlick = function() {
                return this
            }
            ,
            t.prototype.getSlideCount = function() {
                var t, e, o = this;
                return e = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0,
                !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(s, n) {
                    return n.offsetLeft - e + i(n).outerWidth() / 2 > -1 * o.swipeLeft ? (t = n,
                    !1) : void 0
                }),
                Math.abs(i(t).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
            }
            ,
            t.prototype.goTo = t.prototype.slickGoTo = function(i, t) {
                this.changeSlide({
                    data: {
                        message: "index",
                        index: parseInt(i)
                    }
                }, t)
            }
            ,
            t.prototype.init = function(t) {
                var e = this;
                i(e.$slider).hasClass("slick-initialized") || (i(e.$slider).addClass("slick-initialized"),
                e.buildRows(),
                e.buildOut(),
                e.setProps(),
                e.startLoad(),
                e.loadSlider(),
                e.initializeEvents(),
                e.updateArrows(),
                e.updateDots()),
                t && e.$slider.trigger("init", [e]),
                !0 === e.options.accessibility && e.initADA()
            }
            ,
            t.prototype.initArrowEvents = function() {
                var i = this;
                !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.on("click.slick", {
                    message: "previous"
                }, i.changeSlide),
                i.$nextArrow.on("click.slick", {
                    message: "next"
                }, i.changeSlide))
            }
            ,
            t.prototype.initDotEvents = function() {
                var t = this;
                !0 === t.options.dots && t.slideCount > t.options.slidesToShow && i("li", t.$dots).on("click.slick", {
                    message: "index"
                }, t.changeSlide),
                !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && !0 === t.options.autoplay && i("li", t.$dots).on("mouseenter.slick", i.proxy(t.setPaused, t, !0)).on("mouseleave.slick", i.proxy(t.setPaused, t, !1))
            }
            ,
            t.prototype.initializeEvents = function() {
                var t = this;
                t.initArrowEvents(),
                t.initDotEvents(),
                t.$list.on("touchstart.slick mousedown.slick", {
                    action: "start"
                }, t.swipeHandler),
                t.$list.on("touchmove.slick mousemove.slick", {
                    action: "move"
                }, t.swipeHandler),
                t.$list.on("touchend.slick mouseup.slick", {
                    action: "end"
                }, t.swipeHandler),
                t.$list.on("touchcancel.slick mouseleave.slick", {
                    action: "end"
                }, t.swipeHandler),
                t.$list.on("click.slick", t.clickHandler),
                i(document).on(t.visibilityChange, i.proxy(t.visibility, t)),
                t.$list.on("mouseenter.slick", i.proxy(t.setPaused, t, !0)),
                t.$list.on("mouseleave.slick", i.proxy(t.setPaused, t, !1)),
                !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler),
                !0 === t.options.focusOnSelect && i(t.$slideTrack).children().on("click.slick", t.selectHandler),
                i(window).on("orientationchange.slick.slick-" + t.instanceUid, i.proxy(t.orientationChange, t)),
                i(window).on("resize.slick.slick-" + t.instanceUid, i.proxy(t.resize, t)),
                i("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault),
                i(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
                i(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
            }
            ,
            t.prototype.initUI = function() {
                var i = this;
                !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(),
                i.$nextArrow.show()),
                !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show(),
                !0 === i.options.autoplay && i.autoPlay()
            }
            ,
            t.prototype.keyHandler = function(i) {
                var t = this;
                i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === t.options.accessibility ? t.changeSlide({
                    data: {
                        message: "previous"
                    }
                }) : 39 === i.keyCode && !0 === t.options.accessibility && t.changeSlide({
                    data: {
                        message: "next"
                    }
                }))
            }
            ,
            t.prototype.lazyLoad = function() {
                function t(t) {
                    i("img[data-lazy]", t).each(function() {
                        var t = i(this)
                          , e = i(this).attr("data-lazy")
                          , o = document.createElement("img");
                        o.onload = function() {
                            t.animate({
                                opacity: 0
                            }, 100, function() {
                                t.attr("src", e).animate({
                                    opacity: 1
                                }, 200, function() {
                                    t.removeAttr("data-lazy").removeClass("slick-loading")
                                })
                            })
                        }
                        ,
                        o.src = e
                    })
                }
                var e, o, s, n = this;
                !0 === n.options.centerMode ? !0 === n.options.infinite ? (o = n.currentSlide + (n.options.slidesToShow / 2 + 1),
                s = o + n.options.slidesToShow + 2) : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)),
                s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide,
                s = o + n.options.slidesToShow,
                !0 === n.options.fade && (o > 0 && o--,
                s <= n.slideCount && s++)),
                t(n.$slider.find(".slick-slide").slice(o, s)),
                n.slideCount <= n.options.slidesToShow ? (e = n.$slider.find(".slick-slide"),
                t(e)) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? (e = n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow),
                t(e)) : 0 === n.currentSlide && (e = n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow),
                t(e))
            }
            ,
            t.prototype.loadSlider = function() {
                var i = this;
                i.setPosition(),
                i.$slideTrack.css({
                    opacity: 1
                }),
                i.$slider.removeClass("slick-loading"),
                i.initUI(),
                "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
            }
            ,
            t.prototype.next = t.prototype.slickNext = function() {
                this.changeSlide({
                    data: {
                        message: "next"
                    }
                })
            }
            ,
            t.prototype.orientationChange = function() {
                var i = this;
                i.checkResponsive(),
                i.setPosition()
            }
            ,
            t.prototype.pause = t.prototype.slickPause = function() {
                var i = this;
                i.autoPlayClear(),
                i.paused = !0
            }
            ,
            t.prototype.play = t.prototype.slickPlay = function() {
                var i = this;
                i.paused = !1,
                i.autoPlay()
            }
            ,
            t.prototype.postSlide = function(i) {
                var t = this;
                t.$slider.trigger("afterChange", [t, i]),
                t.animating = !1,
                t.setPosition(),
                t.swipeLeft = null,
                !0 === t.options.autoplay && !1 === t.paused && t.autoPlay(),
                !0 === t.options.accessibility && t.initADA()
            }
            ,
            t.prototype.prev = t.prototype.slickPrev = function() {
                this.changeSlide({
                    data: {
                        message: "previous"
                    }
                })
            }
            ,
            t.prototype.preventDefault = function(i) {
                i.preventDefault()
            }
            ,
            t.prototype.progressiveLazyLoad = function() {
                var t, e = this;
                i("img[data-lazy]", e.$slider).length > 0 && ((t = i("img[data-lazy]", e.$slider).first()).attr("src", null),
                t.attr("src", t.attr("data-lazy")).removeClass("slick-loading").load(function() {
                    t.removeAttr("data-lazy"),
                    e.progressiveLazyLoad(),
                    !0 === e.options.adaptiveHeight && e.setPosition()
                }).error(function() {
                    t.removeAttr("data-lazy"),
                    e.progressiveLazyLoad()
                }))
            }
            ,
            t.prototype.refresh = function(t) {
                var e, o, s = this;
                o = s.slideCount - s.options.slidesToShow,
                s.options.infinite || (s.slideCount <= s.options.slidesToShow ? s.currentSlide = 0 : s.currentSlide > o && (s.currentSlide = o)),
                e = s.currentSlide,
                s.destroy(!0),
                i.extend(s, s.initials, {
                    currentSlide: e
                }),
                s.init(),
                t || s.changeSlide({
                    data: {
                        message: "index",
                        index: e
                    }
                }, !1)
            }
            ,
            t.prototype.registerBreakpoints = function() {
                var t, e, o, s = this, n = s.options.responsive || null;
                if ("array" === i.type(n) && n.length) {
                    s.respondTo = s.options.respondTo || "window";
                    for (t in n)
                        if (o = s.breakpoints.length - 1,
                        e = n[t].breakpoint,
                        n.hasOwnProperty(t)) {
                            for (; o >= 0; )
                                s.breakpoints[o] && s.breakpoints[o] === e && s.breakpoints.splice(o, 1),
                                o--;
                            s.breakpoints.push(e),
                            s.breakpointSettings[e] = n[t].settings
                        }
                    s.breakpoints.sort(function(i, t) {
                        return s.options.mobileFirst ? i - t : t - i
                    })
                }
            }
            ,
            t.prototype.reinit = function() {
                var t = this;
                t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"),
                t.slideCount = t.$slides.length,
                t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
                t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
                t.registerBreakpoints(),
                t.setProps(),
                t.setupInfinite(),
                t.buildArrows(),
                t.updateArrows(),
                t.initArrowEvents(),
                t.buildDots(),
                t.updateDots(),
                t.initDotEvents(),
                t.checkResponsive(!1, !0),
                !0 === t.options.focusOnSelect && i(t.$slideTrack).children().on("click.slick", t.selectHandler),
                t.setSlideClasses(0),
                t.setPosition(),
                t.$slider.trigger("reInit", [t]),
                !0 === t.options.autoplay && t.focusHandler()
            }
            ,
            t.prototype.resize = function() {
                var t = this;
                i(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay),
                t.windowDelay = window.setTimeout(function() {
                    t.windowWidth = i(window).width(),
                    t.checkResponsive(),
                    t.unslicked || t.setPosition()
                }, 50))
            }
            ,
            t.prototype.removeSlide = t.prototype.slickRemove = function(i, t, e) {
                var o = this;
                return "boolean" == typeof i ? (t = i,
                i = !0 === t ? 0 : o.slideCount - 1) : i = !0 === t ? --i : i,
                !(o.slideCount < 1 || 0 > i || i > o.slideCount - 1) && (o.unload(),
                !0 === e ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(),
                o.$slides = o.$slideTrack.children(this.options.slide),
                o.$slideTrack.children(this.options.slide).detach(),
                o.$slideTrack.append(o.$slides),
                o.$slidesCache = o.$slides,
                void o.reinit())
            }
            ,
            t.prototype.setCSS = function(i) {
                var t, e, o = this, s = {};
                !0 === o.options.rtl && (i = -i),
                t = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px",
                e = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px",
                s[o.positionProp] = i,
                !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {},
                !1 === o.cssTransitions ? (s[o.animType] = "translate(" + t + ", " + e + ")",
                o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + t + ", " + e + ", 0px)",
                o.$slideTrack.css(s)))
            }
            ,
            t.prototype.setDimensions = function() {
                var i = this;
                !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
                    padding: "0px " + i.options.centerPadding
                }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow),
                !0 === i.options.centerMode && i.$list.css({
                    padding: i.options.centerPadding + " 0px"
                })),
                i.listWidth = i.$list.width(),
                i.listHeight = i.$list.height(),
                !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow),
                i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth),
                i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
                var t = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
                !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - t)
            }
            ,
            t.prototype.setFade = function() {
                var t, e = this;
                e.$slides.each(function(o, s) {
                    t = e.slideWidth * o * -1,
                    !0 === e.options.rtl ? i(s).css({
                        position: "relative",
                        right: t,
                        top: 0,
                        zIndex: e.options.zIndex - 2,
                        opacity: 0
                    }) : i(s).css({
                        position: "relative",
                        left: t,
                        top: 0,
                        zIndex: e.options.zIndex - 2,
                        opacity: 0
                    })
                }),
                e.$slides.eq(e.currentSlide).css({
                    zIndex: e.options.zIndex - 1,
                    opacity: 1
                })
            }
            ,
            t.prototype.setHeight = function() {
                var i = this;
                if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
                    var t = i.$slides.eq(i.currentSlide).outerHeight(!0);
                    i.$list.css("height", t)
                }
            }
            ,
            t.prototype.setOption = t.prototype.slickSetOption = function(t, e, o) {
                var s, n, a = this;
                if ("responsive" === t && "array" === i.type(e))
                    for (n in e)
                        if ("array" !== i.type(a.options.responsive))
                            a.options.responsive = [e[n]];
                        else {
                            for (s = a.options.responsive.length - 1; s >= 0; )
                                a.options.responsive[s].breakpoint === e[n].breakpoint && a.options.responsive.splice(s, 1),
                                s--;
                            a.options.responsive.push(e[n])
                        }
                else
                    a.options[t] = e;
                !0 === o && (a.unload(),
                a.reinit())
            }
            ,
            t.prototype.setPosition = function() {
                var i = this;
                i.setDimensions(),
                i.setHeight(),
                !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(),
                i.$slider.trigger("setPosition", [i])
            }
            ,
            t.prototype.setProps = function() {
                var i = this
                  , t = document.body.style;
                i.positionProp = !0 === i.options.vertical ? "top" : "left",
                "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"),
                (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && !0 === i.options.useCSS && (i.cssTransitions = !0),
                i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex),
                void 0 !== t.OTransform && (i.animType = "OTransform",
                i.transformType = "-o-transform",
                i.transitionType = "OTransition",
                void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (i.animType = !1)),
                void 0 !== t.MozTransform && (i.animType = "MozTransform",
                i.transformType = "-moz-transform",
                i.transitionType = "MozTransition",
                void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (i.animType = !1)),
                void 0 !== t.webkitTransform && (i.animType = "webkitTransform",
                i.transformType = "-webkit-transform",
                i.transitionType = "webkitTransition",
                void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (i.animType = !1)),
                void 0 !== t.msTransform && (i.animType = "msTransform",
                i.transformType = "-ms-transform",
                i.transitionType = "msTransition",
                void 0 === t.msTransform && (i.animType = !1)),
                void 0 !== t.transform && !1 !== i.animType && (i.animType = "transform",
                i.transformType = "transform",
                i.transitionType = "transition"),
                i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
            }
            ,
            t.prototype.setSlideClasses = function(i) {
                var t, e, o, s, n = this;
                e = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
                n.$slides.eq(i).addClass("slick-current"),
                !0 === n.options.centerMode ? (t = Math.floor(n.options.slidesToShow / 2),
                !0 === n.options.infinite && (i >= t && i <= n.slideCount - 1 - t ? n.$slides.slice(i - t, i + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i,
                e.slice(o - t + 1, o + t + 2).addClass("slick-active").attr("aria-hidden", "false")),
                0 === i ? e.eq(e.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && e.eq(n.options.slidesToShow).addClass("slick-center")),
                n.$slides.eq(i).addClass("slick-center")) : i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : e.length <= n.options.slidesToShow ? e.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow,
                o = !0 === n.options.infinite ? n.options.slidesToShow + i : i,
                n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? e.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : e.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")),
                "ondemand" === n.options.lazyLoad && n.lazyLoad()
            }
            ,
            t.prototype.setupInfinite = function() {
                var t, e, o, s = this;
                if (!0 === s.options.fade && (s.options.centerMode = !1),
                !0 === s.options.infinite && !1 === s.options.fade && (e = null,
                s.slideCount > s.options.slidesToShow)) {
                    for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow,
                    t = s.slideCount; t > s.slideCount - o; t -= 1)
                        e = t - 1,
                        i(s.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
                    for (t = 0; o > t; t += 1)
                        e = t,
                        i(s.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
                    s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                        i(this).attr("id", "")
                    })
                }
            }
            ,
            t.prototype.setPaused = function(i) {
                var t = this;
                !0 === t.options.autoplay && !0 === t.options.pauseOnHover && (t.paused = i,
                i ? t.autoPlayClear() : t.autoPlay())
            }
            ,
            t.prototype.selectHandler = function(t) {
                var e = this
                  , o = i(t.target).is(".slick-slide") ? i(t.target) : i(t.target).parents(".slick-slide")
                  , s = parseInt(o.attr("data-slick-index"));
                return s || (s = 0),
                e.slideCount <= e.options.slidesToShow ? (e.setSlideClasses(s),
                void e.asNavFor(s)) : void e.slideHandler(s)
            }
            ,
            t.prototype.slideHandler = function(i, t, e) {
                var o, s, n, a, r = null, l = this;
                return t = t || !1,
                !0 === l.animating && !0 === l.options.waitForAnimate || !0 === l.options.fade && l.currentSlide === i || l.slideCount <= l.options.slidesToShow ? void 0 : (!1 === t && l.asNavFor(i),
                o = i,
                r = l.getLeft(o),
                a = l.getLeft(l.currentSlide),
                l.currentLeft = null === l.swipeLeft ? a : l.swipeLeft,
                !1 === l.options.infinite && !1 === l.options.centerMode && (0 > i || i > l.getDotCount() * l.options.slidesToScroll) ? void (!1 === l.options.fade && (o = l.currentSlide,
                !0 !== e ? l.animateSlide(a, function() {
                    l.postSlide(o)
                }) : l.postSlide(o))) : !1 === l.options.infinite && !0 === l.options.centerMode && (0 > i || i > l.slideCount - l.options.slidesToScroll) ? void (!1 === l.options.fade && (o = l.currentSlide,
                !0 !== e ? l.animateSlide(a, function() {
                    l.postSlide(o)
                }) : l.postSlide(o))) : (!0 === l.options.autoplay && clearInterval(l.autoPlayTimer),
                s = 0 > o ? l.slideCount % l.options.slidesToScroll != 0 ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + o : o >= l.slideCount ? l.slideCount % l.options.slidesToScroll != 0 ? 0 : o - l.slideCount : o,
                l.animating = !0,
                l.$slider.trigger("beforeChange", [l, l.currentSlide, s]),
                n = l.currentSlide,
                l.currentSlide = s,
                l.setSlideClasses(l.currentSlide),
                l.updateDots(),
                l.updateArrows(),
                !0 === l.options.fade ? (!0 !== e ? (l.fadeSlideOut(n),
                l.fadeSlide(s, function() {
                    l.postSlide(s)
                })) : l.postSlide(s),
                void l.animateHeight()) : void (!0 !== e ? l.animateSlide(r, function() {
                    l.postSlide(s)
                }) : l.postSlide(s))))
            }
            ,
            t.prototype.startLoad = function() {
                var i = this;
                !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(),
                i.$nextArrow.hide()),
                !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(),
                i.$slider.addClass("slick-loading")
            }
            ,
            t.prototype.swipeDirection = function() {
                var i, t, e, o, s = this;
                return i = s.touchObject.startX - s.touchObject.curX,
                t = s.touchObject.startY - s.touchObject.curY,
                e = Math.atan2(t, i),
                0 > (o = Math.round(180 * e / Math.PI)) && (o = 360 - Math.abs(o)),
                45 >= o && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : 360 >= o && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && 225 >= o ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && 135 >= o ? "left" : "right" : "vertical"
            }
            ,
            t.prototype.swipeEnd = function(i) {
                var t, e = this;
                if (e.dragging = !1,
                e.shouldClick = !(e.touchObject.swipeLength > 10),
                void 0 === e.touchObject.curX)
                    return !1;
                if (!0 === e.touchObject.edgeHit && e.$slider.trigger("edge", [e, e.swipeDirection()]),
                e.touchObject.swipeLength >= e.touchObject.minSwipe)
                    switch (e.swipeDirection()) {
                    case "left":
                        t = e.options.swipeToSlide ? e.checkNavigable(e.currentSlide + e.getSlideCount()) : e.currentSlide + e.getSlideCount(),
                        e.slideHandler(t),
                        e.currentDirection = 0,
                        e.touchObject = {},
                        e.$slider.trigger("swipe", [e, "left"]);
                        break;
                    case "right":
                        t = e.options.swipeToSlide ? e.checkNavigable(e.currentSlide - e.getSlideCount()) : e.currentSlide - e.getSlideCount(),
                        e.slideHandler(t),
                        e.currentDirection = 1,
                        e.touchObject = {},
                        e.$slider.trigger("swipe", [e, "right"])
                    }
                else
                    e.touchObject.startX !== e.touchObject.curX && (e.slideHandler(e.currentSlide),
                    e.touchObject = {})
            }
            ,
            t.prototype.swipeHandler = function(i) {
                var t = this;
                if (!(!1 === t.options.swipe || "ontouchend"in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== i.type.indexOf("mouse")))
                    switch (t.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1,
                    t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold,
                    !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold),
                    i.data.action) {
                    case "start":
                        t.swipeStart(i);
                        break;
                    case "move":
                        t.swipeMove(i);
                        break;
                    case "end":
                        t.swipeEnd(i)
                    }
            }
            ,
            t.prototype.swipeMove = function(i) {
                var t, e, o, s, n, a = this;
                return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null,
                !(!a.dragging || n && 1 !== n.length) && (t = a.getLeft(a.currentSlide),
                a.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX,
                a.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY,
                a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))),
                !0 === a.options.verticalSwiping && (a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2)))),
                "vertical" !== (e = a.swipeDirection()) ? (void 0 !== i.originalEvent && a.touchObject.swipeLength > 4 && i.preventDefault(),
                s = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1),
                !0 === a.options.verticalSwiping && (s = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
                o = a.touchObject.swipeLength,
                a.touchObject.edgeHit = !1,
                !1 === a.options.infinite && (0 === a.currentSlide && "right" === e || a.currentSlide >= a.getDotCount() && "left" === e) && (o = a.touchObject.swipeLength * a.options.edgeFriction,
                a.touchObject.edgeHit = !0),
                !1 === a.options.vertical ? a.swipeLeft = t + o * s : a.swipeLeft = t + o * (a.$list.height() / a.listWidth) * s,
                !0 === a.options.verticalSwiping && (a.swipeLeft = t + o * s),
                !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null,
                !1) : void a.setCSS(a.swipeLeft))) : void 0)
            }
            ,
            t.prototype.swipeStart = function(i) {
                var t, e = this;
                return 1 !== e.touchObject.fingerCount || e.slideCount <= e.options.slidesToShow ? (e.touchObject = {},
                !1) : (void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (t = i.originalEvent.touches[0]),
                e.touchObject.startX = e.touchObject.curX = void 0 !== t ? t.pageX : i.clientX,
                e.touchObject.startY = e.touchObject.curY = void 0 !== t ? t.pageY : i.clientY,
                void (e.dragging = !0))
            }
            ,
            t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
                var i = this;
                null !== i.$slidesCache && (i.unload(),
                i.$slideTrack.children(this.options.slide).detach(),
                i.$slidesCache.appendTo(i.$slideTrack),
                i.reinit())
            }
            ,
            t.prototype.unload = function() {
                var t = this;
                i(".slick-cloned", t.$slider).remove(),
                t.$dots && t.$dots.remove(),
                t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(),
                t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(),
                t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
            }
            ,
            t.prototype.unslick = function(i) {
                var t = this;
                t.$slider.trigger("unslick", [t, i]),
                t.destroy()
            }
            ,
            t.prototype.updateArrows = function() {
                var i = this;
                Math.floor(i.options.slidesToShow / 2),
                !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
                i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
                i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
                i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
            }
            ,
            t.prototype.updateDots = function() {
                var i = this;
                null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"),
                i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
            }
            ,
            t.prototype.visibility = function() {
                var i = this;
                document[i.hidden] ? (i.paused = !0,
                i.autoPlayClear()) : !0 === i.options.autoplay && (i.paused = !1,
                i.autoPlay())
            }
            ,
            t.prototype.initADA = function() {
                var t = this;
                t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                    "aria-hidden": "true",
                    tabindex: "-1"
                }).find("a, input, button, select").attr({
                    tabindex: "-1"
                }),
                t.$slideTrack.attr("role", "listbox"),
                t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(e) {
                    i(this).attr({
                        role: "option",
                        "aria-describedby": "slick-slide" + t.instanceUid + e
                    })
                }),
                null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function(e) {
                    i(this).attr({
                        role: "presentation",
                        "aria-selected": "false",
                        "aria-controls": "navigation" + t.instanceUid + e,
                        id: "slick-slide" + t.instanceUid + e
                    })
                }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"),
                t.activateADA()
            }
            ,
            t.prototype.activateADA = function() {
                this.$slideTrack.find(".slick-active").attr({
                    "aria-hidden": "false"
                }).find("a, input, button, select").attr({
                    tabindex: "0"
                })
            }
            ,
            t.prototype.focusHandler = function() {
                var t = this;
                t.$slider.on("focus.slick blur.slick", "*", function(e) {
                    e.stopImmediatePropagation();
                    var o = i(this);
                    setTimeout(function() {
                        t.isPlay && (o.is(":focus") ? (t.autoPlayClear(),
                        t.paused = !0) : (t.paused = !1,
                        t.autoPlay()))
                    }, 0)
                })
            }
            ,
            i.fn.slick = function() {
                var i, e, o = this, s = arguments[0], n = Array.prototype.slice.call(arguments, 1), a = o.length;
                for (i = 0; a > i; i++)
                    if ("object" == typeof s || void 0 === s ? o[i].slick = new t(o[i],s) : e = o[i].slick[s].apply(o[i].slick, n),
                    void 0 !== e)
                        return e;
                return o
            }
        });

        function i() {
            $(".slick-product .has-zoom").each(function() {
                var i = $(this).find(".imagem-principal").attr("data-imagem-caminho");
                $(this).append('<img src="' + i + '" class="imagem-zoom" alt="zoom">')
            })
        }
        $(".listagem-linha").each(function() {
            if ($(this).hasClass("flexslider")) {
                var i = $(this).find("ul").html();
                $(this).find(".flex-viewport").remove(),
                $(this).find(".flex-direction-nav").remove(),
                $(this).append("<ul class='slick-product'>" + i + "</ul>")
            } else
                $(this).find("li").unwrap().unwrap()
        });
        $(".listagem-linha .slick-product").slick({
            infinite: !0,
            slidesToShow: 4,
            slidesToScroll: 4,
            speed: 250,
            dots: !1,
            afterChange: i(),
            prevArrow: '<div class="slick-prev active"><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="89 2678 16 16"><path d="M8,0,6.545,1.455l5.506,5.506H0V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(105 2694) rotate(180)"/></svg></div>',
            nextArrow: '<div class="slick-next"><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="1347 2678 16 16"><path class="a" d="M8,0,6.545,1.455l5.506,5.506H0V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(1347 2678)"/></svg></div>',
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }]
        }),
        $(".slick-next").click(function() {
            $(this).addClass("active"),
            $(this).siblings(".slick-prev").removeClass("active")
        }),
        $(".slick-prev").click(function() {
            $(this).addClass("active"),
            $(this).siblings(".slick-next").removeClass("active")
        })
    }
}

function searchFixed() {
    $(window).scroll(function() {
        $(this).scrollTop() > 20 && !$("body").hasClass("pagina-carrinho") ? $(".busca-mobile").addClass("fixed") : $(".busca-mobile").removeClass("fixed")
    })
}

function shareThis() {
    $("body.pagina-produto .produto-compartilhar").prepend($("<div class='sharethis-inline-share-buttons'></div>")),
    $(".sharethis-inline-share-buttons").append($("<script>", {
        src: "//platform-api.sharethis.com/js/sharethis.js#property=5991eb27770096001434ea7d&product=inline-share-buttons"
    }))
}

function tabsDescription() {
    $("ul.tabs li").click(function() {
        var i = $(this).attr("data-tab");
        $("ul.tabs li").removeClass("current"),
        $(".tab-content").removeClass("current"),
        $(this).addClass("current"),
        $("#" + i).addClass("current")
    })
}

function toTop() {
    $("body").append("<a href='#' class='scrollToTop'><i class='fa fa-angle-up' aria-hidden='true'></i><span>Topo</span></a>"),
    $(window).scroll(function() {
        $(this).scrollTop() > 100 ? $(".scrollToTop").fadeIn() : $(".scrollToTop").fadeOut()
    }),
    $(".scrollToTop").click(function() {
        return $("html, body").animate({
            scrollTop: 0
        }, 800),
        !1
    })
}

function tracking() {
    $(".rastreio").append($("<form class='form-rastreio'><span>DIGITE AQUI O SEU C&oacute;DIGO DE RASTREIO:</span><div class='wrap'><input type='text' placeholder='C&oacute;digo'><button class='rastrear'></button></div></form>")),
    $(".rastrear").click(function(i) {
        i.preventDefault();
        var t = "https://www.linkcorreios.com.br/" + $(".form-rastreio input").val();
        window.open(t, "blank")
    })
}

function video() {
    if (void 0 !== VIDEO) {
        var i = '<div id="video"><div class="video-container"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + VIDEO.url.split("v=")[1].toString() + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div></div>';
        $(i).insertAfter($("#corpo"))
    }
}

function widthMenu() {
    var i = $(".full.menu").find("ul.nivel-um").find(">li")
      , t = 100 / i.length;
    i.css("width", t + "%")
}
function quantyOption() {
    $(document).on('change keyup focusout', '.qtde-adicionar-carrinho .qtde-carrinho', function() {
        var inputValue = $(this).val();
        var e = $(this).parent().siblings('.botao-comprar');
        e.attr('href', e.attr('href').replace(/adicionar.*/g, 'adicionar/' + inputValue))
    });
    $('.listagem-item').find('.botao-comprar-ajax').closest('.acoes-produto').prepend('<div class="qtde-adicionar-carrinho"><input type="number" min="1" value="1" class="qtde-carrinho" name="qtde-carrinho"></div>');
    $('.botao-comprar-ajax').html('<i class="fas fa-shopping-cart"></i>Adicionar');
    $('.botao-comprar-ajax').attr('data-loading-text', '<i class="icon-refresh icon-animate"></i>');
    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><i class="fas fa-caret-up"></i></div><div class="quantity-button quantity-down"><i class="fas fa-caret-down"></i></div></div>')['insertAfter']('.qtde-carrinho');
    $('.qtde-adicionar-carrinho').each(function() {
        var i = $(this)
          , a = i.find('input[type="number"]')
          , quantyUp = i.find('.quantity-up')
          , quantyDown = i.find('.quantity-down')
          , qtnMin = a.attr('min')
          , qtnMax = a.attr('max');
        quantyUp['click'](function() {
            var valt = parseFloat(a.val());
            if (valt >= qtnMax) {
                var valtB = valt
            } else {
                var valtB = valt + 1
            }
            ;i.find('input').val(valtB);
            i.find('input').trigger('change')
        });
        quantyDown.click(function() {
            var valt = parseFloat(a.val());
            if (valt <= qtnMin) {
                var valtB = valt
            } else {
                var valtB = valt - 1
            }
            ;i.find('input').val(valtB);
            i.find('input').trigger('change')
        })
    });
}
function menuOfertas() {
    $(window).load(function() {
        $(".full.menu li:not(.outras-categorias) .nivel-dois").wrapInner('<div class="mega-categorias span6"></div>'),
        $(".full.menu li:not(.outras-categorias) .nivel-dois").append('<div class="mega-recebe span6"></div>'),
        $(".full.menu .nivel-um>li .mega-recebe").append('<div class="mega-recebe-prod"><div id="listagemProdutos" class="listagem"><ul><li class="listagem-linha"><ul></ul></li></ul></div></div>'),
        $(".full.menu .nivel-um>li").each(function() {
            var t = $(this)
              , e = t.find("a").attr("href");
            t.find(".mega-recebe-prod .listagem ul li ul").load(e + " .listagem .listagem-linha:first-child ul li:first-child")
        })
    });
}
;
function arrumarbanner() {
    if (void 0 !== BANNERS_CONTEUDO) {
        $("div#listagemProdutos> ul:nth-child(2)").after('<div class="banner-center" ><a class="modulo span6" href="' + BANNERS_CONTEUDO.banner1.link + '"><img src="' + BANNERS_CONTEUDO.banner1.imageUrl + '" /></a><a class="modulo span6" href="' + BANNERS_CONTEUDO.banner2.link + '"><img src="' + BANNERS_CONTEUDO.banner2.imageUrl + '" /></a></div>'),
        $("div#listagemProdutos> ul:nth-child(5)").after('<div class="banner-center" ><a class="modulo span6" href="' + BANNERS_CONTEUDO.banner3.link + '"><img src="' + BANNERS_CONTEUDO.banner3.imageUrl + '" /></a><a class="modulo span6" href="' + BANNERS_CONTEUDO.banner4.link + '"><img src="' + BANNERS_CONTEUDO.banner4.imageUrl + '" /></a></div>'),
        $("div#listagemProdutos> ul:nth-child(8)").after('<div class="banner-center" ><a class="modulo span6" href="' + BANNERS_CONTEUDO.banner5.link + '"><img src="' + BANNERS_CONTEUDO.banner5.imageUrl + '" /></a><a class="modulo span6" href="' + BANNERS_CONTEUDO.banner6.link + '"><img src="' + BANNERS_CONTEUDO.banner6.imageUrl + '" /></a></div>');
    }
}
;function whatsAppFixed() {
    if ("undefined" != typeof WHATSAPP) {
        var i = WHATSAPP.href;
        $("body").append('<a href="' + i + '" target="_blank" class="whats-btn-fixed"><svg style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css">.st0{display:none;fill:#FEFEFE;}.st1{fill:#25D366;}.st2{fill:#FFFFFF;}</style><g id="Layer_1"/><g id="Layer_2"><g><path class="st0" d="M512.4,512.4c-170.7,0-341.3,0-512,0c0-170.7,0-341.3,0-512c170.7,0,341.3,0,512,0    C512.4,171.1,512.4,341.8,512.4,512.4z"/><path class="st1" d="M127.8,388.2c0.7-2.6,1.5-5,2.3-7.3c3.6-10.6,7.1-21.3,10.7-31.9c1.3-3.8,2.7-7.6,3.9-11.5    c0.4-1.1,0.3-1.9-0.4-2.9c-3.7-5.3-7.1-10.8-10.1-16.5c-4.8-9.3-8.6-19-11.3-29.1c-1.9-6.9-3-14-3.8-21.1    c-1.2-9.8-1.2-19.7-0.2-29.6c0.9-9,2.6-17.9,5.3-26.7c2.8-9.1,6.4-17.9,10.9-26.3c3.9-7.4,8.5-14.3,13.6-20.8    c5.2-6.5,10.8-12.6,17.1-18.1c5.6-5,11.6-9.6,17.9-13.7c5.3-3.4,10.9-6.5,16.6-9.1c5.5-2.5,11.1-4.8,16.8-6.6    c8.4-2.6,16.9-4.7,25.7-5.6c6.7-0.7,13.4-1.3,20.2-1.1c6.8,0.2,13.6,0.8,20.3,1.9c12.5,2,24.6,5.7,36.1,11    c14.9,6.8,28.1,16,39.9,27.3c10.3,10,18.8,21.2,25.8,33.8c5.1,9.3,9.1,19.1,12,29.3c4,14.1,5.7,28.5,5.3,43.1    c-0.3,10.7-1.7,21.2-4.5,31.5c-3.4,13-8.5,25.3-15.4,36.8c-7,11.8-15.6,22.3-25.6,31.7c-6.9,6.5-14.4,12.2-22.5,17.1    c-8.7,5.3-18,9.7-27.7,13.1c-8.7,3-17.7,5.1-26.8,6.5c-4.1,0.6-8.2,0.9-12.3,1c-2.1,0-4.1,0.3-6.2,0.3c-11.7,0-23.2-1.2-34.6-4    c-13.2-3.2-25.7-8.2-37.4-15c-2.1-1.2-4.2-2.4-6.2-3.8c-1-0.7-1.9-0.7-3-0.3c-6.5,2.2-13.1,4.3-19.6,6.4    c-10.7,3.4-21.4,6.8-32,10.2C128.4,388.2,128.2,388.2,127.8,388.2z"/><path class="st2" d="M206.4,168.4c2.5,0.1,5,0.1,7.4,0.5c1.9,0.3,3.5,1.2,4.7,2.7c1.3,1.6,2.2,3.3,2.9,5.2    c3.6,9.8,7.3,19.7,11,29.5c0.6,1.7,1.3,3.3,1.8,5c0.6,1.9,0.7,3.7-0.2,5.6c-1.2,2.7-2.6,5.2-4.5,7.4c-2.5,2.8-4.9,5.7-7.6,8.3    c-0.4,0.4-0.8,0.8-1.2,1.2c-1.7,1.9-2.1,3.9-1,6.2c1,1.9,1.9,3.8,3,5.6c4.3,7,8.9,13.7,14.3,19.8c5,5.7,10.5,10.8,16.5,15.4    c4.9,3.8,10.1,7.1,15.6,9.9c3.2,1.7,6.4,3.3,9.7,4.8c2.8,1.3,5.4,1.1,7.7-1.5c4.9-5.4,9.9-10.6,14.3-16.4c0.6-0.9,1.4-1.6,2.2-2.3    c1.4-1.1,2.9-1.5,4.6-1c3.4,0.9,6.5,2.5,9.6,4.1c9,4.7,17.9,9.5,26.9,14.3c0.3,0.2,0.6,0.3,0.9,0.5c3.1,1.5,4.6,3.8,4.3,7.5    c-0.4,4.8-1.6,9.3-3,13.9c-1.2,4-3.5,7.3-6.5,10.1c-2.1,2-4.3,3.7-6.7,5.2c-6.5,4.1-13.5,6.8-21.2,8c-5.4,0.8-10.6,0.3-15.8-1.1    c-8.2-2.4-16.2-5.3-24-8.6c-4-1.7-8-3.4-11.9-5.2c-6.3-2.9-12.2-6.4-17.8-10.4c-7.7-5.4-14.8-11.5-21.4-18.2    c-5-5-9.7-10.4-14.2-15.9c-6.9-8.5-12.7-17.6-18.6-26.8c-5.1-7.9-9.1-16.4-11.6-25.5c-1.6-5.8-2.5-11.7-2.1-17.7    c0.7-11.6,4.4-22,12.4-30.8c2.3-2.5,4.5-4.9,7.2-6.9c2.8-1.9,5.8-2.9,9.2-2.8C204.4,168.4,205.4,168.4,206.4,168.4z"/></g></g></svg></a>')
    }
}
function benefitsMobile() {
    if ("undefined" != typeof TARJA_MOBILE) {
        var i = TARJA_MOBILE.src
          , e = i.split("/")
          , t = '<div class="tarja-mob"><img src="' + i + '" alt="' + e[e.length - 1] + '" title="' + e[e.length - 1] + '"></div>';
        $(".secao-banners").length && $(".secao-banners").append(t)
    }
}
function custom() {
    $("#barraTopo").remove();
    $(".barra-inicial .row-fluid").append('<ul class="top-actions"> <li class="top-action-item"> <a href="#modalContato" data-toggle="modal" data-target="#modalContato"> <svg class="icon "xmlns="http://www.w3.org/2000/svg" viewBox="-1281.001 13.021 14.704 11.553"><path class="a" d="M6884.314,22.553A1.318,1.318,0,0,1,6883,21.241V14.725a4.339,4.339,0,0,0,.829.715q2.971,2.018,4.079,2.83.467.345.758.537a4.617,4.617,0,0,0,.776.395,2.371,2.371,0,0,0,.9.2h.017a2.371,2.371,0,0,0,.9-.2,4.617,4.617,0,0,0,.776-.395q.291-.192.758-.537,1.395-1.01,4.087-2.83a4.573,4.573,0,0,0,.82-.715v6.516a1.318,1.318,0,0,1-1.314,1.312Zm6.038-4.2h-.009a1.288,1.288,0,0,1-.41-.074,2.511,2.511,0,0,1-.471-.22c-.168-.1-.31-.189-.427-.267s-.265-.183-.443-.313-.294-.211-.348-.249q-.748-.525-2.15-1.5t-1.683-1.17a4.055,4.055,0,0,1-.959-.947,1.913,1.913,0,0,1-.452-1.12,1.658,1.658,0,0,1,.341-1.066,1.174,1.174,0,0,1,.973-.428h12.076a1.277,1.277,0,0,1,.925.386,1.261,1.261,0,0,1,.389.928,2.152,2.152,0,0,1-.4,1.238,3.851,3.851,0,0,1-1,1.009l-3.839,2.668c-.054.038-.171.121-.348.249s-.325.234-.443.313-.259.168-.427.267a2.511,2.511,0,0,1-.471.22,1.288,1.288,0,0,1-.41.074Z" transform="translate(-8164.001 2.021)"/></svg> Fale Conosco </a> </li><li class="top-action-item"> <a href="/conta/favorito/listar"> <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="-1145 13.105 15.865 14"><path class="a" d="M14.622,1.293a4.263,4.263,0,0,0-6.067,0l-.6.6-.6-.6A4.29,4.29,0,0,0,1.293,7.361l6.664,6.664,6.664-6.664a4.263,4.263,0,0,0,0-6.067" transform="translate(-1145.025 13.08)"/></svg> Meus favoritos </a> </li><li class="top-action-item rastreio"> <a href="#"> <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="5648 56.875 9.554 13.868"><path class="a" d="M76.233,3.452a4.32,4.32,0,0,0-.224-.555A4.751,4.751,0,0,0,66.9,4.3v.592c0,.025.009.247.021.358C67.1,6.632,68.188,8.1,69,9.48c.875,1.479,1.783,2.934,2.683,4.388.555-.949,1.108-1.911,1.65-2.835.148-.271.319-.542.467-.8.1-.172.287-.345.373-.505.875-1.6,2.284-3.217,2.284-4.808V4.265A4.921,4.921,0,0,0,76.233,3.452ZM71.656,6.423a1.7,1.7,0,0,1-1.623-1.159,1.607,1.607,0,0,1-.046-.432V4.45a1.605,1.605,0,0,1,1.722-1.578,1.746,1.746,0,0,1,1.749,1.775A1.791,1.791,0,0,1,71.656,6.423Z" transform="translate(5581.095 56.875)"/></svg> Rastreie seu pedido </a> </li></ul>');
    var i = '<ul class="actions"> <li class="action-item account"> <a href="/conta/index"> <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="5692 57.168 14 14"> <path class="a" d="M0,368V366.25c0-1.925,3.15-3.5,7-3.5s7,1.575,7,3.5V368Zm3.5-10.5A3.5,3.5,0,1,1,7,361,3.5,3.5,0,0,1,3.5,357.5Z" transform="translate(5692 -296.832)"/> </svg> Minha Conta </a> </li><li class="action-item cart"> </li></ul>';
    $(".logo-centro").length ? $("#cabecalho .inferior .span12").last().append(i) : $("#cabecalho .inferior .span4").append(i),
    $("#cabecalho .cart").append($("#cabecalho .carrinho")),
    $(".carrinho>a i").append($('<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="5736 55.167 15.86 16.002"><path class="a" d="M6886.6,83a1.365,1.365,0,0,1-1.254-.968l-2.333-9.5a.249.249,0,0,1,.254-.324h3.579v.831a1.333,1.333,0,0,0,2.667,0v-.831h2.883v.831a1.333,1.333,0,1,0,2.666,0v-.831h3.539a.249.249,0,0,1,.254.324l-2.332,9.5a1.371,1.371,0,0,1-1.255.968Zm6.461-9.959v-2.6a2.108,2.108,0,1,0-4.216,0v2.6a.667.667,0,0,1-1.333,0v-2.6a3.441,3.441,0,1,1,6.882,0v2.6a.667.667,0,1,1-1.333,0Z" transform="translate(-1147 -11.833)"/></svg>')),
    $(".flex-prev").append($("<svg class='icon' xmlns='http://www.w3.org/2000/svg' viewBox='324.355 448.294 18.489 30'><path class='a' d='M18.489,3.5,14.991,0,0,15,14.991,30l3.5-3.5L7,15Z' transform='translate(324.355 448.294)'/></svg>")),
    $(".flex-next").append($("<svg class='icon' xmlns='http://www.w3.org/2000/svg' viewBox='1577.61 442.217 18.489 30'><g transform='translate(0 2)'><path class='a' d='M18.489,3.5,14.991,0,0,15,14.991,30l3.5-3.5L7,15Z' transform='translate(1596.099 470.217) rotate(180)'/></g></svg>")),
    $(".marcas").prepend($("<strong>Escolha pela marca</strong>")),
    $(".marcas").appendTo("#corpo .conteiner"),
    $(".mini-banner").removeClass("hidden-phone"),
    $(".pagina-inicial .mini-banner").length && $(".pagina-inicial .banner.cheio").length ? $(".pagina-inicial .mini-banner").css("top", "0") : $(".pagina-inicial .tarja").css("margin-top", "0"),
    $(".produto div.principal").after($(".produto-compartilhar")),
    $(".pagina-produto .comprar .icon-shopping-cart").append($("<svg class='icon' xmlns='http://www.w3.org/2000/svg' viewBox='-8173.381 616 12.643 18.48'><path class='a' d='M15.062,7.16h-.79V5.4A4.2,4.2,0,0,0,10.321,1,4.2,4.2,0,0,0,6.37,5.4V7.16H5.58A1.682,1.682,0,0,0,4,8.92v8.8a1.682,1.682,0,0,0,1.58,1.76h9.482a1.682,1.682,0,0,0,1.58-1.76V8.92A1.682,1.682,0,0,0,15.062,7.16Zm-4.741,7.92a1.682,1.682,0,0,1-1.58-1.76,1.682,1.682,0,0,1,1.58-1.76,1.682,1.682,0,0,1,1.58,1.76A1.682,1.682,0,0,1,10.321,15.08Zm2.449-7.92h-4.9V5.4a2.6,2.6,0,0,1,2.449-2.728A2.6,2.6,0,0,1,12.771,5.4Z' transform='translate(-8177.381 615)'/></svg>")),
    setTimeout(function() {
        $("#carouselImagem .elastislide-carousel ul li a span").find("img").each(function() {
            var i = $(this).attr("src").replace(/\/64x50/, "");
            $(this).attr("src", i)
        })
    }, 500),
    $(".sobre-loja-rodape").prepend($("#cabecalho .logo").clone()),
    $(".sobre-loja-rodape").append($("<a href='/pagina/sobre-nos.html' class='more'>Conferir</a>")),
    $("#rodape .institucional .conteiner .span9 .row-fluid").prepend($(".sobre-loja-rodape")),
    $("#barraNewsletter.posicao-rodape").removeClass("hidden-phone"),
    $("#cabecalho .atalhos-mobile .icon-home").append($("<svg class='icon' xmlns='http://www.w3.org/2000/svg' viewBox='-534.001 1106.001 18.06 16'><path id='Union_46' data-name='Union 46' class='cls-1' d='M-11320.092-1096.366v-6.993l6.666-5.586,6.281,5.586v6.876a.467.467,0,0,1-.478.5h-4.456l.008-3.718a.586.586,0,0,0-.662-.615h-1.889c-.6,0-.533.615-.533.615l-.007,3.73-4.553,0A.375.375,0,0,1-11320.092-1096.366Zm-2.456-7.513,9.179-8.084,8.881,8.045s-.535,1.031-1.964,0l-6.917-6.2-7.378,6.241a1.617,1.617,0,0,1-1.015.464A.944.944,0,0,1-11322.548-1103.879Zm14.155-4.1-.008-2.157h1.779v3.66Z' transform='translate(10788.547 2217.964)'/></svg>")),
    $("#cabecalho .atalhos-mobile .icon-user").append($("<svg class='icon' xmlns='http://www.w3.org/2000/svg' viewBox='1214.153 78 28.15 29.547'><g transform='translate(1212.128 71.212)'><path class='a' d='M20.6,17.487c-4.112,0-7.443-3.994-7.443-8.916S16.487,0,20.6,0s7.446,3.649,7.446,8.571S24.711,17.487,20.6,17.487ZM9.021,29.541a2.88,2.88,0,0,1-2.274-.854c-.376-.518-.114-1.567.143-2.152L7.519,25.1a29.69,29.69,0,0,1,3.721-6.148,2.831,2.831,0,0,1,3.6-.618,9.687,9.687,0,0,1,1.705,1.511,5.534,5.534,0,0,0,3.711,1.3h1.163a5.531,5.531,0,0,0,3.709-1.3A10.331,10.331,0,0,1,26.809,18.3a2.59,2.59,0,0,1,3.352.652,25.823,25.823,0,0,1,3.551,6.219l.645,1.406c.267.581.54,1.625.175,2.15a2.553,2.553,0,0,1-2.115.813Z' transform='translate(-4.533 6.788)'/></g></svg>")),
    $("#cabecalho .atalhos-mobile .icon-shopping-cart").append($("<svg class='icon' xmlns='http://www.w3.org/2000/svg' viewBox='1454 76 30 30'><path d='M9,24a3,3,0,1,0,3,3A3.009,3.009,0,0,0,9,24ZM0,0V3H3L8.4,14.4,6.3,18A5.329,5.329,0,0,0,6,19.5a3.009,3.009,0,0,0,3,3H27v-3H9.6a.323.323,0,0,1-.3-.3v-.15l1.35-2.55h11.1A2.736,2.736,0,0,0,24.3,15l5.4-9.75A.826.826,0,0,0,30,4.5,1.417,1.417,0,0,0,28.5,3H6.3L4.95,0ZM24,24a3,3,0,1,0,3,3A3.009,3.009,0,0,0,24,24Z' transform='translate(1454 76)'/></svg>")),
    $("#cabecalho .atalhos-mobile .icon-signout").append($("<svg class='icon' xmlns='http://www.w3.org/2000/svg' viewBox='-288.562 1106 19.601 16'><path id='Union_80' data-name='Union 80' class='cls-1' d='M362.053-1095.964a3.467,3.467,0,0,1-2.544-1.057,3.467,3.467,0,0,1-1.056-2.543v-8.8a3.468,3.468,0,0,1,1.056-2.543,3.467,3.467,0,0,1,2.544-1.056h4a.384.384,0,0,1,.281.119.384.384,0,0,1,.119.281c0,.033,0,.117.012.25a3.251,3.251,0,0,1,.006.331,2.07,2.07,0,0,1-.038.293.411.411,0,0,1-.125.244.375.375,0,0,1-.256.081h-4a1.926,1.926,0,0,0-1.413.588,1.925,1.925,0,0,0-.588,1.412v8.8a1.925,1.925,0,0,0,.588,1.412,1.924,1.924,0,0,0,1.413.588h3.9l.144.013q.144.012.144.037c0,.016.033.039.1.068s.1.067.087.113a.324.324,0,0,0,.025.169c0,.034,0,.117.012.25a3,3,0,0,1,.006.331,2.152,2.152,0,0,1-.037.294.415.415,0,0,1-.125.244.38.38,0,0,1-.256.081Zm7.838-.637a.768.768,0,0,1-.238-.563v-3.6h-5.6a.769.769,0,0,1-.563-.238.767.767,0,0,1-.238-.562v-4.8a.769.769,0,0,1,.238-.562.77.77,0,0,1,.563-.238h5.6v-3.6a.771.771,0,0,1,.237-.563.771.771,0,0,1,.563-.237.769.769,0,0,1,.562.237l6.8,6.8a.77.77,0,0,1,.238.563.769.769,0,0,1-.238.563l-6.8,6.8a.77.77,0,0,1-.563.238A.768.768,0,0,1,369.891-1096.6Z' transform='translate(-647.015 2217.964)'/></svg>")),
    $("#cabecalho .atalhos-mobile .icon-shopping-cart").append($("#cabecalho .carrinho .qtd-carrinho").clone())
}
var FRETE_GRATIS = void 0
  , TABELA_MEDIDAS = void 0
  , VIDEO = void 0
  , BANNERS_CONTEUDO = void 0;
$(function() {
    benefitsMobile(),
    whatsAppFixed(),
    arrumarbanner(),
    menuOfertas(),
    quantyOption(),
    custom(),
    fullMenu(),
    otherCategories(),
    widthMenu(),
    accountMenu(),
    headerFixed(),
    floatMenu(),
    menuMobile(),
    searchFixed(),
    tracking(),
    cartWithPrice(),
    infoBanner(),
    discountOff(),
    responsiveShowcase(),
    buyOfShowcase(),
    addWishlist(),
    shareThis(),
    measurementTable(),
    tabsDescription(),
    video(),
    instagram(),
    toTop(),
    copyright(),
    freeShippingNotice()
});
