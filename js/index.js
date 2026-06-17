import { getSalesCoffee } from "./requirements.js";

const processSalesCoffee = async () => {
  const result = await getSalesCoffee();

  if (result.success) {
    const tbody = document.querySelector("#example tbody");
    tbody.innerHTML = "";

    const rows = result.body.getElementsByTagName("row");

    for (let row of rows) {
      const coffeeName = row.getElementsByTagName("coffee_name")[0].textContent;
      const money = row.getElementsByTagName("money")[0].textContent;
      const date = row.getElementsByTagName("Date")[0].textContent;
      const time = row.getElementsByTagName("Time")[0].textContent;
      const cashType = row.getElementsByTagName("cash_type")[0].textContent;
      const timeOfDay = row.getElementsByTagName("Time_of_Day")[0].textContent;

      tbody.innerHTML += `
        <tr>
          <td class="border px-4 py-2">${coffeeName}</td>
          <td class="border px-4 py-2">${money}</td>
          <td class="border px-4 py-2">${date}</td>
          <td class="border px-4 py-2">${time}</td>
          <td class="border px-4 py-2">${cashType}</td>
          <td class="border px-4 py-2">${timeOfDay}</td>
        </tr>`;
    }

    $("#example").DataTable();
  } else {
    alert(result.body);
  }
};

window.addEventListener("load", processSalesCoffee);