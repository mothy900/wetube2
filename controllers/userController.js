import routes from "../routes";
export const getjoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};
export const postjoin = (req, res) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    //To do : Register User
    // To Do : Log User
    res.redirect(routes.home);
  }
};

export const getlogin = (req, res) =>
  res.render("login", { pageTitle: "Log In" });
export const postlogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  //To do process Logout
  res.redirect(routes.home);
  //if you want you can make alert window "Are you sure Logout this page?"
};

export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
