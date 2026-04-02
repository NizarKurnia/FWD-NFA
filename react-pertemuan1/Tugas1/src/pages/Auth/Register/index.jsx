import { Link } from "react-router";

export default function Register() {
    return (
        <>
            <div class="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="modalSignin">
                <div class="modal-dialog">
                    <div class="modal-content rounded-4 shadow">
                        <div class="modal-header p-5 pb-4 border-bottom-0 d-flex justify-content-center">
                            <h1 class="fw-bold mb-0 fs-2">Register</h1>
                        </div>
                        <div class="modal-body p-5 pt-0">
                            <form class="">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control rounded-3" id="floatingInput" placeholder="Username" />
                                    <label for="floatingInput">Username</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">Password</label>
                                </div>
                                <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Register</button>
                                <small>Already have an account? <Link to="/login">Login</Link></small>
                                <hr class="my-4" />
                                <h2 class="fs-5 fw-bold mb-3">Or use a third-party</h2>
                                <button class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
                                    Sign up with Google
                                </button> <button class="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit">
                                    Sign up with Facebook
                                </button> <button class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
                                    Sign up with GitHub
                                </button>
                            </form>
                            <Link className="d-flex justify-content-center" to="/">Back to Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}