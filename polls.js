import { supabase } from './supabase.js'

async function loadPoll(pollId) {
    const { data, error } = await supabase
    .from('polls')
    .select(`
        id,
        title,
        description,
        allow_multiple,
        poll_options (
            id,
            option_text,
            display_order
            )
        `)
        .eq('id', pollId)
        .single()
    if (error) {
        console.error('Error loading poll:', error.message)
        return null
    }

    data.poll_options.sort((a, b)  => a.display_order - b.display_order)

    return data
} 