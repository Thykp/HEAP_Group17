import supabase from "../database/supabaseClient";

module.exports = {
    async getProfileInformation() {
        const { data: records, error } = await supabase
        .from(matchesTable)
        .select(`user1_uuid: user1_chat_id(id), message, user2_details: user2_chat_id(${user2ColumnsNonSensitive})`)
        .eq('user1_chat_id', chatID)
        .eq('user1_status', 'none')
        .order('decision_made_at', { ascending: false })

        if (error) throw new Error(error.message);

        return records;
    }
}