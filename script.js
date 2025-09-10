 const form = document.getElementById("commentForm");
  const commentList = document.getElementById("commentList");

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    if (name && message) {
      const li = document.createElement("li");
      li.textContent = `${name}: ${message}`;
      commentList.appendChild(li);

      form.reset();
    }
  });
