const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line


// Routing for changing organisation-type.html
router.post('*/change-organisation-type-choice', function (req, res) {
  var defraIdType = req.session.data['defraIdType']
  if (defraIdType == "individual"){
    res.redirect('task-list-page-about-you-details')
  }
  else {
    res.redirect('organisation-UK-or-else')
  }
})

// Routing for organisation-type.html
router.post('*/organisation-type-choice', function (req, res) {
    var defraIdType = req.session.data['defraIdType']
    if (defraIdType == "individual"){
        res.redirect('individual-name?route=individual')
    }
    else {
        res.redirect('organisation-UK-or-else')
    }
})

// Routing for organisation-UK-or-else.html
router.post('*/organisation-uk-choice', function (req, res) {
    var defraIdUk = req.session.data['defraIdUk']
    if (defraIdUk == "non-uk"){
        res.redirect('non-uk-business-name')
    }
    else {
        res.redirect('company-registered-question')
    }
})


// Routing for company-registered-question.html
router.post('*/companieshouse-choice', function (req, res) {
    var defraIdCompaniesHouse = req.session.data['defraIdCompaniesHouse']
    if (defraIdCompaniesHouse == "no"){
        res.redirect('sole-trader-or-charity')
    }
    else {
        res.redirect('company-lookup')
    }
})


// Routing for sole trader or charity question
router.post('*/org-choice', function (req, res) {
    var orgType = req.session.data['defraIdSoleTraderOrCharity']
    if (orgType == "sole-trader"){
        res.redirect('personal-name?route=sole-trader')
    }
    else {
        res.redirect('charity-region')
    }
})


// Routing for adding company addresses in registration
router.post('*/add-addresses', function (req, res) {
  var addExtraAddress = req.session.data['added-address']
  if (addExtraAddress === 'yes') {
    res.redirect('add-address-type')
  } else {
    // res.redirect('personal-name')
    res.redirect('personal-name')
  }
})

// Routing for adding charity addresses in registration
router.post('*/add-charity-addresses', function (req, res) {
  var addExtraAddress = req.session.data['added-address']
  if (addExtraAddress === 'yes') {
    res.redirect('add-address-type')
  } else {
    res.redirect('task-list-page-charity-details')
  }
})


// Redundant now
// Routing for adding company addresses in registration
router.post('*/check-personal-name', function (req, res) {
  var checkPersonalName = req.session.data['personal-name']
  if (checkPersonalName === 'yes') {
    res.redirect('personal-contact')
  } else {
    // res.redirect('personal-name')
    res.redirect('your-name')
  }
})


module.exports = router
