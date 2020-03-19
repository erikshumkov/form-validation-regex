// validation script here
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const telephone = document.getElementById("telephone");
const slug = document.getElementById("slug");
const form = document.querySelector("form");

const patterns = {
  username: /^[a-z\d]{5,12}$/i,
  email: /^[a-z]{2,15}@[a-z]{3,15}\.(se|com)$/,
  password: /^[\w@-]{8,20}$/,
  telephone: /^(0|\+46)7(3|6)(\d){7}$/,
  slug: /^[a-z\d-]{8,20}$/
};

// Functions
function validateField(field, regex) {
  if (regex.test(field.value)) {
    field.className = "valid"
  } else {
    field.className = "invalid"
  }
}

function checkEmptyField(field) {
  if (field.value === "") {
    field.className = "";
  }
}

// Event listener
form.addEventListener("input", e => {
  let value = e.target.value;
  let id = e.target.id;

  if (id === "username") {
    validateField(username, patterns[id]);
    checkEmptyField(username);
  }

  if (id === "email") {
    validateField(email, patterns[id]);
    checkEmptyField(email);
  }

  if (id === "password") {
    validateField(password, patterns[id]);
    checkEmptyField(password);
  }

  if (id === "telephone") {
    validateField(telephone, patterns[id]);
    checkEmptyField(telephone);
  }

  if (id === "slug") {
    validateField(slug, patterns[id]);
    checkEmptyField(slug);
  }
});

