const fs = require('fs');
const path = require('path');

const username = String(process.env.SERENE_ADMIN_USERNAME || '').trim();
const password = String(process.env.SERENE_ADMIN_PASSWORD || '');
const salt = String(process.env.SERENE_ADMIN_SALT || 'serene-admin');

if (!/^[a-zA-Z0-9_]{3,24}$/.test(username)) {
    console.error('SERENE_ADMIN_USERNAME must be 3-24 letters, numbers, or underscores.');
    process.exit(1);
}
if (password.length < 8) {
    console.error('SERENE_ADMIN_PASSWORD must be at least 8 characters.');
    process.exit(1);
}

const config = {
    ADMIN_USERNAME: username.toLowerCase(),
    ADMIN_PASSWORD: password,
    ADMIN_SALT: salt
};

const output = `window.SERENE_ENV = ${JSON.stringify(config, null, 4)};\n`;
const target = path.join(__dirname, 'env-config.js');
fs.writeFileSync(target, output, 'utf8');
console.log('Wrote env-config.js from environment variables. Keep this file private.');
