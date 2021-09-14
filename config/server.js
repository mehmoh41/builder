module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1212),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '29f5ca9904ce9ede859e77e29be9d416'),
    },
  },
});
