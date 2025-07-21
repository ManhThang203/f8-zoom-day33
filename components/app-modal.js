class appModal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  // Khi element gắn vào DOM
  connectedCallback() {
    this.hidden = false;
  }
  // hàm mở
  open() {
    // xủ lý thêm code từ tpl vào component
    const modal = document.querySelector("#app-modal-tpl");
    const modalContent = modal.content.cloneNode(true);
    this.shadowRoot.appendChild(modalContent);

    // tạo 1 thẻ link css trong component
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "./assets/css/modal.css";
    this.shadowRoot.appendChild(link);

    // sử tiêu đề của component
    const heading = this.shadowRoot.querySelector("#heading");
    heading.textContent = this.getAttribute("heading");

    // xử lý khi đóng modal
    this.shadowRoot.addEventListener("click", (e) => {
      if (e.target.closest("#btn-canncel") || e.target.closest("#btn-close")) {
        this.close();
      }
    });

    // xử lý khi bấm vào nút Esc sẽ tắt modal
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.close();
      }
    });

    // gửi thông tin mở modal
    this.dispatchEvent(new CustomEvent("open"));
  }
  // hàm đóng
  close() {
    const modalContent = this.shadowRoot.querySelector("#modal-content");
    if (modalContent) {
      modalContent.className = "modal-content hiden";
      // lắng nghe sự kiện animtion sẽ kết thúc
      modalContent.addEventListener("animationend", () => {
        this.shadowRoot.innerHTML = "";
      });
    }
     // gửi thông tin đóng modal
    this.dispatchEvent(new CustomEvent("close"));
  }
}
// định nghĩa 1 file app-modal tương ứng với appModal
customElements.define("app-modal", appModal);
