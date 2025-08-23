const reviews = [
  { name: "Aman", comment: "Amazing experience with Shubham Estate!" },
  { name: "Ravi", comment: "Great service and support!" },
];

const container = document.getElementById("client-reviews");
reviews.forEach(r => {
  const div = document.createElement("div");
  div.innerHTML = `<strong>${r.name}</strong>: ${r.comment}`;
  container.appendChild(div);
});
