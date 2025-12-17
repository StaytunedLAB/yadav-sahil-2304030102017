// CALLBACK INTRODUCTION
function getUser(id, callback) {
setTimeout(() => {
callback({ id, name: "Sahil" });
}, 1000);
}


function getUserPosts(user, callback) {
setTimeout(() => {
callback(["Post 1", "Post 2"]);
}, 1000);
}


getUser(1, (user) => {
console.log("User:", user);
getUserPosts(user, (posts) => {
console.log("Posts:", posts);
});
});