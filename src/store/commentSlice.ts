import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Comment {
  id: string;
  name: string;
  text: string;
}

interface CommentsState {
  list: Comment[];
  isFetching: boolean;
}

const initialState: CommentsState = {
  list: [],
  isFetching: true,
};

export const getCommentsThunk = createAsyncThunk('comment/getComments', async () => {
  const response = await axios.get('https://jordan.ashton.fashion/api/goods/30/comments');
  const data = await response.data;
  return data;
});

export const addCommentsThunk = createAsyncThunk(
  'comment/addComments',
  async ({ id, name, text }: Comment) => {
    const comment = {
      id: id,
      name: name,
      text: text,
    };
    const response = await axios.post(
      'https://jordan.ashton.fashion/api/goods/30/comments',
      comment
    );
    const data = await response.data;
    return data;
  }
);

const commentSlice = createSlice({
  name: 'comments',
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getCommentsThunk.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(getCommentsThunk.fulfilled, (state, action: PayloadAction<Comment[]>) => {
      state.list = action.payload;
      state.isFetching = false;
    });
    builder.addCase(addCommentsThunk.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(addCommentsThunk.fulfilled, (state, action: PayloadAction<Comment>) => {
      state.list.push(action.payload);
      state.isFetching = false;
    });
  },

  reducers: {
    setValue(state, action: PayloadAction<Comment[]>) {
      state.list = action.payload;
    },
  },
});

export const { setValue } = commentSlice.actions;
export default commentSlice.reducer;
