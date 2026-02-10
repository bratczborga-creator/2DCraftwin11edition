const dialog = document.getElementById("dialog");
const dialogTitle = document.getElementById("dialog-title");
const dialogMessage = document.getElementById("dialog-message");
const closeDialogButton = document.getElementById("close-dialog");

const actionHandlers = {
  play: () => ({
    title: "Start gry",
    message: "Ładowanie świata... (tu możesz podpiąć właściwe uruchamianie gry)",
    success: true,
  }),
  options: () => ({
    title: "Opcje",
    message: "Tutaj możesz dodać ustawienia: dźwięk, sterowanie, grafikę i język.",
    success: false,
  }),
  help: () => ({
    title: "Pomoc",
    message: "WASD - ruch, Spacja - skok, E - ekwipunek. Miłej zabawy!",
    success: false,
  }),
  quit: () => ({
    title: "Wyjście",
    message: "W przeglądarce nie zamknę karty automatycznie. Możesz ją zamknąć ręcznie.",
    success: false,
  }),
};

function openDialog({ title, message, success }) {
  dialogTitle.textContent = title;
  dialogMessage.textContent = message;
  dialogMessage.classList.toggle("success", success);
  dialog.classList.remove("hidden");
}

document.querySelectorAll(".mc-btn[data-action]").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;
    const handler = actionHandlers[action];
    if (handler) {
      openDialog(handler());
    }
  });
});

closeDialogButton.addEventListener("click", () => {
  dialog.classList.add("hidden");
});
