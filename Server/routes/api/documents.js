const express = require('express');
const router = express.Router();

const Document = require('../../models/Document');
  
//router POST
router.post('/', (req, res) => {
    Document.create(req.body)
    .then((document) => res.json({ msg: 'Document added successfully'}))
    .catch((err) => res.status(400).json({ error: 'Unable to add this document'}));
});

// @route GET api/document/:id
router.get('/:id', (req, res) => {
    Document.findById(req.params.id)
    .then((document) => res.json(document))
    .catch((err) => res.status(404).json({ nodocumentfound: 'No Document Found'}));
});
// @route GET api/document
router.get('/', (req, res) => {
    Document.find()
    .then((documents) => res.json(documents))
    .catch((err) => res.status(404).json({ nodocumentsfound: 'No Documents Found'}));
});
// @route UPDATE api/documents:id
router.put('/:id', (req, res) => {
    Document.findByIdAndUpdate(req.params.id, req.body)
    .then((document) => res.json({msg: 'Updated successfully'}))
    .catch((err) => res.status(400).json({ error: 'Unable to update the Database'}));
});
// Delete item
router.delete('/:id', (req, res) => {
    Document.findByIdAndRemove(req.params.id, req.body)
    .then((document) => res.json({msg: 'Item entry deleted successfully'}))
    .catch((err) => res.status(404).json({ error: 'No such an item'}));
});
module.exports = router;