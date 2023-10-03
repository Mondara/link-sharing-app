export const fileToDataUrl = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      if (!reader.result) return;
      resolve(reader.result as string);
    };

    reader.onerror = (err) => reject(err);

    reader.readAsDataURL(file);
  });
};
