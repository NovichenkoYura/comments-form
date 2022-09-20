import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type Comment = {
  id: string;
  name: string;
  text: string;
  isFetching: boolean;
};

type CommentsState = {
  list: Comment[];
};

const initialState: CommentsState = {
  list: [],
};

export const getCommentsThunk = createAsyncThunk('comment/getComments', async () => {
  const response = await axios.get('http://localhost:3001/notes');
  const data = await response.data;
  return data;
});

export const addCommentsThunk = createAsyncThunk(
  'comment/addComments',
  async ({ id, name, text }) => {
    const comment = {
      id: id,
      name: name,
      text: text,
    };
    const response = await axios.post('http://localhost:3001/notes/', comment);
    const data = await response.data;
    return data;
  }
);

const commentSlice = createSlice({
  name: 'comment',
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getCommentsThunk.pending, (state) => {
      state.isFetching = true
    });
  builder.addCase(getCommentsThunk.fulfilled, (state, action: PayloadAction<string>) => { 
    state.list = action.payload
    state.isFetching = false
  });
  builder.addCase(addNotesThunk.pending, (state) => {
    state.isFetching = true
  });
  builder.addCase(addNotesThunk.fulfilled, (state, action: PayloadAction<string>) => {
    state.notesList.push(action.payload)
    state.isFetching = false
  });  
  },

  reducers: {
    setValue(state, action: PayloadAction<string>) {
      state.list = action.payload;
    },
  },
});

export const { setValue } = commentSlice.actions;
export default commentSlice.reducer;
