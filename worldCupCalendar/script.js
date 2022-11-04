function creat_game(team1, hour, team2) {
  return `
    <li>
      <img src="./assets/icon-${team1}.svg" alt="${team1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${team2}.svg" alt="${team2}" />
    </li>
  `
}

let delay = -0.5;
function creat_card(date, day, games) {
  delay = delay + 0.5;
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
  </div>
  `
}

document.querySelector("#cards").innerHTML =
  creat_card(
    "24/11",
    "thursday",
    creat_game("switzerland", "07:00", "cameroon") +
      creat_game("uruguay", "10:00", "south_korea") +
      creat_game("portugal", "13:00", "ghana") +
      creat_game("brazil", "16:00", "serbia")
  ) +
  creat_card("28/11", "monday", creat_game("brazil", "13:00", "switzerland")) +
  creat_card("02/12", "friday", creat_game("cameroon", "08:00", "brazil"))
