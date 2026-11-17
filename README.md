# serene-waters

A browser-based maritime fishing and fleet tycoon game.

## Admin credentials

Admin credentials are not hardcoded or displayed in the UI. They are injected at runtime from environment variables into a generated `env-config.js` file.

Copy `env-config.example.js` to `env-config.js` manually, or generate it from environment variables:

```powershell
$env:SERENE_ADMIN_USERNAME = "harboradmin"
$env:SERENE_ADMIN_PASSWORD = "a-strong-password"
$env:SERENE_ADMIN_SALT = "optional-random-salt"
node generate-env-config.js
```

`env-config.js` is gitignored. Without it, admin features are disabled and the game still runs as a single-player captain account.
