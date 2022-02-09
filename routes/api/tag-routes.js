const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

router.get('/', async (req, res) => {
  const tagData = await Tag.findAll({
    include: [{
      model: Product
    }]
  })
  res.status(200).json(tagData);
});

router.get('/:id', async (req, res) => {
  const tagId = await Tag.findByPk(req.params.id, {
    include: [{
      model: Product
    }]
  })
  res.status(200).json(tagId);
});

router.post('/', async (req, res) => {
  const newTag = await Tag.create(req.body);
  res.status(200).json(newTag);
});

router.put('/:id', async (req, res) => {
  const putTag = await Tag.update(
    {
      tag_name: req.body.tag_name
    },
    {
    where: {
        id: req.params.id,
      }
    });
    res.status(200).json(putTag);
});

router.delete('/:id', async (req, res) => {
  const deleteTag = await Tag.destroy({
    where: {
      id: req.params.id,
    }
  })
  res.status(200).json(deleteTag)
});

module.exports = router;
