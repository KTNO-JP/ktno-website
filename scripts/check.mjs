import fs from 'node:fs';
const html=fs.readFileSync('dist/index.html','utf8');const errors=[];
for(const href of [...html.matchAll(/(?:href|src)="([^"#]+)"/g)].map(m=>m[1])) if(href.startsWith('/') && !fs.existsSync('dist'+href))errors.push('Missing local asset '+href);
for(const id of [...html.matchAll(/href="#([^"]+)"/g)].map(m=>m[1]))if(!html.includes(`id="${id}"`))errors.push('Missing anchor '+id);
if(!html.includes('lang="ja"')||!html.includes('name="viewport"')||!html.includes('name="description"'))errors.push('Missing metadata');
if(!fs.existsSync('dist/robots.txt')||!fs.existsSync('dist/sitemap.xml'))errors.push('Missing search files');
if(errors.length){console.error(errors.join('\n'));process.exit(1)}console.log('Assets, anchor links, metadata and search files OK');
