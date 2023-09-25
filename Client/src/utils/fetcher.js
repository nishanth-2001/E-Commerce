import { API_URL } from "../constants";

const fetcher = async (path, method, payload) => {
  try {
    const headers = { "Content-Type": "application/json" };
    let body;

    if (method !== "GET") {
      body = JSON.stringify(payload);
    }

    const res = await fetch(`${API_URL}${path}`, { method, headers, body });
    const data = await res.json();

    if (data.success === false) {
      return {
        err: true,
        message: data.message,
      };
    }
    return {
      err: false,
      data,
    };
  } catch (err) {
    console.log(err);
    return {
      err: true,
      message: "Something Went Wrong",
    };
  }
};

export { fetcher };
