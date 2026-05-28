import indexHtml from "./index.html";
import scorecardHtml from "./scorecard.html";
import policyBriefHtml from "./policy-brief.html";
import compactHtml from "./compact.html";
import metadataHtml from "./metadata/index.html";
import metadataJsonLdHtml from "./metadata/json-ld.html";
import metadataXmlHtml from "./metadata/xml.html";
import metadataC2paHtml from "./metadata/c2pa.html";

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/$/, '') || '/';

    let html;
    if (path === '/scorecard') {
      html = scorecardHtml;
    } else if (path === '/policy-brief') {
      html = policyBriefHtml;
    } else if (path === '/compact') {
      html = compactHtml;
    } else if (path === '/metadata') {
      html = metadataHtml;
    } else if (path === '/metadata/json-ld') {
      html = metadataJsonLdHtml;
    } else if (path === '/metadata/xml') {
      html = metadataXmlHtml;
    } else if (path === '/metadata/c2pa') {
      html = metadataC2paHtml;
    } else {
      html = indexHtml;
    }

    return new Response(html, {
      headers: { "Content-Type": "text/html;charset=UTF-8" },
    });
  },
};
