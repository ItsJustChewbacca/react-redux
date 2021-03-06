const initState = {
  posts: [
   {id: "1", title: "Luke", body: "Programmer"},
   {id: "2", title: "Sarah", body: "Student"},
   {id: "3", title: "Sarbear", body: "MehMehMehMehMeh"}
  ]
}
// Settting up reducer
const rootReducer = (state = initState, action) => {
  console.log(action);
  if(action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id
    })
    return {
      ...state,
      posts: newPosts
    }
  }
  return state;
}

export default rootReducer