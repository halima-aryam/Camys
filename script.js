
const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');
content = content.replace(/<img\s+class=\x22hero-img\x22\s+src=\x22[^\x22]+\x22/, '<img class=\x22hero-img\x22 src=\x22public/images/hero.jpeg\x22');
content = content.replace('open Instagram and DM', 'open WhatsApp and DM');
content = content.replace('DM to order on Instagram', 'DM to order on WhatsApp');
content = content.replace('object-position:center top;', 'object-position:center center;');
content = content.replace('object-position:center 25%;', 'object-position:center center;');
fs.writeFileSync('index.html', content, 'utf8');
console.log('done');

