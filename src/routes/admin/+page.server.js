import supabase from '$lib/db';
import { fail } from '@sveltejs/kit';
import * as XLSX from 'xlsx';

export const actions = {
    insertStudent: async ({ request }) => {
        const formData = await request.formData();        
        const file = formData.get('file-input'); // Ambil file dari form        

        if (!file) {
            return fail(200,{message: 'No file uploaded' });
        }

        try {
            // Konversi file ke ArrayBuffer
            const buffer = await file.arrayBuffer();
            const workbook = XLSX.read(new Uint8Array(buffer), { type: 'array' });

            // Ambil sheet pertama
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];

            // Konversi XLSX ke JSON
            const jsonData = XLSX.utils.sheet_to_json(worksheet);
        
            // Insert data ke Supabase
            const { error } = await supabase.from('users').upsert(jsonData);

            if (error) {
                return fail(400,{ message: error.message });
            }
            return fail(200,{ message: 'Data inserted successfully!' });
        } catch (err) {
            return fail(400,{ error: 'Failed to process file' });
        }
    },

    insertScore: async ({ request }) => {
        const formData = await request.formData();        
        const file = formData.get('file-input'); // Ambil file dari form        

        if (!file) {
            return fail(200,{message: 'No file uploaded' });
        }

        try {
            // Konversi file ke ArrayBuffer
            const buffer = await file.arrayBuffer();
            const workbook = XLSX.read(new Uint8Array(buffer), { type: 'array' });

            // Ambil sheet pertama
            const sheetName = workbook.SheetNames[1];
            const worksheet = workbook.Sheets[sheetName];

            // Konversi XLSX ke JSON
            const jsonData = XLSX.utils.sheet_to_json(worksheet);
            const filteredData = jsonData.map(({ name, ...rest }) => rest);
        
            // Insert data ke Supabase
            const { error } = await supabase.from('assignment').upsert(filteredData,{ onConflict: 'user_id,assignment' });

            if (error) {
                return fail(400,{ message: error.message });
            }
            return fail(200,{ message: 'Data inserted successfully!' });
        } catch (err) {
            return fail(400,{ error: 'Failed to process file' });
        }
    }
};
