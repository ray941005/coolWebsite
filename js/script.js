const originalContent = document.getElementById("content").innerHTML;

function loadPage() {
  const content = document.getElementById("content");
  const hash = window.location.hash;

  // 動態載入不同頁面的 HTML
  if (hash === "#board") {
    fetch('pages/board.html')
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");
        content.innerHTML = doc.body.innerHTML; // 只取 <body> 內的部分

        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "css/Board.css";  // 改成你的 Board.css 路徑
        document.head.appendChild(link); // 把 CSS 加到 head 裡
      });
  } else if (hash === "#events") {
    fetch('pages/events.html')
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");
        content.innerHTML = doc.body.innerHTML; // 只取 <body> 內的部分

        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "css/Events.css";  // 改成你的 Events.css 路徑
        document.head.appendChild(link); // 把 CSS 加到 head 裡
      });
  } else if (hash === "#story") {
    fetch('pages/story.html')
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");
        content.innerHTML = doc.body.innerHTML; // 只取 <body> 內的部分

        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "css/Story.css";  // 改成你的 Story.css 路徑
        document.head.appendChild(link); // 把 CSS 加到 head 裡
      });
  } else {
    content.innerHTML = originalContent;
  }
}

// 監聽 hash 變化，根據網址變更內容
window.addEventListener("hashchange", loadPage);
window.addEventListener("load", loadPage);
