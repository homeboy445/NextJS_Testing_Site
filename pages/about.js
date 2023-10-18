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
        {
          `
          window._vwo_code=window._vwo_code || (function() {
            var account_id=644092,
            version=1.5,
            settings_tolerance=2000,
            library_tolerance=2500,
            use_existing_jquery=false,
            is_spa=1,
            hide_element='body',
            hide_element_style='opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important',
            /* DO NOT EDIT BELOW THIS LINE */
            f=false,w=window,d=document,vwoCodeEl=d.querySelector('#vwoCode'),code={use_existing_jquery:function(){return use_existing_jquery},library_tolerance:function(){return library_tolerance},hide_element_style:function(){return'{'+hide_element_style+'}'},finish:function(){if(!f){f=true;var e=d.getElementById('_vis_opt_path_hides');if(e)e.parentNode.removeChild(e)}},finished:function(){return f},load:function(e){var t=d.createElement('script');t.fetchPriority='high';t.src=e;t.type='text/javascript';t.onerror=function(){w._vwo_code.finish()};d.getElementsByTagName('head')[0].appendChild(t)},getVersion:function(){return version},getMatchedCookies:function(e){var t=[];if(document.cookie){t=document.cookie.match(e)||[]}return t},getCombinationCookie:function(){var e=code.getMatchedCookies(/(?:^|;)\s?(_vis_opt_exp_\d+_combi=[^;$]*)/gi);e=e.map(function(e){try{var t=decodeURIComponent(e);if(!/_vis_opt_exp_\d+_combi=(?:\d+,?)+\s*$/.test(t)){return''}return t}catch(e){return''}});var i=[];e.forEach(function(e){var t=e.match(/([\d,]+)/g);t&&i.push(t.join('-'))});return i.join('|')},init:function(){if(d.URL.indexOf('__vwo_disable__')>-1)return;w.settings_timer=setTimeout(function(){w._vwo_code.finish()},settings_tolerance);var e=d.currentScript,t=d.createElement('style'),i=e&&!e.async?hide_element?hide_element+'{'+hide_element_style+'}':'':code.lA=1,n=d.getElementsByTagName('head')[0];t.setAttribute('id','_vis_opt_path_hides');vwoCodeEl&&t.setAttribute('nonce',vwoCodeEl.nonce);t.setAttribute('type','text/css');if(t.styleSheet)t.styleSheet.cssText=i;else t.appendChild(d.createTextNode(i));n.appendChild(t);var o=this.getCombinationCookie();this.load('https://dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(d.URL)+'&f='+ +is_spa+'&vn='+version+(o?'&c='+o:''));return settings_timer}};w._vwo_settings_timer = code.init();return code;}());(function(){var i=window;function t(){if(i._vwo_code){var e=t.hidingStyle=document.getElementById('_vis_opt_path_hides')||t.hidingStyle;if(!i._vwo_code.finished()&&!_vwo_code.libExecuted&&(!i.VWO||!VWO.dNR)){if(!document.getElementById('_vis_opt_path_hides')){document.getElementsByTagName('head')[0].appendChild(e)}requestAnimationFrame(t)}}}t()})();
          `
        }
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
