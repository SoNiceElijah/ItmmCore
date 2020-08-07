const router = require('express').Router();

const event = require('./event.r');
const conversation = require('./conversation.r');
const lesson = require('./lesson.r');
const news = require('./news.r');
const timetable = require('./timetable.r');
const user = require('./user.r');
const file = require('./file.r');

const $ = require('../service/_index');

router.use($.auth.middleware);
router.use('/event',event);
router.use('/conversation',conversation);
router.use('/lesson',lesson);
router.use('/news',news);
router.use('/timetable',timetable);
router.use('/user',user);
router.use('/file',file);


module.exports = router;