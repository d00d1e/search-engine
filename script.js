function searchDictionary() {
  var search = document.getElementById("search").value;
  const url = "https://www.dictionary.cambridge.org/dictionary/english/";

  window.open(url + search, "_blank").focus;
}

function searchScholar() {
  var search = document.getElementById("search").value;
  const url = "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=";

  window.open(url + search, "_blank").focus;
}
