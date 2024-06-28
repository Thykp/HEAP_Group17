const { supabase } = require('../database/supabaseClient');
const userDetailsTable = 'user_details';

async function getUserDetails(username) {
    
    const { data, error } = await supabase
    .from(userDetailsTable)
    .select('username, age, height, weight, activity, diet, goal')
    .eq('username', username)

    console.log(data);

    if (error) {
        throw new Error(error.message)
    };

    if (data.length === 0) {
        console.log("Nothing found.");
    };

    return data;
    
}

async function updateUserDetails(uuid, username, age, height, weight, activity, diet, goal) {
    
    const successMessage = "yee";

    const { data, error } = await supabase
    .from(userDetailsTable)
    .update({'username': username, 'age': age, 'height': height, 'weight': weight, 'activity': activity, 'diet': diet, 'goal': goal})
    .eq('uuid', uuid)

    if (error) {
        throw new Error(error.message);
    }
    
    return successMessage;
}

module.exports = {
    getUserDetails,
    updateUserDetails
}