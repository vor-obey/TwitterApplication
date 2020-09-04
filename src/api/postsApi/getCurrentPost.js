//Отправляем созданный пост в базу данных

export const getCurrentPost = async function (creatorId, message, userImg, name, email) {
  const response = await fetch("http://localhost:3002/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify({
        creatorId,
        message,
        createdAt: new Date(),
        userImg,
        name,
        email
      })
    }
  );
  return response.json()
}