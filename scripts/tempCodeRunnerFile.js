async function executeQuery(query) {
    try {
        // Connect to the database
        let pool = await sql.connect(config);
        
        // Execute the query
        let result = await pool.request().query(query);
        
        console.log(result);
        
        // Close the connection
        pool.close();
    } catch (err) {
        console.error('SQL error', err);
    }
}

// Sample query to test the connection
const query = 'SELECT * FROM UserDetail';
executeQuery(query);
