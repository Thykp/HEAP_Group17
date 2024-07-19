const { supabase } = require('../database/supabaseClient');
const userDetailsTable = 'user_details';

async function getUserDetails(uuid) {
    
    const { data, error } = await supabase
    .from(userDetailsTable)
    .select('uuid, username, age, height, weight, activity, diet, goal, years_of_experience, interest, free_days, target_weight')
    .eq('uuid', uuid)

    if (error) {
        throw new Error(error.message)
    };

    if (data.length === 0) {
        console.log("Nothing found.");
    };

    console.log(data);

    return data;
    
}

async function insertUserDetails(uuid, height, weight, years_of_experience, interest, free_days, target_weight) {

    const { data, error } = await supabase
    .from(userDetailsTable)
    .upsert({uuid, height, weight, years_of_experience, interest, free_days, target_weight}, { onConflict: ['uuid'] })

    if (error) {
        throw new Error(error.message)
    };

    return data;

}

async function updateUserDetails(uuid, username, age, height, weight, activity, diet, goal, years_of_experience, interest, free_days, target_weight) {
    
    const successMessage = "pass";
    const failureMessage = "fail";

    const { data, error } = await supabase
    .from(userDetailsTable)
    .select('uuid')
    .eq('uuid', uuid)

    if (error) {
        throw new Error(error.message);
    }

    if (data.length === 0) {
        return failureMessage;
    };

    const { data2, error2 } = await supabase
    .from(userDetailsTable)
    .update({'username': username, 'age': age, 'height': height, 'weight': weight, 'activity': activity, 'diet': diet, 'goal': goal, 'years_of_experience': years_of_experience, 'interest': interest, 'free_days': free_days, 'target_weight': target_weight})
    .eq('uuid', uuid)


    if (error2) {
        throw new Error(error2.message);
    }
    
    return successMessage;
}

module.exports = {
    getUserDetails,
    insertUserDetails,
    updateUserDetails
}