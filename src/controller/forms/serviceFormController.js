import FormsModal from '../../model/formsModal/formsModal.js'

export const createForms = async (req, res) => {
  try {
    const user = await FormsModal.create(req.body);
    return res.status(201).send({ status: 201, message: "Form created successfully",});


  } catch (error) {
    // return res.status(400).send(error.message);
    // res.status(500).send("Server Error");
    return res.status(201).send({ status: 401, message: "Server Error",});
  }
};

export const getForms = async (req, res) => {
  try {
    const user = await FormsModal.find();
    return res.send(user);
  } catch (error) {
    return res.status(500).send(error.message);
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