//Получаем всех пользлвателей с базы данных

export const getAllUsers = async function () {
  const response = await fetch("http://localhost:3002/users");
  return await response.json();
}