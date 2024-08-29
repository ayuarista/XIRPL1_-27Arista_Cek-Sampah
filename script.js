document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("hitung").addEventListener("click", function () {
    const sampahHarian = parseFloat(document.getElementById("sampah").value);
    if (isNaN(sampahHarian) || sampahHarian <= 0) {
      alert("Mohon masukkan angka yang valid!");
      return;
    }
    const patokanKg = 0.02;
    const hasilSampahPerhari = sampahHarian * patokanKg;
    const hasilSampahPerminggu = sampahHarian * 7;
    showPieChart(hasilSampahPerhari, hasilSampahPerminggu);
  });
});

function showPieChart(harian, mingguan) {
  const ctx = document.getElementById("pieChart").getContext("2d");
  if (window.myPieChart instanceof Chart) {
    window.myPieChart.destroy();
  }
  window.myPieChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: [
        `Sampah yang dihasilkan Per Hari: ${harian} kg`,
        `Sampah yang dihasilkan Per Minggu: ${mingguan} kg`,
      ],
      datasets: [
        {
          data: [harian, mingguan],
          backgroundColor: ["#bfdbfe", "#60a5fa"],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
      },
    },
  });
  document.getElementById("pieChart").classList.remove("hidden");
  document.querySelector(".total").classList.remove("hidden");
}
