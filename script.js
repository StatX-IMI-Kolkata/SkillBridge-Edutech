const skillSnaps = {
  design: "🎨 Tip: Use Canva to design social media posts for local shops.",
  data: "🧮 Task: Create a basic Excel sheet to record daily expenses.",
  coding: "💻 Lesson: Learn HTML tags like <p>, <h1>, and <img> today."
};

document.getElementById("quizForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = e.target.name.value.trim();
  const interest = e.target.interest.value;

  const message = `👋 Hello ${name}! Based on your interest in **${interest}**, we’ve created your custom SkillBridge learning path. Let’s begin with your first SkillSnap!`;

  document.getElementById("learningPath").innerText = message;
  document.getElementById("skillsnap").classList.remove("hidden");
  document.getElementById("skillLesson").innerText = skillSnaps[interest];
});

function generateCertificate() {
  const name = document.querySelector("input[name='name']").value.trim();
  if (!name) {
    alert("Please enter your name.");
    return;
  }

  const certText = `SkillBridge Certificate - ${name} - Completed SkillSnap`;

  const qr = new QRious({
    element: document.getElementById("qrCanvas"),
    value: certText,
    size: 200
  });

  document.getElementById("certificate").classList.remove("hidden");
}
