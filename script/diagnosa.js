function analyze() {
  const checked = document.querySelectorAll('input[type="checkbox"]:checked');
  if (checked.length === 0) {
    alert("Silakan pilih minimal satu gejala.");
    return;
  }
  alert(`Analisa berjalan dengan ${checked.length} gejala terpilih.`);
}

function resetForm() {
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
}