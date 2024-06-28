const { supabase } = require('../database/supabaseClient');
const userAccountTable = 'user_account';

async function getUserAccount(username, password) {
    
    const { data, error } = await supabase
    .from(userAccountTable)
    .select('username, password')
    .eq('username', username)
    .eq('password', password)

    if (error) {
        throw new Error(error.message);
    };

    if (data.length === 0) {
        console.log("No matching user found.");
    };
    
    return data;
}

module.exports = {
    getUserAccount
}