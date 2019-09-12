module.exports=function(){
this.dbConnections = [];
this.dbConnections[“authDatabase”] = {
     host: <Host of the RDS>,
     port: 3306,
     user: <Master username of the RDS instance>,
     password: <Master password of the RDS instance>,
     database: <Database name>,
    };
 };