import supabase from "../database/supabaseClient";

async function getUserAccount() {
    try {
        const { data: records, error } = await supabase
        .from(user_account)
        .select(`userName, userPassword, userEmail`)
        .eq('userName', userName)
        .eq('userPassword', userPassword)
        // .order('decision_made_at', { ascending: false })
    
        if (error) {
            throw error
        };
    
        return records;
        
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    getUserAccount
}