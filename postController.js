const posts = [
  {
    id: 1,
    title: "post one",
  },
  {
    id: 2,
    title: "post two",
  },
  {
    id: 3,
    title: "post three",
  },
  {
    id: 4,
    title: "post four",
  },
  {
    id: 5,
    title: "post five",
  },
];

//Arrow function that'll return all the posts array / object
// export const getAllPosts = () => posts; //ES Syntax to export functions
const getAllPosts = () => posts; //ES Syntax to export functions


//We can do one default one normal
export const getPostsLength = ()=> posts.length;





//Also we can do like
// export { getAllPosts };
// Also we can export as default
export default getAllPosts;




