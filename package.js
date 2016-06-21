Package.describe({
    name: 'romejiang:oauth-getway',
    version: '0.0.1',
    summary: 'make oauth support getway params',
    git: 'https://github.com/romejiag/meteor-oauth-getway',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.1');
    api.use('ecmascript');
    api.use('oauth');
    api.use('url');
    
    api.addFiles('client.js', 'client');
});