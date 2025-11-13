(() => {
  const loadComments = async () => {
    if (typeof Gitalk === "undefined") {
      setTimeout(loadComments, 100);
    } else {
      const container = document.getElementById('gitalk-container');
      if (!container) {
        return;
      }
      const path = container.getAttribute("data-path");
      const gitalk = new Gitalk(Object.assign({
          id: path, // 直接使用路径作为 id
          // id: container.getAttribute("data-path-hash"), // 使用 hash 作为 ID
          path: path,
      }, {
        clientID: '57082f29a237525e1743',
        clientSecret: '13276cc4af619b42758e3a92c2719d309b241b79',
        repo: "probieLuo.github.io",
        owner: "probieLuo",
        admin: ["probieLuo"],
        distractionFreeMode: false,
      }));

      gitalk.render('gitalk-container');
    }
  };

  window.loadComments = loadComments;
  window.addEventListener('pjax:success', () => {
    window.loadComments = loadComments;
  });
})();
