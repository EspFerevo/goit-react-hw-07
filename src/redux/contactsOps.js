import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

axios.defaults.baseURL = 'https://667e8bc5f2cb59c38dc62058.mockapi.io'

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get('/contacts')
        return response.data;
    }
    catch (error){
return thunkAPI.rejectWithValue(error.message)
    }
})

export const addContact = createAsyncThunk("contacts/addContact", async (newContact,thunkAPI) => {
    try {
        const response = await axios.post("/contacts", newContact)    
        return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)  
    }
})

export const deleteContact = createAsyncThunk("contacts/deleteContact", async(contId, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${contId}`)
        return response.data
    }
    catch (error){
return thunkAPI.rejectWithValue(error.message)
    }
})