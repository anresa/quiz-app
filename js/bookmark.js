export default function toggleBookmark() {
  const bookmarks = document.querySelectorAll("[data-js=bookmarks]");
  console.log(bookmarks);
  bookmarks.forEach((bookmark) => {
    bookmark.addEventListener("click", () => {
      bookmark.classList.toggle("bookmark--marked");
      console.log("click");
    });
  });
}
