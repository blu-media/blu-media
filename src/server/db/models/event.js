module.exports = (sequelize, type) => {
  const Event = sequelize.define('event', {
    attendees: {
      type: type.ARRAY(type.STRING),
      defaultValue: []
    },
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
      type: type.DATE,
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
    rsvps: {
      type: type.ARRAY(type.JSONB),
      defaultValue: []
    },
    startTime: {
      type: type.DATE,
      allowNull: false
    },
    type: type.STRING
  })

  return Event;
}
