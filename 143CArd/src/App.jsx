import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import pic1 from "./assets/pic1.jpeg";
import pic2 from "./assets/pic2.jpeg";

// AccessCode Component
const AccessCode = ({ onSuccess }) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  const correctCode = import.meta.env.VITE_ACCESS_CODE || "SECRET2025";

  const handleSubmit = () => {
    if (code.toUpperCase() === correctCode) {
      onSuccess();
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#FFE951] flex items-center justify-center p-4"
    >
      <motion.div
        animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
        transition={{ duration: 0.4 }}
        className="bg-white border-4 border-black shadow-[8px_8px_0_#000] p-8 max-w-md w-full"
      >
        <h1 className="text-4xl font-bold mb-2 uppercase">Access Required</h1>
        <p className="text-lg mb-6">Enter the secret code to proceed</p>

        <div>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter code..."
            className="w-full border-4 border-black p-4 text-xl font-bold uppercase focus:outline-none focus:shadow-[4px_4px_0_#FF006E] transition-shadow mb-4"
          />

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#FF006E] border-4 border-black p-3 mb-4 font-bold"
            >
              ❌ INCORRECT CODE
            </motion.div>
          )}

          <button
            onClick={handleSubmit}
            className="w-full bg-[#FF006E] border-4 border-black p-4 text-xl font-bold uppercase hover:shadow-[4px_4px_0_#000] hover:translate-x-1 hover:translate-y-1 transition-all active:shadow-none active:translate-x-2 active:translate-y-2"
          >
            UNLOCK →
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

