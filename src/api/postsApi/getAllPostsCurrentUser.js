//Посты выбранного пользователя

export const getAllPostsCurrentUser = (allPosts) => {
  const currentUserId = localStorage.getItem("user-id");
  return allPosts.filter(post => +post.creatorId === +currentUserId);
}