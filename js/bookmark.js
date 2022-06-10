// export { toggleBookmark1, toggleBookmark2, toggleBookmark3 };

export default function toggleBookmark(){
    const bookmarks = document.querySelectorAll("[data-js=bookmark]")
    bookmarks.forEach((bookmark) => {
bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("card__bookmark--active")
} )
    ))
}
