import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    // console.log(error);
    const types = ['image/png', 'image/jpeg', 'image/jpg']

    console.log(file);
    const changeHandler = (e) => {
        let selected = e.target.files[0];
        console.log(selected);
        if (selected && types.includes(selected.type)) {
            setFile(selected)
            setError('');
        }
        else {
            setFile(null);
            setError('Please select an image file (png or jpeg or jpg)')
        }
    }
    return (
        <>
            <form>
                <label>
                    <input type="file" onChange={changeHandler} />
                    <span>+</span>
                </label>
                <div className="output">
                    {error && <div className="error">{error}</div>}
                    {file && <div className="file">{file.name}</div>}
                    {file && <ProgressBar file={file} setFile={setFile} />}
                </div>
            </form>

        </>
    )
}
export default UploadForm;
