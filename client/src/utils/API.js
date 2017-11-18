import axios from "axios";

export default {
  // Gets all calls
  getCalls: function() {
    return axios.get("/api/calls");
  },
  // Gets the calls with the given id
  getCalls: function(id) {
    return axios.get("/api/calls/" + id);
  },
  // Deletes the calls with the given id
  // deleteCalls: function(id) {
  //   return axios.delete("/api/calls/" + id);
  // },
  // Saves a calls to the database
  saveCalls: function(callData) {
    return axios.post("/api/calls", callData);
  }
};
