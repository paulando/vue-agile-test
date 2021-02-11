export const hasLocalStorage = () => {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}

export const cleanUrl = (url) => {
    return url.replace(process.env.GRIDSOME_WP_API_BASE_URL, "");
}

export const phoneTrim = (phone) => {
    return phone.replace(" ", "");
}

export const pageMeta = ($context) => {

    const getTitle = ($context) => $context.acf.seoTitle || $context.title;
    let slug = $context.slug === 'home' ? '' : $context.slug;
    let pageUrl = process.env.GRIDSOME_SITE_URL+'/'+slug;

    return {
        title: getTitle($context),
        titleTemplate: '%s',
        meta: [
            { name: 'description', content: $context.acf.seoDescription },
            { property: 'robots', content: $context.acf.seoRobots || 'index, follow' },
            { property: 'og:locale', content: 'en' },
            { property: 'og:type', content: 'article' },
            { property: 'og:title', content: getTitle($context) },
            { property: 'og:description', content: $context.acf.seoDescription },
            { property: 'og:url', content: pageUrl },
            { property: 'og:image', content: $context.acf.seoOgImage },
            { property: 'og:site_name', content: process.env.GRIDSOME_SITE_NAME },
            { name: 'twitter:card', content: 'summary_large_image' },
        ],
        script: [{
            type: 'application/ld+json',
                json: {
                "@context": "https://schema.org",
                "@graph": [{
                    "@type": "WebSite",
                    "@id": process.env.GRIDSOME_SITE_URL+"/#website",
                    "url": process.env.GRIDSOME_SITE_URL+"/",
                    "name": process.env.GRIDSOME_SITE_NAME,
                    "description": $context.acf.seoDescription,
                    "inLanguage": "en"
                    },
                    {
                    "@type": "WebPage",
                    "@id": pageUrl+"#webpage",
                    "url": pageUrl,
                    "name": getTitle($context),
                    "isPartOf": {
                        "@id": process.env.GRIDSOME_SITE_URL+"/#website"
                    },
                    "inLanguage": 'en',
                    "potentialAction": [{
                        "@type": "ReadAction",
                        "target": [
                            pageUrl
                        ]
                    }]
                }]
            }
        }]
    };
}

export function sendGA(category, action, label) {
    console.log("Sending GA goals");
    // gtag('event', action, {
    //     'event_category': category,
    //     'event_label': label
    // });
}