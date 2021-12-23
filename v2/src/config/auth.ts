export default {
  secret: process.env.JWT_SECRET || 'development',
  expiresIn: process.env.JWT_EXPIRES || '1d',
};
