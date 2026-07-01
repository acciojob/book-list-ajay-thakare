//your JS code here. If required.
const btn = document.getElementById("submit");

    btn.addEventListener("click", () => {
      const title = document.getElementById("title");

      const author = document.getElementById("author");

      const isbn = document.getElementById("isbn");

      if (title.value === "" || author.value === "" || isbn.value === "")
        return;

      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${title.value}</td> <td>${author.value}</td> <td>${isbn.value}</td> <td><button class="delete">delete</button></td>`;

      const bookList = document.getElementById("book-list");
      bookList.append(tr);

      const deleteBtn = tr.querySelector(".delete");

      deleteBtn.addEventListener("click", () => {
        const parentEle = deleteBtn.parentElement.parentElement;

        parentEle.remove();
      });

      title.value = "";
      author.value = "";
      isbn.value = "";
    });