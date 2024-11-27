if (hndebug.disable_debug == 1) {
    window.is_Mobile = function () {
        let isMobile = false;
        (function (a) {
            if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(a.toLowerCase())) {
                isMobile = true;
            }
        })(navigator.userAgent || navigator.vendor || window.opera);
        return isMobile;
    };
    if (!is_Mobile()) {
        const devtools = {
            open: false,
            orientation: null,
        };
        const threshold = 160;
        const emitEvent = (state, orientation) => {
            window.dispatchEvent(new CustomEvent('hncore', {
                detail: {
                    open: state,
                    orientation: orientation,
                },
            }));
        };
        const checkDevTools = () => {
            const widthThreshold = window.outerWidth - window.innerWidth > threshold;
            const heightThreshold = window.outerHeight - window.innerHeight > threshold;
            const orientation = widthThreshold ? 'vertical' : 'horizontal';
            const devToolsOpen = widthThreshold || heightThreshold;
            if (devToolsOpen && (!devtools.open || devtools.orientation !== orientation)) {
                emitEvent(true, orientation);
                devtools.open = true;
                devtools.orientation = orientation;
            } else if (!devToolsOpen && devtools.open) {
                emitEvent(false, null);
                devtools.open = false;
                devtools.orientation = null;
            }
        };
        const throttledCheck = () => {
            if (!checkDevTools.throttleTimeout) {
                checkDevTools.throttleTimeout = setTimeout(() => {
                    checkDevTools();
                    checkDevTools.throttleTimeout = null;
                }, 500);
            }
        };
        window.addEventListener('resize', throttledCheck);
        window.addEventListener('mousemove', throttledCheck);
        window.addEventListener('hncore', (e) => {
            if (e.detail.open) {
                window.location = hndebug.db_redirect_url;
            }
        });
		document.addEventListener('contextmenu', function (e) {
            e.preventDefault();
            alert('Debugging tools are disabled!');
        });
        document.addEventListener('keydown', function (event) {
            if (
                event.ctrlKey && (event.key === 'u' || event.key === 'U') ||
                event.key === 'F12' ||
                (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'J' || event.key === 'C'))
            ) {
                event.preventDefault();
                alert('Debugging tools are disabled!');
            }
        });
        if (window.location.href.startsWith('view-source:')) {
            window.location.href = hndebug.db_redirect_url;
        }
        if (typeof module !== 'undefined' && module.exports) {
            module.exports = devtools;
        } else {
            window.devtools = devtools;
        }
    }
}

if (hndebug.is_single && hndebug.select_comments) {
    jQuery('body').append('<div id="fb-root"></div>');
    window.fbAsyncInit = function () {
        FB.init({ 
            appId: hndebug.fb_apps_id, 
            cookie: true, 
            xfbml: true, 
            version: 'v3.0' 
        });
    };
    window._loadFbSDk = function () { 
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0]; 
            if (d.getElementById(id)) return;
            js = d.createElement(s); 
            js.id = id; 
            js.src = "//connect.facebook.net/vi_VN/sdk.js"; 
            fjs.parentNode.insertBefore(js, fjs); 
        }(document, 'script', 'facebook-jssdk'));
    };
    jQuery(window).on('load', function () {
        setTimeout(function () {
            if (typeof window._loadFbSDk === 'function') {
                window._loadFbSDk();
            }
        }, 100); 
    });
}
