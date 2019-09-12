var upper=require("upper-case");

exports.handler = (event,context,callback) => {
  
  let intex=event.input;
  let txt = upper(intex)
  callback(null,txt);
};