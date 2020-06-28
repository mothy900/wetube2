import routes from "../routes";
import { videos } from "../db";
export const home = (req, res) =>
  res.render("home", { pageTitle: "Home", videos });
export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  // const searchingBy = req.query.term; 와 같은 결과
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};
export const upload = (req, res) =>
  res.render("Upload", { pageTitle: "Upload" });

export const videoDetail = (req, res) =>
  res.render("Video Detail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) =>
  res.render("Edit video", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) =>
  res.render("Delete Video", { pageTitle: "Delete Video" });
