export default function getSliderData() {
  return fetch("https://c4-project-data.herokuapp.com/slider_data");
}

export function ProductData(order = "ASC") {
  return fetch(
    `https://c4-project-data.herokuapp.com/products?_sort=price&_order=${order}`
  );
}

export function filterData() {
  return fetch(
    `https://c4-project-data.herokuapp.com/products?name=E-Gift%20Voucher`
  );
}

export function buyData() {
  return fetch("https://c4-project-data.herokuapp.com/buy");
}
