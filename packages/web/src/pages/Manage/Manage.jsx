import React from 'react';
import classNames from 'classnames/bind';
import styles from './Manage.scss';

const cx = classNames.bind(styles);

const Manage = () => (
  <div className={cx('container')}>
    {/* <AddWorkshop submit={() => {}} /> */}
  </div>
);


// const AddWorkshop = ({ submit }) => (
//   <Formik
//     initialValues={{
//       email: '',
//       password: '',
//     }}
//     validationSchema={
//       object().shape({
//         email: string()
//           .email()
//           .required('Required'),
//       })
//     }
//     onSubmit={async (values, { setErrors }) => {
//       try {
//         await submit(values);
//       } catch (error) {
//         setErrors({ form: error });
//       }
//     }}
//   >
//     {({ errors, handleSubmit }) => (
//       <Form onSubmit={handleSubmit}>
//         <Heading tag="h3">ساخت وردکشاپ</Heading>
//         <Form
//           name="title"
//           placeholder="Title"
//           component={InputField}
//         />
//         <Field
//           name="description"
//           placeholder="Description"
//           component={InputTextArea}
//         />
//         <Field
//           name="stack"
//           placeholder="Stack"
//           component={SelectField}
//         />
//         <SolidButton type="submit">ورود</SolidButton>
//       </Form>
//     )}
//   </Formik>
// );

// AddWorkshop.propTypes = {
//   submit: func.isRequired,
// };


export default Manage;
