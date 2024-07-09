const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

User.hasMany(post, {
    foreignKey: 'user_id',
});

Post.belongsTo(user, {
    foreignKey: 'user_id',
});

Comment.belongsTo(user, {
    foreignKey: 'user_id',
});

Comment.belongsTo(post, {
    foreignKey: 'post_id',
});

User.hasMany(comment, {
    foreignKey: 'user_id',
});

Post.hasMany(comment, {
    foreignKey: 'post_id',
});

module.exports = { user, post, comment };
