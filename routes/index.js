var express = require('express');
var router = express.Router();

var ctlrAPI = require('../controller/apiController.js');
var schAPI = require('../controller/scheduleCtlr.js');
var liveAPI = require('../controller/liveCtlr.js');
var picksAPI = require('../controller/pickCtlr.js');
var rantAPI = require('../controller/rantCtlr.js');
var userAPI = require('../controller/userCtlr.js');
var commentAPI = require('../controller/commentCtlr.js');

//Picks APIs
router.get('/picks/:weeknum', picksAPI.getAllPicks); //DONE
router.get('/picks/:user/:weeknum', picksAPI.getMyPicks); //DONE
router.get('/picks/:user/:weeknum')

//Schedule APIs
router.get('/schedule', schAPI.showSchedule); //DONE
router.get('/schedule/:team([A-Z]{2,3})', schAPI.showTeamSchedule); //DONE
router.get('/schedule/:week([0-9]{1,2})', schAPI.showWeekSchedule); //DONE

//Live Score APIs
router.get('/schedule/live/', liveAPI.showLive); //DONE

//Standing APIs
router.get('/standings', userAPI.getStandings); //DONE

//SmackTalk APIs
router.get('/smacktalk', rantAPI.getForumList); //DONE
router
  .get('/smacktalk/:id', rantAPI.getForumOne) //DONE
  .put('/smacktalk/:id', rantAPI.putUpdateRant)
  .delete('/smacktalk/:id', rantAPI.delRemoveRant);
router.post('/smacktalk/', rantAPI.postNewRant);//DONE
//Comments APIs
router.get('/smacktalk/:id/comment/', commentAPI.getAllComments) //DONE
  .post('/smacktalk/:id/comment', commentAPI.postNewComment); //DONE
router
  .get('/smacktalk/:id/comment/:commentId', commentAPI.getOneComment) //DONE
  .put('/smacktalk/:id', commentAPI.putUpdateComment)
  .delete('/smacktalk/:id', commentAPI.delRemoveComment);


//User APIs
router.get('/users/:username', userAPI.getUser); //DONE
router.post('/users', userAPI.postAddUser) //DONE
  .get('/users', userAPI.getAllUsers); //DONE
router.get('/users/:username/addWin', userAPI.addWinUser);

//Invalid URL
router.get('*', function(req, res){
  res.send("Sorry, page not found");
});

module.exports = router;
