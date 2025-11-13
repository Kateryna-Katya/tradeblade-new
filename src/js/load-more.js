  const reviewsList = document.getElementById("reviewsList");
  const loadMoreButton = document.getElementById("loadMore");

  loadMoreButton.addEventListener("click", () => {

    const currentItems = reviewsList.querySelectorAll(".reviews-item");

    currentItems.forEach(item => {

      const clone = item.cloneNode(true);
      reviewsList.appendChild(clone);
    });
  });