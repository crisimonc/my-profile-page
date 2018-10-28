//= require jquery
//= require bootstrap
//= require_tree .


import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#typed-text', {
    strings: ["world trotter", "management engineer", "full stack developer"],
    typeSpeed: 50,
    loop: true
  });
}

loadDynamicBannerText();
