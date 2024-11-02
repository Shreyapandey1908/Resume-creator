function showToast(message) {
    const toastContainer = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;
    toastContainer.appendChild(toast);
    setTimeout(() => {
        toast.classList.add("show");
    }, 10);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

function handleFormSubmit() {
    let photoInput = document.getElementById("photo");
    let reader = new FileReader();

 reader.onload = function() {
     localStorage.setItem("photo", reader.result);
 };

 if (photoInput.files[0]) {
   reader.readAsDataURL(photoInput.files[0]);
 }

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const address = document.getElementById("address").value.trim();
    const email = document.getElementById("email").value.trim();
    const education = document.getElementById("education").value.trim();
    const skills = document.getElementById("skills").value.trim();
    const hobbies = document.getElementById("hobbies").value.trim();

    if (!firstName) return showToast("First name is required");
    if (!lastName) return showToast("Last name is required");
    if (!contact.match(/^\d{10}$/)) return showToast("Invalid contact number");
    if (!address) return showToast("Address is required");
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return showToast("Invalid email");
    if (!education) return showToast("Education details are required");
    if (!skills) return showToast("Skills are required");
    if (!hobbies) return showToast("Hobbies are required");
    if (!photoInput) return showToast("Photo is required");

    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("contact", contact);
    localStorage.setItem("address", address);
    localStorage.setItem("email", email);
    localStorage.setItem("education", education);
    localStorage.setItem("skills", skills);
    localStorage.setItem("hobbies", hobbies);
    localStorage.setItem("workExperience", document.getElementById("workExperience").value.trim());
    

   



    window.location.href = "resume.html";
}
