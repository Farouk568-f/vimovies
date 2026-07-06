#!/usr/bin/env python3
"""Static SEO page generator for ViMovies. Outputs pages to public/."""
import json, os, html, datetime

SITE = "https://www.vimovies.online"
LOGO = "https://i.ibb.co/TxwjvNSN/image.png"
OUT = os.path.join(os.path.dirname(__file__), "..", "public")
TODAY = "2026-07-06"

CSS = """
*{margin:0;padding:0;box-sizing:border-box}
body{background:#0a0a0f;color:#d5d9e2;font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;line-height:1.75;font-size:17px}
a{color:#7c5cff;text-decoration:none}a:hover{text-decoration:underline}
header{border-bottom:1px solid #1c1c28;background:#0d0d14}
.nav{max-width:860px;margin:0 auto;padding:14px 20px;display:flex;align-items:center;gap:22px;flex-wrap:wrap}
.nav img{width:34px;height:34px;border-radius:8px}
.nav .brand{font-weight:800;color:#fff;font-size:19px}
.nav a{color:#aab;font-size:15px}
main{max-width:860px;margin:0 auto;padding:34px 20px 60px}
.crumbs{font-size:13px;color:#667;margin-bottom:22px}
h1{color:#fff;font-size:34px;line-height:1.25;margin-bottom:10px}
.meta{color:#778;font-size:14px;margin-bottom:28px}
h2{color:#fff;font-size:25px;margin:38px 0 14px}
h3{color:#e8eaf2;font-size:19px;margin:26px 0 10px}
p{margin:0 0 16px}
ul,ol{margin:0 0 18px 24px}
li{margin-bottom:8px}
table{width:100%;border-collapse:collapse;margin:18px 0 24px;font-size:15px}
th,td{border:1px solid #23233a;padding:10px 12px;text-align:left}
th{background:#15151f;color:#fff}
tr:nth-child(even){background:#10101a}
.tip{background:#131325;border-left:4px solid #7c5cff;padding:14px 18px;border-radius:8px;margin:20px 0}
.cta{display:inline-block;background:linear-gradient(135deg,#7c5cff,#5b3df5);color:#fff;font-weight:700;padding:13px 30px;border-radius:12px;margin:8px 0 20px}
.cta:hover{text-decoration:none;opacity:.9}
.faq h3{margin-top:20px}
.related{background:#0f0f18;border:1px solid #1c1c28;border-radius:14px;padding:20px 24px;margin-top:44px}
.related h2{margin-top:0;font-size:20px}
footer{border-top:1px solid #1c1c28;background:#0d0d14;margin-top:40px}
.foot{max-width:860px;margin:0 auto;padding:28px 20px;font-size:14px;color:#889}
.foot .cols{display:flex;gap:48px;flex-wrap:wrap;margin-bottom:18px}
.foot h4{color:#fff;margin-bottom:8px;font-size:14px}
.foot ul{list-style:none;margin:0}
.foot li{margin-bottom:5px}
img.hero{width:100%;border-radius:14px;margin:6px 0 26px}
@media(max-width:600px){h1{font-size:27px}h2{font-size:21px}}
"""

FOOT_LINKS = [
    ("Guides", [("/blog/how-to-install-vimovies/", "Install ViMovies"), ("/blog/free-movie-app-for-google-tv/", "Google TV Guide"), ("/blog/movie-apps-for-android-tv/", "Android TV Apps")]),
    ("Reviews", [("/blog/vimovies-review/", "ViMovies Review"), ("/blog/vimovies-vs-stremio/", "ViMovies vs Stremio"), ("/blog/best-free-movie-apps-2026/", "Best Free Movie Apps")]),
    ("Company", [("/about/", "About"), ("/contact/", "Contact"), ("/dmca/", "DMCA"), ("/privacy-policy/", "Privacy"), ("/terms/", "Terms")]),
]

def esc(s): return html.escape(s, quote=True)

def faq_schema(faqs):
    return {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
        {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in faqs]}

