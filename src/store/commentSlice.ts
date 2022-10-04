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
  currentPage: number;
  perPage: number;
  totalQtyComments: number;
}

const initialState: CommentsState = {
  list: [],
  isFetching: true,
  currentPage: 1,
  perPage: 3,
  totalQtyComments: 0,
};

export const getCommentsThunk = createAsyncThunk('comment/getComments', async () => {
  const response = await axios.get('http://localhost:3001/comments');

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
    const response = await axios.post('http://localhost:3001/comments', comment);
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
      state.totalQtyComments = state.totalQtyComments + 1;
    });
  },

  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = commentSlice.actions;
export default commentSlice.reducer;
