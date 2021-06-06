var express = require("express");
var router = express.Router();

var itemCtrl = require("../controllers/itemController");

router.use("/addItems", itemCtrl.addItems);//done
router.use("/getAllItems", itemCtrl.getAllItems);//done
router.use("/getItemById", itemCtrl.getItemById);//done
router.use("/deleteItemById", itemCtrl.deleteItemById);//done
router.use("/updateItem", itemCtrl.updateItem);//done



module.exports = router;
