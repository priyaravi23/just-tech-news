const { Vote } = require('../models');

const voteData = [
    {
        user_id: 1,
        post_id: 1
    },
    {
        user_id: 3,
        post_id: 1
    },
    {
        user_id: 5,
        post_id: 5
    },
    {
        user_id: 5,
        post_id: 4
    },
    {
        user_id: 4,
        post_id: 4
    },
    {
        user_id: 4,
        post_id: 5
    },
    {
        user_id: 2,
        post_id: 5
    }
];

const seedVotes = () => Vote.bulkCreate(voteData);

module.exports = seedVotes;