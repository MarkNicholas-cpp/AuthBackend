const oracledb = require("oracledb");
// Set database connection details
const dbConfig = {
  user: "system",
  password: "manager",
  connectString: "localhost:1521/xe",
};

const Query = async (sql) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(sql);
    await connection.commit();
    return result;
  } catch (error) {
    return (error);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.error(error);
      }
    }
  }
};

const Result = async (Sql) => {
  var result = await Query(Sql);
  return result;
};
module.exports = Result;
