import { useEffect } from "react";
import { IoIosMailOpen } from "react-icons/io";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const EmailSent = () => {
  const navigate = useNavigate();
  const { loading, emailSent } = useSelector((state) => state.user);
  useEffect(() => {
    if (!loading && !emailSent) {
      navigate("/register");
    }
  }, []);

  return (
    <div className="fixed flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-white top-0 w-full z-50">
      <div className="max-w-xl px-5 text-center flex flex-col items-center gap-7 pb-10">
        <IoIosMailOpen className="text-[140px] text-teal-600 " />
        <h2 className="mb-2 text-5xl font-bold text-zinc-800">
          Check your inbox!
        </h2>
        <p className="mb-2 text-xl  text-zinc-700 flex flex-col items-center">
          An Activation Link has been sent to your Email Address. Please check
          your email for further instructions.
        </p>
        <span className="text-gray-500 italic">You can close this tab</span>
      </div>
    </div>
  );
};

export default EmailSent;
