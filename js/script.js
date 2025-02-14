const originalContent = document.getElementById("content").innerHTML;

function loadPage() {
  const content = document.getElementById("content");
  const hash = window.location.hash;

  // 動態載入不同頁面的 HTML
  if (hash === "#board") {
    fetch('board.html')
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");
    
        content.innerHTML = doc.body.innerHTML; // 只取 <body> 內的部分
      });
  } else if (hash === "#events") {
    fetch('events.html')
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");
    
        content.innerHTML = doc.body.innerHTML; // 只取 <body> 內的部分
      });
  } else if (hash === "#story") {
    fetch('story.html')
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");
    
        content.innerHTML = doc.body.innerHTML; // 只取 <body> 內的部分
      });
  } else {
    content.innerHTML = originalContent;
  }
}

// 監聽 hash 變化，根據網址變更內容
window.addEventListener("hashchange", loadPage);
window.addEventListener("load", loadPage);
