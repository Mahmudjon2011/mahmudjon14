const contactForm = document.querySelector("#form");
const contactName = document.querySelector("#email");
const contactPhone = document.querySelector("#password");

// Formdan keyin kontaktlar chiqishi uchun konteyner yaratamiz
const contactList = document.createElement("div");
contactList.className = "max-w-xl mx-auto mt-10";
document.body.appendChild(contactList); // formdan pastroqqa joylashtiramiz

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = contactName.value.trim();
  const phone = contactPhone.value.trim();

  if (name && phone) {
    const contactCard = document.createElement("div");
    contactCard.className =
      "p-4 bg-white dark:bg-indigo-800 rounded-lg shadow-md mb-4";

    contactCard.innerHTML = `
      <p class="text-lg font-semibold dark:text-white">👤 ${name}</p>
      <p class="text-gray-700 dark:text-gray-300">📞 ${phone}</p>
    `;

    contactList.appendChild(contactCard);

    contactName.value = "";
    contactPhone.value = "";
  } else {
    alert("Iltimos, barcha maydonlarni to‘ldiring.");
  }
});
