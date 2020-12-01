var NativeAppLauncher = (function() {
	var textcoin = window.location.hash.replace("#textcoin?", "").replace(/<.*?>/g, '');
	var IOS_VERSION_RE = /OS\s+(\d)_/;
	var timers = [];
	var userAgent = window.navigator.userAgent;
	var isAndroid = function() {
		return /Android/.test(userAgent);
	};
	var isIOS = function() {
		return /(?:i(?:Phone|P(?:o|a)d))/.test(userAgent);
	};
	var iOSVersion = function() {
		return isIOS() ? parseInt(userAgent.match(IOS_VERSION_RE)[1], 10) : 0;
	};
	var isChrome = function() {
		// Opera (OPR) also identifies itself as Chrome and has to be corrected for.
		// OPR is used on Android but on iOS it is OPiOS where Opera does NOT identify as Chrome. Go figure!
		// Probably because on iOS it is Opera Mini and has all browser have to be based on Safari/WebKit.
		return /Chrome/.test(userAgent) && !/OPR/.test(userAgent);
	};
	var isFirefox = function() {
		return /Firefox/.test(userAgent);
	};

	return {
		// Stop any running timers.
		clearTimers: function() {
			timers.map(clearTimeout);
			timers = [];
		},
		getDeepLink: function() {
			return "obyte:textcoin?" + textcoin;
		},
		openApp: function(deeplink, storeURI) {
			console.log(textcoin);
			var launcher = this;
			var storeLaunched = false;
			var gotStoreURI = "string" == typeof storeURI;
			// If this handler is part of the UI thread, i.e. the `direct` result of a user action then
			// redirecting to the App Store will happen immediately. When not part of the UI thread however,
			// the redirect will bring up an Open in App dialog. Unless there is already a dialog showing,
			// in which case the redirect dialog will wait for the currently shown dialog to be dismissed.

			gotStoreURI && timers.push(window.setTimeout(function() {
				storeLaunched = true;
				window.top.location = storeURI;
			}, 1000));
			isIOS() && timers.push(window.setTimeout(function() {
				storeLaunched && window.location.reload()
			}, 2000));

			window.location = deeplink;
		},
		// Get the deep link URI to the Obyte app in the store appropriate for the OS.
		// Using a deep link guarantees that the app store opens even when using an alternate browser (e.g. Puffin or Firefox)
		getStoreURI: function() {
			return isAndroid() ?
				"market://details?id=org.byteball.wallet&referrer=" + textcoin :
				"https://itunes.apple.com/us/app/byteball/id1147137332?ls=1&mt=8";
		},
		// Try to launch the native app on iOS/Android. Redirect to the app store if launch fails.
		init: function() {
			var launcher = this;
			var events = ["pagehide", "blur"];
			if (isIOS() || (isAndroid() && !isChrome())) {
				events.push("beforeunload");
			}

			function addListenerMulti(element, eventNames, listener) {
				var events = eventNames.split(' ');
				for (var i = 0, iLen = events.length; i < iLen; i++) {
					element.addEventListener(events[i], listener, false);
				}
			}
			addListenerMulti(window, events.join(" "), function(e) {
				launcher.clearTimers();
			});
			document.getElementById('openInApp')
				.onclick = function() {
					// Detach the app launcher from the UI thread so that the Open in App dialog won't be
					// interrupted when the delayed redirect to the App Store fires.
					setTimeout(function() {
						launcher.openApp.call(launcher, launcher.getDeepLink(), launcher.getStoreURI());
					}.bind(this), 0);
					return false;
				};
			document.getElementById('mnemonic').textContent = textcoin;
			if (isAndroid) {
				$('.android').show();
				$('.desktop').hide();
			}
			$('#textcoin').show();
		}
	};
})();
if (window.location.hash.indexOf("#textcoin?") == 0) {
	if (/micromessenger/i.test(navigator.userAgent)) {
		if (/android/i.test(navigator.userAgent))
			$('#wechat_overlay .browser').text('browser');
		$('#wechat_overlay').show();
	} else {
	  const clip = document.querySelector('.clip-container');
	  if (clip) {
      const iframewrap = document.querySelector('.twelve-words-wrap .iframe-wrap');
      iframewrap.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/ELKpFTOJtmU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
    NativeAppLauncher.init();
  }
}
