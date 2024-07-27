const express = require('express')
const sql = require('mssql');


const app=express();
const port=5000;


const config = {
    user: "yp",
    password: "1234",
    server: "PRAJWAL-YP\\SQLEXPRESS", // Double backslash for escaping
    database: "AssessmentDB",
    options: {
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true,
        instancename: "SQLEXPRESS"
    },
    port: 1433
};

app.get('/execQuery',async(req,res)=>{
    const query= req.query.query

    try {
        const pool = await sql.connect(config);
        console.log("Connected to the database!");

        const result = await pool.request().query(query);

        // Print the results
        console.log(result.recordset); // recordset contains the rows returned by the query

    } catch (err) {
        console.error('Database connection failed', err);
    } finally {
        // Close the pool connection
        await sql.close();
    }

    res.status(200).send('done')
})

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}/`);

})