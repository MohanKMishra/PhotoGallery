import React, { useState } from "react";
import Image from "./Image";
import Modal from "./Modal";
import UploadForm from "./UploadForm";

function Index() {
    const [selectedImg, setSelectedImg] = useState(null)
    return (
        <div className="title">
            <h1>FireGram</h1>
            <h2>Your Pictures</h2>
            <p>Lorem ipsum dolor sit amet,</p>
            <UploadForm />
            <Image setSelectedImg={setSelectedImg} />
            {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
            {/* <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> */}
        </div>
    )
}
export default Index;