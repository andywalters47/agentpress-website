import Script from "next/script";

/** Existing agent.press website stream; enhanced measurement handles route changes. */
export function GoogleAnalytics() {
  return (
    <Script id="agentpress-google-analytics" strategy="afterInteractive">
      {`(function () {
        if (!["www.agent.press", "agent.press"].includes(window.location.hostname)) return;
        if (document.getElementById("agentpress-google-tag")) return;

        window.dataLayer = window.dataLayer || [];
        window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
        window.gtag("js", new Date());
        window.gtag("config", "G-PQ3RNFHTLW");

        var tag = document.createElement("script");
        tag.id = "agentpress-google-tag";
        tag.async = true;
        tag.src = "https://www.googletagmanager.com/gtag/js?id=G-PQ3RNFHTLW";
        document.head.appendChild(tag);
      })();`}
    </Script>
  );
}
