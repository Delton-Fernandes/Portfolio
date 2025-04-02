import React, { useState, useEffect } from "react";
import { uploadFile, listBlobs, downloadBlob, deleteBlob } from "../services/blobService";

const BlobManager = () => {
  const [file, setFile] = useState(null);
  const [blobList, setBlobList] = useState([]);

  useEffect(() => {
    fetchBlobs();
  }, []);

  const fetchBlobs = async () => {
    const blobs = await listBlobs();
    setBlobList(blobs);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file!");
    await uploadFile(file);
    setFile(null);
    fetchBlobs(); // Refresh list
  };

  return (
    <div>
      <h2>Azure Blob Storage Manager</h2>

      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>

      <h3>Uploaded Files</h3>
      <ul>
        {blobList.map((blob) => (
          <li key={blob}>
            {blob}
            <button onClick={() => downloadBlob(blob)}>Download</button>
            <button onClick={async () => { await deleteBlob(blob); fetchBlobs(); }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlobManager;
