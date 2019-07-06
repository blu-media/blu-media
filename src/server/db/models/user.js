module.exports = (sequelize, DataType) => {
  const User = sequelize.define('user', {
    email: {
      type: DataType.STRING,
      allowNull: false
    },
    firstName: {
      type: DataType.STRING,
      allowNull: false
    },
    gradYear: DataType.STRING,
    lastName: {
      type: DataType.STRING,
      allowNull: false
    },
    password: {
      type: DataType.STRING,
      allowNull: false
    },
    profilePicture: {
      type: DataType.STRING,
      defaultValue: 'profile.jpg'
    },
    id: {
      type: DataType.STRING,
      primaryKey: true
    }
  });

  User.associate = (models) => {
    User.hasMany(models.organization);
  }

  return User;
}
