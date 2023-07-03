document.addEventListener("DOMContentLoaded", function() {
    // 使用 Fetch API 进行异步请求
    fetch('https://v1.hitokoto.cn/?k=i&k=k=f&encode=text')
      .then(response => response.text()) // 将响应转换为纯文本
      .then(data => {
        const hitokotoElement = document.getElementById('hitokoto');
        hitokotoElement.innerHTML = ' ' + data; // 在文字前添加图标
      })
      .catch(error => {
        console.log('Error:', error);
      });
  });