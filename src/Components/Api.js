import axios from "axios";

export const GetLoginData = (email, password, number) => {
  return axios.get(
    `https://harshal-json-mock-server.herokuapp.com/users?number=${number}&email=${email}&password=${password}`
  );
};

export const PostLoginData = async ({ name, email, number, password }) => {
  await fetch(
    "https://harshal-json-mock-server.herokuapp.com/users",
    {
      method: "POST",
      body: JSON.stringify({ name, email, number, password }),
      headers: { "Content-Type": "application/json" },
    }
  );
};

export const GetCatData = () => {
  return axios.get(
    "https://harshal-json-mock-server.herokuapp.com/natureBasket"
  );
};

export const GetWholeData = (setData) => {
  axios
    .get("https://harshal-json-mock-server.herokuapp.com/natureBasket")
    .then((res) => res.json());
};

export const GetCartData = (setData) => {
  axios
    .get("https://harshal-json-mock-server.herokuapp.com/cart")
    .then((res) => setData(res.data));
};

export const CartDataAdd = (data) => {
  axios({
    url: `https://harshal-json-mock-server.herokuapp.com/cart`,
    method: "POST",
    data: data,
  });
};

export const CartItemDelete = (id) => {
  axios({
    url: `https://harshal-json-mock-server.herokuapp.com/cart/${id}`,
    method: "DELETE",
  });
};

export const CountIncDec = (id, no, qty, price, aPrice) => {
  axios({
    url: `https://harshal-json-mock-server.herokuapp.com/cart/${id}`,
    method: "PATCH",
    data: { qty: Number(qty) + no, price: Number(price) + Number(aPrice) * no },
  });
};
