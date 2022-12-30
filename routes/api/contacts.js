const express = require("express");

const { contactsControllers: cntr } = require("../../controllers");
const { validation, cntrlWrap } = require("../../middlewars");
const { contactsSchema } = require("../../schemas");

const router = express.Router();

router.get("/", cntrlWrap(cntr.getAll));

router.get("/:contactId", cntrlWrap(cntr.getById));

router.post("/", validation(contactsSchema), cntrlWrap(cntr.add));

router.delete("/:contactId", cntrlWrap(cntr.remove));

router.put("/:contactId", validation(contactsSchema), cntrlWrap(cntr.update));

module.exports = router;
