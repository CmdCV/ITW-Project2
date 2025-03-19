function popUp(event) {
    document.body.classList.toggle("submitted");

    event.target.querySelector('input[type="submit"]').disabled = true;
    setTimeout(() => {
      document.body.classList.toggle("submitted");
      event.target.querySelector('input[type="submit"]').disabled = null;
    }, 2000);
}