// LockScreen Component
const LockScreen = ({ onSuccess }) => {
  const [date, setDate] = useState("");
  const [shake, setShake] = useState(false);
  const [unlocking, setUnlocking] = useState(false);

  const correctDate = import.meta.env.VITE_UNLOCK_DATE || "11/03/2025";

  const handleSubmit = () => {
    if (date === correctDate) {
      setUnlocking(true);
      setTimeout(() => onSuccess(), 1500);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#8338EC] flex items-center justify-center p-4"
    >
      <div className="text-center">
        <motion.svg
          animate={
            unlocking
              ? { rotate: [0, -20, 20, 0], scale: [1, 1.1, 1] }
              : shake
              ? { x: [-10, 10, -10, 10, 0] }
              : {}
          }
          transition={{ duration: unlocking ? 1.5 : 0.4 }}
          width="200"
          height="200"
          viewBox="0 0 200 200"
          className="mx-auto mb-8"
        >
          <rect
            x="60"
            y="90"
            width="80"
            height="90"
            fill="white"
            stroke="black"
            strokeWidth="4"
          />
          <rect
            x="70"
            y="100"
            width="60"
            height="70"
            fill="#FFE951"
            stroke="black"
            strokeWidth="3"
          />
          <circle cx="100" cy="135" r="8" fill="black" />
          <rect x="98" y="135" width="4" height="20" fill="black" />
          {!unlocking && (
            <>
              <path
                d="M 70 90 L 70 60 A 30 30 0 0 1 130 60 L 130 90"
                fill="none"
                stroke="black"
                strokeWidth="6"
              />
              <path
                d="M 70 90 L 70 60 A 30 30 0 0 1 130 60 L 130 90"
                fill="none"
                stroke="white"
                strokeWidth="4"
              />
            </>
          )}
        </motion.svg>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white border-4 border-black shadow-[8px_8px_0_#000] p-8 max-w-md mx-auto"
        >
          <h2 className="text-2xl font-bold mb-4">You should know the date.</h2>

          <div>
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="MM/DD/YYYY"
              className="w-full border-4 border-black p-4 text-xl font-bold text-center focus:outline-none focus:shadow-[4px_4px_0_#FFE951] transition-shadow"
            />
            <button
              onClick={handleSubmit}
              className="w-full mt-4 bg-[#FFE951] border-4 border-black p-4 text-xl font-bold uppercase hover:shadow-[4px_4px_0_#000] hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              UNLOCK
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// ChestScreen Component
const ChestScreen = ({ onSuccess }) => {
  const [holding, setHolding] = useState(false);
  const [progress, setProgress] = useState(0);
  const [opened, setOpened] = useState(false);
  let holdTimer = null;
  let progressInterval = null;

  const handleMouseDown = () => {
    setHolding(true);
    let progressCount = 0;

    progressInterval = setInterval(() => {
      progressCount += 2;
      setProgress(progressCount);
    }, 30);

    holdTimer = setTimeout(() => {
      clearInterval(progressInterval);
      setOpened(true);
      setTimeout(() => onSuccess(), 1000);
    }, 1500);
  };

  const handleMouseUp = () => {
    setHolding(false);
    setProgress(0);
    if (holdTimer) clearTimeout(holdTimer);
    if (progressInterval) clearInterval(progressInterval);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#FF006E] flex items-center justify-center p-4"
    >
      <div className="text-center">
        <div className="relative">
          <motion.svg
            width="300"
            height="300"
            viewBox="0 0 300 300"
            className="mx-auto mb-8 cursor-pointer select-none"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
            animate={opened ? { scale: [1, 1.1, 1], opacity: [1, 0.8, 1] } : {}}
          >
            {/* Chest Body */}
            <rect
              x="75"
              y="150"
              width="150"
              height="100"
              fill="#FFE951"
              stroke="black"
              strokeWidth="4"
            />
            <rect
              x="85"
              y="160"
              width="130"
              height="80"
              fill="white"
              stroke="black"
              strokeWidth="3"
            />

            {/* Chest Lid */}
            <motion.g
              animate={opened ? { rotateX: -60, y: -30 } : {}}
              style={{ originY: "150px", originX: "150px" }}
            >
              <rect
                x="75"
                y="100"
                width="150"
                height="50"
                fill="#FFE951"
                stroke="black"
                strokeWidth="4"
              />
              <rect
                x="85"
                y="110"
                width="130"
                height="30"
                fill="white"
                stroke="black"
                strokeWidth="3"
              />
              <circle cx="150" cy="125" r="8" fill="black" />
            </motion.g>

            {/* Glow Effect when holding */}
            {holding && (
              <motion.circle
                cx="150"
                cy="175"
                r="120"
                fill="#FFE951"
                opacity="0.3"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ repeat: Infinity, duration: 1 }}
              />
            )}
          </motion.svg>

          {/* Progress Bar */}
          <div className="max-w-xs mx-auto mb-6">
            <div className="w-full h-6 bg-white border-4 border-black">
              <motion.div
                className="h-full bg-[#FFE951] border-r-4 border-black"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border-4 border-black shadow-[8px_8px_0_#000] p-6 max-w-md mx-auto"
        >
          <h2 className="text-2xl font-bold mb-2">
            Click and hold to open the chest
          </h2>
          <p className="text-lg">Hold for 1.5 seconds...</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

// SpotDifference Component
const SpotDifference = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#3A86FF] flex items-center justify-center p-4"
    >
      <div className="max-w-6xl w-full">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-bold text-center mb-12 uppercase bg-white border-4 border-black shadow-[8px_8px_0_#000] p-6 inline-block mx-auto w-full"
        >
          🔍 Spot the Difference
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white border-4 border-black shadow-[8px_8px_0_#000] p-4"
          >
            <img
              src={pic1}
              alt="Spot difference 1"
              className="w-full border-4 border-black"
            />
            <p className="text-center mt-4 font-bold text-xl">IMAGE 1</p>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white border-4 border-black shadow-[8px_8px_0_#000] p-4"
          >
            <img
              src={pic2}
              alt="Spot difference 2"
              className="w-full border-4 border-black"
            />
            <p className="text-center mt-4 font-bold text-xl">IMAGE 2</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-8 bg-[#FFE951] border-4 border-black shadow-[8px_8px_0_#000] p-6"
        >
          <p className="text-2xl font-bold">🎉 YOU MADE IT! 🎉</p>
          <p className="text-lg mt-2">Can you find all the differences?</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Main App Component
export default function App() {
  const [stage, setStage] = useState("access"); // 'access' | 'lock' | 'chest' | 'spot'

  return (
    <div className="font-mono">
      <AnimatePresence mode="wait">
        {stage === "access" && (
          <AccessCode key="access" onSuccess={() => setStage("lock")} />
        )}
        {stage === "lock" && (
          <LockScreen key="lock" onSuccess={() => setStage("chest")} />
        )}
        {stage === "chest" && (
          <ChestScreen key="chest" onSuccess={() => setStage("spot")} />
        )}
        {stage === "spot" && <SpotDifference key="spot" />}
      </AnimatePresence>
    </div>
  );
}
 