// Builds each email link when the page loads, so the address isn't stored as plain text
// in the page where simple spam bots can scrape it. People see and tap it normally.
document.querySelectorAll("a[data-user][data-domain]").forEach(function (link) {
  var address = link.dataset.user + "@" + link.dataset.domain;
  link.href = "mailto:" + address;
  link.textContent = address;
});
