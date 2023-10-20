const Business = require('../../models/business');

// Controller methods for Business
const getAllBusinesses = async (req, res) => {
  try {
    const businesses = await Business.findAll();
    res.json(businesses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getBusinessById = async (req, res) => {
  const  id  = req.body.id;
  try {
    const business = await Business.findByPk(id);
 
    if (!business) {
      return res.status(404).json({ error: 'Business not found' });
    }
    res.json(business);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createBusiness = async (req, res) => {
  const body = req.body;
  try {
    const business = await Business.create({
      "user_id": body.user_id || null, 
      "name": body.name || null,
      "type": body.type || null,
      "country": body.country || null,
      "state": body.state || null,
      "city": body.city || null,
      "address": body.address || null,
      "business_logo_img":body.business_logo_img || null,
      "reg_no": body.reg_no || null,
      "reg_certificate_img": body.reg_certificate_img || null,
      "google_id": body.google_id || null,
      "fb_id": body.fb_id || null,
      "linkedln_id": body.linkedln_id || null,
      "insta_id": body.insta_id || null,
      "isApproved":body.isApproved || null, 
      "isBlocked": body.isBlocked || null, 
      "community_id": body.community_id || null
    });
    res.status(201).json(business);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updateBusiness = async (req, res) => {
  const id  = req.body.id;
  const businessData = req.body;
  try {
    const [updatedRows] = await Business.update(businessData, {
      where: { id },
    });
    if (updatedRows === 0) {
      return res.status(404).json({ error: 'Business not found' });
    }
    res.json({ message: 'Business updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteBusiness = async (req, res) => {
  const id  = req.body.id;
  try {
    const deletedRows = await Business.destroy({
      where: { id },
    });
    if (deletedRows === 0) {
      return res.status(404).json({ error: 'Business not found' });
    }
    res.json({ message: 'Business deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllBusinesses,
  getBusinessById,
  createBusiness,
  updateBusiness,
  deleteBusiness,
};