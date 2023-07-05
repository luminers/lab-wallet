import store from "@/store";
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://labor3-d60e.restdb.io/rest/",
  // baseURL: "https://laboratorio3-f36a.restdb.io/rest",
  // headers: { "x-apikey": "64a2e9bc86d8c525a3ed8f63" },
  headers: { "x-apikey": "64a2e9bc86d8c525a3ed8f63" },
});

export default {
  postTransaccion(transaction) {
    apiClient.post("/transactions", {
      user_id: transaction.user_id,
      action: transaction.action,
      crypto_code: transaction.crypto_code,
      crypto_amount: transaction.crypto_amount,
      money: transaction.money,
      datetime: transaction.datetime,
    });
  },
  getHistory() {
    return apiClient.get(`/transactions?q={"user_id": "${store.state.Id}"} `);
  },
  patchTransaccion(transaction) {
    apiClient.patch(`/transactions/${transaction.id}`, {
      crypto_amount: transaction.crypto_amount,
      money: transaction.money,
    });
  },
};
