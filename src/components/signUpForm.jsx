import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function SignUpForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios.post(`${import.meta.env.VITE_BASE_API}/users`, data)
      .then(() => {
        navigate('/login')
        reset();
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column gap-3 p-4 widthSignup mx-auto mt-5 mb-3 border rounded shadow-sm">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          {...register("name", { required: "Name is required", maxLength: { value: 20, message: "Name cannot exceed 20 characters" } })}
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          id="name"
        />
        {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          })}
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          id="email"
        />
        {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          {...register("password", {
            required: "Password is required",
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message: "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character",
            },
          })}
          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          type="password"
          id="password"
        />
        {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
      </div>

      <button type="submit" className="btn btn-primary">Sign Up</button>
    </form>
  );
}
