(function () {
    "use strict";
      /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };
const ageSpan = select("#ageSpan");
const dobSpan = select("#dobSpan");
if (ageSpan && dobSpan) {
  let dob = dobSpan.textContent;
  var mydate = new Date(dob);
  ageSpan.textContent = _calculateAge(mydate);
}
})();
function _calculateAge(birthday) {
    // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }