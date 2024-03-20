"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  addDoc,
} from "firebase/firestore";
import { app } from "../../firebase";

const db = getFirestore(app);

const Popup = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) => {
    return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
  };

  const checkEmailExists = async (email) => {
    const q = query(collection(db, "waitlist"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  };

  const handleSubmit = async () => {
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const exists = await checkEmailExists(email);
    if (exists) {
      alert("This email is already in the queue.");
      return;
    }

    try {
      await addDoc(collection(db, "waitlist"), {
        email: email,
        timestamp: new Date(),
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error adding document to Firestore: ", error);
      alert("Error signing up, please try again.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black text-black bg-opacity-35  flex justify-center items-center p-4"
        >
          <div className="relative  bg-[#FFD375] rounded-lg w-[90%] md:w-[40%] h-[200px] ">
            {" "}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              {" "}
              <motion.div className="bg-white h-[200px] rounded-lg flex flex-col -translate-x-2 -translate-y-2  ">
                {!isSubmitted ? (
                  <div className="text-center  m-auto">
                    <h3 className="text-lg mb-4">Join Waitlist</h3>
                    <div className="flex gap-2">
                      <input
                        type="email"
                        placeholder="email@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-2 w-full border rounded text-[#65372A] focus:outline-none"
                      />
                      <button
                        onClick={handleSubmit}
                        className="bg-[#FFD375] px-6 py-2 rounded text-[#65372A] flex-shrink-0"
                      >
                        Sign Up
                      </button>
                    </div>
                    <button
                      onClick={onClose}
                      className="absolute top-2 right-4 text-2xl"
                    >
                      ×
                    </button>
                  </div>
                ) : (
                  <div className="text-center  m-auto">
                    <h3>Thank you! You&apos;re in the queue.</h3>
                    <button
                      onClick={onClose}
                      className="mt-4 px-6 py-2 rounded bg-[#FFD375]"
                    >
                      Close
                    </button>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
