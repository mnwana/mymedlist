async function prevLists(event) {
  event.preventDefault();
  document.location.replace("/dashboard/patient-history");
}
document.querySelector("#prevLists").addEventListener("click", prevLists);

async function saveList(event) {
  event.preventDefault();

  const list_title = document.querySelector('input[name="list-title"]').value;
  const list_text = document.querySelector('textarea[name="list-text"]').value;
  console.log("clicked");
  const response = await fetch(`/api/lists`, {
    method: "POST",
    body: JSON.stringify({
      list_title,
      list_text,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard/patient");
  } else {
    alert(response.statusText);
  }
}
let activeList = {};

document.querySelector("#saveList").addEventListener("click", saveList);
