import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    window._vwo_code =
      window._vwo_code ||
      (function () {
        var account_id = 628404,
          version = 1.4,
          settings_tolerance = 2000,
          library_tolerance = 2500,
          use_existing_jquery = false,
          is_spa = 1,
          hide_element = "body",
          /* DO NOT EDIT BELOW THIS LINE */
          f = false,
          d = document,
          vwoCodeEl = document.querySelector("#vwoCode"),
          code = {
            use_existing_jquery: function () {
              return use_existing_jquery;
            },
            library_tolerance: function () {
              return library_tolerance;
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
              var t = d.createElement("script");
              t.fetchPriority = "high";
              t.src = e;
              t.type = "text/javascript";
              t.innerText;
              t.onerror = function () {
                _vwo_code.finish();
              };
              d.getElementsByTagName("head")[0].appendChild(t);
            },
            getVersion: function () {
              return version;
            },
            getMatchedCookies: function (e) {
              var t = [];
              if (document.cookie) {
                t = document.cookie.match(e) || [];
              }
              return t;
            },
            getCombinationCookie: function () {
              var e = code.getMatchedCookies(
                /(?:^|;)\s?(_vis_opt_exp_\d+_combi=[^;$]*)/gi
              );
              e = e.map(function (e) {
                try {
                  var t = decodeURIComponent(e);
                  if (!/_vis_opt_exp_\d+_combi=(?:\d+,?)+\s*$/.test(t)) {
                    return "";
                  }
                  return t;
                } catch (e) {
                  return "";
                }
              });
              var i = [];
              e.forEach(function (e) {
                var t = e.match(/([\d,]+)/g);
                t && i.push(t.join("-"));
              });
              return i.join("|");
            },
            init: function () {
              window.settings_timer = setTimeout(function () {
                _vwo_code.finish();
              }, settings_tolerance);
              var e = d.createElement("style"),
                t = hide_element
                  ? hide_element +
                    "{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}"
                  : "",
                i = d.getElementsByTagName("head")[0];
              e.setAttribute("id", "_vis_opt_path_hides");
              vwoCodeEl && e.setAttribute("nonce", vwoCodeEl.nonce);
              e.setAttribute("type", "text/css");
              if (e.styleSheet) e.styleSheet.cssText = t;
              else e.appendChild(d.createTextNode(t));
              i.appendChild(e);
              var n = this.getCombinationCookie();
              this.load(
                "https://dev.visualwebsiteoptimizer.com/j.php?a=" +
                  account_id +
                  "&u=" +
                  encodeURIComponent(d.URL) +
                  "&f=" +
                  +is_spa +
                  "&vn=" +
                  version +
                  (n ? "&c=" + n : "")
              );
              return settings_timer;
            },
          };
        window._vwo_settings_timer = code.init();
        return code;
      })();
      (function () {
        requestAnimationFrame(function hideIfRequired() {
            if (window._vwo_code) {
                var hidingStyle = hideIfRequired.hidingStyle = document.getElementById('_vis_opt_path_hides') || hideIfRequired.hidingStyle;
                if (!window._vwo_code.finished() && !_vwo_code.libExecuted) {
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
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.js</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
