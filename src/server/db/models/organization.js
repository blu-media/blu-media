module.exports = (sequelize, type) => {
  const Organization = sequelize.define('organization', {
    about: {
      type: type.TEXT,
      allowNull: false
    },
    acronym: {
      type: type.STRING,
      allowNull: false
    },
    contactInfo: type.JSONB,
    groups: {
      type: type.ARRAY(type.STRING),
      defaultValue: []
    },
    logo: {
      type: type.STRING,
      defaultValue: 'profile.jpg'
    },
    name: {
      type: type.STRING,
      allowNull: false
    },
    organizationId: {
      type: type.STRING,
      primaryKey: true
    }
  });

  Organization.associate = (models) => {
    Organization.hasMany(models.event);
  }

  return Organization;
}
