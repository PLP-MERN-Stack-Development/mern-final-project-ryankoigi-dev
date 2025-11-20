import Item from "../models/Item.js";

export const getItems = async (req, res) => {
  const items = await Item.find({ user: req.user });
  res.json(items);
};

export const createItem = async (req, res) => {
  const item = await Item.create({
    name: req.body.name,
    description: req.body.description,
    user: req.user
  });

  res.status(201).json(item);
};
