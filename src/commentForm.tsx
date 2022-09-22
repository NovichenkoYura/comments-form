import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, { useMemo, useEffect } from 'react';

import { addCommentsThunk } from './store/commentSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';

interface formProps {
  id: string;
  name: string;
  text: string;
}

export const CommentsForm: React.FC<formProps> = () => {
  const comments = useAppSelector(state => state.comments.list); 

  const dispatch = useAppDispatch();

  const validationSchema = useMemo(() => {
    return Yup.object({
      name: Yup.string().min(2).max(100).required('Required'),
      text: Yup.string().min(5).max(500).required('Required'),
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      name: '',
      text: '',
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(addCommentsThunk( {name: values.name, text: values.text, id: '1'} )
        );
        resetForm();   
    },
    validationSchema,
  });
 
  return (
    
    <form onSubmit={formik.handleSubmit}>
      
      <div className='formik-form'>        
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          name='name'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.name}
          className="formik-input"
        />
        <p className="formik-errors-message">{formik.errors.name}</p>
      </div>

      <div className='formik-form'>
        <label htmlFor='text'>Comment</label>
        <textarea
          id='text'
          name='text'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.text}
        />
        <p className="formik-errors-message">{formik.errors.text}</p>
      </div>

      <button
        type="submit"
        onClick={addCommentsThunk}
        className="main__button"
      >
        Add comment
      </button>
    </form>

    
  );
};