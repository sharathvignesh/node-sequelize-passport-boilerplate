module.exports = (sequelize, DataTypes) => {
  const token = sequelize.define('token', {
    token_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return token;
};
