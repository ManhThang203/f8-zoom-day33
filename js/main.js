import "../components/app-modal.js";
const modal = document.querySelector("app-modal");
const btnOpen = document.querySelector("#btn-open");
btnOpen.addEventListener("click", () => {
    modal.open();
})

modal.addEventListener("open", () => {
   console.log("bạn đã mở Modal")
})

modal.addEventListener("close", () => {
   console.log("bạn đã đóng Modal")
})

