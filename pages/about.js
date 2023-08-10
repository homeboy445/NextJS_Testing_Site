// pages/about.js

import Head from "next/head";
import styles from "../styles/About.module.css";
import Script from "next/script";

const AboutPage = () => {
  return (
    <div>
      <Head>
        <title>About Page</title>
      </Head>
      <Script id="vwoCode" strategy="beforeInteractive">
        {`window._vwo_code ||
            (function () {
              var account_id = 644092,
                version = 2.0,
                settings_tolerance = 2000,
                library_tolerance = 2500,
                hide_element = "body",
                hide_element_style =
                  "opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important",
                /* DO NOT EDIT BELOW THIS LINE */
                f = false,
                d = document,
                v = d.querySelector("#vwoCode"),
                cK = "_vwo_" + account_id + "_settings",
                cc = {};
              try {
                var c = JSON.parse(
                  localStorage.getItem("_vwo_" + account_id + "_config")
                );
                cc = c && typeof c === "object" ? c : {};
              } catch (e) {}
              var stT =
                cc.stT === "session" ? window.sessionStorage : window.localStorage;
              code = {
                use_existing_jquery: function () {
                  return typeof use_existing_jquery !== "undefined"
                    ? use_existing_jquery
                    : undefined;
                },
                library_tolerance: function () {
                  return typeof library_tolerance !== "undefined"
                    ? library_tolerance
                    : undefined;
                },
                settings_tolerance: function () {
                  return cc.sT || settings_tolerance;
                },
                hide_element_style: function () {
                  return "{" + (cc.hES || hide_element_style) + "}";
                },
                hide_element: function () {
                  return typeof cc.hE === "string" ? cc.hE : hide_element;
                },
                getVersion: function () {
                  return version;
                },
                finish: function () {
                  if (!f) {
                    f = true;
                    var e = d.getElementById("_vis_opt_path_hides");
                    if (e) e.parentNode.removeChild(e);
                  }
                },
                finished: function () {
                  return f;
                },
                load: function (e) {
                  var t = this.getSettings(),
                    n = d.createElement("script"),
                    i = this;
                  if (t) {
                    n.textContent = t;
                    d.getElementsByTagName("head")[0].appendChild(n);
                    if (!window.VWO || VWO.caE) {
                      stT.removeItem(cK);
                      i.load(e);
                    }
                  } else {
                    n.fetchPriority = "high";
                    n.src = e;
                    n.type = "text/javascript";
                    n.onerror = function () {
                      window._vwo_code.finish();
                    };
                    d.getElementsByTagName("head")[0].appendChild(n);
                  }
                },
                getSettings: function () {
                  try {
                    var e = stT.getItem(cK);
                    if (!e) {
                      return;
                    }
                    e = JSON.parse(e);
                    if (Date.now() > e.e) {
                      stT.removeItem(cK);
                      return;
                    }
                    return e.s;
                  } catch (e) {
                    return;
                  }
                },
                init: function () {
                  if (d.URL.indexOf("__vwo_disable__") > -1) return;
                  var e = this.settings_tolerance();
                  window._vwo_settings_timer = setTimeout(function () {
                    window._vwo_code.finish();
                    stT.removeItem(cK);
                  }, e);
                  var t = d.createElement("style"),
                    n = this.hide_element(),
                    i = n ? n + this.hide_element_style() : "",
                    o = d.getElementsByTagName("head")[0];
                  t.setAttribute("id", "_vis_opt_path_hides");
                  v && t.setAttribute("nonce", v.nonce);
                  t.setAttribute("type", "text/css");
                  if (t.styleSheet) t.styleSheet.cssText = i;
                  else t.appendChild(d.createTextNode(i));
                  o.appendChild(t);
                  this.load(
                    "https://dev.visualwebsiteoptimizer.com/j.php?a=" +
                      account_id +
                      "&u=" +
                      encodeURIComponent(d.URL) +
                      "&vn=" +
                      version
                  );
                },
              };
              window._vwo_code = code;
              code.init();
            })();`}
      </Script>
      <Script strategy="beforeInteractive">
        {`(function () {
          var w = window;
          requestAnimationFrame(function hideIfRequired() {
            if (w._vwo_code) {
              var hidingStyle = hideIfRequired.hidingStyle = document.getElementById('_vis_opt_path_hides') || hideIfRequired.hidingStyle;
              if (!w._vwo_code.finished() && !_vwo_code.libExecuted && (!w.VWO || !VWO.dNR)) {
                if (!document.getElementById('_vis_opt_path_hides')) {
                  //Re-Adding the removed style tag '_vis_opt_path_hides'
                  document.getElementsByTagName('head')[0].appendChild(hidingStyle);
                }
                // Keep At it even if the style has been added to ensure it isn't removed again.
                // But stop when finished returns true(i.e. VWO is done with applying changes - and control has been taken over by the Library if any further hiding is required)
                requestAnimationFrame(hideIfRequired);
              }
            }
          });
        })();`}
      </Script>
      <div className={styles.container}>
        <h1>About Us</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          condimentum, risus eu varius mattis, tortor diam sollicitudin massa,
          vel pharetra sem enim vel velit. Nulla facilisi. Fusce placerat, massa
          vel gravida aliquam, dolor ante faucibus turpis, nec rutrum magna nunc
          id felis.
        </p>
        <ul className={styles.list}>
          <li>History</li>
          <li>Mission</li>
          <li>Team</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
