import FormsModal from '../../model/formsModal/formsModal.js'

export const createForms = async (req, res) => {
  try {
    const user = await FormsModal.create(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getForms = async (req, res) => {
  try {
    const user = await FormsModal.find({parentid:req.params.id});
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateForms = async (req, res) => {
  try {
    const user = await FormsModal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) return res.status(404).send("User not found");
    res.send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteForms = async (req, res) => {
  try {
    const user = await FormsModal.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send("User not found");
    res.send({ message: "User deleted" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default {createForms,getForms,updateForms,deleteForms}