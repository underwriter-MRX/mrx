import sharp from 'sharp';
import {mkdirSync,writeFileSync,readFileSync} from 'node:fs';
import {dirname} from 'node:path';
import {createHash} from 'node:crypto';
const rows=[
{slug:'texas-railroad-commission-how-to-use-public-records-to-understand-your-mineral-rights', stem:'texas-railroad-commission-public-records-for-mineral-rights', phrase:'Texas Railroad Commission: Public Records for Mineral Rights', lines:['Texas Railroad Commission:','Public Records for Mineral Rights'], alt:'Record-checking diagram: “Texas Railroad Commission: Public Records for Mineral Rights”.', cards:[['RRC records','Lease production','Operator reports','Dates and revisions'],['Royalty statement','Payor property ID','Sales month','Payment decimal'],['County instruments','Recorded deeds','Estate documents','Chain research']], footer:['Connect identifiers and periods before comparing records.','Production data alone does not prove ownership or underpayment.']},
{slug:'title-curative-for-mineral-rights-what-it-is-and-why-it-matters-before-you-sell',stem:'title-curative-for-mineral-rights-what-it-is-and-why-it-matters-before-you-sell',phrase:'title curative for mineral rights what it is and why it matters before you sell',lines:['title curative for mineral rights','what it is and why it matters before you sell'],alt:'Record-checking diagram: “title curative for mineral rights what it is and why it matters before you sell”.',cards:[['Gather records','Deeds and probate','Lease documents','Source and date'],['Mark the gaps','Missing instruments','Unclear names','Unresolved interests'],['Qualified review','Research the chain','Ask specific questions','Keep unknowns visible']],footer:['A collected document is a research input.','It does not, by itself, establish ownership.']}
];
const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;');
for(const [i,r] of rows.entries()){
 const p=`/assets/articles/inline/${r.slug}/2026-10-03/${r.stem}.webp`;
 let body=`<rect width="1200" height="675" fill="${i?'#f3ede1':'#eef5f6'}"/><rect width="1200" height="190" fill="#0b2c3c"/>`;
 r.lines.forEach((s,j)=>body+=`<text x="55" y="${76+j*58}" font-size="${i?39:44}" font-weight="700" fill="white">${esc(s)}</text>`);
 r.cards.forEach((card,j)=>{
 const x=55+j*370,y=i?230+j*18:245;
 body+=`<rect x="${x}" y="${y}" width="350" height="235" rx="16" fill="white" stroke="#bdcdd0" stroke-width="2"/><rect x="${x}" y="${y}" width="350" height="62" rx="16" fill="${i?'#866733':'#236872'}"/><text x="${x+22}" y="${y+42}" font-size="30" fill="white" font-weight="700">${esc(card[0])}</text>`;
 card.slice(1).forEach((s,k)=>body+=`<text x="${x+22}" y="${y+109+k*46}" font-size="27" fill="#153743">${esc(s)}</text>`);
 });
 r.footer.forEach((s,j)=>body+=`<text x="55" y="${580+j*43}" font-size="29" fill="#153743" font-weight="${j?400:700}">${esc(s)}</text>`);
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675"><g font-family="Arial, Helvetica, sans-serif">${body}</g></svg>`;
 mkdirSync(dirname('public'+p),{recursive:true});
 writeFileSync('public'+p.replace('.webp','.svg'),svg);
 await sharp(Buffer.from(svg)).webp({quality:92}).toFile('public'+p);
 const b=readFileSync('public'+p);const raw=await sharp(b).resize(16,16).greyscale().raw().toBuffer();const avg=raw.reduce((a,v)=>a+v,0)/raw.length;
 Object.assign(r,{path:p,sha256:createHash('sha256').update(b).digest('hex'),perceptual_hash:[...raw].map(x=>x>=avg?'1':'0').join('')});
}
const output = process.argv[2] ?? 'artifacts/seven-playbook-diagram-assets.json';
mkdirSync(dirname(output), {recursive:true});
writeFileSync(output,JSON.stringify(rows,null,2)+'\n');
