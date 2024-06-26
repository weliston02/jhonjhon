var FM, FMC = {
    init: function ($) {
        $ = jQuery;

        FM = this.settings;
        var idS = setInterval(function () {
            if (typeof this.FMC !== 'undefined' && typeof this.FM !== 'undefined') {
                FM.store = FMC.isS(FMC.tk());
                this.FM.apps = FMC.ap();
                this.FM.timeToLoad = ((0 * 60 * 60 + this.FM.time * 60 + 1) * 1000);

                if (FM.store === null || typeof FM.store === 'undefined' || typeof FM.store === 'object') {
                    return;
                }

                // encerra a rotina 
                clearInterval(idS);

                if (FM.isStorage(FM.keys.apps)) {
                    FMC.file(FM.getStorage(FM.keys.apps));
                    return;
                }

                FMC.findApps();
            }
        });

        FMC.findApps();
        //FMC.file(FM.getStorage(FM.keys.apps));

        var idSs = setInterval(function () {

            if (typeof this.FMC !== 'undefined' && typeof this.FMC !== 'object' && typeof this.FM !== 'undefined' && typeof this.FM !== 'object') {
                this.FM.apps = FMC.ap();
                FM.store = FMC.isS(FMC.tk());

                if (typeof this.FM.apps !== 'undefined' && typeof this.FM.apps !== 'object' && this.FM.apps !== null) {
                    // encerra a rotina 
                    clearInterval(idSs);
                }
            }
        }, FM.timeInterval);

        // valida se os apps est�o validos
        setInterval(function () {

            FM.store = FMC.isS(FMC.tk());
            FM.apps = FMC.ap();

            FM.isStorage(FM.keys.apps);
            FM.isStorage(FM.keys.shipping);
            FM.isStorage(FM.keys.instagram);
            FM.isStorage(FM.keys.present);

            //FMC.file(FM.getStorage(FM.keys.apps));

        }, FM.timeInterval);

        var present = setInterval(function () {
            if (typeof FMPresent !== 'undefined') {
                FMPresent.init();
                clearInterval(present);
            }
        }, 100);

        var shipping = setInterval(function () {
            if (typeof FMShipping !== 'undefined') {
                FMShipping.init();
                clearInterval(shipping);
            }
        }, 100);

        // tempo para atualizar o cache dos apps
        // setInterval(function () { FMC.findApps(); }, FM.timeToLoad);
    },
    findApps: function () {

        if (typeof FM.store === 'undefined' || FM.store === null || FM.store === '') {
            return;
        }

        try {
            FMC.include(FMC.settings.urlCdn('plugin/css/liCommon.css'), 'css', 'fmais-style-id', '1.0.0');
        } catch (e) {

        }

        //try {
        //    FMC.include(FMC.settings.urlCdn('plugin/js/liInstagram.js'), 'js', 'fmais-script-instagram-id', '1.1.1');
        //} catch (e) {

        //}

        try {
            if (typeof jQuery('#fm-shipping-new').html() === 'undefined') {
                FMC.include(FMC.settings.urlCdn('plugin/js/liFreeShipping.js'), 'js', 'fmais-script-shipping-id', '1.2.5');
            }
        } catch (e) {

        }

        try {
            FMC.include(FMC.settings.urlCdn('plugin/js/liPresent.js'), 'js', 'fmais-script-present-id', '1.3.9');
        } catch (e) {

        }

        try {
            FMC.include(FMC.settings.urlCdn('plugin/js/fmSlick.js'), 'js', 'fmais-script-slick', '1.0.0');

            var count = 0; var id = setInterval(function () {
                try {
                    fidelizarSlider('#fmais-container', { autoplay: true, autoplaySpeed: 2500 });
                } catch (e) { }

                if (count >= 100) {
                    clearInterval(id);
                }

                count++;
            }, 100);
        } catch (e) {

        }

        //try {
        //    FMC.include(FMC.settings.urlCdn('plugin/js/liLightningPromotion.js'), 'js', 'fmais-script-lightning-promotion-id', '1.2.5');
        //} catch (e) {

        //}

        //try {
        //    FMC.include(FMC.settings.urlCdn('plugin/js/liBuyTogether.js'), 'js', 'fmais-script-buy-together-id', '1.0.1');
        //} catch (e) {

        //}

        try {
            FMC.fileReader(FMC.settings.urlCdn('plugin/apps/common/' + FM.store.toLocaleLowerCase() + '.html'), true, 'fmais-div-id');
        } catch (e) {
            console.log(e);
        }

        try {
            FMC.fileReaderRefresh(FMC.settings.urlCdn('plugin/apps/shipping/' + FM.store.toLocaleLowerCase() + '.json?ver=1.1'), 'apps-json-shipping-data-new');
        } catch (e) {
            console.log(e);
        }
    },
    fileReader: function (file, read, id) {
        try {
            jQuery.get(file, function (data) {
                if (document.getElementById(id) === null) {
                    try {
                        data = (data !== null && typeof data !== 'undefined') ? data.replace('<script src="/cdn-cgi/apps/head/f6FSm1J7quFenzL0ox28pvoVPoE.js"></script>', '') : data;
                        jQuery('body').append('<div id="' + id + '">' + data + '</div>');
                    } catch (e) {

                    }
                }
            });
        } catch (e) {
            console.log('Oops ' + e);
        }

        //try {
        //    var request = (typeof XMLHttpRequest !== 'undefined') ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        //    request.open('GET', file, true);
        //    request.responseType = 'text';
        //    request.withCredentials = false;
        //    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        //    request.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type,x-requested-with,Authorization,Access-Control-Allow-Origin');
        //    request.setRequestHeader('Access-Control-Allow-Origin', '*');
        //    request.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
        //    request.setRequestHeader('Accept-Language', 'pt-BR,pt,en-US,en');

        //    request.onreadystatechange = function () {
        //        if (request.readyState === 4 && request.status === 200) {
        //            var type = request.getResponseHeader('Content-Type');
        //            if (type.indexOf("html") !== 1) {
        //                var json = request.responseText;
        //                if (read === true && id !== undefined) {
        //                    if (document.getElementById(id) === null) {
        //                        try {
        //                            console.log('--------log--------')
        //                            console.log(json);
        //                            jQuery('body').append('<div id="' + id + '">' + json + '</div>');
        //                        } catch (e) {

        //                        }
        //                    }
        //                }
        //                return json;
        //            }
        //        }
        //    }

        //    request.send();
        //} catch (e) {

        //}
    },
    fileReaderRefresh: function (file, id) {
        try {
            jQuery.get(file, function (data) {
                try {

                    if (document.getElementById(id) !== null && data !== null && typeof data !== 'undefined') {
                        document.getElementById(id).remove();
                    }

                    data = (data !== null && typeof data !== 'undefined') ? data : data;
                    jQuery('body').append('<script type="application/json" id="' + id + '">' + JSON.stringify(data) + '</script>');
                } catch (e) {

                }
            });
        } catch (e) {
            console.log('Oops ' + e);
        }
    },
    isProd: function () {
        var s = '';
        try {
            var data = document.getElementsByClassName('fmais-script-widget');
            for (var i = 0; i < data.length; i++) {
                s = data[i].getAttribute('data-is-prod');
            }

        } catch (e) { }

        return (s.toLocaleLowerCase() === 'true');
    },
    file: function (data) {
        FMC.include(FM.settings.urlCdn('plugin/css/liCommon.css?ver='), 'css', 'fmais-common');
    },
    include: function (filename, type, id, version) {

        version = (version === undefined || version === null || version === '') ? FM.version : version;

        var file;
        if (type === "js") {
            file = document.createElement('script');
            file.setAttribute("type", "text/javascript");
            file.setAttribute("charset", "utf-8");
            if (id !== undefined && typeof id !== 'undefined') {
                file.setAttribute("id", id);
            }
            file.setAttribute("src", filename + '?ver=' + version);
        }

        if (type === "css") {

            file = document.createElement("link");
            file.setAttribute("rel", "stylesheet");
            file.setAttribute("type", "text/css");
            if (id !== undefined && typeof id !== 'undefined') {
                file.setAttribute("id", id);
            }
            file.setAttribute("href", filename + '?ver=' + version);
        }

        if (typeof file !== "undefined") {
            if (id !== undefined && typeof id !== 'undefined' && document.getElementById(id) !== null) {
                return;
            }
            document.getElementsByTagName("head")[0].appendChild(file);
        }
    },
    if: function () {
        FM.get('loja-integrada/my-apps/' + FM.store).onreadystatechange = (function () {
            var data = {
                MyApps: null
            };
            if (FM.completed(this)) {

                data.MyApps = JSON.parse(this.responseText);
                FM.setStorage(FM.keys.apps, data, FM.time);

            } else if (FM.error(this)) {
                FM.setStorage(FM.keys.apps, data, FM.time);
            }
        });
    },
    ma: function () {
        if (typeof FM !== 'undefined') {
            FM.apps = ((FM.getStorage(FM.keys.info) !== null && FM.getStorage(FM.keys.info) !== '' && FM.getStorage(FM.keys.info) !== undefined &&
                FM.getStorage(FM.keys.info) !== false) ? FM.getStorage(FM.keys.info) : (FM.getCookie(FM.keys.info) !== null &&
                    FM.getCookie(FM.keys.info) !== '' && FM.getCookie(FM.keys.info) !== undefined && FM.getCookie(FM.keys.info) !== f) ?
                    FM.getCookie(FM.keys.info) : { MyApps: null });
        }
    },
    ap: function () {
        var result = null;

        try {
            var apps = document.getElementById('apps-json-data');
            if (apps !== null) {
                result = JSON.parse(apps.innerHTML);
            }
        } catch (e) { }

        return result;
    },
    isActive: function (data, app) {
        var result = false;
        data = FMC.ap();

        try {
            for (var i = 0; i < data.length; i++) {
                if (data[i].type === app && data[i].active) {
                    result = data[i].active;
                }
            }

        } catch (e) { }
        return result;
    },
    isS: function (t) {
        return FM.dc(t).split(':')[0];
    },
    tk: function () {
        var s = '';
        try {
            var data = document.getElementsByClassName('fmais-script-widget');

            for (var i = 0; i < data.length; i++) {
                s = data[i].getAttribute('data-token');
            }

        } catch (e) { }
        return s;
    },
    autoAdjustableIframe: function (id) {
        try {

            // Find all iframes
            var $iframes = jQuery(id);

            // Find &amp;amp;#x26; save the aspect ratio for all iframes
            $iframes.each(function () {
                jQuery(this).data("ratio", this.height / this.width)
                    // Remove the hardcoded width &amp;amp;#x26; height attributes
                    .removeAttr("width")
                    .removeAttr("height");
            });

            // Resize the iframes when the window is resized
            jQuery(window).resize(function () {
                $iframes.each(function () {
                    // Get the parent container&amp;amp;#x27;s width
                    var width = jQuery(this).parent().width();
                    jQuery(this).width(width)
                        .height(width * jQuery(this).data("ratio"));
                });
                // Resize to fix all iframes on page load.
            }).resize();
        }
        catch (e) {
            window.status = 'Error: ' + e.number + '; ' + e.description;
        }
    },
    validURL(eval) {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + //port
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i');
        return pattern.test(eval);
    },
    settings: {
        get: function (query, async) {
            var request = this.XMLHttpRequest;
            this.send(request, 'GET', query, async);
            return request;
        },
        post: function (query, data, async) {
            var request = this.XMLHttpRequest;
            this.send(request, 'POST', query, data, async);
            return request;
        },
        keys: {
            apps: '_fm_li_apps',
            info: '_fm_li_info',
            shipping: '_fm_li_shipping',
            present: '_fm_li_present',
            instagram: '_fm_li_instagram',
            lightningPromotion: '_fm_li_lightning_promotion'
        },
        isLocal: (window.location.host === 'localhost' || window.location.host === ''),
        removeAddClass: function (idOrClass, classRemove, classAdd) {

            var element = document.querySelector(idOrClass);
            var newClass = classRemove.split(',')
            for (var i = 0; i < newClass.length; i++) {
                if (element !== null && typeof element.className !== 'undefined') {
                    element.className = element.className.replace(newClass[i], '');
                }
            }

            if (typeof classAdd !== 'undefined') {
                this.addClass(idOrClass, classAdd);
            }
        },
        addClass: function (idOrClass, className) {

            var element = document.querySelector(idOrClass);
            var add = function (el, className) {
                if (el !== null) {
                    if (el.classList) {
                        el.classList.add(className);
                    }
                    else {
                        el.className += ' ' + className;
                    }
                }
            };

            add(element, className);
        },
        version: (window.location.host === 'localhost' || window.location.host === '' || window.location.hostname === 'www.apps.fidelizarmais.com') ? '' :
            (new Date().getDate() + '.' + new Date().getMonth() + '.' + new Date().getFullYear().toString().substr(2) + '.3'),/* + '.' + new Date().getMinutes()),*/
        app: {
            instagram: 12,
            freeShipping: 11,
            present: 10,
            lightningPromotion: 15
        },
        url: (window.location.hostname === 'localhost' || window.location.hostname === '') ? 'L2NvbnRlbnQv' : 'aHR0cHM6Ly9jZG4uZmlkZWxpemFybWFpcy5jb20v',
        urlCdn: function (query) {
            return 'https://cdn.fidelizarmais.com/' + query;
        },
        getAd: function (zc) {
            var request = this.XMLHttpRequest;

            var url = 'https://api-li-address.fidelizarmais.com/' + this.q + this.s + zc;
            request.open('GET', url, true);

            request.overrideMimeType("application/json");
            request.responseType = 'text';
            request.withCredentials = false;
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
            request.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type,x-requested-with,Authorization,Access-Control-Allow-Origin');
            request.setRequestHeader('Access-Control-Allow-Origin', '*');
            request.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
            request.setRequestHeader('Accept-Language', 'pt-BR,pt,en-US,en');

            request.send();
            return request;
        },
        getNotS: function (zc) {
            var request = this.XMLHttpRequest;

            var url = 'https://cdn.fidelizarmais.com/' + zc;
            request.open('GET', url, true);

            request.overrideMimeType("application/json");
            request.responseType = 'text';
            request.withCredentials = false;
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
            request.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type,x-requested-with,Authorization,Access-Control-Allow-Origin');
            request.setRequestHeader('Access-Control-Allow-Origin', '*');
            request.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
            request.setRequestHeader('Accept-Language', 'pt-BR,pt,en-US,en');

            request.send();
            return request;
        },
        accountManager: window.location.hostname,
        p: 'api-li',
        completed: function (request) {
            return (request.readyState === 4 && request.status === 200);
        },
        error: function (request) {
            return (request.readyState === 4 && request.status !== 200);
        },
        XMLHttpRequest: (typeof XMLHttpRequest !== 'undefined') ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP'),
        send: function (request, type, query, data, async) {

            async = (typeof async !== 'undefined') ? async : true;
            var base = FMC.isProd() ? 'https://api-li.fidelizarmais.com/api/v2/public/' : (window.location.protocol.indexOf('file') >= 0) ? 'http://localhost:52961/api/v2/public/' : 'https://sandbox.fidelizarmais.com/api/v2/public/';
            var urlApi = (query !== undefined && query !== 'undefined' && query !== '') ? base + query : base;
            request.open(type, urlApi, async);

            request.overrideMimeType("application/json");
            request.responseType = 'text';
            request.withCredentials = false;
            request.setRequestHeader('api_key', this.dc(FMC.tk()).split(':')[0]);
            request.setRequestHeader('store-key', this.dc(FMC.tk()).split(':')[0]);
            request.setRequestHeader('secret-key', this.dc(FMC.tk()).split(':')[1]);
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
            request.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type,x-requested-with,Authorization,Access-Control-Allow-Origin');
            request.setRequestHeader('Access-Control-Allow-Origin', '*');
            request.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
            request.setRequestHeader('Accept-Language', 'pt-BR,pt,en-US,en');

            if (data !== undefined && data !== null && data !== 'undefined') { request.send(JSON.stringify(data)); } else { request.send(); }
        },
        isMobile: (navigator.userAgent.indexOf("Mobile") > 0),
        language: ((navigator.language == undefined) && (navigator.userLanguage != undefined)) ? navigator.userLanguage : ((navigator.userLanguage == undefined || navigator.userLanguage == '' || navigator.userLanguage == null || navigator.userLanguage == ' ' || navigator.userLanguage == 'undefined') ? 'pt-BR' : language),
        store: '',
        time: 5,
        q: 'api/v2/public/address/find-by?secretKey=',
        timeToLoad: 60000,
        timeInterval: 5000,
        apps: function () {
            var apps = document.getElementById('apps-json-data');
            return (apps !== null) ? JSON.parse(apps.innerHTML) : null;
        },
        isGuid: function (eval) {
            var pattern = new RegExp('/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i');
            return pattern.test(eval);
        },
        replaceCharacters: function (text) {

            //https://unicode-table.com/pt/#00E1
            if (typeof text !== 'undefined' && text !== '') {

                text = text.replace('�', '&Aacute;')
                text = text.replace('�', '&aacute;')
                text = text.replace('�', '&Acirc;')
                text = text.replace('�', '&acirc;')
                text = text.replace('�', '&Agrave;')
                text = text.replace('�', '&agrave;')
                text = text.replace('�', '&Aring;')
                text = text.replace('�', '&aring;')
                text = text.replace('�', '&Atilde;')
                text = text.replace('�', '&atilde;')
                text = text.replace('�', '&Auml;')
                text = text.replace('�', '&auml;')
                text = text.replace('�', '&AElig;')
                text = text.replace('�', '&aelig;')
                text = text.replace('�', '&Eacute;')
                text = text.replace('�', '&eacute;')
                text = text.replace('�', '&Ecirc;')
                text = text.replace('�', '&ecirc;')
                text = text.replace('�', '&Egrave;')
                text = text.replace('�', '&egrave;')
                text = text.replace('�', '&Euml;')
                text = text.replace('�', '&euml;')
                text = text.replace('�', '&ETH;')
                text = text.replace('�', '&eth;')
                text = text.replace('�', '&Iacute;')
                text = text.replace('�', '&iacute;')
                text = text.replace('�', '&Icirc;')
                text = text.replace('�', '&icirc;')
                text = text.replace('�', '&Igrave;')
                text = text.replace('�', '&igrave;')
                text = text.replace('�', '&Iuml;')
                text = text.replace('�', '&iuml;')
                text = text.replace('�', '&Oacute;')
                text = text.replace('�', '&oacute;')
                text = text.replace('�', '&Ocirc;')
                text = text.replace('�', '&ocirc;')
                text = text.replace('�', '&Ograve;')
                text = text.replace('�', '&ograve;')
                text = text.replace('�', '&Oslash;')
                text = text.replace('�', '&oslash;')
                text = text.replace('�', '&Otilde;')
                text = text.replace('�', '&otilde;')
                text = text.replace('�', '&Ouml;')
                text = text.replace('�', '&ouml;')
                text = text.replace('�', '&Uacute;')
                text = text.replace('�', '&uacute;')
                text = text.replace('�', '&Ucirc;')
                text = text.replace('�', '&ucirc;')
                text = text.replace('�', '&Ugrave;')
                text = text.replace('�', '&ugrave;')
                text = text.replace('�', '&Uuml;')
                text = text.replace('�', '&uuml;')
                text = text.replace('�', '&Ccedil;')
                text = text.replace('�', '&ccedil;')
                text = text.replace('�', '&Ntilde;')
                text = text.replace('�', '&ntilde;')
                text = text.replace('<', '&lt;')
                text = text.replace('>', '&gt;')
                text = text.replace('&', '&amp;')
                text = text.replace('"', '&quot;')
                text = text.replace('�', '&reg;')
                text = text.replace('�', '&copy;')
                text = text.replace('�', '&Yacute;')
                text = text.replace('�', '&yacute;')
                text = text.replace('�', '&THORN;')
                text = text.replace('�', '&thorn;')
                text = text.replace('�', '&szlig;')
            }
            return text;
        },
        setStorage: function (key, value, min) {
            var expires = (new Date().getTime() + (1000 * 60 * min));
            localStorage.setItem(key, JSON.stringify({ "value": value, "expires": expires }));
        },
        s: window.atob('M0RFMTEzMjgtNjAwMS00MjIwLUFENkYtOTZBMzVENkNFODM3JnppcD0='),
        getStorage: function (key) {

            if (!this.isStorage(key)) {
                return null;
            }

            var itemValue = localStorage[key];
            if (itemValue && /^\{(.*?)\}$/.test(itemValue)) {
                var current = JSON.parse(itemValue);
                return current.value;
            }
        },
        removeStorage: function (key) {
            localStorage.removeItem(key);
        },
        isStorage: function (key) {

            var result = true;
            var toRemove = [], currentDate = new Date().getTime();

            if (localStorage.length === 0 || localStorage[key] === undefined) {
                result = false;
            }

            var current = localStorage.getItem(key);
            if (current && /^\{(.*?)\}$/.test(current)) {
                current = JSON.parse(current);
                if (current.expires && current.expires <= currentDate) {
                    toRemove.push(key);
                }
            }

            for (var i = toRemove.length - 1; i >= 0; i--) {
                localStorage.removeItem(toRemove[i]);
                if (typeof localStorage[key] === 'undefined') {
                    result = false;
                }
            }

            return result;
        },
        setCookie: function (key, value, min) {
            var d = new Date();
            d.setTime(d.getTime() + (1000 * 60 * min));
            var expires = "expires=" + d.toUTCString();
            document.cookie = key + "=" + value + ";" + expires + ";path=/";
        },
        checkCookie: function (key) {
            var obj = this.getCookie(key);
            if (obj != "" && obj != false) {
                return true;
            } else {
                return false;
            }
        },
        removeCookie: function (key) {
            var d = new Date();
            d.setTime(d.getTime() - (1000 * 60 * 60 * 24));
            var expires = "expires=" + d.toGMTString();
            window.document.cookie = key + "=" + "; " + expires;
        },
        getCookie: function (key) {
            var name = key + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return false;
        },
        userAgent: window.navigator.userAgent,
        dc: function (eval) { return window.atob(eval); }
    }
};

(function (window, $) {
    'use strict'

    try {
        if (typeof $ === "undefined" || typeof jQuery === "undefined") {
            var file = document.createElement('script');
            file.setAttribute("type", "text/javascript");
            file.setAttribute("charset", "utf-8");
            file.setAttribute("src", '//cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js');
            document.getElementsByTagName("head")[0].appendChild(file);
        }
    } catch (e) {

    }

    FMC.init($);
})(window, jQuery);