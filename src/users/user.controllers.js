const userServices = require("./user.services");

const getAll = (_req, resp) => {
  userServices
    .getAll()
    .then((data) => resp.status(200).json(data))
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const getOne = (req, resp) => {
  const { id } = req.params;

  userServices
    .getOne(id)
    .then((data) => {
      data
        ? resp.status(200).json(data)
        : resp.status(404).json({ message: "Invalid ID" });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const getOneMyUser = (req, resp) => {
  const userId = req.user.id;

  userServices
    .getOne(userId)
    .then((data) => resp.status(200).json(data))
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const updateUser = (req, resp) => {
  const { id } = req.params;
  const { username, password, profileImage } = req.body;

  userServices
    .update(id, { username, password, profileImage })
    .then((data) => {
      data[0]
        ? resp.status(200).json(data)
        : resp.status(404).json({ message: "Invalid ID" });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const updateAdmin = (req, resp) => {
  const { id } = req.params;
  const { role, status, isVerified } = req.body;

  userServices
    .update(id, { role, status, isVerified })
    .then((data) => {
      data[0]
        ? resp.status(200).json(data)
        : resp.status(404).json({ message: "Invalid ID" });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const deleteUser = (req, resp) => {
  const { id } = req.params;

  userServices
    .update(id, { status: "desactive" })
    .then((data) => {
      data
        ? resp.status(201)
        : resp.status(404).json({ message: "Invalid ID" });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const deleteAdmin = (req, resp) => {
  const { id } = req.params;

  userServices
    .deleteUser(id)
    .then((data) => {
      data
        ? resp.status(201)
        : resp.status(404).json({ message: "Invalid ID" });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

module.exports = {
  getAll,
  getOne,
  updateAdmin,
  updateUser,
  deleteAdmin,
  deleteUser,
  getOneMyUser,
};
