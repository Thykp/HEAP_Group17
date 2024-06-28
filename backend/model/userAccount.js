const { supabase } = require('../database/supabaseClient');

async function getUserAccount() {

    const { data: records, error } = await supabase
    .from(user_account)
    .select(`userName, userPassword, userEmail`)
    .eq('userName', userName)
    .eq('userPassword', userPassword)

    if (error) {
        throw new Error(error.message);
    };

    return records;
    
}

module.exports = {
    getUserAccount
}