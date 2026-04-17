const fs = require('fs');
const path = require('path');
const os = require('os');
const srcDir = path.join(os.homedir(), '.gemini', 'antigravity', 'brain', '125cfff6-a0cf-4f47-b712-253d002466e0');
const destDir = path.join(__dirname, 'public', 'images', 'hero');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

fs.readdirSync(srcDir).forEach(file => {
  if (file.endsWith('.png')) {
    fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
    console.log('Copied ' + file);
  }
});
