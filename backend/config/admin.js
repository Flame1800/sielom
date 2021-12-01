module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ab56c54191b620692256de14574113d0'),
  },
});
