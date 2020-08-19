module.exports = {
  env: {
    CONTENTFUL_API_KEY: 'zETjZLWYvOub5aKUGqP9s4pXK1pw8Iw1qAY8ZRC4WRU',
    CONTENTFUL_API_PREVIEW_KEY: 'GYBQ8PwCChH8V9PFiQd-FlJSEcjaPYp826qvhRDYqqQ',
    CONTENTFUL_SPACE_ID: 'b176vvh3ytod',
    CONTENTFUL_ENVIRONMENT: 'master',
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ];
  },
};
