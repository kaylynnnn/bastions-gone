const gone = new Date(2022, 9, 10);
const today = new Date();

goneUTC = Date.UTC(gone.getFullYear(), gone.getMonth(), gone.getDate());
todayUTC = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());

const goneFor = todayUTC - goneUTC;
const days = Math.round(Math.abs((goneFor)) / (60 * 60 * 24 * 1000));
document.getElementsByClassName('bastion-count')[0].innerHTML = `${days}`;