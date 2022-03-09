import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID BMswlrUZtGZg2As4phzmlmtQtFvoEI73YTqHgKExkyM",
  },
});
