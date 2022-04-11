module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '476611cd01b4c78d3e99c06dcd0e50be'),
  },
});
