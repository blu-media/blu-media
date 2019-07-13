module.exports = (sequelize, type) => {
  const Event = sequelize.define('event', {
    attire: type.STRING,
    blurb: {
      type: type.TEXT,
      allowNull: false
    },
    date: {
      type: type.DATE,
      allowNull: false
    },
    endTime: {
      type: type.STRING,
      allowNull: false
    },
    id: {
      type: type.STRING,
      primaryKey: true
    },
    images: {
      type: type.ARRAY(type.STRING),
      defaultValue: []
    },
    flyer: {
      type: type.STRING,
      defaultValue: 'profile.jpg'
    },
    location: {
      type: type.STRING,
      allowNull: false
    },
    name: {
      type: type.STRING,
      allowNull: false
    },
    startTime: {
      type: type.STRING,
      allowNull: false
    },
    type: type.STRING
  })

  return Event;
}