def page(slug, title, desc, h1, body, faqs=None, is_article=True, crumb=None, related=None):
    url = f"{SITE}/{slug}/" if slug else f"{SITE}/"
    schemas = []
    crumb_items = [{"@type": "ListItem", "position": 1, "name": "Home", "item": SITE + "/"}]
    if is_article:
        crumb_items.append({"@type": "ListItem", "position": 2, "name": "Blog", "item": SITE + "/blog/"})
        crumb_items.append({"@type": "ListItem", "position": 3, "name": h1, "item": url})
        schemas.append({"@context": "https://schema.org", "@type": "Article", "headline": h1,
            "description": desc, "image": LOGO, "datePublished": TODAY, "dateModified": TODAY,
            "author": {"@type": "Organization", "name": "ViMovies Team", "url": SITE + "/about/"},
            "publisher": {"@type": "Organization", "name": "ViMovies", "logo": {"@type": "ImageObject", "url": LOGO}},
            "mainEntityOfPage": url})
    else:
        crumb_items.append({"@type": "ListItem", "position": 2, "name": h1, "item": url})
    schemas.append({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": crumb_items})
    if faqs:
        schemas.append(faq_schema(faqs))
    schema_html = "\n".join(f'<script type="application/ld+json">{json.dumps(s, ensure_ascii=False)}</script>' for s in schemas)

    faq_html = ""
    if faqs:
        faq_html = '<section class="faq"><h2>Frequently Asked Questions</h2>' + "".join(
            f"<h3>{esc(q)}</h3><p>{a}</p>" for q, a in faqs) + "</section>"

    rel_html = ""
    if related:
        rel_html = '<aside class="related"><h2>Related Guides</h2><ul>' + "".join(
            f'<li><a href="{u}">{esc(t)}</a></li>' for u, t in related) + "</ul></aside>"

    crumb_html = f'<nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> › ' + (
        f'<a href="/blog/">Blog</a> › {esc(h1)}' if is_article else esc(h1)) + "</nav>"

    foot_cols = "".join(
        f"<div><h4>{esc(t)}</h4><ul>" + "".join(f'<li><a href="{u}">{esc(n)}</a></li>' for u, n in ls) + "</ul></div>"
        for t, ls in FOOT_LINKS)

    meta_date = f'<p class="meta">By the ViMovies Team · Updated July 6, 2026</p>' if is_article else ""

    doc = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>{esc(title)}</title>
<meta name="description" content="{esc(desc)}" />
<link rel="canonical" href="{url}" />
<meta name="robots" content="index, follow, max-image-preview:large" />
<link rel="icon" type="image/png" href="{LOGO}" />
<meta property="og:type" content="{'article' if is_article else 'website'}" />
<meta property="og:site_name" content="ViMovies" />
<meta property="og:title" content="{esc(title)}" />
<meta property="og:description" content="{esc(desc)}" />
<meta property="og:url" content="{url}" />
<meta property="og:image" content="{LOGO}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="{esc(title)}" />
<meta name="twitter:description" content="{esc(desc)}" />
<meta name="twitter:image" content="{LOGO}" />
<style>{CSS}</style>
{schema_html}
</head>
<body>
<header><nav class="nav">
<a href="/" aria-label="ViMovies home"><img src="{LOGO}" alt="ViMovies app logo" width="34" height="34" /></a>
<a href="/" class="brand">ViMovies</a>
<a href="/blog/">Blog</a>
<a href="/blog/how-to-install-vimovies/">Install Guide</a>
<a href="/blog/vimovies-review/">Review</a>
<a href="/about/">About</a>
</nav></header>
<main>
{crumb_html}
<article>
<h1>{esc(h1)}</h1>
{meta_date}
{body}
{faq_html}
</article>
{rel_html}
</main>
<footer><div class="foot">
<div class="cols">{foot_cols}</div>
<p>© 2026 ViMovies. ViMovies does not host any media files. <a href="/dmca/">DMCA</a> · <a href="/privacy-policy/">Privacy Policy</a> · <a href="/terms/">Terms of Use</a></p>
</div></footer>
</body>
</html>"""
    d = os.path.join(OUT, slug)
    os.makedirs(d, exist_ok=True)
    with open(os.path.join(d, "index.html"), "w") as f:
        f.write(doc)
    return url

if __name__ == "__main__":
    from articles import ARTICLES, LEGAL
    urls = [SITE + "/"]
    # blog index
    cards = "".join(
        f'<h2><a href="/blog/{a["slug"].split("/",1)[1]}/">{esc(a["h1"])}</a></h2><p>{esc(a["desc"])}</p>'
        for a in ARTICLES)
    urls.append(page("blog", "ViMovies Blog – Streaming Guides, Reviews & Android TV Tips",
        "Guides, reviews, and comparisons about ViMovies, Android TV, Google TV, and the best free streaming apps in 2026.",
        "ViMovies Blog: Streaming Guides & Reviews",
        f"<p>Practical, hands-on guides about ViMovies and the wider world of streaming apps for Android TV, Google TV, Fire TV, and mobile. Every article is written and tested by our team.</p>{cards}",
        is_article=False))
    for a in ARTICLES:
        urls.append(page(a["slug"], a["title"], a["desc"], a["h1"], a["body"],
             faqs=a.get("faqs"), related=a.get("related")))
    for a in LEGAL:
        urls.append(page(a["slug"], a["title"], a["desc"], a["h1"], a["body"], is_article=False))
    # sitemap
    sm = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    for u in urls:
        pr = "1.0" if u.rstrip("/") == SITE else ("0.8" if "/blog/" in u and u.rstrip("/") != SITE + "/blog" else "0.6")
        sm += f"  <url><loc>{u}</loc><lastmod>{TODAY}</lastmod><priority>{pr}</priority></url>\n"
    sm += "</urlset>\n"
    with open(os.path.join(OUT, "sitemap.xml"), "w") as f:
        f.write(sm)
    print(f"Generated {len(urls)} URLs")
