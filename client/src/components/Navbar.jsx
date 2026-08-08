import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "motion/react";
import { BsRobot, BsCoin } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { FaUserAstronaut } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ServerUrl } from "../App";
import { setUserData } from "../redux/userSlice";
import AuthModel from "./AuthModel";

function Navbar() {
  const { userData } = useSelector((state) => state.user);
  console.log("Navbar UserData:", userData);
  

  const [showCreditPopup, setShowCreditPopup] = useState(false);
  const [showUserPopup, setShowUserPopup] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await axios.get(ServerUrl + "/api/auth/logout", {
        withCredentials: true,
      });

      dispatch(setUserData(null));
      setShowCreditPopup(false);
      setShowUserPopup(false);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-[#f3f3f3] flex justify-center px-4 pt-6">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-6xl bg-white rounded-[24px] shadow-sm border border-gray-200 px-8 py-4 flex justify-between items-center relative"
        >
          {/* Left */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="bg-black text-white p-2 rounded-lg">
              <BsRobot size={18} />
            </div>

            <h1 className="font-semibold text-lg hidden md:block">
              InterviewIQ.AI
            </h1>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6 relative">
            {/* Credit Button */}
            <div className="relative">
              <button
                onClick={() => {
                  if (!userData) {
                    setShowAuth(true);
                    return;
                  }

                  setShowCreditPopup(!showCreditPopup);
                  setShowUserPopup(false);
                }}
                className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition"
              >
                <BsCoin size={20} />
                {userData?.credits ?? 0}
              </button>

              {showCreditPopup && (
                <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-gray-200 p-5 z-50">
                  <p className="text-sm text-gray-600 mb-4">
                    Need more credits to continue interviews?
                  </p>

                  <button
                    onClick={() => navigate("/pricing")}
                    className="w-full bg-black text-white py-2 rounded-lg font-medium"
                  >
                    Buy More Credits
                  </button>
                </div>
              )}
            </div>

            {/* User Button */}
            <div className="relative">
              <button
                onClick={() => {
                  if (!userData) {
                    setShowAuth(true);
                    return;
                  }

                  setShowUserPopup(!showUserPopup);
                  setShowCreditPopup(false);
                }}
                className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center font-semibold"
              >
                {userData?.name ? (
                  userData.name.charAt(0).toUpperCase()
                ) : (
                  <FaUserAstronaut size={16} />
                )}
              </button>

              {showUserPopup && (
                <div className="absolute right-0 mt-3 w-52 bg-white rounded-2xl shadow-xl border border-gray-200 p-4 z-50">
                  <p className="text-blue-500 font-semibold mb-3">
                    {userData?.name || "Guest"}
                  </p>

                  <button
                    onClick={() => navigate("/history")}
                    className="w-full text-left py-2 text-gray-600 hover:text-black"
                  >
                    Interview History
                  </button>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left py-2 flex items-center gap-2 text-red-500"
                  >
                    <HiOutlineLogout size={16} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {showAuth && (
          <AuthModel onClose={() => setShowAuth(false)} />
        )}
      </div>
    </>
  );
}

export default Navbar;