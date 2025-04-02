const API_BASE_URL = "http://192.168.0.49:5000/api/blob";

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${API_BASE_URL}/upload`, {
    method: "POST",
    body: formData,
  });

  return response.json();
};

export const listBlobs = async () => {
  const response = await fetch(`${API_BASE_URL}/list`);
  return response.json();
};

export const downloadBlob = async (blobName) => {
  window.location.href = `${API_BASE_URL}/download/${blobName}`;
};

export const deleteBlob = async (blobName) => {
  const response = await fetch(`${API_BASE_URL}/delete/${blobName}`, {
    method: "DELETE",
  });

  return response.text();
};
