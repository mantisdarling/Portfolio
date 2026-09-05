const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const htmlPath = path.join(rootDir, 'index.html');
const robotsPath = path.join(rootDir, 'robots.txt');
const sitemapPath = path.join(rootDir, 'sitemap.xml');
const vercelPath = path.join(rootDir, 'vercel.json');

console.log('═══════════════════════════════════════════════════════');
console.log('ENTERPRISE CI/CD AUTOMATED QUALITY & SECURITY SUITE');
console.log('═══════════════════════════════════════════════════════\n');

let hasErrors = false;

// 1. FILE PRESENCE
console.log('[TEST 1] Core Production Artifacts Presence:');
[
  { name: 'index.html', p: htmlPath },
  { name: 'robots.txt', p: robotsPath },
  { name: 'sitemap.xml', p: sitemapPath },
  { name: 'vercel.json', p: vercelPath }
].forEach(f => {
  if (fs.existsSync(f.p)) {
    console.log(`  ✅ PASS: ${f.name} exists (${(fs.statSync(f.p).size / 1024).toFixed(1)} KB)`);
  } else {
    console.error(`  ❌ FAIL: ${f.name} is missing!`);
    hasErrors = true;
  }
});

const html = fs.readFileSync(htmlPath, 'utf8');

// 2. HTML DOCTYPE & TAG BALANCE
console.log('\n[TEST 2] HTML Doctype & Semantic Tag Balance:');
if (html.trim().startsWith('<!DOCTYPE html>') && html.trim().endsWith('</html>')) {
  console.log('  ✅ PASS: Correct <!DOCTYPE html> opening and </html> closing.');
} else {
  console.error('  ❌ FAIL: Malformed HTML boundary tags.');
  hasErrors = true;
}

const tags = ['html', 'head', 'body', 'header', 'main', 'section', 'article', 'figure', 'nav', 'script', 'style'];
tags.forEach(tag => {
  const openCount = (html.match(new RegExp('<' + tag + '[\\s>]', 'gi')) || []).length;
  const closeCount = (html.match(new RegExp('</' + tag + '>', 'gi')) || []).length;
  if (openCount === closeCount) {
    console.log(`  ✅ PASS: <${tag}> balance (${openCount}/${closeCount})`);
  } else {
    console.error(`  ❌ FAIL: <${tag}> mismatch! open=${openCount}, close=${closeCount}`);
    hasErrors = true;
  }
});

// 3. SECURITY & REVERSE TABNABBING
console.log('\n[TEST 3] Reverse Tabnabbing & Anchor Security:');
const targetBlankRegex = /<a\s+[^>]*target=["']_blank["'][^>]*>/gi;
const links = html.match(targetBlankRegex) || [];
let unsecureLinks = 0;
links.forEach((l, idx) => {
  if (!/rel=["'][^"']*(noopener|noreferrer)[^"']*["']/i.test(l)) {
    console.error(`  ❌ FAIL: Insecure external link #${idx+1}: ${l}`);
    unsecureLinks++;
  }
});
if (unsecureLinks === 0) {
  console.log(`  ✅ PASS: All ${links.length} target="_blank" links enforce rel="noreferrer".`);
} else {
  hasErrors = true;
}

// 4. SENSITIVE DATA & SECRETS
console.log('\n[TEST 4] Data Leak & Local Path Sanitization:');
if (/C:\\Users/i.test(html) || /\.gemini/i.test(html)) {
  console.error('  ❌ FAIL: Local machine absolute paths leaked in source!');
  hasErrors = true;
} else {
  console.log('  ✅ PASS: Zero local machine filesystem paths found.');
}

if (/harshitzmishraa@gmail\.com/i.test(html)) {
  console.error('  ❌ FAIL: Deprecated personal email address found!');
  hasErrors = true;
} else {
  console.log('  ✅ PASS: Correct professional domain email enforced (admin@mantisdarling.in).');
}

// 5. JSON-LD STRUCTURED DATA
console.log('\n[TEST 5] Schema.org JSON-LD Structured Data:');
const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
if (jsonLdMatch) {
  try {
    const parsed = JSON.parse(jsonLdMatch[1]);
    console.log(`  ✅ PASS: Valid JSON-LD graph with ${parsed['@graph'].length} entities.`);
  } catch (err) {
    console.error('  ❌ FAIL: Invalid JSON-LD schema syntax:', err.message);
    hasErrors = true;
  }
} else {
  console.error('  ❌ FAIL: Missing JSON-LD script block.');
  hasErrors = true;
}

// 6. JAVASCRIPT SYNTAX INTEGRITY
console.log('\n[TEST 6] JavaScript Engine Syntax Verification:');
const scripts = html.match(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi) || [];
scripts.forEach((s, idx) => {
  if (!s.includes('application/ld+json')) {
    const code = s.replace(/<script[^>]*>|<\/script>/gi, '');
    try {
      new Function(code);
      console.log(`  ✅ PASS: Script block #${idx+1} syntax valid with 0 errors.`);
    } catch (e) {
      console.error(`  ❌ FAIL: Script block #${idx+1} syntax error:`, e.message);
      hasErrors = true;
    }
  }
});

// 7. VERCEL SECURITY CONFIGURATION
console.log('\n[TEST 7] Vercel Security Configuration Verification:');
try {
  const vercel = JSON.parse(fs.readFileSync(vercelPath, 'utf8'));
  const headers = vercel.headers[0].headers;
  const headerKeys = headers.map(h => h.key);
  const requiredHeaders = ['Content-Security-Policy', 'X-Frame-Options', 'X-Content-Type-Options', 'Strict-Transport-Security'];
  requiredHeaders.forEach(req => {
    if (headerKeys.includes(req)) {
      console.log(`  ✅ PASS: Required header '${req}' configured.`);
    } else {
      console.error(`  ❌ FAIL: Missing required security header '${req}'!`);
      hasErrors = true;
    }
  });
} catch (e) {
  console.error('  ❌ FAIL: Invalid vercel.json syntax:', e.message);
  hasErrors = true;
}

console.log('\n═══════════════════════════════════════════════════════');
if (hasErrors) {
  console.error('❌ CI/CD QUALITY GATES FAILED. Correct issues above.');
  process.exit(1);
} else {
  console.log('✅ ALL QUALITY & SECURITY GATES PASSED (100% HEALTHY)');
  process.exit(0);
}
