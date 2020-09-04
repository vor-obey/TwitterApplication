//Получаем текущего пользователя

export const getCurrentUser = async function () {
  const userId = localStorage.getItem("user-id");
  const response = await fetch(`http://localhost:3002/users?id=${userId}`);
  return await response.json();
}