const router = require('express').Router();
const {
  Category,
  Product
} = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  const categoryData = await Category.findAll({
    include: [{
      model: Product
    }]
  })
  res.status(200).json(categoryData);
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  const idData = await Category.findByPk(req.params.id, {
    include: [{
      model: Product
    }]
  })
  res.status(200).json(idData);
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  const newData = await Category.create(req.body);
  res.status(200).json(newData);
  // create a new category
});

router.put('/:id', async (req, res) => {
  const putData = await Category.update(
  {
    category_name: req.body.category_name
  },
  {
  where: {
      id: req.params.id,
    }
  });
  res.status(200).json(putData);
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  const deleteData = await Category.destroy({
    where: {
      id: req.params.id,
    }
  })
  res.status(200).json(deleteData)
  // delete a category by its `id` value
});

module.exports = router;