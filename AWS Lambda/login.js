var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");
const formidable = require('formidable')
const fs = require('fs')
const AWS = require('aws-sdk')

var connection = mysql.createConnection({
    host: "database-2.c4etcoiqjcuq.us-east-1.rds.amazonaws.com",
    port: "3306",
    user: "admin",
    password: "databaseaws",
    database: "donor"
  });