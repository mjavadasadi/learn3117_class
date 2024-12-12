document.getElementById("contactForm").addEventListener("submit", function (event) {
    let name = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let massage = document.getElementById("massage").value;

    if (!name || !email || !massage) {
      alert("لطفا تمامی مقادیر پر شود.");
      event.preventDefault();
    } else {
      let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

      if (!emailPattern.test(email)) {
        alert("لطفا یک ایمیل معتبر وارد کنید");
        event.preventDefault();
      }
    }
  });



let contactForm = document.getElementById("contactForm");
let confirmationMassage = document.getElementById("confirmationMassage");
let body=document.querySelector("body")

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  confirmationMassage.style.display='block';
  body.style.transition=background_color 1s ease_in 3s
    body.style.background_color=#42e016
    
    
});
