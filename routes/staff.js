const router = require('express').Router();
const multer = require('multer');

const Staff = require('../models/Staff');

/**
 * GET: '/' Show cards of staff members on the form
 * GET'/' List of staff members (should hit the same route of cards, and here generate a form)
 * GET: '/register' Save the registration form (use vue to create and save this page with form);
 * POST: '/register' Save staff member data from form
 * GET: '/staff' One staff
*/

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/uploads');
    },
    filename: function(req, file, cb){
        cb(null, `${Date.now()}_${file.originalname}`)
    }
})

router.get('/', async(req, res)=>{
    try {
        const members = await Staff.find();
        members == ""
            ? res.status(404).json('No staff members found in db') 
            : res.status(200).json(members);
    }catch(err){
        throw new Error(err)
    }
})

const upload = multer({ storage: storage })

router.post('/register', upload.single('image') , async(req, res)=>{
    try {
        const newStaff = new Staff();
        newStaff.name       = req.body.name;
        newStaff.job         = req.body.job;
        newStaff.age         = req.body.age;
        newStaff.image       = req.file.path;
        newStaff.description = req.body.description;

       const saved = await newStaff.save();
       res.json('Saved new member');
    } catch (err) {
        throw new Error(err)
    }
})

router.get('/:id', async(req, res)=>{
    const { id } = req.params;
    try {
        const member = await Staff.findById(id);
        !member.id
            ? res.status(404).json('No member matched the id') //For some reason this error is skipped
            : res.status(200).json(member);
    }catch(err){
        res.status(404).json({message: err.message});
    }
})

module.exports = router;