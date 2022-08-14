export default function Register() {
  return (
    <div>
      <input type="checkbox" id="registerModal" className="modal-toggle" />
      <label htmlFor="registerModal" className="cursor-pointer modal">
        <label
          className="relative flex flex-col items-center modal-box"
          htmlFor=""
        >
          <h2 className="text-3xl font-bold text-primary">REGISTER</h2>
          <div className="w-full max-w-xs form-control">
            <label className="label">
              <span className="label-text">What is your name?</span>
            </label>
            <input
              type="text"
              placeholder="Sinan"
              className="w-full max-w-xs input input-bordered focus:outline-primary"
            />
            <label className="label">
              <span className="label-text">What is your lastname?</span>
            </label>
            <input
              type="text"
              placeholder="ŞIK"
              className="w-full max-w-xs input input-bordered focus:outline-primary"
            />
            <label className="label">
              <span className="label-text">What is your email?</span>
            </label>
            <input
              type="email"
              placeholder="sinan.sk@outlook.com.tr"
              className="w-full max-w-xs input input-bordered focus:outline-primary"
            />
            <label className="label">
              <span className="label-text">What is your password?</span>
            </label>
            <input
              type="password"
              placeholder="******"
              className="w-full max-w-xs input input-bordered focus:outline-primary"
            />
          </div>
          <div className="modal-action">
            <label
              htmlFor="my-modal-6"
              className="px-8 py-3 btn bg-primary hover:bg-primary-focus"
            >
              Register
            </label>
          </div>
        </label>
      </label>
    </div>
  );
}
