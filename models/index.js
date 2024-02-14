const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

Blog.belongsTo(User, {
    foreignKey: 'userID',
    onDelete: 'CASCADE'
});



User.hasMany(Blog, {
    foreignKey: 'userID',
    onDelete: 'CASCADE'
});

// add associations here for comments

Blog.hasMany(Comment, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Blog, {
    foreignKey: 'blog_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});



module.exports = { User, Blog };