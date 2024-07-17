const { supabase } = require('../database/supabaseClient');
const userAccountTable = 'user_account';
const userDetailsTable = 'user_details';

async function getUserAccount(email) {
    const { data, error } = await supabase
        .from(userAccountTable)
        .select('*')
        .eq('email', email)
        .single();

    if (error) {
        throw new Error(error.message);
    }

    return data;
}

async function verifyPassword(email, password) {
    const { data, error } = await supabase
        .from(userAccountTable)
        .select('password')
        .eq('email', email)
        .single();

    if (error) {
        throw new Error(error.message);
    }

    if (!data) {
        return false;
    }

    const storedPassword = data.password;
    const isPasswordValid = (password === storedPassword);

    return isPasswordValid;
}


async function insertUserAccount(email, first_name, last_name, password) {
    const { data, error } = await supabase
        .from(userAccountTable)
        .select('email')
        .eq('email', email);

    if (error) {
        throw new Error(error.message);
    }

    if (data.length > 0) {
        return false;
    }

    const { data: insertedData, error: insertError } = await supabase
        .from(userAccountTable)
        .insert([{ email, first_name, last_name, password }]);

    if (insertError) {
        throw new Error(insertError.message);
    }

    return true;
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
    verifyPassword,
    getUserAccount,
    insertUserAccount,
    updateUserAccount
}