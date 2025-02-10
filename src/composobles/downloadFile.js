export const downloadFile = (url) => {
  if (process.client) {
    window.location.href = url;
  }

};
