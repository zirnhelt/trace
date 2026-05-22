import indexHtml from "./index.html";
import scorecardHtml from "./scorecard.html";
import policyBriefHtml from "./policy-brief.html";
import compactHtml from "./compact.html";

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
    } else {
      html = indexHtml;
    }

    return new Response(html, {
      headers: { "Content-Type": "text/html;charset=UTF-8" },
    });
  },
};
