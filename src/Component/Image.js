import React from "react";
import UseFirebase from "../firebase/UseFirebase";
import { motion } from "framer-motion";

const Image = ({ setSelectedImg }) => {
    const { docs } = UseFirebase('images');
    return (
        <div className="img-grid">
            {docs && docs.map((doc => (
                <motion.div className="img-wrap" key={doc.id}
                    layout
                    whileHover={{ opacity: 1 }}
                    onClick={() => setSelectedImg(doc.url)}
                >
                    <motion.img src={doc.url} alt="not found"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    />
                </motion.div>
            )))}
        </div>
    )
}
export default Image;