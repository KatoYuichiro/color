// 元のコードをそのまま使用
function calculateProbability(type, inputs) {
  let result;
  switch (type) {
    case "lottery":
      const totalTickets = inputs.totalTickets;
      const winningTickets = inputs.winningTickets;
      result = (winningTickets / totalTickets) * 100;
      return `宝くじに当たる確率は ${result.toFixed(2)}% です！`;
    case "rain":
      const rainChance = inputs.rainChance;
      return `今日雨が降る確率は ${rainChance}% です。`;
    case "event":
      const totalParticipants = inputs.totalParticipants;
      const prizes = inputs.prizes;
      result = (prizes / totalParticipants) * 100;
      return `景品が当たる確率は ${result.toFixed(2)}% です！`;
    case "dice":
      const diceFaces = 6;
      const targetFaces = inputs.targetFaces;
      result = (targetFaces / diceFaces) * 100;
      return `サイコロで特定の目が出る確率は ${result.toFixed(2)}% です！`;
    default:
      return "不明な確率タイプです。";
  }
}

function generateInputFields(type) {
  const inputFields = document.getElementById("input-fields");
  inputFields.innerHTML = "";

  switch (type) {
    case "lottery":
      inputFields.innerHTML = `
        <label for="totalTickets">宝くじの総数:</label>
        <input type="number" id="totalTickets" placeholder="例: 100000">
        <label for="winningTickets">当たりくじの数:</label>
        <input type="number" id="winningTickets" placeholder="例: 10">
      `;
      break;
    case "rain":
      inputFields.innerHTML = `
        <label for="rainChance">雨が降る確率 (%):</label>
        <input type="number" id="rainChance" placeholder="例: 30">
      `;
      break;
    case "event":
      inputFields.innerHTML = `
        <label for="totalParticipants">イベント参加者の総数:</label>
        <input type="number" id="totalParticipants" placeholder="例: 100">
        <label for="prizes">景品の数:</label>
        <input type="number" id="prizes" placeholder="例: 5">
      `;
      break;
    case "dice":
      inputFields.innerHTML = `
        <label for="targetFaces">特定の目の数:</label>
        <input type="number" id="targetFaces" placeholder="例: 1">
      `;
      break;
    default:
      inputFields.innerHTML = "<p>未知の計算タイプです。</p>";
  }
}

document.getElementById("calculate-button").addEventListener("click", () => {
  const type = document.getElementById("probability-type").value;
  let inputs = {};
  if (type === "lottery") {
    inputs.totalTickets = parseInt(document.getElementById("totalTickets").value, 10);
    inputs.winningTickets = parseInt(document.getElementById("winningTickets").value, 10);
  } else if (type === "rain") {
    inputs.rainChance = parseInt(document.getElementById("rainChance").value, 10);
  } else if (type === "event") {
    inputs.totalParticipants = parseInt(document.getElementById("totalParticipants").value, 10);
    inputs.prizes = parseInt(document.getElementById("prizes").value, 10);
  } else if (type === "dice") {
    inputs.targetFaces = parseInt(document.getElementById("targetFaces").value, 10);
  }

  const resultText = calculateProbability(type, inputs);
  document.getElementById("result").textContent = resultText;
});

document.getElementById("probability-type").addEventListener("change", (e) => {
  generateInputFields(e.target.value);
});

generateInputFields("lottery");
