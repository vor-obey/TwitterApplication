//Получаем все посты с базы данных

export const getAllPosts = async function () {
  const response = await fetch("http://localhost:3002/posts?_sort=id&_order=desc")
  return await response.json()
}