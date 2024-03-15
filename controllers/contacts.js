import ContactModel from "../models/contacts.js";

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await ContactModel.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getAContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await ContactModel.findById(id);
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const createAContact = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, phone, address } = req.body;
    if (!name || !email || !phone || !address) {
      res.status(400);
      throw new Error("All fields are mandatory...!");
    }

    const contact = await ContactModel.create({
      name,
      email,
      phone,
      address,
    });

    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const updateAContact = async (req, res) => {
  try {
    const id = req.params.id;

    const contact = await ContactModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.log(req.body);
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const deleteAContact = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json(error.message);
  }
};
