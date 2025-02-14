const originalContent = document.getElementById("content").innerHTML;
let cachedBoardContent = null;
let cachedEventsContent = null;
let cachedStoryContent = null;

function loadPage() {
  const content = document.getElementById("content");
  const hash = window.location.hash;

  // 動態載入不同頁面的 HTML
  if (hash === "#board") {
    if (cachedBoardContent) {
      content.innerHTML = cachedBoardContent; // 直接使用緩存的內容
    } else {
      fetch('pages/Board.html')
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");
        cachedBoardContent = doc.body.innerHTML; // 只取 <body> 內的部分，將內容緩存
        content.innerHTML = cachedBoardContent; 

        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "css/Board.css";  // 改成你的 .css 路徑
        document.head.appendChild(link); // 把 CSS 加到 head 裡
      });
    }
  } else if (hash === "#events") {
    if (cachedEventsContent) {
      content.innerHTML = cachedEventsContent; // 直接使用緩存的內容
    } else {
      fetch('pages/Events.html')
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");
        cachedEventsContent = doc.body.innerHTML; // 只取 <body> 內的部分，將內容緩存
        content.innerHTML = cachedEventsContent; 

        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "css/Events.css";  // 改成你的 .css 路徑
        document.head.appendChild(link); // 把 CSS 加到 head 裡
      });
    }
  } else if (hash === "#story") {
    if (cachedStoryContent) {
      content.innerHTML = cachedStoryContent; // 直接使用緩存的內容
    } else {
      fetch('pages/Story.html')
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");
        cachedStoryContent = doc.body.innerHTML; // 只取 <body> 內的部分，將內容緩存
        content.innerHTML = cachedStoryContent; 

        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "css/Story.css";  // 改成你的 .css 路徑
        document.head.appendChild(link); // 把 CSS 加到 head 裡
      });
    }
  } else {
    content.innerHTML = originalContent;
  }
}

// 監聽 hash 變化，根據網址變更內容
window.addEventListener("hashchange", loadPage);
window.addEventListener("load", loadPage);
