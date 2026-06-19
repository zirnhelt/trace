import indexHtml from "./index.html";
import scorecardHtml from "./scorecard.html";
import policyBriefHtml from "./policy-brief.html";
import compactHtml from "./compact.html";
import metadataHtml from "./metadata/index.html";
import metadataJsonLdHtml from "./metadata/json-ld.html";
import metadataXmlHtml from "./metadata/xml.html";
import metadataC2paHtml from "./metadata/c2pa.html";
import frIndexHtml from "./fr/index.html";
import frScorecardHtml from "./fr/scorecard.html";
import frPolicyBriefHtml from "./fr/policy-brief.html";
import frCompactHtml from "./fr/compact.html";
import frMetadataHtml from "./fr/metadata/index.html";
import frMetadataJsonLdHtml from "./fr/metadata/json-ld.html";
import frMetadataXmlHtml from "./fr/metadata/xml.html";
import frMetadataC2paHtml from "./fr/metadata/c2pa.html";

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
    } else if (path === '/fr') {
      html = frIndexHtml;
    } else if (path === '/fr/scorecard') {
      html = frScorecardHtml;
    } else if (path === '/fr/policy-brief') {
      html = frPolicyBriefHtml;
    } else if (path === '/fr/compact') {
      html = frCompactHtml;
    } else if (path === '/fr/metadata') {
      html = frMetadataHtml;
    } else if (path === '/fr/metadata/json-ld') {
      html = frMetadataJsonLdHtml;
    } else if (path === '/fr/metadata/xml') {
      html = frMetadataXmlHtml;
    } else if (path === '/fr/metadata/c2pa') {
      html = frMetadataC2paHtml;
    } else {
      html = indexHtml;
    }

    return new Response(html, {
      headers: { "Content-Type": "text/html;charset=UTF-8" },
    });
  },
};
