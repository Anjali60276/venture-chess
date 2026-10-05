const urls = [];
for (let y = 2020; y <= 2026; y++) {
  for (let m = 1; m <= 12; m++) {
    const month = String(m).padStart(2, '0');
    urls.push(`https://venturechessacademy.com/wp-content/uploads/${y}/${month}/Chess-Academy-2.webp`);
    urls.push(`https://venturechessacademy.com/wp-content/uploads/${y}/${month}/unnamed-1.png`);
  }
}

async function check() {
  const promises = urls.map(u => fetch(u, { method: 'HEAD' }).then(r => ({ u, status: r.status })).catch(e => ({ u, status: 500 })));
  const results = await Promise.all(promises);
  const found = results.filter(r => r.status === 200);
  console.log('Found:', found);
}
check();
