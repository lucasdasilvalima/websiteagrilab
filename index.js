if (document.cookie)

const URL = document.URL.split('/');

document.cookie = `language=${URL[(URL.length-1)]}`;
console.log(document.cookie)
