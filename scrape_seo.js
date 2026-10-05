import https from 'https';
import fs from 'fs';

const urls = [
    'https://venturechessacademy.com/',
    'https://venturechessacademy.com/about/',
    'https://venturechessacademy.com/chess-student-achievements/',
    'https://venturechessacademy.com/chess-academy-karnataka-india/',
    'https://venturechessacademy.com/blog/',
    'https://venturechessacademy.com/contact-us/',
    'https://venturechessacademy.com/vca-free-mini-games/',
    'https://venturechessacademy.com/privacy-policy/',
    'https://venturechessacademy.com/terms-and-conditions/',
    'https://venturechessacademy.com/cancellations-refund/',
    'https://venturechessacademy.com/appointment/'
];

const results = {};

function fetchHtml(url) {
    return new Promise((resolve, reject) => {
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

async function run() {
    for (const url of urls) {
        try {
            console.log(`Fetching ${url}`);
            const html = await fetchHtml(url);
            
            // simple regex extraction
            const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
            const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i) || 
                              html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']description["'][^>]*>/i);
            
            const title = titleMatch ? titleMatch[1].trim() : '';
            const description = descMatch ? descMatch[1].trim() : '';
            
            let slug = url.replace('https://venturechessacademy.com/', '').replace(/\/$/, '');
            if (!slug) slug = 'home';
            
            results[slug] = { title, description };
            console.log(`- Title: ${title}`);
            console.log(`- Desc:  ${description}`);
            
        } catch (e) {
            console.error(`Error fetching ${url}`, e);
        }
    }
    
    fs.writeFileSync('scratch_seo.json', JSON.stringify(results, null, 2));
    console.log('Saved to scratch_seo.json');
}

run();
