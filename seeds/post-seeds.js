const { Post } = require('../models');

const postData = [
    {
        title: "Taskmaster goes public!",
        post_url: "https://taskmaster/press",
        user_id: 1
    },
    {
        title: "Runbuddy reaches 1 million subscribers!",
        post_url: "https://runbuddy.com/press",
        user_id: 2
    },
    {
        title: "Company employee database management tool now available!",
        post_url: "https://employeeTracker/press",
        user_id: 3
    },
    {
        title: "Team profile generator app has been released!",
        post_url: "https://profilegenerator/press",
        user_id: 5
    },
    {
        title: "Infinity rentals goes public!",
        post_url: "https://infinityRentals/press",
        user_id: 5
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;