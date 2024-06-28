const { supabase } = require('../database/supabaseClient');

async function getUserDetails() {
    
    const { data: records, error } = await supabase
    .from(user_details)
    .select(`userName, userAge, userHeight, userWeight, userActivity, userDiet, userGoal`)
    .eq('userName', userName)

    if (error) {
        throw new Error(error.message)
    };

    return records;
    
}

async function updateUserDetails(userName, userAge, userHeight, userWeight, userActivity, userDiet, userGoal) {
    
    const { data: records, error } = await supabase
    .from(user_details)
    .update({'userName': userName, 'userAge': userAge, 'userHeight': userHeight, 'userWeight': userWeight, 'userActivity': userActivity, 'userDiet': userDiet, 'userGoal': userGoal}).select();
    

    if (error) {
        throw new Error(error.message);
    }
    
    return successMessage;
}

module.exports = {
    getUserDetails,
    updateUserDetails
}