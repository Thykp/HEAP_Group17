const { supabase } = require('../database/supabaseClient');
const userAccountTable = 'user_account';
const userDetailsTable = 'user_details';

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

    console.log(data);
    
    return data;
}

async function insertUserAccount(username, password, email) {
    
    const successMessage = 'pass';

    const { data, error } = await supabase
    .from(userAccountTable)
    .insert([
      { username: username, password: password, email: email }
    ]);

    if (error) {
        throw new Error(error.message);
    };
    
    // When I create a new user account, I also want to create his corresponding user details
    const { data2, error2 } = await supabase
    .from(userDetailsTable)
    .insert([
      { username: username, age: null, height: null, weight: null, activity: null, diet: null, goal: null }
    ]);


    if (error2) {
        throw new Error(error2.message);
    };
    
    return successMessage;
}

async function updateUserAccount(uuid, username, password, email) {
    
    const successMessage = "pass";
    const failureMessage = "fail";

    console.log(uuid);

    const { data, error } = await supabase
    .from(userAccountTable)
    .select('uuid')
    .eq('uuid', uuid)

    if (error) {
        throw new Error(error.message);
    }

    if (data.length === 0) {
        return failureMessage;
    };

    const { data2, error2 } = await supabase
    .from(userAccountTable)
    .update({'username': username, 'password': password, 'email': email})
    .eq('uuid', uuid)


    if (error2) {
        throw new Error(error2.message);
    }

    
    const { data3, error3 } = await supabase
    .from(userDetailsTable)
    .update({'username': username})
    .eq('uuid', uuid)


    if (error3) {
        throw new Error(error3.message);
    }
    
    return successMessage;
}

module.exports = {
    getUserAccount,
    insertUserAccount,
    updateUserAccount
}