const http = new easyHTTP;

// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {

//   if(err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
  
// });

//Get single post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {

//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
  
// });

// POST request
// Create data
const data = {
  title: 'Custom post',
  body: 'This is a custom post'
};

http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
  if(err) {
      console.log(err);
    } else {
      console.log(post);
    }
});
