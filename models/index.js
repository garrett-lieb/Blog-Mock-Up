const User = require('./User');
const Blog = require('./Blog');


Blog.belongsTo(User, {
    foreignKey: 'userID',
    onDelete: 'CASCADE'
});

// add associations here for comments

module.exports = { User, Blog };